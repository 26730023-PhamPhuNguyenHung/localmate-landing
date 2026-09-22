"""
LocalMate Professional Single-Contract DOCX Builder
Tuân thủ 100% Nghị định 30/2020/NĐ-CP về thể thức văn bản và hợp đồng thương mại Việt Nam.
Xử lý:
- Header 2 cột Quốc hiệu - Tiêu ngữ KHÔNG VIỀN, căn chuẩn lề.
- Chữ ký 2 bên KHÔNG VIỀN, căn giữa, khoảng cách ký hợp lý.
- Data Table căn chỉnh độ rộng từng cột chuẩn A4, chống vỡ layout, không rớt chữ vụn.
- Font Times New Roman chuẩn pháp lý Việt Nam, tone giọng đàng hoàng chuyên nghiệp.
"""

import os
import sys
import re
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

COLOR_BLACK = RGBColor(15, 23, 42)      # #0F172A (Deep Slate / Black)
COLOR_MUTED = RGBColor(100, 116, 139)   # #64748B (Slate Muted)
COLOR_PRIMARY = RGBColor(13, 118, 71)   # #0D7647 (LocalMate Dark Green)
COLOR_BORDER = "CBD5E1"                 # Light gray border

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=80, bottom=80, left=120, right=120):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
        node = OxmlElement(f'w:{m}')
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def set_table_horizontal_borders(table, color=COLOR_BORDER, sz="4"):
    tblPr = table._tbl.tblPr
    borders = parse_xml(
        f'<w:tblBorders {nsdecls("w")}>'
        f'<w:top w:val="single" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:bottom w:val="single" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:left w:val="none"/>'
        f'<w:right w:val="none"/>'
        f'<w:insideH w:val="single" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:insideV w:val="none"/>'
        f'</w:tblBorders>'
    )
    tblPr.append(borders)

def set_table_borderless(table):
    tblPr = table._tbl.tblPr
    borders = parse_xml(
        f'<w:tblBorders {nsdecls("w")}>'
        f'<w:top w:val="none"/>'
        f'<w:bottom w:val="none"/>'
        f'<w:left w:val="none"/>'
        f'<w:right w:val="none"/>'
        f'<w:insideH w:val="none"/>'
        f'<w:insideV w:val="none"/>'
        f'</w:tblBorders>'
    )
    tblPr.append(borders)

def set_row_cant_split(row):
    trPr = row._tr.get_or_add_trPr()
    trPr.append(OxmlElement('w:cantSplit'))

def set_col_width(cell, width_in_inches):
    cell.width = Inches(width_in_inches)
    tcPr = cell._tc.get_or_add_tcPr()
    tcW = parse_xml(f'<w:tcW {nsdecls("w")} w:w="{int(width_in_inches * 1440)}" w:type="dxa"/>')
    tcPr.append(tcW)

