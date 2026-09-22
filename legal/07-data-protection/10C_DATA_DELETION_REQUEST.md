# PHIẾU TIẾP NHẬN & XỬ LÝ YÊU CẦU XÓA DỮ LIỆU CÁ NHÂN (DSR FORM)
**(DATA SUBJECT DELETION REQUEST & PROCESSING FORM)**  
**Mã hồ sơ:** DEL-[NĂM][THÁNG][NGÀY]-[SỐ_THỨ_TỰ]  
**Căn cứ pháp lý:** Điều 9 Nghị định 13/2023/NĐ-CP và Luật Bảo vệ dữ liệu cá nhân 2025

---

### PHẦN I: THÔNG TIN TIẾP NHẬN TỪ BÊN YÊU CẦU
1. **Ngày tiếp nhận yêu cầu:** [NGÀY]/[THÁNG]/202[NĂM]
2. **Kênh tiếp nhận:** [ ] Form trực tuyến trên website | [ ] Email gửi đến dpo@localmate.vn | [ ] Văn bản trực tiếp
3. **Thông tin Chủ thể Dữ liệu / Đại diện Khách hàng:**
   - Họ và tên: ................................................................................................................................
   - Số điện thoại xác thực (nhận OTP): ...........................................................................................
   - Địa chỉ Email liên hệ: .............................................................................................................
   - Thuộc nhóm chủ thể: [ ] Khách hàng doanh nghiệp của LocalMate | [ ] Người dùng điền form trên website
4. **Phạm vi Dữ liệu Yêu cầu Xóa bỏ:**
   - [ ] Toàn bộ thông tin liên hệ cá nhân (Họ tên, SĐT, Email).
   - [ ] Lịch sử trao đổi, tin nhắn tư vấn và ghi chú tương tác trên CRM.
   - [ ] Toàn bộ tài khoản quản trị và nhật ký hoạt động hệ thống.
   - [ ] Phạm vi cụ thể khác: ..........................................................................................................

---

### PHẦN II: QUY TRÌNH THẨM TRA VÀ PHÊ DUYỆT CỦA BỘ PHẬN DPO LOCALMATE
*(Thời hạn thẩm tra: Tối đa 24 giờ kể từ khi tiếp nhận)*

1. **Xác thực danh tính chủ thể (Identity Verification):**
   - Đã đối soát số điện thoại / email yêu cầu khớp với dữ liệu trên hệ thống: [ ] ĐẠT | [ ] KHÔNG ĐẠT
   - Phương thức xác thực đã thực hiện: [ ] Gửi mã OTP xác nhận qua SMS/Zalo | [ ] Xác nhận qua email chính chủ
2. **Kiểm tra các trường hợp Ngoại lệ Pháp lý không được xóa (Legal Exceptions):**
   - Căn cứ Khoản 2 Điều 9 Nghị định 13/2023/NĐ-CP, việc xóa dữ liệu **KHÔNG ĐƯỢC ÁP DỤNG** nếu thuộc các trường hợp:
     + [ ] Dữ liệu phải lưu trữ theo quy định của pháp luật kế toán, thuế (Hóa đơn GTGT lưu trữ tối thiểu 10 năm);
     + [ ] Dữ liệu đang phục vụ điều tra, xử lý hành vi vi phạm pháp luật của cơ quan nhà nước có thẩm quyền;
     + [ ] Dữ liệu đang liên quan trực tiếp đến tranh chấp hợp đồng chưa được giải quyết dứt điểm.
3. **Quyết định của Cán bộ DPO:**
   - [ ] **PHÊ DUYỆT XÓA TOÀN BỘ:** Đủ điều kiện xóa vĩnh viễn theo luật định.
   - [ ] **PHÊ DUYỆT XÓA MỘT PHẦN:** Giữ lại các chứng từ kế toán thuế bắt buộc theo luật; xóa toàn bộ thông tin tiếp thị.
   - [ ] **TỪ CHỐI XÓA:** Nêu rõ lý do căn cứ theo ngoại lệ pháp luật và gửi văn bản trả lời chủ thể dữ liệu.

---

### PHẦN III: LỆNH KỸ THUẬT VÀ THỰC THI (TECHNICAL EXECUTION)
*(Thời hạn thực thi: Tối đa 48 giờ sau khi phê duyệt)*

- **Kỹ thuật viên thực hiện:** ................................................... Chức danh: ...........................................
- **Thời gian thực thi:** hồi ...... giờ ...... phút, ngày [NGÀY]/[THÁNG]/202[NĂM]
- **Thao tác kỹ thuật đã hoàn thành:**
  - [x] Chạy lệnh xóa vĩnh viễn (Hard Delete) bản ghi trong cơ sở dữ liệu Supabase / Google Sheets;
  - [x] Kích hoạt lệnh xóa bộ nhớ đệm toàn cầu (Purge Cache) trên Cloudflare CDN và Edge Workers;
  - [x] Thu hồi toàn bộ quyền truy cập và hủy liên kết tài khoản liên quan.
- **Trạng thái phục hồi:** **KHÔNG THỂ PHỤC HỒI (IRREVERSIBLE)**.

---

### XÁC NHẬN CỦA ĐẦU MỐI PHỤ TRÁCH DPO LOCALMATE
*Bằng văn bản này, Bộ phận Bảo vệ Dữ liệu LocalMate xác nhận đã hoàn tất quy trình xử lý yêu cầu xóa dữ liệu mã số: DEL-[NĂM][THÁNG][NGÀY]-[SỐ_THỨ_TỰ] đúng theo quy định pháp luật.*

```
                                                     ĐẦU MỐI DPO LOCALMATE
                                                      (Ký và ghi rõ họ tên)
```
