// LocalMate CMS - Shared Types & Interfaces

export type PostStatus = 
  | 'draft' 
  | 'editorial_ready' 
  | 'seo_ready' 
  | 'publish_ready' 
  | 'review' 
  | 'scheduled' 
  | 'published' 
  | 'archived';

// ==========================================
// Article-Level Metadata Enums & Interfaces
// ==========================================

export type ArticlePurpose =
  | 'brand_awareness'
  | 'education'
  | 'problem_solving'
  | 'solution_comparison'
  | 'cost_estimation'
  | 'service_conversion'
  | 'trust_building';

export type SearchIntentLevel =
  | 'TOFU_informational'
  | 'MOFU_commercial'
  | 'BOFU_transactional'
  | 'navigational';

export type TargetPersona =
  | 'local_store_owner'
  | 'spa_salon_clinic'
  | 'service_contractor'
  | 'fnb_owner'
  | 'sme_director'
  | 'marketing_inhouse';

export type ArticleContentType =
  | 'guide'
  | 'comparison'
  | 'cost_breakdown'
  | 'case_study'
  | 'checklist'
  | 'opinion_pov'
  | 'pillar_hub'
  | 'faq_sheet';

export type ArticleQualityStatus =
  | 'draft'
  | 'fact_check_pending'
  | 'editorial_approved'
  | 'needs_update'
  | 'flagged'
  | 'pass'
  | 'review_required';

export type ArticleSeoStatus =
  | 'not_optimized'
  | 'needs_review'
  | 'optimized'
  | 'top_ranking';

export interface ArticleAuthor {
  id?: number;
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
  credentials?: string;
  social_url?: string;
}

export interface ArticleReviewer {
  id?: number;
  name: string;
  role: string;
  credentials?: string;
  reviewed_at?: string;
}

export interface ArticleRelatedService {
  slug: string;
  title: string;
  short_description?: string;
  cta_text: string;
  cta_url: string;
  badge?: string;
}

export interface PostContentBrief {
  primary_keyword: string;
  secondary_keywords: string[];
  search_intent: string; // hoặc SearchIntentLevel
  target_customer: string; // hoặc TargetPersona
  content_goal: string;
  outline: string[];

  // Article-level Metadata mở rộng (SSOT)
  article_purpose?: ArticlePurpose;
  search_intent_level?: SearchIntentLevel;
  target_persona?: TargetPersona | string;
  primary_question?: string;
  secondary_questions?: string[];
  unique_angle?: string;
  experience_notes?: string;
  evidence_required?: string[];
  content_type?: ArticleContentType;
  pillar_id?: number | string;
  related_posts?: (number | string)[];
  related_service?: ArticleRelatedService | string;
  author?: ArticleAuthor | string;
  reviewed_by?: ArticleReviewer | string;
  fact_checked_at?: string;
  quality_status?: ArticleQualityStatus;
  seo_status?: ArticleSeoStatus;

  // CamelCase Aliases hỗ trợ API & UI binding
  articlePurpose?: ArticlePurpose;
  searchIntent?: SearchIntentLevel | string;
  targetPersona?: TargetPersona | string;
  primaryQuestion?: string;
  secondaryQuestions?: string[];
  uniqueAngle?: string;
  experienceNotes?: string;
  evidenceRequired?: string[];
  contentType?: ArticleContentType;
  pillarId?: number | string;
  relatedPosts?: (number | string)[];
  relatedService?: ArticleRelatedService | string;
  reviewedBy?: ArticleReviewer | string;
  factCheckedAt?: string;
  qualityStatus?: ArticleQualityStatus;
  seoStatus?: ArticleSeoStatus;
}

