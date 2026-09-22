import os
import re
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side

# Brand Colors
COLOR_PRIMARY = RGBColor(13, 118, 71)    # #0d7647 (LocalMate Green)
COLOR_TEXT_DARK = RGBColor(30, 41, 59)   # #1e293b (Slate-800)
COLOR_MUTED = RGBColor(100, 116, 139)    # #64748b (Slate-500)

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
        node = OxmlElement(f'w:{m}')
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def set_table_borders(table, color="D1D5DB", sz="4", val="single"):
    tblPr = table._tbl.tblPr
    borders = parse_xml(
        f'<w:tblBorders {nsdecls("w")}>'
        f'<w:top w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:bottom w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:left w:val="none"/>'
        f'<w:right w:val="none"/>'
        f'<w:insideH w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:insideV w:val="none"/>'
        f'</w:tblBorders>'
    )
    tblPr.append(borders)

def add_styled_paragraph(doc, text, style='Normal', space_after=6, space_before=0, line_spacing=1.15, align=WD_ALIGN_PARAGRAPH.LEFT):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.space_before = Pt(space_before)
    p.paragraph_format.line_spacing = line_spacing
    p.alignment = align
    
    # Process bold, italic, inline code formatting
    tokens = re.split(r'(\*\*.*?\*\*|\*.*?\*|`.*?`)', text)
    for token in tokens:
        if not token:
            continue
        if token.startswith('**') and token.endswith('**') and len(token) >= 4:
            run = p.add_run(token[2:-2])
            run.bold = True
        elif token.startswith('*') and token.endswith('*') and len(token) >= 2:
            run = p.add_run(token[1:-1])
            run.italic = True
        elif token.startswith('`') and token.endswith('`') and len(token) >= 2:
            run = p.add_run(token[1:-1])
            run.font.name = 'Consolas'
            run.font.size = Pt(10)
            run.font.color.rgb = RGBColor(180, 40, 40)
        else:
            p.add_run(token)
    return p

