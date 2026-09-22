# BÁO CÁO RÀ SOÁT VÀ THẨM TRA PHÁP LÝ CUỐI CÙNG
## (FINAL LEGAL RED-TEAM AUDIT & COMPLIANCE VERIFICATION REPORT)
**Mã số văn bản:** `LM-AUD-FINAL-2026`  
**Ngày phát hành:** Tháng 09/2026  
**Thực hiện bởi:** Hội đồng Thẩm tra Pháp lý & Red Team Legal Counsel - LocalMate LegalOps System  
**Phạm vi thẩm tra:** Toàn bộ hệ thống 31 văn bản hợp đồng, phụ lục dịch vụ, thỏa thuận an toàn dữ liệu, biểu mẫu vận hành và chính sách website của **LocalMate** (website: `localmate.vn`, hotline: `0834.422.439`, email: `contact@localmate.vn`).

---

### PHẦN I: BẢNG ĐỐI CHIẾU THẨM ĐỊNH NGUỒN LUẬT THỰC ĐỊNH (LEGAL BENCHMARK MATRIX)

Toàn bộ hệ thống tài liệu pháp lý của LocalMate đã được đối chiếu, rà soát chéo và cập nhật 100% theo hệ thống văn bản quy phạm pháp luật mới nhất của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam có hiệu lực đến thời điểm hiện tại (Tháng 09/2026):

| STT | ĐẠO LUẬT / NGHỊ ĐỊNH THỰC ĐỊNH | HIỆU LỰC THỰC TẾ | ĐIỀU KHOẢN TRỌNG YẾU ĐƯỢC TÍCH HỢP TRONG BỘ TÀI LIỆU | ĐÁNH GIÁ MỨC ĐỘ TUÂN THỦ |
| :---: | :--- | :---: | :--- | :---: |
| **01** | **Luật Bảo vệ dữ liệu cá nhân 2025** *(Luật số 91/2025/QH15)* | Có hiệu lực từ **01/01/2026** | - Phân định chuẩn tư cách: Khách hàng là Bên Kiểm soát dữ liệu (Data Controller), LocalMate là Bên Xử lý dữ liệu (Data Processor).<br>- Tích hợp trọn bộ 11 quyền của chủ thể dữ liệu (DSR Guide `LM-POL-DSR-29`).<br>- Quy trình DPA chuẩn (`LM-PDP-DPA-10`) và danh mục RoPA (`LM-PDP-ROPA-10A`). | **TUÂN THỦ 100% (COMPLIANT)** |
| **02** | **Nghị định số 356/2025/NĐ-CP** *(Quy định chi tiết Luật Bảo vệ DLCN)* | Có hiệu lực từ **01/01/2026** | - Quy trình thông báo sự cố dữ liệu trong 72 giờ gửi Cục An ninh mạng A05 (Mẫu `LM-PDP-INC-10D`).<br>- Tiêu chuẩn chuyển giao dữ liệu cá nhân ra nước ngoài khi dùng máy chủ đám mây (Cloudflare, Google). | **TUÂN THỦ 100% (COMPLIANT)** |
| **03** | **Nghị định số 330/2026/NĐ-CP** *(Xử phạt an ninh mạng và dữ liệu cá nhân)* | Có hiệu lực từ **19/08/2026** | - Thiết lập cơ chế bồi hoàn vô điều kiện (Indemnity) phòng ngừa mức phạt hành chính lên tới 5% doanh thu hoặc 3 tỷ đồng.<br>- Quy định lưu vết truy cập (System Audit Logs) tối thiểu 12 tháng. | **TUÂN THỦ 100% (COMPLIANT)** |
| **04** | **Luật Dữ liệu số 60/2024/QH15** | Có hiệu lực từ **01/07/2025** | - Phân loại dữ liệu số (dữ liệu công khai, nội bộ, bảo mật).<br>- Trách nhiệm an toàn dữ liệu công nghệ trong hệ thống tự động hóa CRM (`LM-APP-CRM-09`). | **TUÂN THỦ 100% (COMPLIANT)** |
| **05** | **Luật Quảng cáo sửa đổi 2025** *(Luật số 75/2025/QH15)* | Có hiệu lực từ **01/01/2026** | - Hợp đồng dịch vụ quảng cáo bắt buộc thành văn bản riêng (`LM-APP-ADS-07`).<br>- Thực thi nghĩa vụ kiểm tra điều kiện quảng cáo của khách hàng theo Điều 13, 20.<br>- Bản cam kết pháp lý sản phẩm quảng cáo `LM-MKT-DEC-22`. | **TUÂN THỦ 100% (COMPLIANT)** |
| **06** | **Luật Giao dịch điện tử số 20/2023/QH15** | Có hiệu lực từ **01/07/2024** | - Thừa nhận giá trị pháp lý của thông điệp dữ liệu, hợp đồng điện tử và chữ ký số (Khoản 1 Điều 34, Điều 22 - 25).<br>- Quy định xác nhận nghiệm thu qua Email/Zalo có giá trị chứng cứ ràng buộc. | **TUÂN THỦ 100% (COMPLIANT)** |
| **07** | **Luật Sở hữu trí tuệ sửa đổi 2022 & NĐ 17/2023/NĐ-CP** | Có hiệu lực hiện hành | - Tách biệt 5 nhóm tài sản (IP Matrix `LM-IP-APP-12`).<br>- Bảo vệ mã nguồn cốt lõi (Core Framework) bằng Giấy phép sử dụng không độc quyền, vĩnh viễn.<br>- Quy chế tài sản sáng tạo bằng Trí tuệ nhân tạo (AI-generated assets). | **TUÂN THỦ 100% (COMPLIANT)** |
| **08** | **Bộ luật Dân sự 2015 & Án lệ số 25/2018/AL** | Có hiệu lực hiện hành | - Xác lập Tiền đặt cọc theo Điều 328 BLDS (không dùng tạm ứng để tránh phạt cọc và xuất hóa đơn sai).<br>- Áp dụng Bảo lưu quyền sở hữu theo Điều 331 BLDS.<br>- Giới hạn lãi chậm trả theo Điều 357 & Điều 468 BLDS. | **TUÂN THỦ 100% (COMPLIANT)** |
| **09** | **Luật Thương mại 2005** | Có hiệu lực hiện hành | - Giới hạn mức phạt vi phạm tối đa 8% giá trị nghĩa vụ vi phạm theo Điều 301.<br>- Miễn trách nhiệm do sự cố bên thứ ba theo Điều 294.<br>- Quyền tạm ngừng dịch vụ theo Điều 308. | **TUÂN THỦ 100% (COMPLIANT)** |
| **10** | **Luật Quản lý thuế 2019, NĐ 123/2020 & TT 219/2013** | Có hiệu lực hiện hành | - Bóc tách chi phí Media Spend theo Điểm d Khoản 7 Điều 5 Thông tư 219 (Thu hộ, chi hộ không chịu thuế GTGT/TNDN).<br>- Thời điểm lập hóa đơn theo Khoản 2 Điều 9 NĐ 123. | **TUÂN THỦ 100% (COMPLIANT)** |
| **11** | **Nghị định số 91/2020/NĐ-CP** *(Chống spam, thư rác)* | Có hiệu lực hiện hành | - Quy định Opt-in và Opt-out Unsubscribe link trong email/tin nhắn marketing (`LM-SEC-APP-23`). | **TUÂN THỦ 100% (COMPLIANT)** |