export interface PostEntity {
  id: number;
  uuid: string;
  title: string;
  slug: string;
  excerpt: string;
  content_json: string; // Tiptap JSON string hoặc Blocks JSON string
  rendered_html: string;
  featured_image_id?: number | null;
  featured_image_url?: string | null;
  status: PostStatus;
  author_id: number;
  author_name?: string;
  category_id: number;
  category_name?: string;
  category_slug?: string;
  published_at?: string | null;
  scheduled_at?: string | null;
  created_at: string;
  updated_at: string;
  seo_title?: string;
  seo_description?: string;
  focus_keyword?: string;
  canonical_url?: string;
  og_title?: string;
  og_description?: string;
  robots_index: number;
  robots_follow: number;
  reading_time: string;
  word_count: number;
  revision_number: number;
  brief_json?: string;
  tags?: string[];

  // Extended Article-level Metadata
  article_purpose?: ArticlePurpose;
  search_intent_level?: SearchIntentLevel;
  target_persona?: TargetPersona | string;
  primary_question?: string;
  secondary_questions?: string[];
  unique_angle?: string;
  experience_notes?: string;
  evidence_required?: string[];
  content_type?: ArticleContentType;
  pillar_id?: number | string;
  related_posts?: (number | string)[];
  related_service?: ArticleRelatedService;
  author_details?: ArticleAuthor;
  reviewed_by?: ArticleReviewer;
  first_published_at?: string | null;
  fact_checked_at?: string | null;
  quality_status?: ArticleQualityStatus;
  seo_status?: ArticleSeoStatus;
  blocks_json?: string; // Flexible Content Blocks Document JSON

  // GEO & AI Search Fields
  geo_main_question?: string;
  geo_direct_answer?: string;
  geo_entities?: string;
  geo_sources?: string;
  geo_faq_json?: string;

  // Conversion & Schema
  cta_id?: number | null;
  cta_details?: CtaEntity;
  schema_type?: 'Article' | 'BlogPosting' | 'FAQPage' | 'HowTo' | 'Service' | 'LocalBusiness' | 'BreadcrumbList';
  og_image_url?: string;

  // CamelCase Aliases hỗ trợ Frontend Components
  articlePurpose?: ArticlePurpose;
  searchIntent?: SearchIntentLevel | string;
  targetPersona?: TargetPersona | string;
  primaryQuestion?: string;
  secondaryQuestions?: string[];
  uniqueAngle?: string;
  experienceNotes?: string;
  evidenceRequired?: string[];
  contentType?: ArticleContentType;
  pillarId?: number | string;
  relatedPosts?: (number | string)[];
  relatedService?: ArticleRelatedService;
  author?: ArticleAuthor;
  reviewedBy?: ArticleReviewer;
  firstPublishedAt?: string | null;
  updatedAt?: string;
  factCheckedAt?: string | null;
  qualityStatus?: ArticleQualityStatus;
  seoStatus?: ArticleSeoStatus;
}

export interface CategoryEntity {
  id: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  created_at: string;
  updated_at: string;
}

export interface TagEntity {
  id: number;
  name: string;
  slug: string;
  post_count: number;
  created_at: string;
  updated_at: string;
}

export interface MediaEntity {
  id: number;
  filename: string;
  original_filename: string;
  mime_type: string;
  format?: string;
  size: number;
  size_original?: number;
  size_optimized?: number;
  width?: number | null;
  height?: number | null;
  alt_text?: string;
  caption?: string;
  hash?: string;
  focal_x?: number;
  focal_y?: number;
  r2_key: string;
  url: string;
  created_at: string;
  used_in_posts?: { id: number; title: string; slug: string; is_featured: boolean }[];
}

export interface PostRevisionEntity {
  id: number;
  post_id: number;
  revision_number: number;
  title: string;
  slug: string;
  content_json: string;
  rendered_html: string;
  author_id: number;
  author_name?: string;
  reason?: string;
  created_at: string;
}

export interface RedirectEntity {
  id: number;
  source_path: string;
  destination_url: string;
  status_code: 301 | 302;
  active: 0 | 1;
  hits?: number;
  last_hit_at?: string | null;
  created_at: string;
}

