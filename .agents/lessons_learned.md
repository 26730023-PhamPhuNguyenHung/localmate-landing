# BÀI HỌC VÀ LƯU Ý KỸ THUẬT (LESSONS LEARNED & BUG MEMORY)

## [2026-09-13] — Subagent 4: Service Architecture & Taxonomy Refiner (Taxonomy & Problem-First Taxonomy)
- **Vấn đề cấu trúc & wording dịch vụ cũ:**
  - Một số capability đặt tên sặc mùi thuật ngữ (GEO, AEO, Schema JSON-LD, Cloudflare Edge CDN, Core Web Vitals 90+, Thumb-zone CRO), khiến khách hàng phổ thông không hiểu và tưởng đây là dịch vụ đắt tiền/phức tạp.
  - Các kỹ thuật này bị nâng lên thành "giải pháp ngang hàng" thay vì giữ vai trò là năng lực/module hỗ trợ bên trong.
  - Xuất hiện rải rác các từ cam kết quá đà vi phạm Brand Voice V2: "bảo hành trọn đời", "sở hữu vĩnh viễn", "cam kết Top 1 - 3".
- **Giải pháp chuẩn hóa Service Architecture:**
  - **Cấu trúc Problem-First -> Solution -> Capability**:
    1. Vấn đề thực tế (Gửi ảnh Zalo trôi tin, website vỡ trên điện thoại, khách tìm Maps không thấy, tự chạy ads tốn tiền click tặc, bận việc quên gọi lại sót khách, làm xong web lỗi không ai sửa).
    2. Giải pháp tổng thể tương ứng 5 trụ cột.
    3. Năng lực kỹ thuật bên trong được phiên dịch sang ngôn ngữ đời sống:
       - Schema JSON-LD / Entity NAP -> "Đồng bộ thông tin xác thực doanh nghiệp"
       - GEO / AEO / ChatGPT -> "Tối ưu để trợ lý AI đề xuất (ChatGPT & Gemini)"
       - Cloudflare Edge / PageSpeed 90+ -> "Tối ưu mở trang cực nhanh dưới 1.2s"
       - GA4 / Meta Pixel -> "Đo lường chi phí từng cuộc gọi & tin nhắn Zalo"
  - **Làm sạch Wording**:
    - "Bảo hành trọn đời / sở hữu vĩnh viễn" -> "Đồng hành hỗ trợ kỹ thuật lâu dài", "Bàn giao 100% tài khoản chính chủ".
    - "Cam kết Top 1" -> "Hiện diện nổi bật trên Google Maps & Tìm kiếm địa phương", "Top 3 khu vực".
  - **Phạm vi dọn dẹp**: Đồng bộ 100% qua `solutionsData.ts`, `solutionPillarsData.ts`, các components Section, Deliverables, Pricing và các Cluster/Service pages.
- **Nghiệm thu kỹ thuật**: `tsc --noEmit` PASS 100%, không type error, không broken interface.

## [2026-09-13] — Subagent 6: Homepage UI/UX Designer & Component Refactorer (9 Brand Voice V2 Sections)
- **Vấn đề nhận diện từ giao diện Homepage cũ:**
  - Sections cũ có nhiều yếu tố rườm rà, lạm dụng gradient màu mè, bảng giá chi tiết hiển thị quá sớm gây ngợp, và thiếu sự gắn kết theo luồng giải quyết vấn đề từ góc nhìn khách hàng.
  - Một số section có xu hướng phô diễn năng lực AI/GEO theo phong cách agency công nghệ thay vì phục vụ hộ kinh doanh địa phương.