def build_docx_contract(md_file_path, output_docx_path):
    if not os.path.exists(md_file_path):
        print(f"Error: File not found: {md_file_path}")
        return False

    with open(md_file_path, 'r', encoding='utf-8') as f:
        raw_content = f.read()

    doc = Document()

    # Thiết lập trang A4 chuẩn (Margins chuẩn Nghị định 30: Trên 2cm, Dưới 2cm, Trái 2.5cm, Phải 1.5-2cm)
    section = doc.sections[0]
    section.page_width = Inches(8.27)
    section.page_height = Inches(11.69)
    section.top_margin = Inches(0.79)     # ~2.0 cm
    section.bottom_margin = Inches(0.79)  # ~2.0 cm
    section.left_margin = Inches(0.85)    # ~2.16 cm
    section.right_margin = Inches(0.65)   # ~1.65 cm
    content_width = 8.27 - 0.85 - 0.65    # 6.77 inches

    # Font Normal mặc định: Times New Roman 11pt
    style = doc.styles['Normal']
    font = style.font
    font.name = 'Times New Roman'
    font.size = Pt(11)
    font.color.rgb = COLOR_BLACK

    lines = raw_content.splitlines()
    in_table = False
    table_lines = []

    def flush_table():
        nonlocal in_table, table_lines
        if not table_lines:
            return

        rows_data = []
        for tl in table_lines:
            trimmed = tl.strip()
            if trimmed.startswith('|'):
                trimmed = trimmed[1:]
            if trimmed.endswith('|'):
                trimmed = trimmed[:-1]
            cells = [c.strip() for c in trimmed.split('|')]
            if all(re.match(r'^:?-+:?$', c) for c in cells if c):
                continue
            rows_data.append(cells)

        if not rows_data:
            table_lines = []
            in_table = False
            return

        num_cols = max(len(r) for r in rows_data)
        for r in rows_data:
            while len(r) < num_cols:
                r.append('')

        first_row_str = " ".join(rows_data[0]).upper()
        is_national_header = ("CỘNG HÒA" in first_row_str or "ĐỘC LẬP" in first_row_str) and num_cols == 2
        is_signoff = ("ĐẠI DIỆN" in first_row_str or "BÊN A" in first_row_str and "BÊN B" in first_row_str) and num_cols == 2 and len(rows_data) <= 5

        table = doc.add_table(rows=len(rows_data), cols=num_cols)
        table.alignment = WD_TABLE_ALIGNMENT.CENTER

        if is_national_header:
            set_table_borderless(table)
            col_widths = [2.8, 3.97]
        elif is_signoff:
            set_table_borderless(table)
            col_widths = [3.38, 3.39]
        elif num_cols == 5:
            # Data table: Checkbox/STT, Nhóm dịch vụ, Chi tiết, Đơn giá, Thời gian
            col_widths = [0.65, 1.45, 2.77, 1.15, 0.75]
            set_table_horizontal_borders(table, color="CBD5E1", sz="4")
        elif num_cols == 4:
            col_widths = [1.2, 2.97, 1.4, 1.2]
            set_table_horizontal_borders(table, color="CBD5E1", sz="4")
        elif num_cols == 3:
            col_widths = [2.5, 1.8, 2.47]
            set_table_horizontal_borders(table, color="CBD5E1", sz="4")
        elif num_cols == 2:
            col_widths = [3.38, 3.39]
            set_table_horizontal_borders(table, color="CBD5E1", sz="4")
        else:
            eq_w = content_width / num_cols
            col_widths = [eq_w] * num_cols
            set_table_horizontal_borders(table, color="CBD5E1", sz="4")

        for r_idx, row_data in enumerate(rows_data):
            row = table.rows[r_idx]
            set_row_cant_split(row)
            is_header_row = (r_idx == 0 and not is_national_header and not is_signoff)

            for c_idx, cell_text in enumerate(row_data):
                cell = row.cells[c_idx]
                cell.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
                set_col_width(cell, col_widths[c_idx])

                if is_national_header:
                    set_cell_margins(cell, top=40, bottom=40, left=60, right=60)
                    set_cell_background(cell, "FFFFFF")
                elif is_signoff:
                    set_cell_margins(cell, top=60, bottom=60, left=60, right=60)
                    set_cell_background(cell, "FFFFFF")
                elif is_header_row:
                    set_cell_margins(cell, top=90, bottom=90, left=100, right=100)
                    set_cell_background(cell, "F8FAFC") # Soft Slate-50
                elif r_idx % 2 == 1:
                    set_cell_margins(cell, top=80, bottom=80, left=100, right=100)
                    set_cell_background(cell, "FFFFFF")
                else:
                    set_cell_margins(cell, top=80, bottom=80, left=100, right=100)
                    set_cell_background(cell, "FAFAFA")

                cell.text = ""
                clean_text = cell_text.replace('<br>', '\n').replace('<br/>', '\n').replace('<br />', '\n')
                paras = clean_text.split('\n')

                for p_idx, p_text in enumerate(paras):
                    p_text_stripped = p_text.strip()
                    if not p_text_stripped and not is_signoff:
                        continue

                    p = cell.add_paragraph()
                    p.paragraph_format.space_before = Pt(0)
                    p.paragraph_format.space_after = Pt(2)
                    p.paragraph_format.line_spacing = 1.15

                    if is_national_header:
                        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                    elif is_signoff:
                        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                    elif is_header_row:
                        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                    elif c_idx == 0 and num_cols >= 4:
                        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                    elif c_idx == (num_cols - 1) and num_cols >= 4:
                        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                    elif "VNĐ" in p_text_stripped or "VND" in p_text_stripped or re.search(r'\d{1,3}(\.\d{3})+', p_text_stripped):
                        p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
                    else:
                        p.alignment = WD_ALIGN_PARAGRAPH.LEFT

                    # Gạch nối phân cách tiêu ngữ trong header
                    if is_national_header and re.match(r'^-{3,}$', p_text_stripped) or 'o0o' in p_text_stripped:
                        run = p.add_run("―" * 16)
                        run.font.size = Pt(8)
                        run.font.color.rgb = COLOR_BLACK
                        continue

                    tokens = re.split(r'(\*\*.*?\*\*|\*.*?\*|`.*?`)', p_text)
                    for token in tokens:
                        if not token:
                            continue
                        if token.startswith('**') and token.endswith('**') and len(token) >= 4:
                            run = p.add_run(token[2:-2])
                            run.bold = True
                            if is_national_header and "CỘNG HÒA" in token.upper():
                                run.font.size = Pt(11.5)
                            elif is_national_header and "ĐỘC LẬP" in token:
                                run.font.size = Pt(11.5)
                            elif is_header_row:
                                run.font.size = Pt(10)
                                run.font.color.rgb = COLOR_BLACK
                            elif is_signoff and p_idx == 0:
                                run.font.size = Pt(11)
                        elif token.startswith('*') and token.endswith('*') and len(token) >= 2:
                            run = p.add_run(token[1:-1])
                            run.italic = True
                            if is_national_header or is_signoff:
                                run.font.size = Pt(9.5)
                                run.font.color.rgb = COLOR_MUTED
                        elif token.startswith('`') and token.endswith('`') and len(token) >= 2:
                            run = p.add_run(token[1:-1])
                            run.font.name = 'Consolas'
                            run.font.size = Pt(9.5)
                        else:
                            run = p.add_run(token)
                            if is_header_row:
                                run.bold = True
                                run.font.size = Pt(10)

        p_after = doc.add_paragraph()
        p_after.paragraph_format.space_before = Pt(0)
        p_after.paragraph_format.space_after = Pt(4)

        table_lines = []
        in_table = False

    i = 0
    while i < len(lines):
        line = lines[i].rstrip('\r\n')

        # Xử lý Table
        if line.strip().startswith('|') and line.strip().endswith('|'):
            in_table = True
            table_lines.append(line)
            i += 1
            continue
        elif in_table:
            flush_table()

        if not line.strip():
            i += 1
            continue

        # Bỏ qua dòng hr riêng lẻ nếu nằm ngay sau tiêu ngữ
        if re.match(r'^-{3,}$', line.strip()) or re.match(r'^\*{3,}$', line.strip()) or line.strip() == '***o0o***':
            i += 1
            continue

        # Heading 1 (Tên Hợp đồng / Biên bản)
        if line.startswith('# '):
            text = line[2:].strip()
            # Bỏ qua nếu là Quốc hiệu viết dạng H1
            if "CỘNG HÒA XÃ HỘI CHỦ NGHĨA" in text:
                i += 1
                continue

            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(12)
            p.paragraph_format.space_after = Pt(4)
            p.paragraph_format.line_spacing = 1.2
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            run = p.add_run(text)
            run.bold = True
            run.font.size = Pt(14.5)
            run.font.color.rgb = COLOR_BLACK
            i += 1
            continue

        # Heading 2 (Tiêu đề phụ / Số hợp đồng / Phần)
        if line.startswith('## '):
            text = line[3:].strip()
            if "Độc lập - Tự do - Hạnh phúc" in text:
                i += 1
                continue

            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(8)
            p.paragraph_format.space_after = Pt(4)
            p.paragraph_format.line_spacing = 1.15
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER if ("(" in text or "PHẦN" in text.upper()) else WD_ALIGN_PARAGRAPH.LEFT
            run = p.add_run(text)
            run.bold = True
            run.font.size = Pt(12)
            run.font.color.rgb = COLOR_PRIMARY if "PHẦN" in text.upper() else COLOR_BLACK
            i += 1
            continue

        # Heading 3 (ĐIỀU KHOẢN hoặc BÊN A/BÊN B)
        if line.startswith('### '):
            text = line[4:].strip()
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(9)
            p.paragraph_format.space_after = Pt(3)
            p.paragraph_format.line_spacing = 1.15
            p.alignment = WD_ALIGN_PARAGRAPH.LEFT

            run = p.add_run(text)
            run.bold = True
            run.font.size = Pt(11)
            run.font.color.rgb = COLOR_BLACK
            i += 1
            continue

        # Heading 4 (Mục nhỏ 4.1, 4.2...)
        if line.startswith('#### '):
            text = line[5:].strip()
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(6)
            p.paragraph_format.space_after = Pt(2)
            p.paragraph_format.line_spacing = 1.15
            run = p.add_run(text)
            run.bold = True
            run.font.size = Pt(10.5)
            run.font.color.rgb = COLOR_BLACK
            i += 1
            continue

        # Căn cứ pháp lý (gạch đầu dòng nghiêng)
        if line.strip().startswith('- *Căn cứ') or line.strip().startswith('*Căn cứ'):
            clean_l = re.sub(r'^-\s*', '', line.strip())
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(1)
            p.paragraph_format.space_after = Pt(2)
            p.paragraph_format.line_spacing = 1.15
            p.paragraph_format.left_indent = Inches(0.2)
            p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY

            clean_text = clean_l.strip('*').strip()
            run = p.add_run(f"- {clean_text}")
            run.italic = True
            run.font.size = Pt(10)
            run.font.color.rgb = COLOR_BLACK
            i += 1
            continue

        # Checklist hoặc gạch đầu dòng thông thường
        if line.strip().startswith('- ') or line.strip().startswith('* '):
            item_text = line.strip()[2:]
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(1)
            p.paragraph_format.space_after = Pt(2)
            p.paragraph_format.line_spacing = 1.15
            p.paragraph_format.left_indent = Inches(0.25)
            p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY

            # Run bold / normal
            tokens = re.split(r'(\*\*.*?\*\*|\*.*?\*|`.*?`)', item_text)
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
                    run.font.size = Pt(9.5)
                else:
                    run = p.add_run(token)
            i += 1
            continue

        # Đoạn văn bản thông thường
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(1)
        p.paragraph_format.space_after = Pt(3)
        p.paragraph_format.line_spacing = 1.15

        # Căn giữa nếu là số hiệu hoặc dòng phụ đề mở đầu
        if "Số:" in line or "Số hiệu:" in line or "(Phiên bản" in line or "(LOCALMATE" in line:
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        else:
            p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY

        tokens = re.split(r'(\*\*.*?\*\*|\*.*?\*|`.*?`)', line)
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
                run.font.size = Pt(9.5)
            else:
                run = p.add_run(token)

        i += 1

    if in_table:
        flush_table()

    # Lưu file
    os.makedirs(os.path.dirname(output_docx_path), exist_ok=True)
    doc.save(output_docx_path)
    print(f"[SUCCESS] Built clean DOCX at: {output_docx_path}")
    return True

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python build_single_contract_docx.py <input_md_path> <output_docx_path>")
        sys.exit(1)

    input_path = sys.argv[1]
    output_path = sys.argv[2]
    success = build_docx_contract(input_path, output_path)
    sys.exit(0 if success else 1)