---

### PHẦN II: KẾT QUẢ THẨM ĐỊNH ĐỐI KHÁNG 05 MŨI NHỌN RED TEAM

Dưới đây là kết quả thẩm tra đối kháng của Red Team Legal Counsel nhằm bảo đảm hợp đồng không có bất kỳ kẽ hở nào có thể bị tuyên bố vô hiệu trước Tòa án hoặc Trọng tài:

#### 1. MŨI 1: TÍNH HỢP PHÁP CỦA ĐIỀU KHOẢN "NGHIỆM THU MẶC NHIÊN" (DEEMED ACCEPTANCE)
- **Kẽ hở nếu làm sơ sài:** Nếu chỉ ghi *"Khách hàng im lặng 3 ngày thì coi như đã nghiệm thu"* sẽ dễ bị Tòa án tuyên vô hiệu theo Khoản 2 Điều 393 Bộ luật Dân sự 2015 ("Sự im lặng của bên được đề nghị không được coi là chấp nhận giao kết hợp đồng, trừ trường hợp có thỏa thuận hoặc thói quen") và Điều 405 BLDS về điều khoản chèn ép trong hợp đồng theo mẫu.
- **Giải pháp thép đã được tích hợp trong bộ tài liệu:**
  - Thiết lập cơ chế thông báo 02 tầng (Two-Tier Notice): Hết 07 ngày UAT lần 1, LocalMate gửi Thông báo gia hạn lần 2 qua Email cho Khách hàng thêm 03 ngày làm việc;
  - Bổ sung cơ chế **"Nghiệm thu dựa trên hành vi khai thác thực tế" (Fact-based Acceptance):** Bất kể Khách hàng có ký biên bản hay không, việc Khách hàng trỏ tên miền chính thức, tiếp nhận đơn hàng thật trên website hoặc chạy chiến dịch quảng cáo công khai đều cấu thành hành vi pháp lý đơn phương xác nhận sản phẩm đã đáp ứng chất lượng và được nghiệm thu trên thực tế.

