'use client'

import { useState, useEffect } from 'react'
import Link from "next/link";
import { PopupFormModal } from "@/components/dandes/popup-form-modal"

export function BlogPostContent() {
  const [modalOpen, setModalOpen] = useState(false)

  const tagColors = [
  { bg: '#DBEAFE', color: '#1D4ED8' }, // Blue
  { bg: '#DCFCE7', color: '#15803D' }, // Green
  { bg: '#FEE2E2', color: '#DC2626' }, // Red
  { bg: '#FEF3C7', color: '#D97706' }, // Orange
  { bg: '#EDE9FE', color: '#7C3AED' }, // Purple
  { bg: '#CCFBF1', color: '#0F766E' }, // Teal
];

const relatedArticles = [
  {
    title: "From Java Developer to AI Engineer",
    href: "/blog/from-java-developer-to-ai-engineer",
  },
  {
    title: "How Software Engineers Can Transition to AI/ML in 2026",
    href: "/blog/how-software-engineers-can-transition-to-ai-ml-in-2026",
  },
  {
    title: "Why Learning Python Alone Will Not Make You an AI Engineer",
    href: "/blog/why-learning-python-alone-will-not-make-you-an-ai-engineer",
  },
  {
    title: "Why Most AI Learning Journeys Fail (And How to Avoid It)",
    href: "/blog/why-most-ai-learning-journeys-fail-and-how-to-avoid-it",
  },
  {
    title: "AI Engineer vs Data Scientist vs ML Engineer",
    href: "/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer",
  },
];

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .blog-root {
          font-family: 'Geist', 'Geist Fallback', system-ui, sans-serif;
          background: #faf9f6;
          color: #0f0f0f;
          line-height: 1.75;
          font-size: 17px;
        }
        .blog-root * { box-sizing: border-box; margin: 0; padding: 0; }

        /* HERO */
        .b-hero {
          background: #1a3a5c;
          color: #fff;
          padding: 80px 0 60px;
          position: relative;
          overflow: hidden;
        }
        .b-hero::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: rgba(200,75,47,0.18);
          pointer-events: none;
        }
        .b-hero::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -40px;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          pointer-events: none;
        }
        .blog-layout {
  display: flex;
  align-items: flex-start;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

.b-container {
  flex: 1;
  max-width: 820px;
}

.b-sidebar {
  width: 300px;
  position: sticky;
  top: 100px;
  align-self: flex-start;
}

        .b-container {
          max-width: 760px;
          padding: 0 28px;
        }
        .b-tag {
          display: inline-block;
          background: #c84b2f;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 2px;
          margin-bottom: 22px;
        }
        .b-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 900;
          line-height: 1.12;
          letter-spacing: -0.5px;
          margin-bottom: 20px;
        }
        .b-hero h1 em {
          color: #f5a97f;
          font-style: normal;
        }
        .b-hero-sub {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          max-width: 580px;
          margin-top: 16px;
          line-height: 1.6;
        }
        .b-hero-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .b-read-time {
          background: rgba(255,255,255,0.12);
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 500;
        }

        /* TOC */
        .b-toc-box {
          background: #fff8e7;
          border-left: 4px solid #c84b2f;
          border-radius: 0 4px 4px 0;
          padding: 24px 28px;
          margin: 40px 0;
        }
        .b-toc-box h3 {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #c84b2f;
          margin-bottom: 14px;
        }
        .b-toc-box ol {
          padding-left: 20px;
        }
        .b-toc-box li {
          font-size: 15px;
          color: #1a3a5c;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .b-toc-box li a {
          color: #1a3a5c;
          text-decoration: none;
        }
        .b-toc-box li a:hover { text-decoration: underline; }

        /* BODY */
        .b-article-body { padding: 50px 0; }
        .b-article-body h2 {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: #0f0f0f;
          margin: 52px 0 18px;
          line-height: 1.25;
        }
        .b-article-body h3 {
          font-size: 19px;
          font-weight: 600;
          color: #1a3a5c;
          margin: 32px 0 12px;
        }
        .b-article-body p {
          margin-bottom: 20px;
          color: #4a4a4a;
        }
        .b-article-body strong { color: #0f0f0f; font-weight: 600; }
        .b-divider {
          border: none;
          border-top: 1px solid #e5e2da;
          margin: 44px 0;
        }

        /* FOUNDER NOTE */
        .b-founder-note {
          background: #1a3a5c;
          color: #fff;
          border-radius: 12px;
          padding: 32px 36px;
          margin: 36px 0;
          position: relative;
        }
        .b-fn-badge {
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
        .b-founder-note h4 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
        }
        .b-fn-body { font-size: 15px; color: rgba(255,255,255,0.82); line-height: 1.8; }
        .b-fn-body p { color: rgba(255,255,255,0.82); margin-bottom: 0; }
        .b-fn-waves { display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0; }
        .b-wave {
          display: inline-block;
          background: rgba(255,255,255,0.12);
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
        }
        .b-fn-sig {
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-top: 1px solid rgba(255,255,255,0.15);
          padding-top: 16px;
        }
        .b-fn-avatar {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(245,169,127,0.3);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 16px; color: #f5a97f;
          flex-shrink: 0;
        }
        .b-fn-name { font-size: 14px; font-weight: 600; color: #fff; }
        .b-fn-title { font-size: 13px; color: rgba(255,255,255,0.6); }

        /* REALITY GRID */
        .b-reality-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin: 28px 0;
          border: 1px solid #e5e2da;
          border-radius: 10px;
          overflow: hidden;
        }
        .b-rc-col { padding: 24px; }
        .b-rc-col.can { background: #f6fbf8; border-right: 1px solid #e5e2da; }
        .b-rc-col.cannot { background: #fff9f8; }
        .b-rc-col h4 {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .b-rc-col.can h4 { color: #0d4a22; }
        .b-rc-col.cannot h4 { color: #7a2a18; }
        .b-rc-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 0;
          border-bottom: 1px solid #e5e2da;
          font-size: 14px;
          color: #4a4a4a;
        }
        .b-rc-item:last-child { border-bottom: none; }
        .b-rc-icon {
          width: 22px; height: 22px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700;
          flex-shrink: 0;
        }
        .can .b-rc-icon { background: #b8dfca; color: #0d4a22; }
        .cannot .b-rc-icon { background: #f9c5b8; color: #7a2a18; }

        /* SYSTEM DESIGN BOX */
        .b-sysdesign-box {
          background: #fff8e7;
          border: 1px solid #f0dfa0;
          border-radius: 10px;
          padding: 28px 32px;
          margin: 28px 0;
        }
        .b-sysdesign-box h4 {
          font-size: 16px;
          font-weight: 700;
          color: #1a3a5c;
          margin-bottom: 16px;
        }
        .b-tradeoff-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 20px;
        }
        .b-tradeoff-item {
          background: #fff;
          border: 1px solid #e5e2da;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 14px;
          color: #4a4a4a;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .b-tradeoff-item::before {
          content: '?';
          background: #1a3a5c;
          color: #fff;
          width: 20px; height: 20px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700;
          flex-shrink: 0;
        }
        .b-sysdesign-requires {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .b-req-pill {
          background: #1a3a5c;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 6px 16px;
          border-radius: 20px;
        }

        /* JAVA BOX */
        .b-java-box {
          background: #f0f7ec;
          border-left: 4px solid #1a6b3c;
          border-radius: 0 10px 10px 0;
          padding: 28px 32px;
          margin: 28px 0;
        }
        .b-java-box h4 { font-size: 17px; font-weight: 700; color: #1a6b3c; margin-bottom: 14px; }
        .b-java-skills { display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0; }
        .b-java-skill {
          background: #fff;
          border: 1px solid #b8dfca;
          color: #0d4a22;
          font-size: 13px;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 20px;
        }
        .b-java-box p { color: #2a5a3a; margin-bottom: 10px; }
        .b-java-box p:last-child { margin-bottom: 0; }
        .b-java-box a { color: #0d4a22; font-weight: 600; text-decoration: none; }

        /* TIMELINE */
        .b-timeline-wrap { margin: 28px 0; }
        .b-tl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .b-tl-card {
          background: #fff;
          border: 1px solid #e5e2da;
          border-radius: 10px;
          padding: 18px;
        }
        .b-tl-month {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #c84b2f;
          margin-bottom: 8px;
        }
        .b-tl-card h5 { font-size: 14px; font-weight: 700; color: #0f0f0f; margin-bottom: 4px; }
        .b-tl-card p { font-size: 13px; color: #888; margin-bottom: 0; }

        /* PROJECTS */
        .b-projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 28px 0;
        }
        .b-proj-card {
          background: #fff;
          border: 1px solid #e5e2da;
          border-radius: 10px;
          padding: 18px 20px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .b-proj-num {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: #1a3a5c;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .b-proj-card h5 { font-size: 15px; font-weight: 600; color: #0f0f0f; margin-bottom: 4px; }
        .b-proj-card p { font-size: 13px; color: #888; margin-bottom: 0; }

        /* CALLOUT */
        .b-callout {
          background: #fff8e7;
          color: #0d4a22;
          border-radius: 10px;
          padding: 28px 32px;
          margin: 36px 0;
        }
        .b-callout strong { color: #c84b2f; }
        .b-callout p { color: #1a3a5c; margin-bottom: 0; }

        /* QUOTE */
        .b-quote-block {
          border-left: 4px solid #c84b2f;
          padding: 16px 24px;
          margin: 32px 0;
          background: #fff;
          border-radius: 0 8px 8px 0;
        }
        .b-quote-block p {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-style: italic;
          color: #0f0f0f;
          margin-bottom: 6px;
        }
        .b-quote-block cite { font-size: 13px; color: #888; }

        /* INTERNAL LINKS */
        .b-internal-links {
          background: #f0f3fa;
          border-radius: 10px;
          padding: 22px 26px;
          margin: 28px 0;
        }
        .b-internal-links h4 {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #1a3a5c;
          margin-bottom: 12px;
        }
        .b-il-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .b-il-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #1a3a5c;
          font-weight: 500;
          text-decoration: none;
          padding: 6px 0;
        }
        .b-il-link:hover { text-decoration: underline; }
        .b-il-link::before { content: '→'; color: #c84b2f; font-weight: 700; }

        /* FAQ */
        .b-faq-wrap { margin: 28px 0; }
        .b-faq-item {
          background: #fff;
          border: 1px solid #e5e2da;
          border-radius: 10px;
          padding: 22px 24px;
          margin-bottom: 12px;
        }
        .b-faq-q {
          font-size: 16px;
          font-weight: 700;
          color: #1a3a5c;
          margin-bottom: 10px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .b-faq-q::before {
          content: 'Q';
          background: #1a3a5c;
          color: #fff;
          min-width: 24px; height: 24px;
          border-radius: 50%;
          font-size: 12px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .b-faq-a { font-size: 15px; color: #4a4a4a; padding-left: 34px; line-height: 1.7; }

        /* WEBINAR CTA */
        .b-cta-box {
          background: #1a3a5c;
          border-radius: 16px;
          padding: 44px 40px;
          margin: 56px 0;
          text-align: center;
          color: #fff;
        }
        .b-cta-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          margin-bottom: 10px;
        }
        .b-cta-box h2 {
          font-family: 'Playfair Display', serif;
          font-size: 30px;
          margin-bottom: 6px;
          color: #fff;
          margin-top: 0;
        }
        .b-cta-sub { font-size: 15px; color: rgba(255,255,255,0.65); margin-bottom: 24px; }
        .b-webinar-list {
          display: inline-flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
          margin-bottom: 28px;
        }
        .b-webinar-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          color: rgba(255,255,255,0.88);
        }
        .b-webinar-item::before {
          content: '✓';
          background: #1a6b3c;
          color: #fff;
          width: 20px; height: 20px;
          border-radius: 50%;
          font-size: 11px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .b-cta-btn {
          display: inline-block;
          background: #c84b2f;
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
        .b-cta-btn:hover { background: #b03d22; }
        .b-cta-note { font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 12px; }

        /* AUTHOR BOX */
        .b-author-box {
          background: #fff8e7;
          border: 1px solid #e5e2da;
          border-radius: 12px;
          padding: 28px 32px;
          margin: 48px 0;
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .b-author-avatar {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: #1a3a5c;
          color: #fff;
          font-family: 'Playfair Display', serif;
          font-size: 22px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .b-author-info h4 { font-size: 17px; font-weight: 700; color: #0f0f0f; margin-bottom: 2px; }
        .b-author-title { font-size: 14px; color: #c84b2f; font-weight: 600; margin-bottom: 10px; }
        .b-author-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
        .b-author-tag {
          background: #fff8e7;
          border: 1px solid #f0dfa0;
          color: #1a3a5c;
          font-size: 13px; font-weight: 600;
          padding: 3px 12px;
          border-radius: 20px;
        }
        .b-author-info p { font-size: 14px; color: #1a3a5c; margin-bottom: 0; }

        /* TAGS ROW */
        .b-tags-row { display: flex; flex-wrap: wrap; gap: 8px; margin: 36px 0 20px; }
        .b-kw-tag {
          background: #fff;
          border: 1px solid #e5e2da;
          color: #4a4a4a;
          font-size: 13px;
          padding: 4px 14px;
          border-radius: 20px;
        }

        /* RESPONSIVE */
        @media (max-width: 600px) {
          .b-reality-grid { grid-template-columns: 1fr; }
          .b-rc-col.can { border-right: none; border-bottom: 1px solid #e5e2da; }
          .b-tradeoff-row { grid-template-columns: 1fr; }
          .b-tl-grid { grid-template-columns: 1fr 1fr; }
          .b-projects-grid { grid-template-columns: 1fr; }
          .b-il-grid { grid-template-columns: 1fr; }
          .b-cta-box { padding: 32px 20px; }
          .b-author-box { flex-direction: column; }
          .b-founder-note { padding: 24px 22px; }
          .b-sysdesign-box { padding: 22px 20px; }
          .b-java-box { padding: 22px 20px; }
        }
        @media (max-width: 400px) {
          .b-tl-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
  .blog-layout {
    flex-direction: column;
    padding: 0 20px;
  }

  .b-sidebar {
    order: -1;
    width: 100%;
    position: static;
    margin-bottom: 30px;
  }

  .b-container {
    max-width: 100%;
    padding: 0;
  }
}


      `}</style>

      <div className="blog-root">       
        <div className="blog-layout">
        

          <div className="b-container">
          {/* TOC */}

          
          

          <div className="b-article-body">
            <p>
              Every week, a new headline screams: <strong>"AI will replace developers by 2027."</strong> Then the next week:{' '}
              <strong>"GitHub Copilot writes 40% of all code."</strong> And somewhere in between, you — a software engineer with 10,
              15, maybe 20 years of hard-earned experience — are wondering: <em>should I be worried?</em>
            </p>
            <p>Let's cut through the noise. Here's an honest answer from someone who has been in the industry for over two decades.</p>

            {/* FOUNDER NOTE */}
            

            {/* REALITY CHECK */}
            <hr className="b-divider" id="reality" />
            <h2>AI Today: Reality Check</h2>
            <p>
              Before we talk about what to do, let's be precise about what AI actually does well — and where it still cannot
              replace a seasoned engineer.
            </p>

            <div className="b-reality-grid">
              <div className="b-rc-col can">
                <h4>✓ AI Can Do This</h4>
                {['Generates Code', 'Creates Unit Tests', 'Reviews Pull Requests', 'Writes Documentation'].map(item => (
                  <div key={item} className="b-rc-item">
                    <div className="b-rc-icon">✓</div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="b-rc-col cannot">
                <h4>✗ AI Cannot Do This</h4>
                {['Understand Business Context', 'Make Architectural Trade-offs', 'Own Production Systems', 'Lead and Mentor Teams'].map(item => (
                  <div key={item} className="b-rc-item">
                    <div className="b-rc-icon">✗</div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p>
              Here's the uncomfortable truth: <strong>AI is not replacing software engineers. It is replacing software engineers
              who don't understand AI.</strong> Every major tech company is hiring more engineers, not fewer — but the job
              descriptions have quietly changed. They now expect familiarity with LLMs, prompt engineering, AI pipelines, and
              model evaluation.
            </p>

            <div className="b-quote-block">
              <p>"The engineers who will thrive in the AI era are those who know how to direct AI, not just write code themselves."</p>
              <cite>— Jensen Huang, CEO, NVIDIA (2025)</cite>
            </div>

            {/* WHAT AI CAN / CANNOT */}
            <hr className="b-divider" id="automate" />
            <h2>What AI Can (and Cannot) Automate</h2>
            <p>
              The engineers being displaced are those doing purely repetitive, boilerplate work — CRUD APIs, basic scripts, simple
              frontend components. AI tools handle this faster now. But{' '}
              <strong>the engineers designing systems, making architectural decisions, evaluating AI output, and building AI products</strong>{' '}
              are in higher demand than ever.
            </p>
            <p>
              AI is an extremely capable junior engineer that never sleeps. Your job is to become the senior engineer who knows
              exactly how to use, direct, and quality-check that junior — and who can solve problems AI has never seen before.
            </p>

            {/* SYSTEM DESIGN */}
            <hr className="b-divider" id="sysdesign" />
            <h2>Why System Design Matters More Than Ever</h2>
            <p>AI can write code. But can it decide:</p>

            <div className="b-sysdesign-box">
              <h4>The Trade-offs AI Cannot Make</h4>
              <div className="b-tradeoff-row">
                {['SQL or NoSQL?', 'Cache or Database?', 'Consistency or Availability?', 'Monolith or Microservices?', 'Cost or Performance?', 'Build or Buy?'].map(t => (
                  <div key={t} className="b-tradeoff-item">{t}</div>
                ))}
              </div>
              <p style={{ color: '#4a4a4a', fontSize: 15, marginBottom: 14 }}>System design is about trade-offs. Trade-offs require:</p>
              <div className="b-sysdesign-requires">
                {['✓ Experience', '✓ Business Context', '✓ Architectural Thinking'].map(r => (
                  <span key={r} className="b-req-pill">{r}</span>
                ))}
              </div>
            </div>

            <p>
              This is precisely why experienced engineers remain valuable. Your years of navigating these decisions — and living
              with the consequences in production — cannot be replicated by a model trained on Stack Overflow answers. As AI
              handles execution-level tasks, <strong>the premium shifts to judgment</strong>. Teams need engineers who can decide
              which AI approach to use, when not to use AI, and how to build systems that are maintainable and trustworthy at scale.
            </p>

            {/* JAVA DEVELOPER */}
            <hr className="b-divider" id="java" />
            <h2>What This Means for Java Developers</h2>

            <div className="b-java-box">
              <h4>If You Are a Java Developer — Don't Panic.</h4>
              <p>Your skills are still valuable. The core building blocks of AI systems are the exact things you've been building for years:</p>
              <div className="b-java-skills">
                {['Spring Boot', 'Microservices', 'Databases', 'System Design', 'Cloud', 'DevOps'].map(s => (
                  <span key={s} className="b-java-skill">{s}</span>
                ))}
              </div>
              <p>
                The goal is <strong>not</strong> to replace these skills. The goal is to <strong>add AI skills on top of them.</strong>{' '}
                A Java engineer who adds AI/ML to their toolkit doesn't become a different kind of engineer — they become a
                significantly more valuable one.
              </p>
              <p>
  🔗 Read our detailed guide:{" "}
  <Link
    href="/blog/from-java-developer-to-ai-engineer"
    style={{
      color: "#0d4a22",
      fontWeight: 600,
      textDecoration: "none",
    }}
  >
    From Java Developer to AI Engineer →
  </Link>
</p>
            </div>

            {/* TIMELINE */}
            <hr className="b-divider" id="future" />
            <h2>Future-Proof Skills &amp; Learning Timeline</h2>
            <p>
              Based on what top tech companies are hiring for right now, here are the skills that matter most — and a realistic
              timeline for acquiring them while working full-time:
            </p>

            <div className="b-timeline-wrap">
              <div className="b-tl-grid">
                {[
                  { month: 'Phase 1–2', title: 'Python + Statistics', desc: 'Foundation layer. Python as a second language. Math for ML intuition.' },
                  { month: 'Phase 3–4', title: 'Machine Learning', desc: 'Core ML algorithms, model evaluation, feature engineering.' },
                  { month: 'Phase 5', title: 'Deep Learning', desc: 'Neural networks, CNNs, advanced architectures.' },
                  { month: 'Phase 6', title: 'LLMs + RAG', desc: 'Large language models, prompt engineering, retrieval-augmented generation.' },
                  { month: 'Phase 7', title: 'AI Agents + MCP', desc: 'Autonomous agents, tool calling, Model Context Protocol.' },
                  { month: 'Phase 8–9', title: 'MLOps + Projects', desc: 'Production deployment, CI/CD for ML, capstone portfolio project.' },
                ].map(card => (
                  <div key={card.month} className="b-tl-card">
                    <div className="b-tl-month">{card.month}</div>
                    <h5>{card.title}</h5>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PORTFOLIO PROJECTS */}
            <hr className="b-divider" id="projects" />
            <h2>Recommended AI Portfolio Projects</h2>
            <p>
              Certifications get you past ATS. Projects get you hired. Here are the 6 portfolio projects that consistently
              impress AI engineering hiring managers:
            </p>

            <div className="b-projects-grid">
              {[
                { n: 1, title: 'Customer Churn Prediction', desc: 'End-to-end ML pipeline with feature engineering, model training, and a REST API for inference.' },
                { n: 2, title: 'Enterprise RAG Chatbot', desc: 'Document ingestion, vector DB, LLM integration, and a production-grade API backend.' },
                { n: 3, title: 'AI Resume Screener', desc: 'NLP-powered system that ranks candidates against job descriptions using embeddings.' },
                { n: 4, title: 'Recommendation Engine', desc: 'Collaborative filtering or content-based system deployed with real-time inference API.' },
                { n: 5, title: 'Customer Support AI Agent', desc: 'Autonomous agent with tool calling, MCP integration, and multi-step reasoning.' },
                { n: 6, title: 'End-to-End MLOps Pipeline', desc: 'Production ML system with experiment tracking, model versioning, CI/CD, automated deployment, monitoring, and cloud infrastructure.' },
              ].map(p => (
                <div key={p.n} className="b-proj-card">
                  <div className="b-proj-num">{p.n}</div>
                  <div>
                    <h5>{p.title}</h5>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ACTION PLAN */}
            <hr className="b-divider" id="action" />
            <h2>The Action Plan for Working Professionals</h2>
            <p>
              Here's the good news: <strong>you already have the hardest skills.</strong> You understand software systems,
              production environments, debugging, and teamwork. What you need is to add the AI/ML layer on top of that foundation.
            </p>
            <p>
              The biggest mistake experienced engineers make is starting from scratch — picking up Python tutorials meant for
              college students, learning concepts they already know in different terminology, wasting months before getting to
              what actually matters. The right path is a{' '}
              <strong>structured, experience-aware transition</strong> that respects your existing knowledge and focuses heavily
              on building real AI systems.
            </p>

            <div className="b-callout">
              <p>
                At <strong>Dandes Academy</strong>, our AI & Machine Learning Career Program is built for everyone—from freshers to engineers with 20 years of experience. Starting from the fundamentals, we guide you step by step through Machine Learning, Deep Learning, NLP, Generative AI, Agentic AI, and MLOps in a structured 12-month journey, backed by real industry projects that prepare you for AI careers.
              </p>
            </div>

            {/* INTERNAL LINKS */}
            <div className="b-internal-links">
  <h4>Related AI & Machine Learning Articles</h4>

  <div className="b-il-grid">
    {relatedArticles.map((article) => (
      <Link
        key={article.href}
        href={article.href}
        className="b-il-link"
      >
        {article.title}
      </Link>
    ))}
  </div>
</div>

            {/* FAQ */}
            <hr className="b-divider" id="faq" />
            <h2>Frequently Asked Questions</h2>

            <div className="b-faq-wrap">
              {[
                {
                  q: 'Will AI replace software engineers?',
                  a: 'No. AI will replace engineers who refuse to adapt to AI — just as the web replaced engineers who refused to learn web development. Engineers who add AI skills to their existing expertise become significantly more valuable, not redundant.',
                },
                {
                  q: 'Will AI replace Java developers?',
                  a: 'No. Java developer skills — Spring Boot, microservices, system design, cloud — are the core building blocks of AI systems. The goal is to add AI skills on top of Java expertise, not replace it. Java developers are uniquely positioned for AI engineering roles.',
                },
                {
                  q: 'Is AI Engineering a good career in 2026?',
                  a: 'Absolutely. AI engineering is the fastest-growing engineering discipline in 2026. Demand far outstrips supply across India and globally. Engineers with production AI experience command 40–70% salary premiums over peers without AI skills.',
                },
                {
                  q: 'Can experienced engineers switch to AI?',
                  a: 'Yes — and experienced engineers have a significant advantage. System design, production mindset, debugging skills, and stakeholder communication are all directly transferable. The learning curve for AI tools is far shorter than for someone starting their engineering career from scratch.',
                },
                {
                  q: 'How long does it take to learn AI?',
                  a: 'For an experienced software engineer studying part-time (weekends and evenings), the Dandes 6-step roadmap takes approximately 12 months to complete. Some engineers with strong CS fundamentals complete it in 9 months. Full-time study can compress this to 6 months.',
                },
                {
                  q: 'Do I need Mathematics for AI?',
                  a: 'Yes — but not at a PhD level. You need a working understanding of statistics, probability, linear algebra, and calculus. The Dandes program covers exactly the math you need for AI engineering, nothing more and nothing less, with a practical engineering lens rather than a pure theory approach.',
                },
              ].map(faq => (
                <div key={faq.q} className="b-faq-item">
                  <div className="b-faq-q">{faq.q}</div>
                  <div className="b-faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* WEBINAR CTA */}
          

          {/* AUTHOR BOX */}
          <div className="b-author-box">
            <div className="b-author-avatar">SD</div>
            <div className="b-author-info">
              <h4>Srinivas Dande</h4>
              <div className="b-author-title">Founder &amp; Lead Trainer — Dandes Academy</div>
              <p>
                With over 20 years of training experience, Srinivas has trained 25,000+ engineers and students since 2005 across Java, Full Stack Development, Microservices, Angular, React, AWS, DevOps, Data Structures & Algorithms, and System Design. In recent years, he has also trained 500+ learners in AI & Machine Learning, helping them transition into modern AI careers through a structured, project-based learning approach.
              </p>
              
            </div>
          </div>

          <div className="b-tags-row">
  {[
    'Will AI Replace Software Engineers',
    'AI Career Switch',
    'Software Engineer to AI Engineer',
    'Artificial Intelligence',
    'Machine Learning',
    'Generative AI',
    'Agentic AI',
    'Future of Software Engineering',
    'Career Growth',
    'Dandes Academy'
  ].map((tag, index) => {
    const tagStyle = tagColors[index % tagColors.length];

    return (
      <span
        key={tag}
        className="b-kw-tag"
        style={{
          backgroundColor: tagStyle.bg,
          color: tagStyle.color,
        }}
      >
        {tag}
      </span>
    );
  })}
</div>
        </div>   {/* closes b-container */}
        
        {/* Left Sticky TOC */}
          <div className="b-sidebar">
            <div className="b-toc-box">
              <h3>In this article</h3>
              <ol>
                
                <li><a href="#reality">AI Today: Reality Check</a></li>
                <li><a href="#automate">What AI Can and Cannot Automate</a></li>
                <li><a href="#sysdesign">Why System Design Matters More Than Ever</a></li>
                <li><a href="#java">What This Means for Java Developers</a></li>
                <li><a href="#future">Future-Proof Skills & Learning Timeline</a></li>
                <li><a href="#projects">Recommended AI Portfolio Projects</a></li>
                <li><a href="#action">The Action Plan for Working Professionals</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ol>
            </div>
          </div>

        </div>   {/* closes blog-layout */}
        </div>   {/* closes blog-root */}

      {/* Popup Modal */}
      {modalOpen && (
        <PopupFormModal onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}