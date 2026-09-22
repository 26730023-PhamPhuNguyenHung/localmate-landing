# THÔNG BÁO HÀNH VI VI PHẠM QUY ĐỊNH VỀ BẢO VỆ DỮ LIỆU CÁ NHÂN
*(Ban hành theo Mẫu số 03 — Phụ lục Nghị định số 13/2023/NĐ-CP và Luật Bảo vệ dữ liệu cá nhân 2025)*  
**Mã hồ sơ sự cố:** INC-[NĂM][THÁNG][NGÀY]-[MÃ_SỐ]  
**Thời hạn gửi:** Không muộn hơn **72 giờ** kể từ khi phát hiện hành vi vi phạm

---

**Kính gửi:** **Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (A05) – Bộ Công an**  
*(Đồng kính gửi: Khách hàng là Bên Kiểm soát Dữ liệu Cá nhân có liên quan)*

---

### 1. THÔNG TIN VỀ TỔ CHỨC BÁO CÁO:
- Tên tổ chức: **[LOCALMATE_LEGAL_NAME]**
- Mã số doanh nghiệp / Mã số thuế: **[MST]**
- Địa chỉ trụ sở chính: **[ADDRESS]**
- Người đại diện theo pháp luật: **[REPRESENTATIVE]** — Chức vụ: **[TITLE]**
- Đầu mối chuyên trách bảo vệ dữ liệu (DPO): Họ tên: [TÊN_DPO] — Điện thoại: [PHONE] — Email: dpo@localmate.vn

### 2. THỜI GIAN PHÁT SINH VÀ PHÁT HIỆN SỰ CỐ:
- Thời gian xảy ra sự cố (ước tính): ...... giờ ......, ngày [NGÀY]/[THÁNG]/202[NĂM]
- Thời gian phát hiện sự cố: ...... giờ ......, ngày [NGÀY]/[THÁNG]/202[NĂM]
- Thời điểm lập văn bản thông báo: ...... giờ ......, ngày [NGÀY]/[THÁNG]/202[NĂM]  
*(Bảo đảm tuân thủ nghiêm ngặt trong thời hạn 72 giờ luật định theo Điều 23 Nghị định 13/2023/NĐ-CP)*

### 3. MÔ TẢ CHI TIẾT BẢN CHẤT SỰ CỐ VI PHẠM:
- **Hình thức sự cố:**  
  [ ] Truy cập trái phép | [ ] Rò rỉ / Lộ lọt dữ liệu | [ ] Mất mát / Phá hủy dữ liệu | [ ] Bị tấn công mã hóa tống tiền (Ransomware)
- **Nguyên nhân bước đầu được xác định:**  
  [ ] Lỗ hổng kỹ thuật từ phần mềm bên thứ ba | [ ] Lộ khóa bảo mật API Token | [ ] Tấn công có chủ đích từ bên ngoài (DDoS/Injection) | [ ] Lỗi cấu hình bất cẩn của người dùng
- **Tóm tắt diễn biến kỹ thuật:** ...................................................................................................................................................................
  ...................................................................................................................................................................

### 4. PHÂN LOẠI VÀ ƯỚC TÍNH KHỐI LƯỢNG DỮ LIỆU BỊ ẢNH HƯỞNG:
- **Phân loại dữ liệu cá nhân:**  
  [x] Dữ liệu cá nhân cơ bản (Họ tên, Số điện thoại, Địa chỉ email, Địa chỉ giao hàng)  
  [ ] Dữ liệu cá nhân nhạy cảm *(Hệ thống LocalMate mặc định không lưu trữ dữ liệu nhạy cảm)*
- **Ước tính số lượng chủ thể dữ liệu bị ảnh hưởng:** Khoảng .................... cá nhân.
- **Danh sách hệ thống / bảng dữ liệu liên quan:** .........................................................................................................................

### 5. ĐÁNH GIÁ HẬU QUẢ VÀ THIỆT HẠI TIỀM TÀNG:
- Nguy cơ cuộc gọi rác / tin nhắn tiếp thị không mong muốn: [Cao / Trung bình / Thấp]
- Nguy cơ thiệt hại tài chính trực tiếp đối với người dùng: **KHÔNG CÓ**, do hệ thống không lưu trữ thông tin thẻ ngân hàng hoặc mật khẩu tài khoản tài chính.

### 6. CÁC BIỆN PHÁP KHẨN CẤP ĐÃ VÀ ĐANG TRIỂN KHAI ĐỂ KHẮC PHỤC:
- [x] Lập tức cô lập máy chủ, ngắt kết nối endpoint webhook bị tấn công lúc: ...... giờ ......, ngày ......
- [x] Thu hồi và thay thế mới toàn bộ Secret Keys, API Tokens (Cloudflare, Supabase, Google, Telegram);
- [x] Kích hoạt chế độ phòng vệ khẩn cấp Under Attack Mode trên Cloudflare WAF;
- [x] Trích xuất và niêm phong toàn bộ nhật ký hệ thống (Audit Logs) phục vụ công tác giám định của Cục A05;
- [x] Phát hành thông báo cảnh báo và hướng dẫn phòng ngừa tới các khách hàng doanh nghiệp bị ảnh hưởng.

### 7. CAM KẾT:
[LOCALMATE_LEGAL_NAME] cam đoan toàn bộ thông tin báo cáo trên là hoàn toàn trung thực, chính xác và cam kết tiếp tục phối hợp chặt chẽ, chấp hành mọi yêu cầu nghiệp vụ của Cục A05 - Bộ Công an và các cơ quan nhà nước có thẩm quyền trong quá trình điều tra, xử lý sự cố.

```
                                            ĐẠI DIỆN HỢP PHÁP CỦA TỔ CHỨC
                                           (Ký tên, ghi rõ họ tên và đóng dấu)
```
