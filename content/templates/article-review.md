# Multi-Agent Editorial Review Report

- **Article Slug**: `[slug]`
- **Version Reviewed**: `1`
- **Date**: `YYYY-MM-DD`
- **Overall Verdict**: `PASS | REWRITE_REQUIRED | MINOR_EDITS_NEEDED | BLOCKED`

---

## 1. Search Intent & JTBD Reviewer (`agent-search-intent`)
- **Status**: `PASS | FAIL | WARNING`
- **Đánh giá**:
  - Người đọc có nhận được câu trả lời họ đang tìm không?
  - Format có khớp SERP kỳ vọng không?
- **Ghi chú cụ thể**:
  - ...

## 2. Information Gain & Substance Reviewer (`agent-editor`)
- **Status**: `PASS | FAIL | WARNING`
- **Đánh giá**:
  - Bài viết có mang lại góc nhìn độc lập, giá trị thực tiễn vượt trội so với top 3 SERP không?
  - Có khung ra quyết định (decision framework) rõ ràng không?
- **Ghi chú cụ thể**:
  - ...

## 3. Fact-Checking & Evidence Auditor (`agent-fact-checker`)
- **Status**: `PASS | FAIL | WARNING`
- **Đánh giá**:
  - Có số liệu ảo (fake precision) không?
  - Mọi tuyên bố kỹ thuật / quy định có trích nguồn chính thức (`sources`) không?
  - Thông tin gói dịch vụ LocalMate có đúng bảng giá niêm yết không?
- **Ghi chú cụ thể**:
  - ...

## 4. Anti-AI Slop & Tone Reviewer (`agent-humanizer`)
- **Status**: `PASS | FAIL | WARNING`
- **Đánh giá**:
  - Có cụm từ cấm kỵ (cliché) không?
  - Ngôn từ có thực tế, bình dị cho bác thợ, chủ tiệm hiểu được không?
  - Có các đoạn filler "ở phần tiếp theo", "đang được biên tập" không?
- **Ghi chú cụ thể**:
  - ...

## 5. SEO & Internal Link Graph Reviewer (`agent-seo`)
- **Status**: `PASS | FAIL | WARNING`
- **Đánh giá**:
  - Metadata Title/Description có đạt chuẩn ký tự không?
  - H1/H2 hierarchy có đúng chuẩn không?
  - Các liên kết nội bộ có trỏ đến đúng trang giải pháp/bài liên quan không? Có liên kết nào bị gãy (404) không?
- **Ghi chú cụ thể**:
  - ...

## 6. GEO & Machine Citability Reviewer (`agent-geo`)
- **Status**: `PASS | FAIL | WARNING`
- **Đánh giá**:
  - Đoạn Answer First có thể trích dẫn độc lập (standalone passage) bởi AI Search không?
  - Thực thể (Entity) chủ ngữ có rõ ràng không?
- **Ghi chú cụ thể**:
  - ...

---

## Action Items For Writer Agent
1. [ ] ...
2. [ ] ...

## Final Quality Gate Sign-off
- **Reviewer Signatures**: `[seo-agent, editor-agent, fact-checker]`
- **Target Lifecycle State**: `editorial_ready` (Chuyển tiếp sang `validate-content.ts` trước khi import CMS)