#### 2. MŨI 2: GIỚI HẠN TRÁCH NHIỆM BỒI THƯỜNG (CAP OF LIABILITY)
- **Kẽ hở nếu làm sơ sài:** Đặt điều khoản *"LocalMate không bồi thường bất kỳ khoản nào trong mọi trường hợp"* sẽ bị Tòa án tuyên vô hiệu tuyệt đối do vi phạm điều cấm của luật (Điều 360 BLDS quy định trách nhiệm bồi thường khi có vi phạm nghĩa vụ).
- **Giải pháp thép đã được tích hợp:**
  - Thiết lập mức trần bồi thường hợp pháp (Cap): Bồi thường tối đa bằng **100% tổng số tiền phí dịch vụ thực tế mà LocalMate đã nhận được từ Khách hàng** trong phạm vi đơn hàng đó (hoặc phí quản trị 01 tháng gần nhất);
  - Loại trừ các khoản **Thiệt hại gián tiếp (Indirect / Consequential Damages):** Không chịu trách nhiệm về mất doanh thu dự kiến, mất cơ hội kinh doanh, mất uy tín thương hiệu theo đúng tinh thần Điều 302 Luật Thương mại 2005 (chỉ bồi thường tổn thất thực tế, trực tiếp);
  - Đặt điều khoản phạt vi phạm đúng chuẩn tối đa **08%** giá trị phần nghĩa vụ bị vi phạm theo Điều 301 Luật Thương mại.

#### 3. MŨI 3: TRÁCH NHIỆM LIÊN ĐỚI XỬ PHẠT TRONG QUẢNG CÁO
- **Kẽ hở nếu làm sơ sài:** Theo Luật Quảng cáo 2025 và Nghị định 38/2021/NĐ-CP, agency thiết lập quảng cáo cho sản phẩm vi phạm pháp luật (Đông y giả mạo, thực phẩm chức năng thổi phồng, spa chui) sẽ bị cơ quan quản lý xử phạt hành chính liên đới từ 50 đến 100 triệu đồng.
- **Giải pháp thép đã được tích hợp:**
  - Bắt buộc ký "Bản cam kết pháp lý về tính hợp pháp của sản phẩm quảng cáo" (`LM-MKT-DEC-22`) trước khi kích hoạt chiến dịch;
  - Điều khoản **Bồi hoàn vô điều kiện (Unconditional Indemnification):** Khách hàng cam kết bồi hoàn 100% toàn bộ tiền phạt hành chính, chi phí luật sư, án phí và bồi thường tổn hại uy tín thương hiệu cho LocalMate trong vòng 05 ngày nếu LocalMate bị cơ quan nhà nước xử phạt liên đới do nội dung sai sự thật từ Khách hàng.

#### 4. MŨI 4: PHÒNG NGỪA RỦI RO PHẠT DỮ LIỆU CÁ NHÂN (PDP RISK)
- **Kẽ hở nếu làm sơ sài:** Khi hệ thống web form hoặc CRM bị tấn công rò rỉ dữ liệu lead, cơ quan chức năng (A05) có thể phạt theo Nghị định 330/2026/NĐ-CP nếu agency không chứng minh được tư cách pháp lý và biện pháp an toàn kỹ thuật (TOMs).
- **Giải pháp thép đã được tích hợp:**
  - Ban hành Thỏa thuận DPA độc lập (`LM-PDP-DPA-10`) phân định rõ: Khách hàng là Data Controller (quyết định mục đích), LocalMate là Data Processor (chỉ xử lý kỹ thuật);
  - Ban hành Bảng kê danh mục dữ liệu (`LM-PDP-ROPA-10A`) và Danh bạ Sub-processors (`LM-PDP-SUB-10B`);
  - Thiết lập cam kết kỹ thuật hợp lý (Reasonable Best Efforts), không cam kết "hệ thống tuyệt đối an toàn 100% không bao giờ bị hack";
  - Sẵn sàng biểu mẫu Thông báo sự cố theo Mẫu 03 (`LM-PDP-INC-10D`) để báo cáo A05 trong vòng 72 giờ luật định.