- **Giải pháp xây dựng 9 Components chuẩn Brand Voice V2:**
  - `HomeHero.tsx`: Giao diện tinh gọn, đọc hiểu giá trị cốt lõi trong 5 giây, CTA to rõ đạt chiều cao >= 48px, 4 trust badges nhẹ nhàng, loại bỏ mọi hiệu ứng chớp nhoáng gây rối mắt.
  - `HomePainPointsSection.tsx`: 6 thẻ vấn đề thường gặp theo ngôn ngữ chủ tiệm (chưa có nơi tử tế, khách nhắn rối, làm tay chân lặp lại, công cụ không nói chuyện với nhau, phân vân về AI, ý tưởng riêng), click để chọn trực tiếp ngữ cảnh gửi sang form tư vấn.
  - `HomeCoreServicesSection.tsx`: 4 nhóm giải pháp khách hàng dễ hiểu (Có mặt tốt hơn trên internet, Tìm và chăm sóc khách hàng, Bớt việc thủ công bằng tự động hóa, Có người hỗ trợ công nghệ khi cần), kèm checklist và ví dụ việc cụ thể.
  - `HomePhilosophySection.tsx`: 2 triết lý cốt lõi "Không bắt đầu bằng công nghệ" và "Một việc có thể bắt đầu rất nhỏ" với trích dẫn mộc mạc và luận điểm bảo vệ khách hàng.
  - `HomeHowWeWorkSection.tsx`: 4 bước làm việc gần gũi (Bạn kể việc -> Chọn cách đơn giản nhất -> Làm bản chạy thử nhỏ dùng được thật -> Hoàn thiện và đồng hành).
  - `HomeWorkflowExamplesSection.tsx`: 4 kịch bản thực tế (Quán ăn/F&B, Phòng khám/Nha khoa, Thợ sửa chữa, Bán lẻ/Vật tư) có nhãn "Workflow minh họa" rõ ràng để chống nói quá và minh bạch với khách hàng.
  - `HomeAiHonestSection.tsx`: Góc nhìn trung thực và điềm tĩnh về AI (chỉ ra rõ việc AI làm tốt và những việc AI không thể thay thế con người, cam kết không "AI washing").
  - `HomeWhyLocalmateSection.tsx`: 5 triết lý làm việc của Localmate (Việc thật, Tận dụng thứ có sẵn, Làm nhỏ trước, 100% chính chủ, KTV địa phương đồng hành 1-1).
  - `HomeFinalCtaSection.tsx`: CTA nhẹ nhàng "Không chắc mình cần gì?" tạo cảm giác an tâm, không áp lực, nút gọi hotline và Zalo kết nối trực tiếp.
  - `src/components/home/index.ts`: Barrel export chuẩn mực cho toàn bộ 9 sections.
- **Tiêu chuẩn thiết kế thực tế:**
  - 100% Light Mode sáng sủa, nền `#fbfcfb` / `#ffffff`, chữ tương phản cao `#0f172a`, viền crisp `#e2e8f0`.
  - TUYỆT ĐỐI KHÔNG XÀI GLASSMORPHISM (không backdrop-filter, không mờ ảo).
  - Tối ưu mượt mà trên laptop 14" Windows scale 125% và mobile 375px - 430px (touch target >= 44px, `text-wrap: pretty`, chống tràn ngang).
  - Biên dịch `tsc --noEmit` & `npm run build` đạt 0 lỗi 100%.


## [2026-09-13] — Subagent 7: Navigation & Discovery Architect (Tách Bạch Core Nav & Resource Nav)
- **Vấn đề từ hệ thống điều hướng cũ:**
  - Header Desktop và Mobile Drawer nhồi nhét cả dropdown "Kiến thức & Tài nguyên" với các liên kết kỹ thuật chuyên sâu (Lộ trình 5 giai đoạn, Quy trình GEO & AI, Tiêu chuẩn Audit 2026, Quy trình chăm sóc số, Hồ sơ năng lực 2026).
  - Khách hàng phổ thông (chủ quán ăn, tiệm tạp hóa, phòng khám nhỏ) vào trang bị choáng ngợp bởi thuật ngữ kỹ thuật, tạo ấn tượng sai lệch rằng Localmate là "công ty SEO phức tạp" thay vì là người đồng hành số gần gũi.
  - Mobile Drawer quá dài, nhồi nhét nhiều khối danh mục gây vỡ nhịp cuộn.