export interface CtaEntity {
  id: number;
  name: string;
  headline: string;
  description?: string;
  button_label: string;
  destination_url: string;
  placement: 'after-intro' | 'middle' | 'before-conclusion' | 'end';
  is_active: number | boolean;
  impressions: number;
  clicks: number;
  created_at?: string;
  updated_at?: string;
}

export interface UserEntity {
  id: number;
  uuid: string;
  username: string;
  email: string;
  role: 'admin' | 'editor';
  name: string;
  avatar?: string;
}

export interface DashboardStats {
  stats?: {
    totalPosts: number;
    publishedPosts: number;
    draftPosts: number;
    scheduledPosts: number;
  };
  totalPosts?: number;
  publishedPosts?: number;
  draftPosts?: number;
  scheduledPosts?: number;
  issues?: {
    missingMetaDescription: number;
    missingFeaturedImage: number;
    missingAltMedia: number;
    oversizedMedia: number;
    geoIssues: number;
    seoIssues: number;
    unusedMedia: number;
  };
  recentPosts: (PostEntity | any)[];
  upcomingPosts: (PostEntity | any)[];
  topCategories: (CategoryEntity | any)[];
}

// SEO Engine Interfaces
export interface SeoRuleCheck {
  id: string;
  name: string;
  status: 'good' | 'warning' | 'critical';
  message: string;
  detail?: string;
  score: number;
  maxScore: number;
}

export interface SeoScoreReport {
  totalScore: number; // 0 - 100
  status: 'good' | 'warning' | 'critical';
  checks: SeoRuleCheck[];
  summary: {
    criticalCount: number;
    warningCount: number;
    goodCount: number;
  };
}

// GEO Engine Interfaces
export interface GeoRuleCheck {
  id: string;
  name: string;
  passed: boolean;
  score: number;
  maxScore: number;
  recommendation: string;
  impact: 'high' | 'medium' | 'low';
}

export interface GeoReadinessReport {
  readiness: 'Good' | 'Needs work' | 'Poor';
  score: number; // 0 - 100
  checks: GeoRuleCheck[];
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  redirect?: {
    destination: string;
    status: number;
  };
  error?: {
    code: string;
    message: string;
  };
}

// ==========================================
// Flexible Content Block System (19+ Blocks)
// ==========================================

export type ContentBlockType =
  | 'tldr_answer_first'
  | 'key_takeaways'
  | 'context_boundary'
  | 'problem_symptoms'
  | 'localmate_pov'
  | 'evidence_verification'
  | 'real_example_scenario'
  | 'comparison_table'
  | 'cost_breakdown_table'
  | 'checklist'
  | 'step_by_step'
  | 'decision_tree'
  | 'common_mistakes'
  | 'warning_box'
  | 'when_not_to_do'
  | 'action_plan'
  | 'faq'
  | 'sources_citations'
  | 'related_services_cta'
  | 'related_posts'
  | 'rich_text';

export interface BaseContentBlock<TType extends ContentBlockType, TData> {
  id: string; // Unique block ID (UUID / nanoid)
  type: TType;
  order: number;
  data: TData;
  visible?: boolean;
}

// 1. TL;DR / Answer First
export interface TldrBlockData {
  title?: string; // Mặc định: "Tóm tắt nhanh (TL;DR)"
  summary: string; // 1-3 câu trả lời cốt lõi trực diện
  highlightPoint?: string; // Điểm mấu chốt nhất
  actionAdvice?: string; // Khuyên làm gì ngay
  readingTimeSeconds?: number;
}
export type TldrBlock = BaseContentBlock<'tldr_answer_first', TldrBlockData>;