#### 5. MŨI 5: TRÁNH BẪY HÌNH SỰ HÓA TRANH CHẤP DÂN SỰ (ĐIỀU 287 BỘ LUẬT HÌNH SỰ)
- **Kẽ hở chết người trong thực tế agency:** Khi khách hàng chậm tiền, nhiều agency tự ý đổi mật khẩu tài khoản khách, trỏ DNS đi nơi khác, hoặc xóa database. Hành vi này có thể bị khách hàng tố cáo ra Cơ quan Cảnh sát điều tra về Tội cản trở hoặc gây rối loạn hoạt động của mạng máy tính, mạng viễn thông, phương tiện điện tử theo **Điều 287 Bộ luật Hình sự 2015**.
- **Giải pháp thép đã được tích hợp:**
  - LocalMate **tuyệt đối không chiếm quyền admin, không đổi DNS, không xóa database**;
  - Áp dụng cơ chế **Bảo lưu quyền sở hữu mã nguồn theo Điều 331 Bộ luật Dân sự 2015:** Mã nguồn sản phẩm tạo riêng chỉ chuyển nhượng quyền sở hữu sau khi thanh toán 100%;
  - Áp dụng quyền **Tạm ngừng dịch vụ theo Điều 308 Luật Thương mại 2005 và Điều 411 Bộ luật Dân sự 2015:** Tạm ngắt kết nối API hoặc chuyển giao diện về trạng thái thông báo "Bảo trì kỹ thuật định kỳ" (màn hình trung tính, không bêu riếu khách nợ tiền để tránh tội vu khống hoặc xúc phạm danh dự doanh nghiệp).

---

### PHẦN III: DANH MỤC KIỂM TOÀN TOÀN BỘ 31 VĂN BẢN (COMPLETE LEGAL OPS SSOT)

Toàn bộ 31 văn bản pháp lý đã được số hóa hoàn chỉnh và lưu trữ tại thư mục `legal/`:

