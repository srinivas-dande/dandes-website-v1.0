'use client'

import { useState } from 'react'
import { PopupFormModal } from "@/components/dandes/popup-form-modal"

export function BlogPostContent() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <style>{`
        .b3-root {
          font-family: 'DM Sans', sans-serif;
          background: #f5f4f0;
          color: #0f0f0f;
          line-height: 1.75;
          font-size: 17px;
        }
        .b3-root * { box-sizing: border-box; margin: 0; padding: 0; }

        /* HERO */
        .b3-hero {
          background: #0e1e3d;
          color: #fff;
          padding: 80px 0 64px;
          position: relative;
          overflow: hidden;
        }
        .b3-hero-arc {
          position: absolute;
          bottom: -120px; right: -80px;
          width: 460px; height: 460px;
          border-radius: 50%;
          background: rgba(43,74,138,0.22);
          pointer-events: none;
        }
        .b3-hero-arc2 {
          position: absolute;
          top: -60px; left: -60px;
          width: 260px; height: 260px;
          border-radius: 50%;
          background: rgba(196,154,26,0.1);
          pointer-events: none;
        }
        .b3-layout {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
          padding: 0 60px;
        }

        .b3-container {
          max-width: 760px;
          margin: 0;
          padding: 0;
          flex: 1;
        }

        .b3-sidebar {
          width: 320px;
          position: sticky;
          top: 100px;
          align-self: flex-start;
        }

        @media (max-width: 1024px) {
          .b3-layout {
            display: block;
            padding: 0 20px;
          }

          .b3-sidebar {
            display: none;
          }
        }
        .b3-tag {
          display: inline-block;
          background: #2b4a8a;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          padding: 5px 16px;
          border-radius: 2px;
          margin-bottom: 22px;
        }
        .b3-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 5vw, 50px);
          font-weight: 900;
          line-height: 1.12;
          letter-spacing: -0.5px;
          margin-bottom: 18px;
        }
        .b3-hero h1 em { color: #93b4f5; font-style: normal; }
        .b3-hero-sub {
          font-size: 18px;
          color: rgba(255,255,255,0.78);
          max-width: 560px;
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .b3-hero-meta {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          flex-wrap: wrap;
        }
        .b3-read-time {
          background: rgba(255,255,255,0.12);
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 500;
          color: rgba(255,255,255,0.8);
        }

        /* TOC */
        .b3-toc-box {
          background: #f0f3fa;
          border-left: 4px solid #2b4a8a;
          border-radius: 0 6px 6px 0;
          padding: 24px 28px;
          margin: 40px 0;
        }
        .b3-toc-box h3 {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #2b4a8a;
          margin-bottom: 14px;
        }
        .b3-toc-box ol { padding-left: 18px; }
        .b3-toc-box li { font-size: 15px; color: #0e1e3d; margin-bottom: 8px; font-weight: 500; }
        .b3-toc-box li a { color: #0e1e3d; text-decoration: none; }
        .b3-toc-box li a:hover { text-decoration: underline; }

        /* BODY */
        .b3-article-body { padding: 48px 0; }
        .b3-article-body h2 {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: #0f0f0f;
          margin: 52px 0 18px;
          line-height: 1.25;
        }
        .b3-article-body h3 {
          font-size: 19px;
          font-weight: 600;
          color: #2b4a8a;
          margin: 32px 0 12px;
        }
        .b3-article-body p { margin-bottom: 20px; color: #4a4a4a; }
        .b3-article-body strong { color: #0f0f0f; font-weight: 600; }
        .b3-divider { border: none; border-top: 1px solid #e0ddd5; margin: 44px 0; }

        /* FOUNDER NOTE */
        .b3-founder-note {
          background: #0e1e3d;
          color: #fff;
          border-radius: 12px;
          padding: 32px 36px;
          margin: 36px 0;
        }
        .b3-fn-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.12);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .8px;
          text-transform: uppercase;
          margin-bottom: 18px;
          color: rgba(255,255,255,0.85);
        }
        .b3-founder-note h4 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
        }
        .b3-fn-body { font-size: 15px; color: rgba(255,255,255,0.82); line-height: 1.8; }
        .b3-fn-body p { color: rgba(255,255,255,0.82); margin-bottom: 12px; }
        .b3-fn-waves { display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0; }
        .b3-wave {
          display: inline-block;
          background: rgba(255,255,255,0.12);
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
        }
        .b3-fn-sig {
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-top: 1px solid rgba(255,255,255,0.15);
          padding-top: 16px;
        }
        .b3-fn-avatar {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(147,180,245,0.25);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 16px; color: #93b4f5;
          flex-shrink: 0;
        }
        .b3-fn-name { font-size: 14px; font-weight: 600; color: #fff; }
        .b3-fn-title { font-size: 13px; color: rgba(255,255,255,0.6); }

        /* WHY GRID */
        .b3-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 28px 0;
        }
        .b3-why-card {
          background: #fff;
          border: 1px solid #e0ddd5;
          border-radius: 10px;
          padding: 20px 22px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .b3-wc-icon {
          width: 36px; height: 36px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; flex-shrink: 0;
        }
        .b3-why-card h4 { font-size: 15px; font-weight: 700; color: #0e1e3d; margin-bottom: 4px; }
        .b3-why-card p { font-size: 13px; color: #888; margin-bottom: 0; line-height: 1.5; }
        .b3-wc-demand .b3-wc-icon { background: #e0eaf8; color: #0c447c; }
        .b3-wc-growth .b3-wc-icon { background: #e4f5eb; color: #0d4a22; }
        .b3-wc-innovation .b3-wc-icon { background: #eeecfb; color: #3c3489; }
        .b3-wc-salary .b3-wc-icon { background: #fef0d6; color: #633806; }

        /* COMPARE GRID */
        .b3-compare-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin: 28px 0;
          border: 1px solid #e0ddd5;
          border-radius: 10px;
          overflow: hidden;
        }
        .b3-cmp-col { padding: 22px 24px; }
        .b3-cmp-col.old { background: #fff9f0; border-right: 1px solid #e0ddd5; }
        .b3-cmp-col.new { background: #f0f3fa; }
        .b3-cmp-col h4 {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .b3-cmp-col.old h4 { color: #8a4a00; }
        .b3-cmp-col.new h4 { color: #2b4a8a; }
        .b3-cmp-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px; }
        .b3-cmp-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 7px; }
        .b3-cmp-col.old .b3-cmp-dot { background: #e8a555; }
        .b3-cmp-col.new .b3-cmp-dot { background: #5580d4; }
        .b3-cmp-item p { font-size: 14px; color: #4a4a4a; margin-bottom: 0; line-height: 1.5; }

        /* PATH CARDS */
        .b3-path-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin: 28px 0;
        }
        .b3-path-card {
          background: #fff;
          border: 1px solid #e0ddd5;
          border-radius: 10px;
          padding: 20px;
        }
        .b3-p-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 12px;
          display: inline-block;
          margin-bottom: 10px;
        }
        .b3-path-card h4 { font-size: 15px; font-weight: 700; color: #0e1e3d; margin-bottom: 6px; }
        .b3-path-card p { font-size: 14px; color: #888; margin-bottom: 0; line-height: 1.5; }
        .b3-tag-ml { background: #e0eaf8; color: #0c447c; }
        .b3-tag-ai { background: #eeecfb; color: #3c3489; }
        .b3-tag-data { background: #e4f5eb; color: #0d4a22; }
        .b3-tag-mlops { background: #fef0d6; color: #633806; }

        /* ROADMAP */
        .b3-roadmap-wrap { margin: 36px 0; }
        .b3-step-card {
          border-radius: 12px;
          margin-bottom: 16px;
          overflow: hidden;
          border: 1px solid #e0ddd5;
        }
        .b3-step-header { display: flex; align-items: center; gap: 16px; padding: 20px 24px; }
        .b3-step-badge {
          min-width: 44px; height: 44px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 16px;
          flex-shrink: 0;
          font-family: 'Playfair Display', serif;
        }
        .b3-step-title { flex: 1; }
        .b3-step-title h4 { font-size: 17px; font-weight: 700; margin-bottom: 2px; }
        .b3-step-title span { font-size: 13px; font-weight: 400; }
        .b3-step-outcome {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .8px;
          text-transform: uppercase;
          padding: 3px 12px;
          border-radius: 20px;
          white-space: nowrap;
        }
        .b3-step-body { padding: 4px 24px 22px 84px; }
        .b3-step-body ul {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 16px;
        }
        .b3-step-body li {
          font-size: 14px;
          color: #4a4a4a;
          display: flex;
          align-items: baseline;
          gap: 7px;
        }
        .b3-step-body li::before { content: '→'; font-weight: 700; flex-shrink: 0; }
        .b3-step-insight {
          margin-top: 14px;
          font-size: 14px;
          font-weight: 600;
          padding: 10px 14px;
          border-radius: 6px;
        }
        /* Step colours */
        .b3-s1 .b3-step-header { background: #f0faf4; }
        .b3-s1 .b3-step-badge { background: #a8dcbc; color: #0d4a22; }
        .b3-s1 .b3-step-title h4 { color: #0d4a22; }
        .b3-s1 .b3-step-title span { color: #3a8a5a; }
        .b3-s1 .b3-step-outcome { background: #a8dcbc; color: #0d4a22; }
        .b3-s1 .b3-step-body li::before { color: #1a6b3c; }
        .b3-s1 .b3-step-insight { background: #e4f5eb; color: #0d4a22; }

        .b3-s2 .b3-step-header { background: #e8f0fb; }
        .b3-s2 .b3-step-badge { background: #b5d4f4; color: #0c447c; }
        .b3-s2 .b3-step-title h4 { color: #0c447c; }
        .b3-s2 .b3-step-title span { color: #185fa5; }
        .b3-s2 .b3-step-outcome { background: #b5d4f4; color: #0c447c; }
        .b3-s2 .b3-step-body li::before { color: #185fa5; }
        .b3-s2 .b3-step-insight { background: #e4eef8; color: #0c447c; }

        .b3-s3 .b3-step-header { background: #f0edfb; }
        .b3-s3 .b3-step-badge { background: #cec8f4; color: #3c3489; }
        .b3-s3 .b3-step-title h4 { color: #3c3489; }
        .b3-s3 .b3-step-title span { color: #534ab7; }
        .b3-s3 .b3-step-outcome { background: #cec8f4; color: #3c3489; }
        .b3-s3 .b3-step-body li::before { color: #534ab7; }
        .b3-s3 .b3-step-insight { background: #eeecfb; color: #3c3489; }

        .b3-s4 .b3-step-header { background: #fef6e8; }
        .b3-s4 .b3-step-badge { background: #fac775; color: #633806; }
        .b3-s4 .b3-step-title h4 { color: #633806; }
        .b3-s4 .b3-step-title span { color: #854f0b; }
        .b3-s4 .b3-step-outcome { background: #fac775; color: #633806; }
        .b3-s4 .b3-step-body li::before { color: #ba7517; }
        .b3-s4 .b3-step-insight { background: #fef0d6; color: #633806; }

        .b3-s5 .b3-step-header { background: #fef6e8; }
        .b3-s5 .b3-step-badge { background: #fac775; color: #633806; }
        .b3-s5 .b3-step-title h4 { color: #633806; }
        .b3-s5 .b3-step-title span { color: #854f0b; }
        .b3-s5 .b3-step-outcome { background: #fac775; color: #633806; }
        .b3-s5 .b3-step-body li::before { color: #ba7517; }
        .b3-s5 .b3-step-insight { background: #fef0d6; color: #633806; }

        .b3-s6 .b3-step-header { background: #fdeaea; }
        .b3-s6 .b3-step-badge { background: #f09595; color: #791f1f; }
        .b3-s6 .b3-step-title h4 { color: #791f1f; }
        .b3-s6 .b3-step-title span { color: #a32d2d; }
        .b3-s6 .b3-step-outcome { background: #f09595; color: #791f1f; }
        .b3-s6 .b3-step-body li::before { color: #a32d2d; }
        .b3-s6 .b3-step-insight { background: #fce8e8; color: #791f1f; }

        /* MCP highlight row */
        .b3-mcp-row {
          background: #fef3e2;
          border-radius: 6px;
          padding: 4px 10px;
          margin: -4px -10px;
        }
        .b3-mcp-tag {
          display: inline-block;
          background: #fac775;
          color: #633806;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .8px;
          text-transform: uppercase;
          padding: 1px 7px;
          border-radius: 10px;
          margin-left: 6px;
          vertical-align: middle;
        }

        /* MCP EXPLAINER */
        .b3-mcp-explainer {
          background: #fffaf0;
          border: 1.5px solid #fac775;
          border-radius: 10px;
          padding: 18px 22px;
          margin: 16px 0 4px;
        }
        .b3-mcp-explainer h5 { font-size: 14px; font-weight: 700; color: #633806; margin-bottom: 6px; }
        .b3-mcp-explainer p { font-size: 14px; color: #854f0b; margin-bottom: 0; line-height: 1.6; }

        /* CALLOUT */
        .b3-callout {
          background: #0e1e3d;
          color: #fff;
          border-radius: 10px;
          padding: 28px 32px;
          margin: 36px 0;
        }
        .b3-callout strong { color: #93b4f5; }
        .b3-callout p { color: rgba(255,255,255,0.82); margin-bottom: 0; }

        /* QUOTE */
        .b3-quote-block {
          border-left: 4px solid #2b4a8a;
          padding: 18px 24px;
          margin: 36px 0;
          background: #fff;
          border-radius: 0 8px 8px 0;
        }
        .b3-quote-block p {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-style: italic;
          color: #0f0f0f;
          margin-bottom: 6px;
        }
        .b3-quote-block cite { font-size: 13px; color: #888; }

        /* TIMELINE TABLE */
        .b3-timeline-table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #e0ddd5;
        }
        .b3-timeline-table thead tr { background: #0e1e3d; }
        .b3-timeline-table thead th {
          padding: 14px 20px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .8px;
          text-transform: uppercase;
          color: #fff;
          text-align: left;
        }
        .b3-timeline-table tbody tr { background: #fff; border-bottom: 1px solid #e0ddd5; }
        .b3-timeline-table tbody tr:last-child { border-bottom: none; }
        .b3-timeline-table tbody tr:nth-child(even) { background: #f8f8f6; }
        .b3-timeline-table tbody td { padding: 14px 20px; font-size: 15px; color: #4a4a4a; }
        .b3-timeline-table tbody td:first-child { font-weight: 600; color: #0f0f0f; }
        .b3-tl-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          padding: 3px 12px;
          border-radius: 12px;
        }
        .b3-tl-fast { background: #e4f5eb; color: #0d4a22; }
        .b3-tl-mid { background: #e0eaf8; color: #0c447c; }
        .b3-tl-std { background: #fef0d6; color: #633806; }

        /* PROJECTS */
        .b3-projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 28px 0;
        }
        .b3-proj-card {
          background: #fff;
          border: 1px solid #e0ddd5;
          border-radius: 10px;
          padding: 18px 20px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .b3-proj-num {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: #0e1e3d;
          color: #fff;
          font-weight: 700; font-size: 14px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .b3-proj-card h5 { font-size: 15px; font-weight: 600; color: #0f0f0f; margin-bottom: 4px; }
        .b3-proj-card p { font-size: 13px; color: #888; margin-bottom: 0; }

        /* MISTAKES */
        .b3-mistake-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin: 28px 0; }
        .b3-mistake-card {
          background: #fff;
          border: 1px solid #e0ddd5;
          border-radius: 10px;
          padding: 20px 22px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .b3-m-icon {
          width: 40px; height: 40px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; flex-shrink: 0;
          background: #fde8e8; color: #8a1a1a;
        }
        .b3-mistake-card h4 { font-size: 15px; font-weight: 600; margin-bottom: 4px; color: #8a1a1a; }
        .b3-mistake-card p { font-size: 14px; color: #888; margin-bottom: 0; }

        /* SKILLS AUDIT */
        .b3-skills-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin: 28px 0;
        }
        .b3-skill-group {
          background: #fff;
          border: 1px solid #e0ddd5;
          border-radius: 10px;
          padding: 20px;
        }
        .b3-skill-group h4 {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .b3-skill-group.keep h4 { color: #0d4a22; }
        .b3-skill-group.add h4 { color: #2b4a8a; }
        .b3-skill-group ul { list-style: none; padding: 0; }
        .b3-skill-group li {
          font-size: 14px;
          color: #4a4a4a;
          padding: 6px 0;
          display: flex;
          align-items: baseline;
          gap: 8px;
          border-bottom: 1px solid #e0ddd5;
        }
        .b3-skill-group li:last-child { border-bottom: none; }
        .b3-skill-group.keep li::before { content: '✓'; color: #1a6b3c; font-weight: 700; flex-shrink: 0; }
        .b3-skill-group.add li::before { content: '+'; color: #2b4a8a; font-weight: 700; flex-shrink: 0; }

        /* INTERNAL LINKS */
        .b3-internal-links {
          background: #f0f3fa;
          border-radius: 10px;
          padding: 22px 26px;
          margin: 28px 0;
        }
        .b3-internal-links h4 {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #0e1e3d;
          margin-bottom: 12px;
        }
        .b3-il-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .b3-il-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #0e1e3d;
          font-weight: 500;
          text-decoration: none;
          padding: 6px 0;
        }
        .b3-il-link:hover { text-decoration: underline; }
        .b3-il-link::before { content: '→'; color: #2b4a8a; font-weight: 700; }

        /* FAQ */
        .b3-faq-wrap { margin: 28px 0; }
        .b3-faq-item {
          background: #fff;
          border: 1px solid #e0ddd5;
          border-radius: 10px;
          padding: 22px 24px;
          margin-bottom: 12px;
        }
        .b3-faq-q {
          font-size: 16px;
          font-weight: 700;
          color: #0e1e3d;
          margin-bottom: 10px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .b3-faq-q::before {
          content: 'Q';
          background: #0e1e3d;
          color: #fff;
          min-width: 24px; height: 24px;
          border-radius: 50%;
          font-size: 12px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .b3-faq-a { font-size: 15px; color: #4a4a4a; padding-left: 34px; line-height: 1.7; }

        /* CTA */
        .b3-cta-box {
          background: #0e1e3d;
          border-radius: 16px;
          padding: 44px 40px;
          margin: 56px 0;
          text-align: center;
          color: #fff;
        }
        .b3-cta-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          margin-bottom: 10px;
        }
        .b3-cta-box h2 {
          font-family: 'Playfair Display', serif;
          font-size: 30px;
          margin-bottom: 6px;
          color: #fff;
          margin-top: 0;
        }
        .b3-cta-sub { font-size: 15px; color: rgba(255,255,255,0.65); margin-bottom: 24px; }
        .b3-webinar-list {
          display: inline-flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
          margin-bottom: 28px;
        }
        .b3-webinar-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          color: rgba(255,255,255,0.88);
        }
        .b3-webinar-item::before {
          content: '✓';
          background: #1a6b3c;
          color: #fff;
          width: 20px; height: 20px;
          border-radius: 50%;
          font-size: 11px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .b3-cta-btn {
          display: inline-block;
          background: #2b4a8a;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          padding: 16px 44px;
          border-radius: 6px;
          text-decoration: none;
          letter-spacing: 0.3px;
          border: none;
          cursor: pointer;
        }
        .b3-cta-btn:hover { background: #1e3870; }
        .b3-cta-note { font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 12px; }

        /* AUTHOR */
        .b3-author-box {
          background: #fff;
          border: 1px solid #e0ddd5;
          border-radius: 12px;
          padding: 28px 32px;
          margin: 48px 0;
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .b3-author-avatar {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: #0e1e3d;
          color: #fff;
          font-family: 'Playfair Display', serif;
          font-size: 22px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .b3-author-info h4 { font-size: 17px; font-weight: 700; color: #0f0f0f; margin-bottom: 2px; }
        .b3-author-title { font-size: 14px; color: #2b4a8a; font-weight: 600; margin-bottom: 10px; }
        .b3-author-info p { font-size: 14px; color: #4a4a4a; margin-bottom: 0; }
        .b3-author-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
        .b3-author-tag {
          background: #f0f3fa;
          border: 1px solid #b5d4f4;
          color: #0e1e3d;
          font-size: 13px; font-weight: 600;
          padding: 3px 12px;
          border-radius: 20px;
        }

        /* TAGS */
        .b3-tags-row { display: flex; flex-wrap: wrap; gap: 8px; margin: 36px 0 20px; }
        .b3-kw-tag {
          background: #fff;
          border: 1px solid #e0ddd5;
          color: #4a4a4a;
          font-size: 13px;
          padding: 4px 14px;
          border-radius: 20px;
        }

        /* RESPONSIVE */
        @media (max-width: 600px) {
          .b3-why-grid, .b3-compare-grid, .b3-path-grid,
          .b3-projects-grid, .b3-skills-cols, .b3-il-grid { grid-template-columns: 1fr; }
          .b3-cmp-col.old { border-right: none; border-bottom: 1px solid #e0ddd5; }
          .b3-step-body ul { grid-template-columns: 1fr; }
          .b3-cta-box { padding: 32px 20px; }
          .b3-author-box { flex-direction: column; }
          .b3-step-outcome { display: none; }
          .b3-founder-note { padding: 24px 22px; }
        }
      `}</style>

      <div className="b3-root">
        <div className="b3-layout">

        <div className="b3-container">

          

          <div className="b3-article-body">

            <p>
              If you're a software engineer with 5, 10, or 15 years of experience, you've probably been watching the AI wave roll in and wondering: <em>is this the right time to pivot?</em> Is it too early? Too late? Too risky?
            </p>
            <p>
              Here's the truth: <strong>2026 is the single best year in history for a software engineer to transition into AI/ML</strong> — because the tooling has matured, the demand is at an all-time high, and companies desperately need engineers who understand both worlds. Not just researchers. Not just data scientists. Engineers who can ship.
            </p>

            {/* FOUNDER NOTE */}
            <div className="b3-founder-note" id="founder">
              <div className="b3-fn-badge">👨‍🏫 From the Founder</div>
              <h4>A Note From Srinivas Dande</h4>
              <div className="b3-fn-body">
                <p>After 20+ years in software engineering, I have seen multiple technology shifts:</p>
                <div className="b3-fn-waves">
                  {['Web Applications', 'Mobile', 'Cloud', 'Microservices', 'AI'].map(w => (
                    <span key={w} className="b3-wave">{w}</span>
                  ))}
                </div>
                <p style={{ marginTop: 14 }}>AI is the next major shift. And the engineers who succeed are not always the smartest in the room.</p>
                <p style={{ marginBottom: 0 }}><strong style={{ color: '#93b4f5' }}>They are the ones who adapt first.</strong></p>
              </div>
              <div className="b3-fn-sig">
                <div className="b3-fn-avatar">SD</div>
                <div>
                  <div className="b3-fn-name">Srinivas Dande</div>
                  <div className="b3-fn-title">Founder &amp; Lead Trainer, Dandes Academy</div>
                </div>
              </div>
            </div>

            {/* WHY NOW */}
            <hr className="b3-divider" id="why-now" />
            <h2>Why Engineers Are Moving to AI</h2>
            <p>This isn't a trend. It's a structural shift in what software engineering means. Here's why thousands of experienced engineers are making the move right now:</p>

            <div className="b3-why-grid">
              <div className="b3-why-card b3-wc-demand">
                <div className="b3-wc-icon">📈</div>
                <div>
                  <h4>Higher Demand</h4>
                  <p>AI engineering roles are growing faster than any other engineering discipline. Demand far outstrips supply across India and globally.</p>
                </div>
              </div>
              <div className="b3-why-card b3-wc-growth">
                <div className="b3-wc-icon">🌿</div>
                <div>
                  <h4>Better Career Growth</h4>
                  <p>AI engineers move into senior, lead, and architect roles faster. The field is young enough that experienced engineers rise quickly.</p>
                </div>
              </div>
              <div className="b3-why-card b3-wc-innovation">
                <div className="b3-wc-icon">⚡</div>
                <div>
                  <h4>Faster Innovation</h4>
                  <p>AI projects ship features in weeks that would take years in traditional engineering. The pace of impact is unlike anything else in tech right now.</p>
                </div>
              </div>
              <div className="b3-why-card b3-wc-salary">
                <div className="b3-wc-icon">💰</div>
                <div>
                  <h4>Better Salary Potential</h4>
                  <p>Engineers with production AI skills command significant salary premiums. The gap between AI and non-AI engineers widens every quarter.</p>
                </div>
              </div>
            </div>

            <div className="b3-quote-block">
              <p>"We're not looking for people who know AI theory. We need engineers who can build, deploy, and maintain AI systems at scale. That's a rare combination."</p>
              <cite>— Head of Engineering, Series C AI Startup, Bengaluru (2026)</cite>
            </div>

            {/* WHAT CHANGES */}
            <hr className="b3-divider" id="what-changes" />
            <h2>What Actually Changes — And What Doesn't</h2>
            <p>The biggest fear engineers have is that transitioning to AI means starting from zero. It doesn't. Here's an honest breakdown:</p>

            <div className="b3-compare-grid">
              <div className="b3-cmp-col old">
                <h4>Stays the Same</h4>
                {[
                  { label: 'System design thinking', desc: 'designing for scale, reliability, and maintainability is still the core skill' },
                  { label: 'API design & REST principles', desc: 'AI systems are built on APIs just like everything else' },
                  { label: 'Debugging mindset', desc: 'finding why something doesn\'t work is still the most valuable skill you have' },
                  { label: 'Version control & CI/CD', desc: 'Git, Docker, pipelines — all carry over directly to MLOps' },
                  { label: 'Stakeholder communication', desc: 'if anything, this matters more in AI projects' },
                ].map(item => (
                  <div key={item.label} className="b3-cmp-item">
                    <div className="b3-cmp-dot" />
                    <p><strong>{item.label}</strong> — {item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="b3-cmp-col new">
                <h4>What You Add</h4>
                {[
                  { label: 'Statistics & probability', desc: 'understanding model behaviour, evaluation metrics, and uncertainty' },
                  { label: 'ML model lifecycle', desc: 'training, evaluation, deployment, monitoring, and retraining loops' },
                  { label: 'LLMs & Generative AI', desc: 'working with foundation models, RAG pipelines, and prompt engineering' },
                  { label: 'Agentic AI & MCP', desc: 'building autonomous agents that use tools and integrate via MCP' },
                  { label: 'Vector databases', desc: 'embeddings, semantic search — the data layer of modern AI' },
                ].map(item => (
                  <div key={item.label} className="b3-cmp-item">
                    <div className="b3-cmp-dot" />
                    <p><strong>{item.label}</strong> — {item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ROLES */}
            <hr className="b3-divider" id="roles" />
            <h2>Which AI Role Is Right for You?</h2>
            <p>Not all AI roles require the same starting point. Based on your current background, here's how to think about which path fits best:</p>

            <div className="b3-path-grid">
              <div className="b3-path-card">
                <span className="b3-p-tag b3-tag-ml">Best fit for backend engineers</span>
                <h4>ML Engineer</h4>
                <p>Build and maintain ML pipelines, model APIs, and training infrastructure. Most natural path for experienced software engineers.</p>
              </div>
              <div className="b3-path-card">
                <span className="b3-p-tag b3-tag-ai">Best fit for full-stack / API engineers</span>
                <h4>LLM / AI Application Engineer</h4>
                <p>Build production applications powered by LLMs — RAG systems, AI agents, copilots, MCP-integrated tools. Fastest growing role in 2026.</p>
              </div>
              <div className="b3-path-card">
                <span className="b3-p-tag b3-tag-data">Best fit for data-heavy engineers</span>
                <h4>ML Pipeline Engineer</h4>
                <p>If you've worked with Kafka, Spark, or data warehouses, ML pipeline engineering is a natural extension.</p>
              </div>
              <div className="b3-path-card">
                <span className="b3-p-tag b3-tag-mlops">Best fit for DevOps / platform engineers</span>
                <h4>MLOps / AI Platform Engineer</h4>
                <p>Build internal infrastructure for AI — model registries, serving clusters, monitoring dashboards. Your Kubernetes experience is worth gold here.</p>
              </div>
            </div>

            {/* ROADMAP */}
            <hr className="b3-divider" id="roadmap" />
            <h2>The Dandes 6-Step AI/ML Roadmap</h2>
            <p>Whichever role you're targeting, the learning path follows the same structured progression. Designed specifically for working software engineers — respecting your existing knowledge and getting you to job-ready efficiently.</p>

            <div className="b3-roadmap-wrap">

              {/* Step 1 */}
              <div className="b3-step-card b3-s1">
                <div className="b3-step-header">
                  <div className="b3-step-badge">1</div>
                  <div className="b3-step-title">
                    <h4>Build Strong Foundation</h4>
                    <span>Python · SQL · Mathematics · EDA</span>
                  </div>
                  <span className="b3-step-outcome">Non-negotiable</span>
                </div>
                <div className="b3-step-body">
                  <ul>
                    {['Python Fundamentals', 'Python for ML & Data Science', 'SQL & Data Modeling', 'Mathematics for ML', 'Exploratory Data Analysis', 'Statistics for ML'].map(i => <li key={i}>{i}</li>)}
                  </ul>
                  <p className="b3-step-insight">As a software engineer, Python is your easiest hurdle — most pick it up in under 2 weeks. Invest your real energy in statistics and math. That's what separates engineers who truly understand AI from those who just call APIs.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="b3-step-card b3-s2">
                <div className="b3-step-header">
                  <div className="b3-step-badge">2</div>
                  <div className="b3-step-title">
                    <h4>Become a Strong ML Engineer</h4>
                    <span>ML · Deep Learning · NLP</span>
                  </div>
                  <span className="b3-step-outcome">Build prediction systems</span>
                </div>
                <div className="b3-step-body">
                  <ul>
                    {['Machine Learning Foundation', 'Advanced Machine Learning', 'Deep Learning', 'Advanced Deep Learning', 'Natural Language Processing', 'Model Evaluation & Selection'].map(i => <li key={i}>{i}</li>)}
                  </ul>
                  <p className="b3-step-insight">By the end of this step you can build real ML systems — churn prediction, fraud detection, recommendation engines. Your engineering background means you'll build them production-ready from day one.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="b3-step-card b3-s3">
                <div className="b3-step-header">
                  <div className="b3-step-badge">3</div>
                  <div className="b3-step-title">
                    <h4>Modern AI with Generative AI</h4>
                    <span>LLMs · RAG · Fine-Tuning · Chatbots</span>
                  </div>
                  <span className="b3-step-outcome">Understand modern AI architecture</span>
                </div>
                <div className="b3-step-body">
                  <ul>
                    {['Foundations of Generative AI', 'Prompt Engineering Techniques', 'Working with OpenAI & HuggingFace', 'Retrieval Augmented Generation (RAG)', 'LLMs & Fine-Tuning', 'Building AI Assistants & Chatbots'].map(i => <li key={i}>{i}</li>)}
                  </ul>
                  <p className="b3-step-insight">Wrapping LLMs into production services, handling context windows, building RAG retrieval pipelines — all of this maps directly to API patterns you already know.</p>
                </div>
              </div>

              {/* Step 4 — MCP */}
              <div className="b3-step-card b3-s4">
                <div className="b3-step-header">
                  <div className="b3-step-badge">4</div>
                  <div className="b3-step-title">
                    <h4>Modern AI with Agentic AI</h4>
                    <span>AI Agents · MCP · LangChain · LangGraph</span>
                  </div>
                  <span className="b3-step-outcome">Real-world agent use cases</span>
                </div>
                <div className="b3-step-body">
                  <ul>
                    <li>AI Agents Architecture</li>
                    <li>Tool Calling &amp; Function Calling</li>
                    <li className="b3-mcp-row">
                      <strong style={{ color: '#633806' }}>MCP — Model Context Protocol</strong>
                      <span className="b3-mcp-tag">New 2026</span>
                    </li>
                    <li>Multi-Step Reasoning Systems</li>
                    <li>AI Workflow Automation</li>
                    <li>Building Autonomous AI Assistants</li>
                    <li>Agent Frameworks — LangChain / LangGraph</li>
                  </ul>
                  <div className="b3-mcp-explainer">
                    <h5>Why MCP matters for software engineers</h5>
                    <p>Model Context Protocol (MCP) is the standard that lets AI agents connect to external tools, APIs, and data sources — the REST protocol of the AI agent world. You already understand API contracts and service interfaces. MCP is that same thinking, applied to AI agent integration.</p>
                  </div>
                  <p className="b3-step-insight">AI agents are the new microservices. Your distributed systems experience makes you exceptionally well-suited here — you already think in orchestration patterns.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="b3-step-card b3-s5">
                <div className="b3-step-header">
                  <div className="b3-step-badge">5</div>
                  <div className="b3-step-title">
                    <h4>Production &amp; MLOps</h4>
                    <span>Deployment · Docker · CI/CD · Monitoring</span>
                  </div>
                  <span className="b3-step-outcome">Scalable production ML</span>
                </div>
                <div className="b3-step-body">
                  <ul>
                    {['Model Deployment Strategies', 'REST APIs for ML Models', 'Docker & Containerization', 'CI/CD for ML Systems', 'Model Monitoring & Logging', 'Scalable Production ML Systems'].map(i => <li key={i}>{i}</li>)}
                  </ul>
                  <p className="b3-step-insight">This is where software engineers sprint ahead of everyone else. You've shipped Dockerised services and built CI/CD pipelines. MLOps is your natural home — you just need to apply it to AI systems.</p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="b3-step-card b3-s6">
                <div className="b3-step-header">
                  <div className="b3-step-badge">6</div>
                  <div className="b3-step-title">
                    <h4>Capstone Project &amp; Interview Prep</h4>
                    <span>End-to-End AI System · Resume · Mock Interviews</span>
                  </div>
                  <span className="b3-step-outcome">Industry-ready</span>
                </div>
                <div className="b3-step-body">
                  <ul>
                    <li>Build a complete end-to-end AI system</li>
                    <li>Data → Model → Deployment → Application</li>
                    <li>System design for AI systems</li>
                    <li>Resume building for AI roles</li>
                    <li>Mock technical interviews</li>
                    <li>Portfolio &amp; GitHub optimisation</li>
                  </ul>
                  <p className="b3-step-insight">You graduate with a production-grade AI project on GitHub, a tailored AI engineer resume, and the confidence to crack technical interviews. You are industry-ready.</p>
                </div>
              </div>

            </div>

            <div className="b3-callout">
              <p><strong>The Dandes Difference:</strong> Our program is built for working professionals with 10+ years of experience. Weekend and evening batches mean you don't sacrifice your current income. Mentors who've made this exact transition guide every cohort from Step 1 to placement.</p>
            </div>

            {/* TIMELINE */}
            <hr className="b3-divider" id="timeline" />
            <h2>Typical Transition Timeline by Background</h2>
            <p>Your starting point determines how long the journey takes. Here's a realistic guide based on the engineers we've trained at Dandes Academy:</p>

            <table className="b3-timeline-table">
              <thead>
                <tr>
                  <th>Your Background</th>
                  <th>Transition Time</th>
                  <th>Speed</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Data Engineer</td><td>4 – 6 Months</td><td><span className="b3-tl-badge b3-tl-fast">Fastest</span></td></tr>
                <tr><td>DevOps / Platform Engineer</td><td>5 – 7 Months</td><td><span className="b3-tl-badge b3-tl-fast">Fast</span></td></tr>
                <tr><td>Full Stack Developer</td><td>6 – 8 Months</td><td><span className="b3-tl-badge b3-tl-mid">Moderate</span></td></tr>
                <tr><td>Java Developer</td><td>6 – 9 Months</td><td><span className="b3-tl-badge b3-tl-mid">Moderate</span></td></tr>
                <tr><td>Frontend / Mobile Engineer</td><td>8 – 10 Months</td><td><span className="b3-tl-badge b3-tl-std">Standard</span></td></tr>
              </tbody>
            </table>

            {/* PROJECTS */}
            <hr className="b3-divider" id="projects" />
            <h2>Recommended AI Portfolio Projects</h2>
            <p>Certifications get you past ATS. Projects get you hired. Here are the 5 projects that consistently impress AI engineering hiring managers in 2026:</p>

            <div className="b3-projects-grid">
              {[
                { n: 1, title: 'Customer Churn Prediction', desc: 'End-to-end ML pipeline with feature engineering, model training, and a REST API for inference.' },
                { n: 2, title: 'Enterprise RAG Chatbot', desc: 'Document ingestion, vector DB, LLM integration, and a production-grade API backend.' },
                { n: 3, title: 'AI Resume Screener', desc: 'NLP-powered system that ranks candidates against job descriptions using embeddings.' },
                { n: 4, title: 'Recommendation Engine', desc: 'Collaborative filtering system deployed with a real-time inference API.' },
                { n: 5, title: 'Customer Support AI Agent', desc: 'Autonomous agent with tool calling, MCP integration, and multi-step reasoning.' },
              ].map(p => (
                <div key={p.n} className="b3-proj-card">
                  <div className="b3-proj-num">{p.n}</div>
                  <div>
                    <h5>{p.title}</h5>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* MISTAKES */}
            <hr className="b3-divider" id="mistakes" />
            <h2>5 Mistakes Engineers Make During the AI Transition</h2>
            <div className="b3-mistake-grid">
              {[
                { title: 'Mistake 1: Treating it like learning a new framework', desc: 'Transitioning to AI/ML is a knowledge domain shift — it requires new mental models around probability, uncertainty, and statistical thinking, not just new syntax.' },
                { title: 'Mistake 2: Starting with deep learning before mastering ML basics', desc: 'Engineers who skip classical ML and statistics end up unable to choose the right model, tune it, or diagnose why it\'s failing. Steps 1 and 2 are not optional.' },
                { title: 'Mistake 3: Collecting certifications instead of building projects', desc: 'One well-documented, end-to-end AI project on GitHub beats eleven Coursera certificates. Hiring managers look at what you\'ve shipped, not what you\'ve certified.' },
                { title: 'Mistake 4: Learning in isolation without structured mentorship', desc: 'AI/ML has thousands of rabbit holes. Without a guide, engineers spend months on topics that won\'t move the needle. Structured programs compress this dramatically.' },
                { title: 'Mistake 5: Waiting until they feel "ready"', desc: 'The engineers who successfully transitioned didn\'t feel ready when they started. The window is open now. Every month of delay is a month of salary gap and opportunity cost.' },
              ].map(m => (
                <div key={m.title} className="b3-mistake-card">
                  <div className="b3-m-icon">✗</div>
                  <div>
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* SKILLS AUDIT */}
            <hr className="b3-divider" id="skills" />
            <h2>Your Skills Audit: What to Keep vs What to Learn</h2>
            <p>Everything in the "keep" column is capital you bring into your AI career. Everything in the "learn" column is covered in the Dandes 6-step roadmap above.</p>

            <div className="b3-skills-cols">
              <div className="b3-skill-group keep">
                <h4>Skills You Keep &amp; Leverage</h4>
                <ul>
                  {['Software system design', 'REST API development', 'Database design & SQL', 'Docker & containerization', 'CI/CD pipelines', 'Git & version control', 'Debugging & problem solving', 'Agile & team collaboration', 'Production ownership mindset'].map(s => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="b3-skill-group add">
                <h4>Skills You Add via Dandes</h4>
                <ul>
                  {['Statistics & probability', 'Python for ML & data science', 'Machine learning algorithms', 'Deep learning & NLP', 'LLMs & Generative AI', 'RAG & vector databases', 'AI agents & MCP', 'MLOps & model monitoring', 'AI system design patterns'].map(s => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* INTERNAL LINKS */}
            <div className="b3-internal-links">
              <h4>Continue Reading</h4>
              <div className="b3-il-grid">
                {['Will AI Replace Software Engineers?', 'Java Developer to AI Engineer', 'AI Engineer Roadmap', 'RAG Explained for Engineers', 'MCP Explained', 'AI Engineer vs Data Scientist'].map(link => (
                  <a key={link} href="#" className="b3-il-link">{link}</a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <hr className="b3-divider" id="faq" />
            <h2>Frequently Asked Questions</h2>
            <div className="b3-faq-wrap">
              {[
                { q: 'Can software engineers become AI engineers?', a: 'Absolutely — and software engineers are among the best positioned to do so. You already understand systems, APIs, debugging, and production environments. The AI/ML knowledge layer can be added on top of that foundation in a structured, part-time program.' },
                { q: 'Is AI engineering a good career in 2026?', a: 'Yes. AI engineering is the fastest-growing engineering discipline in 2026. Demand consistently outstrips supply across India and globally, and engineers with production AI experience command significant salary premiums over peers without AI skills.' },
                { q: 'Do I need Mathematics for AI?', a: 'Yes — but not at a PhD level. A working understanding of statistics, probability, linear algebra, and calculus is sufficient. The Dandes program covers exactly the math you need with a practical engineering lens, not a pure theory approach.' },
                { q: 'How long does the transition take?', a: 'It depends on your background. Data engineers and DevOps engineers typically transition in 4–7 months. Java and full-stack developers typically take 6–9 months studying part-time on weekends and evenings while continuing in their current role.' },
                { q: 'Which AI role is best for Java developers?', a: 'ML Engineer and LLM Application Engineer are the most natural fits. Your Spring Boot, microservices, and system design experience maps directly to building AI inference APIs, agent orchestration systems, and MLOps infrastructure.' },
                { q: 'Is Python difficult for Java developers?', a: 'No. Python is significantly simpler than Java in terms of syntax. Most Java developers become productive in Python within 2 weeks. The Dandes program treats Python as a second language for engineers — we skip the basics and focus on ML and data science patterns that matter.' },
              ].map(faq => (
                <div key={faq.q} className="b3-faq-item">
                  <div className="b3-faq-q">{faq.q}</div>
                  <div className="b3-faq-a">{faq.a}</div>
                </div>
              ))}
            </div>

          </div>

          {/* CTA */}
          <div className="b3-cta-box">
            <div className="b3-cta-eyebrow">🎯 Free Webinar</div>
            <h2>AI Career Switch Blueprint</h2>
            <div className="b3-cta-sub">Live session with Srinivas Dande — Founder, Dandes Academy</div>
            <div className="b3-webinar-list">
              {['The Complete AI Career Roadmap', 'Skills Required for AI Roles in 2026', 'Career Opportunities & Role Breakdown', 'Salary Trends & Market Demand', 'Live Q&A with the Founder'].map(item => (
                <div key={item} className="b3-webinar-item">{item}</div>
              ))}
            </div>
            <br />
            <button className="b3-cta-btn" onClick={() => setModalOpen(true)}>
              Register Now →
            </button>
            <div className="b3-cta-note">Free to attend · Limited seats · Recording available for registered attendees</div>
          </div>

          {/* AUTHOR */}
          <div className="b3-author-box">
            <div className="b3-author-avatar">SD</div>
            <div className="b3-author-info">
              <h4>Srinivas Dande</h4>
              <div className="b3-author-title">Founder &amp; Lead Trainer — Dandes Academy</div>
              <p>20+ years in software engineering across enterprise systems, cloud architecture, and AI. Trained 500+ working professionals in AI/ML. Specialises in helping experienced engineers make structured, high-ROI career transitions into AI roles.</p>
              <div className="b3-author-tags">
                <span className="b3-author-tag">✓ 20+ Years Experience</span>
                <span className="b3-author-tag">✓ AI/ML Mentor</span>
                <span className="b3-author-tag">✓ System Design Trainer</span>
              </div>
            </div>
          </div>

          <div className="b3-tags-row">
            {['#AICareerSwitch', '#SoftwareEngineerToAI', '#AICareerRoadmap', '#MLEngineer2026', '#MCPProtocol', '#DandesAcademy'].map(tag => (
              <span key={tag} className="b3-kw-tag">{tag}</span>
            ))}
          </div>

        </div>
        <div className="b3-sidebar">
  <div className="b3-toc-box">
    <h3>In this article</h3>
    <ol>
      <li><a href="#founder">A Note From Srinivas Dande</a></li>
      <li><a href="#why-now">Why Engineers Are Moving to AI</a></li>
      <li><a href="#what-changes">What Actually Changes — And What Doesn't</a></li>
      <li><a href="#roles">Which AI Role Is Right for You?</a></li>
      <li><a href="#roadmap">The Dandes 6-Step AI/ML Roadmap</a></li>
      <li><a href="#timeline">Typical Transition Timeline by Background</a></li>
      <li><a href="#projects">Recommended AI Portfolio Projects</a></li>
      <li><a href="#mistakes">5 Mistakes Engineers Make During Transition</a></li>
      <li><a href="#skills">Your Skills Audit: Keep vs Learn</a></li>
      <li><a href="#faq">Frequently Asked Questions</a></li>
    </ol>
  </div>
</div>
        </div>
      </div>

      {modalOpen && (
        <PopupFormModal onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}