// 2. Key Takeaway
export interface KeyTakeawayItem {
  id?: string;
  text: string;
  highlight?: string;
  badge?: string; // e.g. "Quan trọng", "Thực tế", "Lưu ý"
}
export interface KeyTakeawaysBlockData {
  title?: string; // Mặc định: "Điểm cốt lõi cần nhớ"
  items: KeyTakeawayItem[];
}
export type KeyTakeawaysBlock = BaseContentBlock<'key_takeaways', KeyTakeawaysBlockData>;

// 3. Context & Boundary
export interface ContextBoundaryBlockData {
  title?: string; // Mặc định: "Bối cảnh & Phạm vi áp dụng"
  applicableFor: string[]; // Ai nên áp dụng (Quy mô, ngành nghề)
  notApplicableFor: string[]; // Ai chưa nên áp dụng
  budgetMin?: number | string;
  budgetMax?: number | string;
  currency?: string;
  prerequisites?: string[]; // Điều kiện tiên quyết cần có
  timelineScope?: string; // Khung thời gian hiệu lực
}
export type ContextBoundaryBlock = BaseContentBlock<'context_boundary', ContextBoundaryBlockData>;

// 4. Problem & Symptoms
export interface ProblemSymptomItem {
  symptom: string;
  rootCause: string;
  businessImpact: string;
  severity: 'high' | 'medium' | 'low';
}
export interface ProblemSymptomsBlockData {
  title?: string;
  headline: string;
  description?: string;
  symptoms: ProblemSymptomItem[];
}
export type ProblemSymptomsBlock = BaseContentBlock<'problem_symptoms', ProblemSymptomsBlockData>;

// 5. Localmate Point of View (POV)
export interface LocalmatePovBlockData {
  title?: string; // Mặc định: "Góc nhìn LocalMate (POV)"
  marketMyth: string; // Quan niệm sai lầm phổ biến trên thị trường
  realityCheck: string; // Thực tế trần trụi mà ít ai nói cho chủ tiệm
  localmateStance: string; // Quan điểm và nguyên tắc kiên định của LocalMate
  transparencyNote?: string;
}
export type LocalmatePovBlock = BaseContentBlock<'localmate_pov', LocalmatePovBlockData>;

// 6. Evidence & Verification
export interface EvidenceMetricItem {
  label: string;
  beforeValue?: string;
  afterValue: string;
  diffText?: string;
  verifiedBy?: string;
}
export interface EvidenceVerificationBlockData {
  title?: string;
  claim: string;
  metrics: EvidenceMetricItem[];
  verificationMethod: string;
  sampleSizeOrSource?: string;
  screenshotUrl?: string;
}
export type EvidenceVerificationBlock = BaseContentBlock<'evidence_verification', EvidenceVerificationBlockData>;

// 7. Real Example & Scenario
export interface RealExampleScenarioBlockData {
  title?: string;
  businessNameOrType: string; // e.g. "Tiệm giặt sấy Quận 10"
  initialSituation: string;
  actionTaken: string;
  measurableResult: string;
  timeframe: string;
  keyLesson: string;
  testimonialSnippet?: string;
}
export type RealExampleScenarioBlock = BaseContentBlock<'real_example_scenario', RealExampleScenarioBlockData>;

// 8. Comparison Table
export interface ComparisonOption {
  id: string;
  name: string;
  isRecommended?: boolean;
  badge?: string; // "Khuyên dùng", "Tự làm", "Giá rẻ"
}
export interface ComparisonCriterion {
  id: string;
  name: string;
  values: Record<string, string>; // key = option id, value = text
  isHighlight?: boolean;
}
export interface ComparisonTableBlockData {
  title: string;
  description?: string;
  options: ComparisonOption[];
  criteria: ComparisonCriterion[];
  recommendationSummary: string;
}
export type ComparisonTableBlock = BaseContentBlock<'comparison_table', ComparisonTableBlockData>;