def convert_markdown_to_docx(md_path, docx_path):
    with open(md_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    doc = Document()
    
    # Page setup (A4 standard)
    section = doc.sections[0]
    section.page_width = Inches(8.27)
    section.page_height = Inches(11.69)
    section.top_margin = Inches(0.8)
    section.bottom_margin = Inches(0.8)
    section.left_margin = Inches(0.8)
    section.right_margin = Inches(0.8)
    
    # Set default Normal style font
    style = doc.styles['Normal']
    font = style.font
    font.name = 'Times New Roman'
    font.size = Pt(11)
    font.color.rgb = COLOR_TEXT_DARK
    
    in_table = False
    table_lines = []
    
    def flush_table():
        nonlocal in_table, table_lines
        if not table_lines:
            return
            
        rows_data = []
        for tl in table_lines:
            # strip outer pipes
            trimmed = tl.strip()
            if trimmed.startswith('|'):
                trimmed = trimmed[1:]
            if trimmed.endswith('|'):
                trimmed = trimmed[:-1]
            cells = [c.strip() for c in trimmed.split('|')]
            # ignore separator line like :--- | :---
            if all(re.match(r'^:?-+:?$', c) for c in cells if c):
                continue
            rows_data.append(cells)
            
        if not rows_data:
            table_lines = []
            in_table = False
            return
            
        num_cols = max(len(r) for r in rows_data)
        # Pad shorter rows
        for r in rows_data:
            while len(r) < num_cols:
                r.append('')
                
        table = doc.add_table(rows=len(rows_data), cols=num_cols)
        table.alignment = WD_TABLE_ALIGNMENT.CENTER
        set_table_borders(table, color="CBD5E1", sz="4", val="single")
        
        is_signoff = False
        # Check if this is a signature block
        if len(rows_data) <= 5 and any("ĐẠI DIỆN" in cell.upper() for cell in rows_data[0]):
            is_signoff = True
            
        for r_idx, row_data in enumerate(rows_data):
            row = table.rows[r_idx]
            is_header = (r_idx == 0 and not is_signoff)
            for c_idx, cell_text in enumerate(row_data):
                cell = row.cells[c_idx]
                cell.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
                set_cell_margins(cell, top=120, bottom=120, left=160, right=160)
                
                # Replace <br> with newline
                clean_text = cell_text.replace('<br>', '\n').replace('<br/>', '\n').replace('<br />', '\n')
                
                # Background
                if is_header:
                    set_cell_background(cell, "EDF7F1") # Light Green Accent
                elif is_signoff:
                    set_cell_background(cell, "FAFAFA")
                elif r_idx % 2 == 1:
                    set_cell_background(cell, "F8FAFC") # Soft zebra
                else:
                    set_cell_background(cell, "FFFFFF")
                    
                cell.text = "" # Clear default empty paragraph
                paras = clean_text.split('\n')
                for p_idx, para_text in enumerate(paras):
                    p = cell.add_paragraph()
                    p.paragraph_format.space_before = Pt(0)
                    p.paragraph_format.space_after = Pt(2)
                    p.paragraph_format.line_spacing = 1.15
                    if is_signoff:
                        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                    elif is_header:
                        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                    else:
                        p.alignment = WD_ALIGN_PARAGRAPH.LEFT
                        
                    # Add runs with bold handling
                    tokens = re.split(r'(\*\*.*?\*\*|\*.*?\*|`.*?`)', para_text)
                    for token in tokens:
                        if not token:
                            continue
                        if token.startswith('**') and token.endswith('**') and len(token) >= 4:
                            run = p.add_run(token[2:-2])
                            run.bold = True
                            if is_header:
                                run.font.color.rgb = COLOR_PRIMARY
                        elif token.startswith('*') and token.endswith('*') and len(token) >= 2:
                            run = p.add_run(token[1:-1])
                            run.italic = True
                        elif token.startswith('`') and token.endswith('`') and len(token) >= 2:
                            run = p.add_run(token[1:-1])
                            run.font.name = 'Consolas'
                            run.font.size = Pt(9.5)
                        else:
                            run = p.add_run(token)
                            if is_header:
                                run.bold = True
                                run.font.color.rgb = COLOR_PRIMARY
                            if is_signoff and p_idx == 0:
                                run.bold = True
                                run.font.color.rgb = COLOR_PRIMARY
                                
        # Add spacing after table
        empty_p = doc.add_paragraph()
        empty_p.paragraph_format.space_before = Pt(0)
        empty_p.paragraph_format.space_after = Pt(4)
        
        table_lines = []
        in_table = False
        
    for raw_line in lines:
        line = raw_line.rstrip('\r\n')
        
        # Check if table line
        if line.strip().startswith('|') and line.strip().endswith('|'):
            in_table = True
            table_lines.append(line)
            continue
        elif in_table:
            flush_table()
            
        # Empty line
        if not line.strip():
            continue
            
        # Horizontal Rule
        if re.match(r'^-{3,}$', line.strip()) or re.match(r'^\*{3,}$', line.strip()):
            p = doc.add_paragraph()
            p.paragraph_format.space_after = Pt(6)
            p.paragraph_format.space_before = Pt(4)
            r = p.add_run("―" * 55)
            r.font.color.rgb = RGBColor(203, 213, 225)
            continue
            
        # H1
        if line.startswith('# '):
            text = line[2:].strip()
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(12)
            p.paragraph_format.space_after = Pt(6)
            p.paragraph_format.line_spacing = 1.2
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            run = p.add_run(text)
            run.bold = True
            run.font.size = Pt(15)
            run.font.color.rgb = COLOR_PRIMARY
            continue
            
        # H2
        if line.startswith('## '):
            text = line[3:].strip()
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(10)
            p.paragraph_format.space_after = Pt(4)
            p.paragraph_format.line_spacing = 1.15
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER if "PHẦN" in text.upper() or "(" in text else WD_ALIGN_PARAGRAPH.LEFT
            run = p.add_run(text)
            run.bold = True
            run.font.size = Pt(13)
            run.font.color.rgb = COLOR_PRIMARY
            continue
            
        # H3
        if line.startswith('### '):
            text = line[4:].strip()
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(8)
            p.paragraph_format.space_after = Pt(3)
            run = p.add_run(text)
            run.bold = True
            run.font.size = Pt(11.5)
            run.font.color.rgb = COLOR_PRIMARY
            continue
            
        # H4
        if line.startswith('#### '):
            text = line[5:].strip()
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(6)
            p.paragraph_format.space_after = Pt(2)
            run = p.add_run(text)
            run.bold = True
            run.font.size = Pt(11)
            run.font.color.rgb = COLOR_TEXT_DARK
            continue
            
        # Blockquote
        if line.startswith('> '):
            text = line[2:].strip()
            p = add_styled_paragraph(doc, text, space_after=4, space_before=2)
            p.paragraph_format.left_indent = Inches(0.25)
            for r in p.runs:
                r.italic = True
                r.font.color.rgb = RGBColor(71, 85, 105)
            continue
            
        # Bullet list
        if re.match(r'^\s*[-*]\s+', line):
            text = re.sub(r'^\s*[-*]\s+', '', line)
            p = add_styled_paragraph(doc, text, space_after=3, space_before=1)
            p.paragraph_format.left_indent = Inches(0.25)
            # Add bullet symbol
            bullet_run = p.insert_paragraph_before().add_run() if False else None
            p.runs[0].text = "•  " + p.runs[0].text if p.runs else "• "
            continue
            
        # Numbered list
        if re.match(r'^\s*\d+\.\s+', line):
            text = line.strip()
            p = add_styled_paragraph(doc, text, space_after=3, space_before=1)
            p.paragraph_format.left_indent = Inches(0.2)
            continue
            
        # Standard paragraph
        add_styled_paragraph(doc, line, space_after=4, space_before=0)
        
    if in_table:
        flush_table()
        
    doc.save(docx_path)
    print(f"  [DOCX] Created: {docx_path}")

def create_excel_inventory(xlsx_path):
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "RoPA Data Inventory"
    
    # Headers
    headers = [
        "Mã Luồng Dữ Liệu",
        "Tên Hoạt Động Xử Lý",
        "Tư Cách Pháp Lý LocalMate",
        "Chủ Thể Dữ Liệu",
        "Loại Dữ Liệu Cá Nhân Thu Thập",
        "Mục Đích Xử Lý",
        "Hạ Tầng / Sub-processors",
        "Thời Hạn Lưu Trữ",
        "Biện Pháp Bảo Mật (TOMs)"
    ]
    
    ws.append(headers)
    
    # Sample Data Rows
    rows = [
        [
            "DATA-FLOW-01",
            "Thu thập Lead từ Biểu mẫu Website (Contact Form)",
            "Bên Xử Lý Dữ Liệu (Data Processor)",
            "Khách hàng tiềm năng của Bên A",
            "Họ và tên, Số điện thoại, Email, Nhu cầu tư vấn",
            "Gửi thông báo lead tức thì cho đội Sales của Bên A",
            "Cloudflare Workers, Resend API, Telegram Bot",
            "30 ngày hoặc đến khi bàn giao dứt điểm cho Bên A",
            "HTTPS/TLS 1.3, Rate limiting, Cloudflare Turnstile, Token SHA-256"
        ],
        [
            "DATA-FLOW-02",
            "Cấu hình Chiến dịch Khách hàng tiềm năng Google Ads",
            "Bên Xử Lý Dữ Liệu (Data Processor)",
            "Người dùng tìm kiếm trên Google nhấp quảng cáo",
            "Họ tên, SĐT, Vị trí tìm kiếm, Lịch sử nhấp chuột (GCLID)",
            "Tối ưu tỷ lệ chuyển đổi cuộc gọi và đơn hàng cho Bên A",
            "Google LLC (Google Ads, GA4)",
            "Theo chu kỳ chiến dịch của Bên A",
            "Phân quyền User Admin chính chủ, Không lưu data trên máy cá nhân"
        ],
        [
            "DATA-FLOW-03",
            "Đồng bộ luồng Dữ liệu CRM & Tự động hóa (Automation)",
            "Bên Xử Lý Dữ Liệu (Data Processor)",
            "Khách hàng đã mua hàng / để lại thông tin của Bên A",
            "Họ tên, SĐT, Email, Lịch sử tin nhắn, Trạng thái đơn hàng",
            "Kích hoạt chuỗi tin nhắn Zalo/Email chăm sóc tự động",
            "Supabase DB, Zalo Cloud (ZNS), Google Sheets API",
            "Theo thời hạn Hợp đồng dịch vụ với Bên A",
            "Mã hóa AES-256 cơ sở dữ liệu, MFA 2 bước, Least Privilege RBAC"
        ],
        [
            "DATA-FLOW-04",
            "Quản lý Thông tin Khách hàng Ký hợp đồng với LocalMate",
            "Bên Kiểm Soát Dữ Liệu (Data Controller)",
            "Người đại diện hợp pháp & Kế toán của Bên A",
            "Họ tên, CCCD/Hộ chiếu, SĐT, Email, Số tài khoản ngân hàng",
            "Giao kết hợp đồng, đối chiếu công nợ, xuất hóa đơn GTGT",
            "Hệ thống quản lý nội bộ LocalMate, Ngân hàng Vietcombank",
            "10 năm theo Luật Kế toán & Luật Quản lý thuế",
            "Lưu trữ có mật khẩu, Phân quyền chỉ Kế toán trưởng tiếp cận"
        ]
    ]
    
    for r in rows:
        ws.append(r)
        
    # Styling Header
    header_fill = PatternFill(start_color="0D7647", end_color="0D7647", fill_type="solid")
    header_font = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
    thin_border = Border(
        left=Side(style='thin', color='D1D5DB'),
        right=Side(style='thin', color='D1D5DB'),
        top=Side(style='thin', color='D1D5DB'),
        bottom=Side(style='thin', color='D1D5DB')
    )
    
    for col_idx in range(1, len(headers) + 1):
        cell = ws.cell(row=1, column=col_idx)
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin_border
        
    for row_idx in range(2, len(rows) + 2):
        for col_idx in range(1, len(headers) + 1):
            cell = ws.cell(row=row_idx, column=col_idx)
            cell.font = Font(name="Calibri", size=10)
            cell.alignment = Alignment(vertical="top", wrap_text=True)
            cell.border = thin_border
            if row_idx % 2 == 1:
                cell.fill = PatternFill(start_color="F8FAFC", end_color="F8FAFC", fill_type="solid")
                
    # Set column widths
    col_widths = [16, 32, 28, 26, 32, 32, 28, 25, 38]
    for idx, width in enumerate(col_widths, start=1):
        col_letter = openpyxl.utils.get_column_letter(idx)
        ws.column_dimensions[col_letter].width = width
        
    ws.row_dimensions[1].height = 28
    wb.save(xlsx_path)
    print(f"  [XLSX] Created: {xlsx_path}")

def create_excel_subprocessors(xlsx_path):
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Subprocessor Register"
    
    headers = [
        "STT",
        "Tên Nhà Cung Cấp Bên Thứ Ba",
        "Dịch Vụ Cung Ứng",
        "Vị Trí Trung Tâm Dữ Liệu",
        "Loại Dữ Liệu Tiếp Xúc",
        "Cơ Chế Chuyển Dữ Liệu Quốc Tế",
        "Cam Kết Bảo Mật (DPA Link / Chứng Chỉ)"
    ]
    ws.append(headers)
    
    rows = [
        [
            1, "Cloudflare, Inc. (Mỹ)", "Mạng phân phối CDN, Tường lửa WAF, SSL, DNS",
            "Mạng lưới Edge toàn cầu (bao gồm POPs tại Hà Nội & TP.HCM)",
            "Địa chỉ IP, Metadata yêu cầu HTTP, Log kết nối mạng",
            "Standard Contractual Clauses (SCCs), BCR",
            "ISO/IEC 27001, SOC 2 Type II, Cloudflare DPA"
        ],
        [
            2, "Google LLC (Mỹ)", "Google Analytics 4, Google Ads Tracking, Google Maps API",
            "Hoa Kỳ, Châu Âu, Singapore",
            "Địa chỉ IP (đã ẩn danh), Cookie ID, Vị trí địa lý xấp xỉ",
            "Google Data Processing Terms, EU-US Data Privacy Framework",
            "ISO 27001, SOC 3, Google Cloud DPA"
        ],
        [
            3, "Vercel Inc. (Mỹ)", "Nền tảng Hosting mã nguồn Frontend & Serverless Functions",
            "Edge Network toàn cầu (Châu Á - Singapore / Tokyo)",
            "Mã nguồn ứng dụng, Payload biểu mẫu tạm thời khi truyền tải",
            "Vercel Data Processing Addendum (DPA)",
            "SOC 2 Type II, ISO 27001"
        ],
        [
            4, "Supabase, Inc. (Mỹ)", "Hạ tầng Cơ sở dữ liệu PostgreSQL đám mây (Cloud Database)",
            "Singapore (AWS ap-southeast-1 region)",
            "Dữ liệu khách hàng, Lead, Lịch sử tương tác có mã hóa AES-256",
            "Supabase DPA, AWS Shared Responsibility Model",
            "SOC 2 Type II, HIPAA, ISO 27001"
        ],
        [
            5, "Resend, Inc. (Mỹ)", "Hạ tầng gửi Email Transactional & Thông báo tự động",
            "Hoa Kỳ (US East - N. Virginia)",
            "Địa chỉ email người nhận, Tiêu đề và Nội dung email thông báo",
            "Resend Data Processing Agreement (DPA)",
            "SOC 2, GDPR Compliant"
        ],
        [
            6, "Công ty Cổ phần VNG (Zalo)", "Dịch vụ tin nhắn Zalo Notification Service (ZNS)",
            "Việt Nam (TP. Hồ Chí Minh)",
            "Số điện thoại người nhận, Mẫu tin nhắn thông báo",
            "Tuân thủ Nghị định 13/2023 & Luật PDP 2025 tại Việt Nam",
            "Hợp đồng dịch vụ Zalo Cloud / ZNS"
        ],
        [
            7, "Telegram FZ-LLC", "Bot thông báo lead khẩn cấp qua kênh nội bộ",
            "Máy chủ đám mây phân tán toàn cầu",
            "Thông tin lead rút gọn (Họ tên, SĐT) truyền vào nhóm kín",
            "Telegram Bot API Terms of Service",
            "Mã hóa MTProto, API Token phân quyền nghiêm ngặt"
        ]
    ]
    for r in rows:
        ws.append(r)
        
    header_fill = PatternFill(start_color="0D7647", end_color="0D7647", fill_type="solid")
    header_font = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
    thin_border = Border(
        left=Side(style='thin', color='D1D5DB'),
        right=Side(style='thin', color='D1D5DB'),
        top=Side(style='thin', color='D1D5DB'),
        bottom=Side(style='thin', color='D1D5DB')
    )
    
    for col_idx in range(1, len(headers) + 1):
        cell = ws.cell(row=1, column=col_idx)
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin_border
        
    for row_idx in range(2, len(rows) + 2):
        for col_idx in range(1, len(headers) + 1):
            cell = ws.cell(row=row_idx, column=col_idx)
            cell.font = Font(name="Calibri", size=10)
            cell.alignment = Alignment(vertical="top", wrap_text=True)
            cell.border = thin_border
            if row_idx % 2 == 1:
                cell.fill = PatternFill(start_color="F8FAFC", end_color="F8FAFC", fill_type="solid")
                
    col_widths = [8, 25, 34, 30, 32, 34, 34]
    for idx, width in enumerate(col_widths, start=1):
        col_letter = openpyxl.utils.get_column_letter(idx)
        ws.column_dimensions[col_letter].width = width
        
    ws.row_dimensions[1].height = 28
    wb.save(xlsx_path)
    print(f"  [XLSX] Created: {xlsx_path}")

def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    legal_dir = os.path.join(root_dir, 'legal')
    
    print("==========================================================")
    print("  LOCALMATE LEGALOPS DOCX & XLSX BATCH CONVERTER          ")
    print("==========================================================")
    
    # 1. Quét và convert tất cả các file .md trong legal/ thành .docx (ngoại trừ README/ARCHITECT nếu muốn)
    converted_count = 0
    for root, dirs, files in os.walk(legal_dir):
        for f in files:
            if f.endswith('.md'):
                # Bỏ qua các file nghiên cứu nếu không cần docx, nhưng convert hết các hợp đồng và phụ lục
                md_path = os.path.join(root, f)
                docx_name = f[:-3] + '.docx'
                docx_path = os.path.join(root, docx_name)
                
                try:
                    convert_markdown_to_docx(md_path, docx_path)
                    converted_count += 1
                except Exception as e:
                    print(f"  [ERROR] Failed to convert {f}: {e}")
                    
    # 2. Tạo các file Excel chuyên dụng cho 10A và 10B
    pdp_dir = os.path.join(legal_dir, '07-data-protection')
    if os.path.exists(pdp_dir):
        xlsx_10a = os.path.join(pdp_dir, '10A_DATA_PROCESSING_INVENTORY.xlsx')
        xlsx_10b = os.path.join(pdp_dir, '10B_SUBPROCESSOR_REGISTER.xlsx')
        create_excel_inventory(xlsx_10a)
        create_excel_subprocessors(xlsx_10b)
        
    # Copy vào output-contracts/PackC-Enterprise nếu có
    pack_c_dir = os.path.join(legal_dir, '16-contract-generator', 'output-contracts', 'PackC-Enterprise')
    if os.path.exists(pack_c_dir):
        create_excel_inventory(os.path.join(pack_c_dir, '10A_DATA_PROCESSING_INVENTORY.xlsx'))
        create_excel_subprocessors(os.path.join(pack_c_dir, '10B_SUBPROCESSOR_REGISTER.xlsx'))
        
    print(f"\n[DONE] Successfully generated {converted_count} DOCX files and Excel XLSX files!")
    print("==========================================================")

if __name__ == '__main__':
    main()
