import React, { useState } from 'react';
import { Workflow, ArrowRight, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { WORKFLOW_EXAMPLES, WorkflowExample } from '../../data/homepageCopyData';

interface HomeWorkflowExamplesSectionProps {
  onOpenConsultForm?: (context?: string) => void;
}

export const HomeWorkflowExamplesSection: React.FC<HomeWorkflowExamplesSectionProps> = ({ onOpenConsultForm }) => {
  const [activeTab, setActiveTab] = useState<string>(WORKFLOW_EXAMPLES[0].id);

  const currentExample = WORKFLOW_EXAMPLES.find((e) => e.id === activeTab) || WORKFLOW_EXAMPLES[0];

  return (
    <section id="vi-du-trien-khai" className="py-16 md:py-20 bg-[#ffffff] border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1f5f9] text-[#475569] text-xs font-semibold uppercase tracking-wider mb-3">
            <Workflow size={14} className="text-[#0d7647]" />
            <span>Ví dụ thực tế</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4"
            style={{ textWrap: 'pretty' }}
          >
            Một vài cách Localmate có thể hỗ trợ tiệm của bạn
          </h2>
          <p className="text-base sm:text-lg text-[#475569]" style={{ textWrap: 'pretty' }}>
            Chúng tôi gắn nhãn minh bạch đây là các <strong>Workflow minh họa</strong> để bạn dễ hình dung sự thay đổi giữa cách làm cũ và giải pháp số tinh gọn.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {WORKFLOW_EXAMPLES.map((item: WorkflowExample) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all min-h-[44px] ${
                  isActive
                    ? 'bg-[#0d7647] text-white shadow-sm font-semibold'
                    : 'bg-[#f8fafc] text-[#475569] hover:bg-[#edf7f1] hover:text-[#0d7647] border border-[#e2e8f0]'
                }`}
              >
                {item.industry}
              </button>
            );
          })}
        </div>

        {/* Selected Example Detail Card */}
        <div className="bg-[#fbfcfb] border border-[#e2e8f0] rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* Top metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#e2e8f0]">
            <div>
              <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-[#edf7f1] text-[#0d7647] border border-[#cbe8d5] mr-2">
                {currentExample.badge}
              </span>
              <span className="text-base font-bold text-[#0f172a]">
                {currentExample.industry}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {currentExample.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs px-2.5 py-0.5 rounded-full bg-[#ffffff] text-[#475569] border border-[#e2e8f0]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Problem Statement */}
          <div className="mb-6 p-4 rounded-xl bg-[#ffffff] border border-[#e2e8f0]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1">
              Vấn đề thực tế gặp phải:
            </div>
            <p className="text-sm sm:text-base text-[#0f172a] font-medium" style={{ textWrap: 'pretty' }}>
              {currentExample.problem}
            </p>
          </div>

          {/* Before vs After Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {/* Old way */}
            <div className="bg-[#ffffff] border border-[#fee2e2] rounded-xl p-5">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm mb-3">
                <XCircle size={18} />
                <span>Cách làm thủ công cũ:</span>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed" style={{ textWrap: 'pretty' }}>
                {currentExample.oldWay}
              </p>
            </div>

            {/* Localmate way */}
            <div className="bg-[#ffffff] border border-[#bbf7d0] rounded-xl p-5">
              <div className="flex items-center gap-2 text-[#0d7647] font-bold text-sm mb-3">
                <CheckCircle2 size={18} />
                <span>Khi kết nối qua Localmate:</span>
              </div>
              <p className="text-sm text-[#334155] font-medium leading-relaxed" style={{ textWrap: 'pretty' }}>
                {currentExample.localmateWay}
              </p>
            </div>
          </div>

          {/* Result summary callout */}
          <div className="p-4 rounded-xl bg-[#edf7f1] border border-[#cbe8d5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-2.5">
              <Sparkles size={18} className="text-[#0d7647] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase text-[#0d7647] block">Hiệu quả đem lại:</span>
                <p className="text-sm text-[#0f172a] font-medium" style={{ textWrap: 'pretty' }}>
                  {currentExample.resultSummary}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onOpenConsultForm && onOpenConsultForm(`Tư vấn áp dụng workflow: ${currentExample.industry}`)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0d7647] hover:bg-[#0b633c] text-white text-xs sm:text-sm font-semibold whitespace-nowrap shadow-sm transition-all"
            >
              <span>Áp dụng cho tiệm tôi</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