// 9. Cost Breakdown Table
export interface CostBreakdownItem {
  id: string;
  category: string; // "Cố định", "Lập trình", "Duy trì", "Marketing"
  item: string;
  minPrice: number | string;
  maxPrice: number | string;
  period: 'one-time' | 'yearly' | 'monthly' | 'as-needed';
  isMandatory: boolean;
  notes: string;
}
export interface CostBreakdownTableBlockData {
  title: string;
  description?: string;
  currency: string; // "VND"
  items: CostBreakdownItem[];
  totalEstimatedMin: number | string;
  totalEstimatedMax: number | string;
  hiddenCostsWarning?: string[];
}
export type CostBreakdownTableBlock = BaseContentBlock<'cost_breakdown_table', CostBreakdownTableBlockData>;

// 10. Checklist
export interface ChecklistItem {
  id: string;
  label: string;
  hint?: string;
  isRequired: boolean;
  defaultChecked?: boolean;
}
export interface ChecklistGroup {
  groupName: string;
  items: ChecklistItem[];
}
export interface ChecklistBlockData {
  title: string;
  description?: string;
  groups: ChecklistGroup[];
  completionNote?: string;
}
export type ChecklistBlock = BaseContentBlock<'checklist', ChecklistBlockData>;

// 11. Step-by-step
export interface StepItem {
  stepNumber: number;
  title: string;
  action: string;
  timeEstimate?: string;
  proTips?: string[];
  deliverable?: string;
  warning?: string;
}
export interface StepByStepBlockData {
  title: string;
  description?: string;
  totalEstimatedTime?: string;
  steps: StepItem[];
}
export type StepByStepBlock = BaseContentBlock<'step_by_step', StepByStepBlockData>;

// 12. Decision Tree (Yes/No logic)
export interface DecisionTreeNode {
  id: string;
  question: string;
  yesNextNodeId?: string;
  noNextNodeId?: string;
  yesConclusion?: string;
  noConclusion?: string;
  recommendedServiceSlug?: string;
}
export interface DecisionTreeBlockData {
  title: string;
  description?: string;
  startNodeId: string;
  nodes: DecisionTreeNode[];
}
export type DecisionTreeBlock = BaseContentBlock<'decision_tree', DecisionTreeBlockData>;

// 13. Common Implementation Mistakes
export interface MistakeItem {
  id: string;
  title: string;
  mistakeDescription: string;
  consequence: string;
  preventionTip: string;
  severity: 'critical' | 'moderate' | 'minor';
}
export interface CommonMistakesBlockData {
  title?: string; // Mặc định: "Những sai lầm thực tế hay gặp nhất"
  mistakes: MistakeItem[];
}
export type CommonMistakesBlock = BaseContentBlock<'common_mistakes', CommonMistakesBlockData>;

// 14. Warning Box
export interface WarningBoxBlockData {
  level: 'danger' | 'warning' | 'caution';
  title: string;
  content: string;
  actionRequired?: string;
}
export type WarningBoxBlock = BaseContentBlock<'warning_box', WarningBoxBlockData>;

// 15. When NOT to do this
export interface WhenNotToDoScenario {
  situation: string;
  whyNot: string;
  alternativeSuggestion: string;
}
export interface WhenNotToDoBlockData {
  title?: string; // Mặc định: "Khi nào tuyệt đối KHÔNG NÊN làm điều này?"
  scenarios: WhenNotToDoScenario[];
}
export type WhenNotToDoBlock = BaseContentBlock<'when_not_to_do', WhenNotToDoBlockData>;

// 16. Action Plan
export interface ActionPhaseItem {
  timeframe: '24h' | '7_days' | '30_days' | string;
  phaseTitle: string;
  tasks: string[];
  expectedMilestone: string;
}
export interface ActionPlanBlockData {
  title: string;
  goal: string;
  phases: ActionPhaseItem[];
}
export type ActionPlanBlock = BaseContentBlock<'action_plan', ActionPlanBlockData>;