- **Giải pháp tách bạch Core Nav vs Resource Nav:**
  - **Core Navigation (Thân thiện, tinh gọn)**:
    1. *Giải pháp (theo 5 nhu cầu thực tế)*: Hiện diện số & Website, Tìm khách hàng, Quản lý & Chăm sóc khách, Bớt việc thủ công, Ứng dụng AI.
    2. *Cách làm việc* (`/#cach-lam-viec` & `/cach-lam-viec`): Dẫn thẳng đến quy trình 4 bước minh bạch.
    3. *Ví dụ & Demo* (`/du-an`): Showcase các case study / kịch bản ngành.
    4. *Bảng giá* (`/bang-gia`): Niêm yết minh bạch.
    5. *Về Localmate* (`/ve-localmate`): Định vị và cam kết.
    6. *Nút CTA chính*: "Kể việc bạn đang cần" -> Khảo sát 0đ (kèm badge 0đ).
  - **Resource Navigation (Chuyên sâu)**:
    - Chuyển toàn bộ 5 tài liệu/quy trình chuyên sâu vào cột "Tài Nguyên Chuyên Sâu" ở **Footer**, giải phóng hoàn toàn Header và thân Mobile Drawer.
  - **Mobile Drawer**:
    - Thiết kế phẳng, Light Mode, touch target >= 44px, không tràn viền ngang.
    - Card đầu: "Kể việc bạn đang cần (Khảo sát 0đ)" -> 2 phút làm khảo sát nhận dự toán & demo 0đ.
- **Lưu ý kỹ thuật**:
  - Khi dọn dẹp dropdown, cần xóa sạch state (`resourcesDropdownOpen`) và handlers (`handleMouseEnterResources`, `isResourcesActive`) để tránh lỗi TS2451 Cannot redeclare variable.
  - Cập nhật `Router.tsx` để hỗ trợ cả anchor jump nội trang lẫn cross-page hash navigation (tách `#hashPart` và `setTimeout` cuộn chính xác với offset chiều cao Header).


## [2026-09-13] — Subagent 1: Brand Voice & Positioning Auditor (SSOT v2)
- **Vấn đề nhận diện từ codebase cũ:**
  - Codebase bị biến tướng nghiêm trọng thành "AI / SEO Agency" (nhồi nhét AEO, GEO, Atomic Q&A, Vector Embeddings, llms.txt, Schema đa tầng).
  - Ngôn từ đao to búa lớn, quảng cáo phóng đại ("chiếm lĩnh Top 3", "thống trị số 0", "thời điểm vàng", "vũ khí tối thượng", "đột phá thần tốc").
  - Giọng điệu hung hăng công kích thị trường ("agency cắt cổ 20-50tr", "hét giá", "làm con tin", và gọi đích danh "FastMarketing").
  - Lệch định vị sang B2B White-label outsourcing ("LocalMate làm đội kỹ thuật giấu mặt cho Agency").
- **Giải pháp định vị & quy chuẩn Brand Voice V2:**
  - Đưa về triết lý cốt lõi: *"Localmate — Người đồng hành số tại địa phương. Công nghệ không cần phức tạp. Quan trọng là công việc được hoàn thành."*
  - 4 Trụ cột giọng điệu: Gần gũi (Local), Dễ hiểu (Radically Simple), Có chuyên môn nhưng không khoe kỹ thuật (Quiet Competence), Không nói quá & Không công kích (Honest & Humble).
  - Ban hành bảng tra cứu 30 cụm từ cấm kỵ và cụm từ thay thế chuẩn mực.
  - Tài liệu SSOT lưu tại: `docs/localmate-brand-voice-v2.md`.

## [2026-09-13] — Subagent 2: Kiến Trúc Thông Tin Trang Chủ V2 (Homepage IA V2)
- **Vấn đề nhận diện từ trang chủ cũ:**
  - Nhồi nhét 16 sections gây mệt mỏi nhận thức (cognitive overload) cho khách hàng SME.
  - Phô diễn quá nhiều thuật ngữ công nghệ (GEO, AEO, Semantic SEO, Growth Flywheel) và bảng giá chi tiết quá sớm khi khách chưa cảm thấy được thấu hiểu.
- **Giải pháp kiến trúc V2:**
  - Chuẩn hóa 10 sections tập trung vào vấn đề thật: "Bạn lo việc kinh doanh. Chuyện công nghệ để Localmate cùng bạn xử lý."
  - Dẫn dắt bằng 6 nỗi đau thực tế của tiểu thương & chủ cơ sở địa phương.
  - Bình dân hóa công nghệ: "Một việc có thể bắt đầu rất nhỏ" (micro-projects), hiệu quả mới làm tiếp.
  - Tuyên ngôn trung thực "AI nhưng không AI-washing" tạo niềm tin khác biệt với agency nói quá.
  - Tài liệu SSOT lưu tại: `docs/homepage-ia-v2.md`.

