'use client'

import { useState } from 'react'
import { PopupFormModal } from "@/components/dandes/popup-form-modal"

export function BlogPostContent() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <style>{`
        .b2-root {
          font-family: 'DM Sans', sans-serif;
          background: #f4f6f2;
          color: #0f0f0f;
          line-height: 1.75;
          font-size: 17px;
        }
        .b2-root * { box-sizing: border-box; margin: 0; padding: 0; }

        /* HERO */
        .b2-hero {
          background: #0d2d1a;
          color: #fff;
          padding: 80px 0 70px;
          position: relative;
          overflow: hidden;
        }
        .b2-hero-stripe {
          position: absolute;
          top: 0; right: 0;
          width: 340px; height: 100%;
          background: rgba(26,107,60,0.18);
          clip-path: polygon(18% 0, 100% 0, 100% 100%, 0% 100%);
          pointer-events: none;
        }
        .b2-layout {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
          padding: 0 60px;
        }

        .b2-container {
          max-width: 760px;
          margin: 0;
          padding: 0;
          flex: 1;
        }

        .b2-sidebar {
          width: 320px;
          position: sticky;
          top: 100px;
          align-self: flex-start;
        }

        @media (max-width: 1024px) {
          .b2-layout {
            display: block;
            padding: 0 20px;
          }

          .b2-sidebar {
            display: none;
          }
        }
        .b2-tag {
          display: inline-block;
          background: #1a6b3c;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          padding: 5px 16px;
          border-radius: 2px;
          margin-bottom: 22px;
        }
        .b2-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 5vw, 50px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin-bottom: 20px;
        }
        .b2-hero h1 em { color: #7ecfa0; font-style: normal; }
        .b2-hero-sub {
          font-size: 19px;
          color: rgba(255,255,255,0.88);
          max-width: 580px;
          line-height: 1.65;
          margin-bottom: 28px;
        }
        .b2-hero-sub strong { color: #7ecfa0; }
        .b2-hero-meta {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          flex-wrap: wrap;
        }
        .b2-read-time {
          background: rgba(255,255,255,0.12);
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 500;
          color: rgba(255,255,255,0.8);
        }

        /* TOC */
        .b2-toc-box {
          background: #f0f7ec;
          border-left: 4px solid #1a6b3c;
          border-radius: 0 6px 6px 0;
          padding: 24px 28px;
          margin: 40px 0;
        }
        .b2-toc-box h3 {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #1a6b3c;
          margin-bottom: 14px;
        }
        .b2-toc-box ol { padding-left: 18px; }
        .b2-toc-box li {
          font-size: 15px;
          color: #0d2d1a;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .b2-toc-box li a { color: #0d2d1a; text-decoration: none; }
        .b2-toc-box li a:hover { text-decoration: underline; }

        /* BODY */
        .b2-article-body { padding: 48px 0; }
        .b2-article-body h2 {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: #0f0f0f;
          margin: 52px 0 18px;
          line-height: 1.25;
        }
        .b2-article-body h3 {
          font-size: 19px;
          font-weight: 600;
          color: #1a6b3c;
          margin: 32px 0 12px;
        }
        .b2-article-body p { margin-bottom: 20px; color: #4a4a4a; }
        .b2-article-body strong { color: #0f0f0f; font-weight: 600; }
        .b2-divider {
          border: none;
          border-top: 1px solid #dde5d8;
          margin: 44px 0;
        }

        /* FOUNDER NOTE */
        .b2-founder-note {
          background: #0d2d1a;
          color: #fff;
          border-radius: 12px;
          padding: 32px 36px;
          margin: 36px 0;
        }
        .b2-fn-badge {
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
        .b2-founder-note h4 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
        }
        .b2-fn-body { font-size: 15px; color: rgba(255,255,255,0.85); line-height: 1.8; }
        .b2-fn-body p { color: rgba(255,255,255,0.85); margin-bottom: 12px; }
        .b2-fn-body em { color: #7ecfa0; font-style: normal; font-weight: 600; }
        .b2-fn-sig {
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-top: 1px solid rgba(255,255,255,0.15);
          padding-top: 16px;
        }
        .b2-fn-avatar {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(126,207,160,0.25);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 16px; color: #7ecfa0;
          flex-shrink: 0;
        }
        .b2-fn-name { font-size: 14px; font-weight: 600; color: #fff; }
        .b2-fn-title { font-size: 13px; color: rgba(255,255,255,0.6); }

        /* CAREER SHIFT BOX */
        .b2-shift-box {
          background: #1a3a5c;
          color: #fff;
          border-radius: 12px;
          padding: 32px 36px;
          margin: 28px 0;
        }
        .b2-shift-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 16px;
          align-items: center;
          margin: 22px 0;
        }
        .b2-shift-col {
          background: rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 18px 20px;
          text-align: center;
        }
        .b2-shift-col .b2-yr {
          font-size: 22px;
          font-weight: 900;
          font-family: 'Playfair Display', serif;
          color: #93b4f5;
          margin-bottom: 6px;
        }
        .b2-shift-col p { font-size: 14px; color: rgba(255,255,255,0.82); margin-bottom: 0; line-height: 1.5; }
        .b2-shift-col p strong { color: #fff; }
        .b2-shift-arrow { font-size: 28px; color: rgba(255,255,255,0.4); text-align: center; }
        .b2-shift-conclusion {
          font-size: 15px;
          color: rgba(255,255,255,0.85);
          text-align: center;
          margin-top: 6px;
          font-style: italic;
        }
        .b2-shift-conclusion strong { color: #93b4f5; }

        /* ADVANTAGE GRID */
        .b2-adv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin: 28px 0;
        }
        .b2-adv-card {
          background: #fff;
          border: 1px solid #dde5d8;
          border-radius: 10px;
          padding: 18px 16px;
          text-align: center;
        }
        .b2-adv-icon { font-size: 24px; margin-bottom: 10px; }
        .b2-adv-card h4 { font-size: 14px; font-weight: 700; color: #0d2d1a; margin-bottom: 4px; }
        .b2-adv-card p { font-size: 13px; color: #888; margin-bottom: 0; line-height: 1.4; }

        /* TRANSFER GRID */
        .b2-transfer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin: 28px 0;
          border: 1px solid #dde5d8;
          border-radius: 10px;
          overflow: hidden;
        }
        .b2-transfer-col { padding: 24px; }
        .b2-transfer-col.java-col { background: #fff8f0; border-right: 1px solid #dde5d8; }
        .b2-transfer-col.ai-col { background: #f0f7ec; }
        .b2-transfer-col h4 {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .b2-transfer-col.java-col h4 { color: #9a5010; }
        .b2-transfer-col.ai-col h4 { color: #1a6b3c; }
        .b2-transfer-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 14px;
        }
        .b2-t-icon {
          width: 24px; height: 24px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 700;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .java-col .b2-t-icon { background: #f5c89a; color: #7a3d0a; }
        .ai-col .b2-t-icon { background: #a8dcbc; color: #0d4a22; }
        .b2-transfer-item p { font-size: 14px; color: #4a4a4a; margin-bottom: 0; line-height: 1.5; }
        .b2-transfer-item strong { font-size: 14px; color: #0f0f0f; }

        /* 6-STEP ROADMAP */
        .b2-roadmap-wrap { margin: 36px 0; }
        .b2-step-card {
          border-radius: 12px;
          margin-bottom: 16px;
          overflow: hidden;
          border: 1px solid #dde5d8;
        }
        .b2-step-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
        }
        .b2-step-badge {
          min-width: 44px; height: 44px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 16px;
          flex-shrink: 0;
          font-family: 'Playfair Display', serif;
        }
        .b2-step-title { flex: 1; }
        .b2-step-title h4 { font-size: 17px; font-weight: 700; margin-bottom: 2px; }
        .b2-step-title span { font-size: 13px; font-weight: 400; }
        .b2-step-outcome {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .8px;
          text-transform: uppercase;
          padding: 3px 12px;
          border-radius: 20px;
          white-space: nowrap;
        }
        .b2-step-body { padding: 4px 24px 22px 84px; }
        .b2-step-body ul {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 16px;
        }
        .b2-step-body li {
          font-size: 14px;
          color: #4a4a4a;
          display: flex;
          align-items: baseline;
          gap: 7px;
        }
        .b2-step-body li::before { content: '→'; font-weight: 700; flex-shrink: 0; }
        .b2-step-insight {
          margin-top: 14px;
          font-size: 14px;
          font-weight: 600;
          padding: 10px 14px;
          border-radius: 6px;
        }
        /* Step colours */
        .b2-s1 .b2-step-header { background: #f0faf4; }
        .b2-s1 .b2-step-badge { background: #a8dcbc; color: #0d4a22; }
        .b2-s1 .b2-step-title h4 { color: #0d4a22; }
        .b2-s1 .b2-step-title span { color: #3a8a5a; }
        .b2-s1 .b2-step-outcome { background: #a8dcbc; color: #0d4a22; }
        .b2-s1 .b2-step-body li::before { color: #1a6b3c; }
        .b2-s1 .b2-step-insight { background: #e4f5eb; color: #0d4a22; }

        .b2-s2 .b2-step-header { background: #e8f0fb; }
        .b2-s2 .b2-step-badge { background: #b5d4f4; color: #0c447c; }
        .b2-s2 .b2-step-title h4 { color: #0c447c; }
        .b2-s2 .b2-step-title span { color: #185fa5; }
        .b2-s2 .b2-step-outcome { background: #b5d4f4; color: #0c447c; }
        .b2-s2 .b2-step-body li::before { color: #185fa5; }
        .b2-s2 .b2-step-insight { background: #e4eef8; color: #0c447c; }

        .b2-s3 .b2-step-header { background: #f0edfb; }
        .b2-s3 .b2-step-badge { background: #cec8f4; color: #3c3489; }
        .b2-s3 .b2-step-title h4 { color: #3c3489; }
        .b2-s3 .b2-step-title span { color: #534ab7; }
        .b2-s3 .b2-step-outcome { background: #cec8f4; color: #3c3489; }
        .b2-s3 .b2-step-body li::before { color: #534ab7; }
        .b2-s3 .b2-step-insight { background: #eeecfb; color: #3c3489; }

        .b2-s4 .b2-step-header { background: #fef6e8; }
        .b2-s4 .b2-step-badge { background: #fac775; color: #633806; }
        .b2-s4 .b2-step-title h4 { color: #633806; }
        .b2-s4 .b2-step-title span { color: #854f0b; }
        .b2-s4 .b2-step-outcome { background: #fac775; color: #633806; }
        .b2-s4 .b2-step-body li::before { color: #ba7517; }
        .b2-s4 .b2-step-insight { background: #fef0d6; color: #633806; }

        .b2-s5 .b2-step-header { background: #fef6e8; }
        .b2-s5 .b2-step-badge { background: #fac775; color: #633806; }
        .b2-s5 .b2-step-title h4 { color: #633806; }
        .b2-s5 .b2-step-title span { color: #854f0b; }
        .b2-s5 .b2-step-outcome { background: #fac775; color: #633806; }
        .b2-s5 .b2-step-body li::before { color: #ba7517; }
        .b2-s5 .b2-step-insight { background: #fef0d6; color: #633806; }

        .b2-s6 .b2-step-header { background: #fdeaea; }
        .b2-s6 .b2-step-badge { background: #f09595; color: #791f1f; }
        .b2-s6 .b2-step-title h4 { color: #791f1f; }
        .b2-s6 .b2-step-title span { color: #a32d2d; }
        .b2-s6 .b2-step-outcome { background: #f09595; color: #791f1f; }
        .b2-s6 .b2-step-body li::before { color: #a32d2d; }
        .b2-s6 .b2-step-insight { background: #fce8e8; color: #791f1f; }

        /* MCP highlight row */
        .b2-mcp-row {
          background: #fef3e2;
          border-radius: 6px;
          padding: 4px 10px;
          margin: -4px -10px;
        }
        .b2-mcp-row::before { color: #ba7517 !important; }
        .b2-mcp-tag {
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

        /* MCP SECTION */
        .b2-mcp-section {
          background: #fffaf0;
          border: 1.5px solid #fac775;
          border-radius: 12px;
          padding: 28px 32px;
          margin: 16px 0 4px;
        }
        .b2-mcp-section h5 { font-size: 15px; font-weight: 700; color: #633806; margin-bottom: 18px; }
        .b2-mcp-flows {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 16px;
          align-items: center;
          margin-bottom: 16px;
        }
        .b2-flow-col {
          background: #fff;
          border: 1px solid #f5d898;
          border-radius: 10px;
          padding: 16px;
        }
        .b2-flow-col h6 {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .b2-flow-col.before h6 { color: #9a5010; }
        .b2-flow-col.after h6 { color: #633806; }
        .b2-flow-step { display: flex; flex-direction: column; align-items: center; gap: 4px; }
        .b2-flow-node {
          background: #fff8f0;
          border: 1px solid #f5c89a;
          border-radius: 6px;
          padding: 7px 14px;
          font-size: 13px;
          font-weight: 600;
          color: #7a3d0a;
          text-align: center;
          width: 100%;
        }
        .b2-flow-node.highlight { background: #fac775; border-color: #e8a800; color: #412402; }
        .b2-flow-arrow-down { font-size: 16px; color: #c89050; line-height: 1; }
        .b2-mcp-flows-arrow { font-size: 28px; color: #c89050; text-align: center; }
        .b2-mcp-section p { font-size: 14px; color: #854f0b; margin-bottom: 0; line-height: 1.6; }

        /* CALLOUT */
        .b2-callout {
          background: #0d2d1a;
          color: #fff;
          border-radius: 10px;
          padding: 28px 32px;
          margin: 36px 0;
        }
        .b2-callout strong { color: #7ecfa0; }
        .b2-callout p { color: rgba(255,255,255,0.82); margin-bottom: 0; }

        /* QUOTE */
        .b2-quote-block {
          border-left: 4px solid #1a6b3c;
          padding: 18px 24px;
          margin: 36px 0;
          background: #fff;
          border-radius: 0 8px 8px 0;
        }
        .b2-quote-block p {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-style: italic;
          color: #0f0f0f;
          margin-bottom: 6px;
        }
        .b2-quote-block cite { font-size: 13px; color: #888; }

        /* INDUSTRY GRID */
        .b2-industry-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin: 28px 0;
        }
        .b2-industry-card {
          background: #fff;
          border: 1px solid #dde5d8;
          border-radius: 10px;
          padding: 20px;
        }
        .b2-ind-icon { font-size: 24px; margin-bottom: 10px; }
        .b2-industry-card h4 { font-size: 15px; font-weight: 700; color: #0d2d1a; margin-bottom: 10px; }
        .b2-industry-card ul { list-style: none; padding: 0; }
        .b2-industry-card li {
          font-size: 14px;
          color: #4a4a4a;
          padding: 5px 0;
          display: flex;
          align-items: baseline;
          gap: 7px;
          border-bottom: 1px solid #dde5d8;
        }
        .b2-industry-card li:last-child { border-bottom: none; }
        .b2-industry-card li::before { content: '→'; color: #1a6b3c; font-weight: 700; flex-shrink: 0; }

        /* PROJECTS */
        .b2-projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 28px 0;
        }
        .b2-proj-card {
          background: #fff;
          border: 1px solid #dde5d8;
          border-radius: 10px;
          padding: 18px 20px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .b2-proj-num {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: #0d2d1a;
          color: #fff;
          font-weight: 700; font-size: 14px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .b2-proj-card h5 { font-size: 15px; font-weight: 600; color: #0f0f0f; margin-bottom: 4px; }
        .b2-proj-card p { font-size: 13px; color: #888; margin-bottom: 0; }

        /* TIMELINE TABLE */
        .b2-timeline-table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #dde5d8;
        }
        .b2-timeline-table thead tr { background: #0d2d1a; }
        .b2-timeline-table thead th {
          padding: 14px 20px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .8px;
          text-transform: uppercase;
          color: #fff;
          text-align: left;
        }
        .b2-timeline-table tbody tr { background: #fff; border-bottom: 1px solid #dde5d8; }
        .b2-timeline-table tbody tr:last-child { border-bottom: none; }
        .b2-timeline-table tbody tr:nth-child(even) { background: #f6fbf8; }
        .b2-timeline-table tbody td { padding: 14px 20px; font-size: 15px; color: #4a4a4a; }
        .b2-timeline-table tbody td:first-child { font-weight: 600; color: #0f0f0f; }
        .b2-tl-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          padding: 3px 12px;
          border-radius: 12px;
        }
        .b2-tl-fast { background: #e4f5eb; color: #0d4a22; }
        .b2-tl-mid { background: #e0eaf8; color: #0c447c; }

        /* MISTAKES */
        .b2-mistake-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin: 28px 0; }
        .b2-mistake-card {
          background: #fff;
          border: 1px solid #dde5d8;
          border-radius: 10px;
          padding: 20px 22px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .b2-m-icon {
          width: 40px; height: 40px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
          background: #fde8e8;
          color: #8a1a1a;
        }
        .b2-mistake-card h4 { font-size: 15px; font-weight: 600; margin-bottom: 4px; color: #8a1a1a; }
        .b2-mistake-card p { font-size: 14px; color: #888; margin-bottom: 0; }

        /* ROLES */
        .b2-roles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin: 28px 0;
        }
        .b2-role-card {
          background: #fff;
          border: 1px solid #dde5d8;
          border-radius: 10px;
          padding: 20px;
        }
        .b2-role-card h4 { font-size: 15px; font-weight: 700; color: #0d2d1a; margin-bottom: 6px; }
        .b2-role-card .b2-salary { font-size: 13px; font-weight: 700; color: #1a6b3c; margin-bottom: 8px; }
        .b2-role-card p { font-size: 14px; color: #888; margin-bottom: 0; line-height: 1.5; }

        /* FAQ */
        .b2-faq-wrap { margin: 28px 0; }
        .b2-faq-item {
          background: #fff;
          border: 1px solid #dde5d8;
          border-radius: 10px;
          padding: 22px 24px;
          margin-bottom: 12px;
        }
        .b2-faq-q {
          font-size: 16px;
          font-weight: 700;
          color: #0d2d1a;
          margin-bottom: 10px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .b2-faq-q::before {
          content: 'Q';
          background: #0d2d1a;
          color: #fff;
          min-width: 24px; height: 24px;
          border-radius: 50%;
          font-size: 12px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .b2-faq-a { font-size: 15px; color: #4a4a4a; padding-left: 34px; line-height: 1.7; }

        /* CTA */
        .b2-cta-box {
          background: #0d2d1a;
          border-radius: 16px;
          padding: 44px 40px;
          margin: 56px 0;
          text-align: center;
          color: #fff;
        }
        .b2-cta-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          margin-bottom: 10px;
        }
        .b2-cta-box h2 {
          font-family: 'Playfair Display', serif;
          font-size: 30px;
          margin-bottom: 6px;
          color: #fff;
          margin-top: 0;
        }
        .b2-cta-sub { font-size: 15px; color: rgba(255,255,255,0.65); margin-bottom: 24px; }
        .b2-webinar-list {
          display: inline-flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
          margin-bottom: 28px;
        }
        .b2-webinar-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          color: rgba(255,255,255,0.88);
        }
        .b2-webinar-item::before {
          content: '✓';
          background: #1a6b3c;
          color: #fff;
          width: 20px; height: 20px;
          border-radius: 50%;
          font-size: 11px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .b2-cta-btn {
          display: inline-block;
          background: #1a6b3c;
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
        .b2-cta-btn:hover { background: #155c32; }
        .b2-cta-note { font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 12px; }

        /* AUTHOR */
        .b2-author-box {
          background: #fff;
          border: 1px solid #dde5d8;
          border-radius: 12px;
          padding: 28px 32px;
          margin: 48px 0;
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .b2-author-avatar {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: #0d2d1a;
          color: #fff;
          font-family: 'Playfair Display', serif;
          font-size: 22px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .b2-author-info h4 { font-size: 17px; font-weight: 700; color: #0f0f0f; margin-bottom: 2px; }
        .b2-author-title { font-size: 14px; color: #1a6b3c; font-weight: 600; margin-bottom: 10px; }
        .b2-author-info p { font-size: 14px; color: #4a4a4a; margin-bottom: 0; }
        .b2-author-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
        .b2-author-tag {
          background: #f0f7ec;
          border: 1px solid #a8dcbc;
          color: #0d2d1a;
          font-size: 13px; font-weight: 600;
          padding: 3px 12px;
          border-radius: 20px;
        }
        .b2-linkedin-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0a66c2;
          color: #fff;
          font-size: 13px; font-weight: 600;
          padding: 6px 16px;
          border-radius: 6px;
          text-decoration: none;
          margin-top: 12px;
        }
        .b2-linkedin-btn:hover { background: #085299; }

        /* TAGS */
        .b2-tags-row { display: flex; flex-wrap: wrap; gap: 8px; margin: 36px 0 20px; }
        .b2-kw-tag {
          background: #fff;
          border: 1px solid #dde5d8;
          color: #4a4a4a;
          font-size: 13px;
          padding: 4px 14px;
          border-radius: 20px;
        }

        /* RESPONSIVE */
        @media (max-width: 600px) {
          .b2-adv-grid { grid-template-columns: 1fr 1fr; }
          .b2-transfer-grid,
          .b2-shift-row,
          .b2-mcp-flows,
          .b2-industry-grid,
          .b2-projects-grid,
          .b2-roles-grid { grid-template-columns: 1fr; }
          .b2-transfer-col.java-col { border-right: none; border-bottom: 1px solid #dde5d8; }
          .b2-step-body ul { grid-template-columns: 1fr; }
          .b2-cta-box { padding: 32px 20px; }
          .b2-author-box { flex-direction: column; }
          .b2-step-outcome { display: none; }
          .b2-founder-note, .b2-shift-box, .b2-mcp-section { padding: 24px 20px; }
        }
      `}</style>

      <div className="b2-root">

        <div className="b2-layout">

        <div className="b2-container">

          <div className="b2-article-body">

            <p>
              If you're a Java developer with 10+ years under your belt, you've probably noticed the job market is quietly
              shifting. Teams that once needed five Java engineers now need two — plus an AI engineer who can build intelligent
              systems on top of the same infrastructure you helped design.
            </p>
            <p>The good news? <strong>You are far closer to that AI engineer role than you think.</strong></p>

            {/* FOUNDER NOTE */}
            <div className="b2-founder-note" id="founder">
              <div className="b2-fn-badge">👨‍🏫 From the Founder</div>
              <h4>A Note From Srinivas Dande</h4>
              <div className="b2-fn-body">
                <p>After mentoring hundreds of software engineers and working in the software industry for more than 20 years, I noticed something interesting.</p>
                <p>The engineers who transition fastest into AI are <em>not beginners</em>.</p>
                <p>They are experienced backend and full-stack developers who already understand systems, scalability, and production environments.</p>
                <p style={{ marginBottom: 0 }}><strong style={{ color: '#7ecfa0' }}>This roadmap is built specifically for them.</strong></p>
              </div>
              <div className="b2-fn-sig">
                <div className="b2-fn-avatar">SD</div>
                <div>
                  <div className="b2-fn-name">Srinivas Dande</div>
                  <div className="b2-fn-title">Founder &amp; Lead Trainer, Dandes Academy</div>
                </div>
              </div>
            </div>

            {/* CAREER SHIFT */}
            <hr className="b2-divider" id="shift" />
            <h2>The AI Career Shift Has Already Started</h2>

            <div className="b2-shift-box">
              <div className="b2-shift-row">
                <div className="b2-shift-col">
                  <div className="b2-yr">2023</div>
                  <p>Companies were hiring developers primarily for <strong>coding</strong> — building features, writing APIs, maintaining systems.</p>
                </div>
                <div className="b2-shift-arrow">→</div>
                <div className="b2-shift-col">
                  <div className="b2-yr">2026</div>
                  <p>Companies are looking for engineers who can <strong>combine software engineering with AI capabilities</strong> — build, deploy, and maintain AI systems.</p>
                </div>
              </div>
              <p className="b2-shift-conclusion">AI is not replacing software engineering. <strong>AI is becoming part of software engineering.</strong></p>
            </div>

            <div className="b2-quote-block">
              <p>"The best AI engineers I've hired came from backend engineering. They understood systems. The ML was the easier part to teach."</p>
              <cite>— VP Engineering, Fintech Unicorn (LinkedIn, 2025)</cite>
            </div>

            {/* ADVANTAGE */}
            <hr className="b2-divider" id="advantage" />
            <h2>Why Java Developers Have an Advantage</h2>
            <p>
              Here's what most AI courses won't tell you: the hardest parts of AI engineering aren't the models. They're the
              systems around them. And Java developers have been building those systems for years.
            </p>

            <div className="b2-adv-grid">
              {[
                { icon: '🏠', title: 'System Design', desc: 'You think in trade-offs, scale, and reliability' },
                { icon: '🔗', title: 'Distributed Systems', desc: 'Microservices, async messaging, fault tolerance' },
                { icon: '🔌', title: 'APIs', desc: 'REST, service contracts, integration patterns' },
                { icon: '🗃️', title: 'Databases', desc: 'SQL, ORM, query optimisation, transactions' },
                { icon: '☁️', title: 'Cloud & DevOps', desc: 'Docker, Kubernetes, CI/CD, observability' },
                { icon: '🔧', title: 'Production Engineering', desc: 'Shipping, monitoring, debugging at scale' },
              ].map(item => (
                <div key={item.title} className="b2-adv-card">
                  <div className="b2-adv-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <p>
              <strong>These are exactly the skills modern AI teams need.</strong> Data scientists can train a model. What they
              struggle with is getting it into production reliably, at scale, with proper observability and rollback. That's your wheelhouse.
            </p>

            {/* TRANSFER MAP */}
            <hr className="b2-divider" id="transfer" />
            <h2>Your Java Skills — Mapped to AI</h2>
            <p>You're not starting over. You're translating. Here's exactly how your existing knowledge maps to the AI world:</p>

            <div className="b2-transfer-grid">
              <div className="b2-transfer-col java-col">
                <h4>What You Know (Java)</h4>
                {[
                  { title: 'Spring Boot REST APIs', desc: 'HTTP services, request handling, validation, error management' },
                  { title: 'Microservices Architecture', desc: 'Service communication, fault tolerance, service mesh' },
                  { title: 'JPA / Hibernate / SQL', desc: 'Data modeling, ORM, query optimisation, transactions' },
                  { title: 'Kafka / RabbitMQ', desc: 'Async messaging, event-driven architecture' },
                  { title: 'Docker / Kubernetes', desc: 'Containerisation, orchestration, scaling' },
                  { title: 'CI/CD Pipelines', desc: 'Jenkins, GitHub Actions, automated testing, deployment' },
                ].map(item => (
                  <div key={item.title} className="b2-transfer-item">
                    <div className="b2-t-icon">J</div>
                    <div><strong>{item.title}</strong><p>{item.desc}</p></div>
                  </div>
                ))}
              </div>
              <div className="b2-transfer-col ai-col">
                <h4>What It Becomes (AI)</h4>
                {[
                  { title: 'AI Inference APIs', desc: 'Serving LLM endpoints, RAG APIs, prompt/response pipelines' },
                  { title: 'AI Agent Orchestration', desc: 'Multi-agent systems, tool calling, LLM coordination' },
                  { title: 'Vector Databases', desc: 'Embeddings, similarity search, pgvector, Pinecone, ChromaDB' },
                  { title: 'ML Data Pipelines', desc: 'Feature engineering, training data streams, inference feeds' },
                  { title: 'MLOps Infrastructure', desc: 'Model serving containers, auto-scaling, GPU orchestration' },
                  { title: 'ML Pipelines (MLflow / Kubeflow)', desc: 'Model versioning, experiment tracking, retraining workflows' },
                ].map(item => (
                  <div key={item.title} className="b2-transfer-item">
                    <div className="b2-t-icon">AI</div>
                    <div><strong>{item.title}</strong><p>{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6-STEP ROADMAP */}
            <hr className="b2-divider" id="roadmap" />
            <h2>The Dandes 6-Step AI/ML Roadmap</h2>
            <p>This roadmap is designed specifically for engineers with your background. Every step respects your existing knowledge and builds directly on it.</p>

            <div className="b2-roadmap-wrap">

              {/* Step 1 */}
              <div className="b2-step-card b2-s1">
                <div className="b2-step-header">
                  <div className="b2-step-badge">1</div>
                  <div className="b2-step-title">
                    <h4>Build Strong Foundation</h4>
                    <span>Python · SQL · Mathematics · EDA</span>
                  </div>
                  <span className="b2-step-outcome">Non-negotiable</span>
                </div>
                <div className="b2-step-body">
                  <ul>
                    {['Python Fundamentals', 'Python for ML & Data Science', 'SQL & Data Modeling', 'Mathematics for ML', 'Exploratory Data Analysis', 'Statistics for ML'].map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="b2-step-insight">Python feels like Groovy to a Java developer — you'll be productive in 2 weeks. The real investment is in statistics and math. That's the layer that separates engineers who understand AI from those who just call APIs.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="b2-step-card b2-s2">
                <div className="b2-step-header">
                  <div className="b2-step-badge">2</div>
                  <div className="b2-step-title">
                    <h4>Become a Strong ML Engineer</h4>
                    <span>ML · Deep Learning · NLP</span>
                  </div>
                  <span className="b2-step-outcome">Build prediction systems</span>
                </div>
                <div className="b2-step-body">
                  <ul>
                    {['Machine Learning Foundation', 'Advanced Machine Learning', 'Deep Learning', 'Advanced Deep Learning', 'Natural Language Processing', 'Model Evaluation & Selection'].map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="b2-step-insight">You can now build real ML systems — churn prediction, fraud detection, recommendation engines. Your software engineering background means they'll be production-ready from day one, not notebook experiments.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="b2-step-card b2-s3">
                <div className="b2-step-header">
                  <div className="b2-step-badge">3</div>
                  <div className="b2-step-title">
                    <h4>Modern AI with Generative AI</h4>
                    <span>LLMs · RAG · Fine-Tuning · Chatbots</span>
                  </div>
                  <span className="b2-step-outcome">Understand modern AI architecture</span>
                </div>
                <div className="b2-step-body">
                  <ul>
                    {['Foundations of Generative AI', 'Prompt Engineering Techniques', 'Working with OpenAI & HuggingFace', 'Retrieval Augmented Generation (RAG)', 'LLMs & Fine-Tuning', 'Building AI Assistants & Chatbots'].map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="b2-step-insight">Building AI APIs on top of LLMs feels just like building Spring Boot services. You'll be home. RAG pipelines map directly to data access patterns you already know.</p>
                </div>
              </div>

              {/* Step 4 — MCP */}
              <div className="b2-step-card b2-s4">
                <div className="b2-step-header">
                  <div className="b2-step-badge">4</div>
                  <div className="b2-step-title">
                    <h4>Modern AI with Agentic AI</h4>
                    <span>AI Agents · MCP · LangChain · LangGraph</span>
                  </div>
                  <span className="b2-step-outcome">Real-world agent use cases</span>
                </div>
                <div className="b2-step-body">
                  <ul>
                    <li>AI Agents Architecture</li>
                    <li>Tool Calling &amp; Function Calling</li>
                    <li className="b2-mcp-row">
                      <strong style={{ color: '#633806' }}>MCP — Model Context Protocol</strong>
                      <span className="b2-mcp-tag">New 2026</span>
                    </li>
                    <li>Multi-Step Reasoning Systems</li>
                    <li>AI Workflow Automation</li>
                    <li>Building Autonomous AI Assistants</li>
                    <li>Agent Frameworks — LangChain / LangGraph</li>
                  </ul>

                  <div className="b2-mcp-section">
                    <h5>Understanding MCP as a Java Developer</h5>
                    <div className="b2-mcp-flows">
                      <div className="b2-flow-col before">
                        <h6>Before MCP</h6>
                        <div className="b2-flow-step">
                          <div className="b2-flow-node">Application</div>
                          <div className="b2-flow-arrow-down">↓</div>
                          <div className="b2-flow-node">REST API</div>
                          <div className="b2-flow-arrow-down">↓</div>
                          <div className="b2-flow-node">Database</div>
                        </div>
                      </div>
                      <div className="b2-mcp-flows-arrow">→</div>
                      <div className="b2-flow-col after">
                        <h6>With MCP</h6>
                        <div className="b2-flow-step">
                          <div className="b2-flow-node">AI Agent</div>
                          <div className="b2-flow-arrow-down">↓</div>
                          <div className="b2-flow-node highlight">MCP Protocol</div>
                          <div className="b2-flow-arrow-down">↓</div>
                          <div className="b2-flow-node">Tools / APIs / Databases</div>
                        </div>
                      </div>
                    </div>
                    <p>
                      MCP is the standard protocol that lets AI agents securely connect to external tools, APIs, and data sources
                      — think of it as the HTTP of AI agent integration. Just as REST standardised how services talk to each other,
                      MCP standardises how AI agents talk to the world. For a Java developer, this maps perfectly to your experience
                      building API contracts and service interfaces.
                    </p>
                  </div>

                  <p className="b2-step-insight">AI agents are the new microservices. Your distributed systems experience makes you exceptional here — you already think in orchestration and tool integration.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="b2-step-card b2-s5">
                <div className="b2-step-header">
                  <div className="b2-step-badge">5</div>
                  <div className="b2-step-title">
                    <h4>Production &amp; MLOps</h4>
                    <span>Deployment · Docker · CI/CD · Monitoring</span>
                  </div>
                  <span className="b2-step-outcome">Scalable production ML</span>
                </div>
                <div className="b2-step-body">
                  <ul>
                    {['Model Deployment Strategies', 'REST APIs for ML Models', 'Docker & Containerization', 'CI/CD for ML Systems', 'Model Monitoring & Logging', 'Scalable Production ML Systems'].map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="b2-step-insight">This is where Java engineers sprint past everyone else. You've shipped Dockerised services. You've built CI/CD pipelines. This step takes you days, not weeks — you're already 80% here.</p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="b2-step-card b2-s6">
                <div className="b2-step-header">
                  <div className="b2-step-badge">6</div>
                  <div className="b2-step-title">
                    <h4>Capstone Project &amp; Interview Prep</h4>
                    <span>End-to-End AI System · Resume · Mock Interviews</span>
                  </div>
                  <span className="b2-step-outcome">Industry-ready</span>
                </div>
                <div className="b2-step-body">
                  <ul>
                    <li>Build a complete end-to-end AI system</li>
                    <li>Data → Model → Deployment → Application</li>
                    <li>System design for AI systems</li>
                    <li>Resume building for AI roles</li>
                    <li>Mock technical interviews</li>
                    <li>Portfolio &amp; GitHub optimisation</li>
                  </ul>
                  <p className="b2-step-insight">You graduate with a production-grade AI project on GitHub, a tailored AI engineer resume, and the confidence to crack technical interviews. You are industry-ready.</p>
                </div>
              </div>

            </div>

            <div className="b2-callout">
              <p><strong>The Dandes Difference:</strong> Weekend and evening batches — you don't quit your job, you level up while keeping your income. Every cohort is mentored by engineers who've made this exact transition themselves.</p>
            </div>

            {/* INDUSTRY USE CASES */}
            <hr className="b2-divider" id="usecases" />
            <h2>Where Java Developers Use AI</h2>
            <p>AI engineering isn't abstract — it's being deployed right now in industries where your Java experience is already valued:</p>

            <div className="b2-industry-grid">
              {[
                { icon: '🏭', title: 'Banking & Finance', items: ['Fraud Detection Systems', 'Risk Analysis Models', 'AI Banking Assistants'] },
                { icon: '🛒', title: 'Retail & E-Commerce', items: ['Recommendation Systems', 'Demand Forecasting', 'Personalisation Engines'] },
                { icon: '🏥', title: 'Healthcare', items: ['Diagnosis Support Systems', 'Medical Chatbots', 'Clinical Data Analysis'] },
                { icon: '🏢', title: 'Enterprise Software', items: ['AI Copilots for Employees', 'Knowledge Assistants', 'Intelligent Workflow Automation'] },
              ].map(card => (
                <div key={card.title} className="b2-industry-card">
                  <div className="b2-ind-icon">{card.icon}</div>
                  <h4>{card.title}</h4>
                  <ul>
                    {card.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            {/* PORTFOLIO PROJECTS */}
            <hr className="b2-divider" id="projects" />
            <h2>Recommended AI Portfolio Projects</h2>
            <p>Certifications get you past ATS. Projects get you hired. Here are the 5 portfolio projects that consistently impress AI engineering hiring managers:</p>

            <div className="b2-projects-grid">
              {[
                { n: 1, title: 'Customer Churn Prediction', desc: 'End-to-end ML pipeline with feature engineering, model training, and a REST API for inference.' },
                { n: 2, title: 'Enterprise RAG Chatbot', desc: 'Document ingestion, vector DB, LLM integration, and a production-grade API backend.' },
                { n: 3, title: 'AI Resume Screener', desc: 'NLP-powered system that ranks candidates against job descriptions using embeddings.' },
                { n: 4, title: 'Recommendation System', desc: 'Collaborative filtering system deployed with real-time inference API — familiar territory for Java devs.' },
                { n: 5, title: 'AI Agent for Customer Support', desc: 'Autonomous agent with tool calling, MCP integration, and multi-step reasoning.' },
              ].map(p => (
                <div key={p.n} className="b2-proj-card">
                  <div className="b2-proj-num">{p.n}</div>
                  <div>
                    <h5>{p.title}</h5>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* TIMELINE TABLE */}
            <hr className="b2-divider" id="timeline" />
            <h2>Typical Transition Timeline</h2>
            <p>Based on the engineers we've trained at Dandes Academy, here's a realistic guide for part-time study (weekends and evenings) while working full-time:</p>

            <table className="b2-timeline-table">
              <thead>
                <tr>
                  <th>Background</th>
                  <th>Transition Time</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Java Developer (10+ years)</td>
                  <td>6 – 9 Months</td>
                  <td><span className="b2-tl-badge b2-tl-mid">Strong foundation in systems</span></td>
                </tr>
                <tr>
                  <td>Full Stack Java Developer</td>
                  <td>6 – 8 Months</td>
                  <td><span className="b2-tl-badge b2-tl-mid">API &amp; frontend experience helps</span></td>
                </tr>
                <tr>
                  <td>Java + DevOps Engineer</td>
                  <td>5 – 7 Months</td>
                  <td><span className="b2-tl-badge b2-tl-fast">MLOps step is near-complete</span></td>
                </tr>
                <tr>
                  <td>Java + Data Engineering</td>
                  <td>4 – 6 Months</td>
                  <td><span className="b2-tl-badge b2-tl-fast">Fastest path to ML pipelines</span></td>
                </tr>
              </tbody>
            </table>

            {/* MISTAKES */}
            <hr className="b2-divider" />
            <h2 id="mistakes">Common Mistakes to Avoid</h2>
            <div className="b2-mistake-grid">
              {[
                {
                  title: 'Mistake 1: Learning Python like a complete beginner',
                  desc: 'Most online courses start with "what is a variable." You already know this. You should be writing pandas DataFrames by day 3, not printing "Hello World."',
                },
                {
                  title: 'Mistake 2: Skipping statistics and jumping straight to models',
                  desc: 'Engineers who skip Step 1\'s math layer can use AI tools but can\'t diagnose why they fail — making them genuinely dangerous in production systems.',
                },
                {
                  title: 'Mistake 3: Building Jupyter notebooks instead of production projects',
                  desc: 'The Dandes capstone forces you to build AI systems the way you build software — with APIs, Docker, monitoring, and a real GitHub repo recruiters can see.',
                },
              ].map(m => (
                <div key={m.title} className="b2-mistake-card">
                  <div className="b2-m-icon">✗</div>
                  <div>
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ROLES & SALARIES */}
            <hr className="b2-divider" id="roles" />
            <h2>AI Career Roles &amp; Salaries</h2>
            <div className="b2-roles-grid">
              {[
                { title: 'ML Engineer', salary: '₹28–45 LPA', desc: 'Building and maintaining ML pipelines and model serving infrastructure. Most natural path for Java engineers.' },
                { title: 'AI Platform Engineer', salary: '₹32–50 LPA', desc: 'Building internal AI infrastructure — model registries, feature stores, inference clusters. Your Kubernetes experience is gold here.' },
                { title: 'LLM Application Engineer', salary: '₹30–48 LPA', desc: 'Building production LLM applications — RAG systems, AI agents, MCP-powered tools. Fastest-growing role in 2026.' },
                { title: 'AI Solutions Architect', salary: '₹45–70 LPA', desc: 'Designing enterprise AI systems. Your stakeholder communication and system design experience becomes the primary skill.' },
              ].map(r => (
                <div key={r.title} className="b2-role-card">
                  <h4>{r.title}</h4>
                  <div className="b2-salary">{r.salary}</div>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <hr className="b2-divider" id="faq" />
            <h2>Frequently Asked Questions</h2>
            <div className="b2-faq-wrap">
              {[
                { q: 'Can a Java Developer become an AI Engineer?', a: 'Absolutely — and Java developers have a significant advantage over beginners. Your systems thinking, API design, and production experience are directly transferable to AI engineering. The AI/ML knowledge layer is what you add on top of an already strong foundation.' },
                { q: 'Do I need Mathematics for AI?', a: 'Yes, but not at a PhD level. You need a working understanding of statistics, probability, linear algebra, and calculus. The Dandes program covers exactly the math you need for AI engineering — nothing more, nothing less — with a practical engineering lens.' },
                { q: 'Can I learn AI while working?', a: 'Yes. The Dandes AI/ML program is specifically designed for working professionals. Weekend and evening batches mean you don\'t need to quit your job or take a salary cut. The 6-step roadmap is structured for 10–15 hours of study per week.' },
                { q: 'Is Python difficult for Java Developers?', a: 'No. Python is significantly simpler than Java in terms of syntax. Most Java developers become productive in Python within 2 weeks. The Dandes program treats Python as a second language for engineers — we skip the basics and go straight to ML and data science patterns.' },
                { q: 'What salary can I expect?', a: 'Engineers with 10+ years of Java experience who add solid AI/ML skills typically see salaries ranging from ₹28 LPA to ₹70 LPA depending on the role. ML Engineer and LLM Application Engineer roles are the most accessible entry points, with AI Solutions Architect being the highest-ceiling path.' },
                { q: 'Will AI replace Java Developers?', a: 'No. Java developer skills — Spring Boot, microservices, system design, cloud — are the core building blocks of AI systems. The goal is to add AI skills on top of Java expertise, not replace it. The engineers most at risk are those who refuse to adapt, not those who engage with AI.' },
              ].map(faq => (
                <div key={faq.q} className="b2-faq-item">
                  <div className="b2-faq-q">{faq.q}</div>
                  <div className="b2-faq-a">{faq.a}</div>
                </div>
              ))}
            </div>

          </div>

          {/* CTA */}
          <div className="b2-cta-box">
            <div className="b2-cta-eyebrow">🎯 Free Webinar</div>
            <h2>AI Career Switch Blueprint</h2>
            <div className="b2-cta-sub">Live session with Srinivas Dande — Founder, Dandes Academy</div>
            <div className="b2-webinar-list">
              {[
                'Complete AI/ML Roadmap for Java Developers',
                'Required Skills & How to Build Them',
                'Portfolio Projects That Get You Hired',
                'Career Opportunities & Salary Trends',
                'Live Q&A Session',
              ].map(item => (
                <div key={item} className="b2-webinar-item">{item}</div>
              ))}
            </div>
            <br />
            <button className="b2-cta-btn" onClick={() => setModalOpen(true)}>
              Register for Free Webinar →
            </button>
            <div className="b2-cta-note">Free to attend · Limited seats · Recording available for registered attendees</div>
          </div>

          {/* AUTHOR */}
          <div className="b2-author-box">
            <div className="b2-author-avatar">SD</div>
            <div className="b2-author-info">
              <h4>Srinivas Dande</h4>
              <div className="b2-author-title">Founder &amp; Lead Trainer — Dandes Academy</div>
              <p>20+ years in software engineering across enterprise systems, cloud architecture, and AI. Trained 500+ working professionals in AI/ML. Specialises in helping experienced engineers make structured, high-ROI career transitions into AI roles.</p>
              <div className="b2-author-tags">
                <span className="b2-author-tag">✓ 20+ Years Experience</span>
                <span className="b2-author-tag">✓ AI/ML Mentor</span>
                <span className="b2-author-tag">✓ System Design Trainer</span>
                <span className="b2-author-tag">✓ Mentor to Working Professionals</span>
              </div>
              <a href="#" className="b2-linkedin-btn">👤 Connect on LinkedIn</a>
            </div>
          </div>

          <div className="b2-tags-row">
            {['#JavaToAI', '#AICareerSwitch', '#MLEngineer', '#MCPProtocol', '#AIAgents2026', '#DandesAcademy'].map(tag => (
              <span key={tag} className="b2-kw-tag">{tag}</span>
            ))}
          </div>

        </div>

        <div className="b2-sidebar">
          {/* TOC */}
          <div className="b2-toc-box">
            <h3>In this article</h3>
            <ol>
              <li><a href="#founder">A Note From Srinivas Dande</a></li>
              <li><a href="#shift">The AI Career Shift Has Already Started</a></li>
              <li><a href="#advantage">Why Java Developers Have an Advantage</a></li>
              <li><a href="#transfer">Your Java Skills — Mapped to AI</a></li>
              <li><a href="#roadmap">The Dandes 6-Step AI/ML Roadmap</a></li>
              <li><a href="#usecases">Where Java Developers Use AI</a></li>
              <li><a href="#projects">Recommended AI Portfolio Projects</a></li>
              <li><a href="#timeline">Typical Transition Timeline</a></li>
              <li><a href="#mistakes">Common Mistakes to Avoid</a></li>
              <li><a href="#roles">AI Career Roles &amp; Salaries</a></li>
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
  );
}