// 17. FAQ (chuẩn schema Q&A)
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
export interface FaqBlockData {
  title?: string; // Mặc định: "Câu hỏi thường gặp (FAQ)"
  items: FaqItem[];
  enableSchemaOrg?: boolean;
}
export type FaqBlock = BaseContentBlock<'faq', FaqBlockData>;

// 18. Sources & Evidence Citations
export interface CitationItem {
  id: string;
  title: string;
  publisherOrAuthor: string;
  url: string;
  datePublishedOrAccessed?: string;
  sourceType: 'official_doc' | 'google_support' | 'legal' | 'industry_report' | 'case_study';
}
export interface SourcesCitationsBlockData {
  title?: string; // Mặc định: "Tài liệu tham khảo & Nguồn kiểm chứng"
  citations: CitationItem[];
}
export type SourcesCitationsBlock = BaseContentBlock<'sources_citations', SourcesCitationsBlockData>;

// 19. Related Services (Contextual CTA)
export interface RelatedServicesCtaBlockData {
  serviceSlug: string;
  badge?: string; // e.g. "Giải pháp tinh gọn LocalMate"
  headline: string;
  description: string;
  deliverables: string[];
  pricingHint?: string;
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}
export type RelatedServicesCtaBlock = BaseContentBlock<'related_services_cta', RelatedServicesCtaBlockData>;

// 20. Related Posts
export interface RelatedPostCard {
  id: number | string;
  title: string;
  slug: string;
  excerpt: string;
  categoryName?: string;
  readingTime?: string;
  intentBadge?: string;
}
export interface RelatedPostsBlockData {
  heading?: string; // Mặc định: "Bài viết cùng chủ đề trong phễu"
  posts: RelatedPostCard[];
}
export type RelatedPostsBlock = BaseContentBlock<'related_posts', RelatedPostsBlockData>;

// 21. Rich Text (Standard Paragraph / Markdown / Tiptap fallback)
export interface RichTextBlockData {
  html: string;
  rawJson?: any;
}
export type RichTextBlock = BaseContentBlock<'rich_text', RichTextBlockData>;

// Discriminated Union of All Content Blocks
export type ContentBlock =
  | TldrBlock
  | KeyTakeawaysBlock
  | ContextBoundaryBlock
  | ProblemSymptomsBlock
  | LocalmatePovBlock
  | EvidenceVerificationBlock
  | RealExampleScenarioBlock
  | ComparisonTableBlock
  | CostBreakdownTableBlock
  | ChecklistBlock
  | StepByStepBlock
  | DecisionTreeBlock
  | CommonMistakesBlock
  | WarningBoxBlock
  | WhenNotToDoBlock
  | ActionPlanBlock
  | FaqBlock
  | SourcesCitationsBlock
  | RelatedServicesCtaBlock
  | RelatedPostsBlock
  | RichTextBlock;

// Complete Structured Article Document
export interface ArticleDocument {
  version: '2.0';
  metadata: {
    id?: number;
    uuid?: string;
    title: string;
    slug: string;
    excerpt: string;
    featuredImageUrl?: string | null;
    status: PostStatus;
    pillarId?: number | string;
    contentType: ArticleContentType;
    articlePurpose: ArticlePurpose;
    searchIntent: SearchIntentLevel | string;
    targetPersona: TargetPersona | string;
    primaryQuestion: string;
    secondaryQuestions?: string[];
    uniqueAngle?: string;
    experienceNotes?: string;
    evidenceRequired?: string[];
    author: ArticleAuthor;
    reviewedBy?: ArticleReviewer;
    firstPublishedAt?: string | null;
    updatedAt: string;
    factCheckedAt?: string | null;
    qualityStatus: ArticleQualityStatus;
    seoStatus: ArticleSeoStatus;
    readingTime: string;
    wordCount: number;
    seo: {
      focusKeyword: string;
      seoTitle: string;
      seoDescription: string;
      canonicalUrl: string;
      robotsIndex: boolean;
      robotsFollow: boolean;
    };
  };
  blocks: ContentBlock[];
}