## [2026-09-13] — Subagent 10: Integration Director & Final QA (Hệ Thống Lắp Ráp & Đồng Bộ Toàn Diện)
- **Bài học về quản lý xung đột biến khi nhiều subagents cùng đóng góp:**
  - Lỗi TS2451: `Header.tsx` bị khai báo trùng `isResourcesActive` ở 2 vị trí khác nhau do subagent sau mở rộng phạm vi active route mà không xóa khai báo cũ ở đầu component.
  - *Giải pháp*: Luôn gom các selector / active route check về một khối duy nhất ngay trước return statement, dùng exact match hoặc prefix match chuẩn xác.
- **Bài học về lắp ráp Homepage tích hợp:**
  - Khi ghép `ProblemMapperSection` và `ServiceCardsSection` vào `HomePage.tsx`, chú ý prop interface: `ServiceCardsSection` sử dụng `onOpenLeadForm?: (serviceName: string) => void`, trong khi `ProblemMapperSection` sử dụng `onSelectTask?: (serviceName: string) => void`.
  - Cần bọc handler chuẩn để chuyển tiếp tên dịch vụ sang `handleOpenLeadForm(serviceName)` của root application.
- **Đảm bảo tính đồng bộ SSOT giữa 6 thành phần cốt lõi:**
  - `HomePage.tsx` ⟷ `Header.tsx` ⟷ `Footer.tsx` ⟷ `solutionsData.ts` ⟷ `caseStudiesData.ts` ⟷ `App.tsx`.
  - 100% các slug của 5 Solution Pillars (`xay-nen-tang-so`, `duoc-tim-thay`, `thu-hut-khach-hang`, `van-hanh-tu-dong-hoa`, `dong-hanh-cham-soc`) và các alias tiện ích đều được định tuyến đầy đủ, không gây 404.
- **Tiêu chuẩn UI/UX & Build Gatekeeper:**
  - Tuân thủ 100% Light Mode sáng màu, độ tương phản cao, nền sáng chữ đậm (`#0f172a`), không glassmorphism.
  - Lệnh `npm run build` (tsc && vite build) đạt 100% pass với 1582 modules, 0 lỗi TypeScript, 0 broken links.

## [2026-09-13] — Subagent 5: Trust & Claims Auditor (Kiểm Toán Niềm Tin & Chuyển Đổi Kịch Bản Ngành)
- **Vấn đề nhận diện từ hệ thống case study & marketing cũ:**
  - Xuất hiện các con số ảo không thể kiểm chứng hoặc cam kết phi thực tế: "Top 1 Google Maps sau 18 ngày", "tăng 300% doanh thu", "doanh thu tăng 185 triệu/tháng", "98.5% khách hài lòng", "hoàn vốn sau 3 ngày".
  - Sử dụng testimonial mạo danh danh tính bác sĩ / chủ gara / chủ quán mà chưa có văn bản thỏa thuận pháp lý.
  - Banner và nhãn quảng cáo phóng đại ("Hồ sơ đo thật 100%").
- **Giải pháp chuyển đổi & chuẩn mực minh bạch:**
  - Chuyển toàn bộ 5 case study trong `src/data/caseStudiesData.ts` sang mô hình:
    1. **Tình huống giả định thường gặp (Hypothetical Industry Scenarios)**: Mô phỏng bài toán kinh doanh thật của từng ngành.
    2. **Workflow minh họa**: Trình bày rõ các bước kỹ thuật và giải pháp công nghệ (Schema, Maps, Mobile-First, QR Review 2 tầng, Google Shopping, Sales Hub).
    3. **Ví dụ cách LocalMate xử lý**: Bàn giao có thể đo lường bằng quy trình kỹ thuật.
  - Gắn nhãn minh bạch 100% trên `ProjectsPage.tsx`, `CaseStudyDetailPage.tsx`, `ServiceDetailPage.tsx`, `credentialData.ts` và `StrategyPhasesPage.tsx`.
  - Thay thế toàn bộ quote bịa đặt thành "Mục Tiêu Trải Nghiệm Khách Hàng (Customer Expectation Benchmark)".
  - Báo cáo kiểm toán lưu tại SSOT: `docs/trust-claims-audit.md`.