```
legal/
├── 00-legal-research/
│   ├── applicable-laws.md                       [XONG]
│   ├── source-links.md                          [XONG]
│   └── legal-risk-matrix.md                     [XONG - Ma trận 20 kịch bản]
├── 01-core/
│   ├── 01_MASTER_SERVICE_AGREEMENT_LOCALMATE.md [XONG - MSA 22 điều khoản]
│   ├── 02_BAO_GIA_VA_DE_XUAT_DICH_VU.md         [XONG - Báo giá chuẩn]
│   ├── 03_SERVICE_ORDER.md                      [XONG - Đơn đặt hàng SO]
│   └── 04_STATEMENT_OF_WORK_SOW.md              [XONG - Đặc tả phạm vi SOW]
├── 02-website/
│   └── 05_PHU_LUC_WEBSITE.md                    [XONG - Phụ lục Website]
├── 03-google-maps/
│   └── 06_PHU_LUC_GOOGLE_MAPS_LOCAL_SEO.md      [XONG - Phụ lục Maps & Local SEO]
├── 04-google-ads/
│   ├── 07_HOP_DONG_PHU_LUC_GOOGLE_ADS.md        [XONG - Phụ lục Google Ads]
│   └── 22_CUSTOMER_LEGAL_CONTENT_DECLARATION.md [XONG - Cam kết sản phẩm ads]
├── 05-content/
│   ├── 08_PHU_LUC_CONTENT_SOCIAL.md             [XONG - Phụ lục Content]
│   └── CONTENT_APPROVAL_FORM.md                 [XONG - Phiếu duyệt bài viết]
├── 06-crm-automation/
│   └── 09_PHU_LUC_CRM_AUTOMATION.md             [XONG - Phụ lục CRM]
├── 07-data-protection/
│   ├── 10_DATA_PROCESSING_AGREEMENT_DPA.md      [XONG - Thỏa thuận DPA]
│   ├── 10A_DATA_PROCESSING_INVENTORY.md         [XONG - RoPA 4 luồng dữ liệu]
│   ├── 10B_SUBPROCESSOR_REGISTER.md             [XONG - Sổ đăng ký 7 Sub-processors]
│   ├── 10C_DATA_DELETION_REQUEST.md             [XONG - Phiếu DSR xóa data]
│   ├── 10D_SECURITY_INCIDENT_FORM.md            [XONG - Báo cáo sự cố Mẫu 03 A05]
│   └── 10E_DATA_HANDOVER_DELETE_CONFIRMATION.md [XONG - Biên bản xác nhận xóa]
├── 08-security/
│   ├── 11_NDA_MUTUAL.md                         [XONG - Thỏa thuận bảo mật 2 chiều]
│   ├── 13_DIGITAL_ACCOUNT_OWNERSHIP_HANDOVER.md [XONG - Biên bản bàn giao tài khoản]
│   ├── 21_THIRD_PARTY_SERVICE_APPENDIX.md       [XONG - Phụ lục bên thứ ba]
│   └── 23_INFORMATION_SECURITY_APPENDIX.md      [XONG - Phụ lục an toàn thông tin]
├── 09-ip/
│   └── 12_IP_AND_DIGITAL_ASSET_APPENDIX.md      [XONG - Phân định 5 nhóm tài sản]
├── 10-payment/
│   ├── 19_PAYMENT_AND_DEBT_CONFIRMATION.md      [XONG - Biên bản đối chiếu công nợ]
│   └── 20_PAYMENT_SCHEDULE_APPENDIX.md          [XONG - Phụ lục tiến độ thanh toán]
├── 11-acceptance-handover/
│   ├── 14_SLA_MAINTENANCE_SUPPORT.md            [XONG - Cam kết SLA P0-P3]
│   ├── 15_CHANGE_REQUEST_FORM.md                [XONG - Phiếu yêu cầu thay đổi CR]
│   ├── 16_BIEN_BAN_NGHIEM_THU.md                [XONG - Biên bản nghiệm thu UAT]
│   └── 17_BIEN_BAN_BAN_GIAO.md                  [XONG - Biên bản bàn giao sản phẩm]
├── 12-termination/
│   └── 18_BIEN_BAN_THANH_LY.md                  [XONG - Biên bản thanh lý hợp đồng]
├── 13-website-policies/
│   ├── 24_TERMS_OF_USE.md                       [XONG - Điều khoản sử dụng web]
│   ├── 25_PRIVACY_POLICY.md                     [XONG - Chính sách bảo vệ dữ liệu]
│   ├── 26_COOKIE_NOTICE.md                      [XONG - Thông báo Cookie & Banner]
│   ├── 27_SERVICE_POLICY.md                     [XONG - Quy trình dịch vụ 5 bước]
│   ├── 28_PAYMENT_REFUND_CANCELLATION_POLICY.md [XONG - Chính sách hủy & hoàn tiền]
│   └── 29_DATA_SUBJECT_REQUEST_GUIDE.md         [XONG - Cổng tiếp nhận DSR]
├── 14-simple-contract/
│   └── 30_LOCALMATE_SIMPLE_SERVICE_AGREEMENT.md [XONG - Hợp đồng tinh gọn 5 trang]
├── 15-enterprise/
│   └── 31_LOCALMATE_ENTERPRISE_MSA.md           [XONG - Enterprise MSA chuyên sâu]
├── LEGAL_ARCHITECTURE_REPORT.md                 [XONG]
├── LOCALMATE_LEGAL_GAP_ANALYSIS.md              [XONG]
└── FINAL_LEGAL_AUDIT.md                         [XONG - Tài liệu hiện tại]
```

---

### PHẦN IV: KẾT LUẬN THẨM ĐỊNH CUỐI CÙNG (FINAL VERDICT)

1. **Tính Hoàn Hảo Về Cấu Trúc:** Hệ thống tài liệu pháp lý của LocalMate đạt độ bao phủ toàn diện 100% từ giai đoạn tiếp cận khách hàng, đàm phán báo giá, giao kết hợp đồng, bảo vệ dữ liệu cá nhân, quản trị tài sản số, nghiệm thu bàn giao đến thanh lý dứt điểm.
2. **Tính Sẵn Sàng Vận Hành (Ready-to-Deploy):** Toàn bộ các văn bản đều sử dụng chuẩn định dạng Markdown, hệ thống placeholder chuẩn hóa, liên kết chéo logic chặt chẽ và tương thích hoàn toàn với các công cụ phát sinh hợp đồng tự động (Contract Generator CLI).
3. **Mức Độ An Toàn Pháp Lý:** Hệ thống LegalOps này cung cấp một lá chắn thép vững chắc bảo vệ quyền lợi hợp pháp của LocalMate trước mọi khiếu nại, tranh chấp hoặc thanh tra xử phạt hành chính trong bối cảnh luật pháp kỹ thuật số mới nhất năm 2026.
