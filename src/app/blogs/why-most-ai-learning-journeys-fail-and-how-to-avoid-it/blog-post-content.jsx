'use client'

import { useState } from 'react'
import { PopupFormModal } from "@/components/dandes/popup-form-modal"

export function BlogPostContent() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <style>{`
        .b6-root { font-family:'DM Sans',sans-serif; background:#f4f4f6; color:#0f0f0f; line-height:1.75; font-size:17px; }
        .b6-root * { box-sizing:border-box; margin:0; padding:0; }
        /* HERO */
        .b6-hero { background:#042f2e; color:#fff; padding:80px 0 64px; position:relative; overflow:hidden; }
        .b6-hero-glow { position:absolute; top:-60px; right:-80px; width:440px; height:440px; border-radius:50%; background:rgba(15,118,110,0.22); pointer-events:none; }
        .b6-hero-glow2 { position:absolute; bottom:-60px; left:-50px; width:240px; height:240px; border-radius:50%; background:rgba(15,118,110,0.12); pointer-events:none; }
        .b6-layout {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  padding: 0 60px;
}

.b6-container {
  max-width: 760px;
  margin: 0;
  padding: 0;
  flex: 1;
}

.b6-sidebar {
  width: 320px;
  position: sticky;
  top: 100px;
  align-self: flex-start;
}

@media (max-width: 1024px) {
  .b6-layout {
    display: block;
    padding: 0 20px;
  }

  .b6-sidebar {
    display: none;
  }
}
        .b6-tag { display:inline-block; background:#0f766e; color:#fff; font-size:11px; font-weight:700; letter-spacing:1.8px; text-transform:uppercase; padding:5px 16px; border-radius:2px; margin-bottom:22px; }
        .b6-hero h1 { font-family:'Playfair Display',serif; font-size:clamp(30px,5vw,50px); font-weight:900; line-height:1.1; letter-spacing:-0.5px; margin-bottom:18px; }
        .b6-hero h1 em { color:#5eead4; font-style:normal; }
        .b6-hero-sub { font-size:18px; color:rgba(255,255,255,0.82); max-width:580px; line-height:1.65; margin-bottom:28px; }
        .b6-hero-sub strong { color:#5eead4; }
        .b6-hero-meta { display:flex; align-items:center; gap:18px; font-size:13px; color:rgba(255,255,255,0.5); flex-wrap:wrap; }
        .b6-read-time { background:rgba(255,255,255,0.12); padding:4px 12px; border-radius:20px; font-weight:500; color:rgba(255,255,255,0.8); }
        /* TOC */
        .b6-toc-box { background:#f0fdf9; border-left:4px solid #0f766e; border-radius:0 6px 6px 0; padding:24px 28px; margin:40px 0; }
        .b6-toc-box h3 { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#0f766e; margin-bottom:14px; }
        .b6-toc-box ol { padding-left:18px; }
        .b6-toc-box li { font-size:15px; color:#042f2e; margin-bottom:8px; font-weight:500; }
        .b6-toc-box li a { color:#042f2e; text-decoration:none; }
        .b6-toc-box li a:hover { text-decoration:underline; }
        /* BODY */
        .b6-article-body { padding:48px 0; }
        .b6-article-body h2 { font-family:'Playfair Display',serif; font-size:28px; font-weight:700; color:#0f0f0f; margin:52px 0 18px; line-height:1.25; }
        .b6-article-body p { margin-bottom:20px; color:#4a4a4a; }
        .b6-article-body strong { color:#0f0f0f; font-weight:600; }
        .b6-divider { border:none; border-top:1px solid #d5e8e6; margin:44px 0; }
        /* FOUNDER NOTE */
        .b6-founder-note { background:#042f2e; color:#fff; border-radius:12px; padding:32px 36px; margin:36px 0; }
        .b6-fn-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.12); padding:6px 14px; border-radius:20px; font-size:12px; font-weight:600; letter-spacing:.8px; text-transform:uppercase; margin-bottom:18px; color:rgba(255,255,255,0.85); }
        .b6-founder-note h4 { font-family:'Playfair Display',serif; font-size:20px; font-weight:700; color:#fff; margin-bottom:14px; }
        .b6-fn-body { font-size:15px; color:rgba(255,255,255,0.85); line-height:1.8; }
        .b6-fn-body p { color:rgba(255,255,255,0.85); margin-bottom:12px; }
        .b6-fn-sig { margin-top:20px; display:flex; align-items:center; gap:14px; border-top:1px solid rgba(255,255,255,0.15); padding-top:16px; }
        .b6-fn-avatar { width:44px; height:44px; border-radius:50%; background:rgba(94,234,212,0.2); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:16px; color:#5eead4; flex-shrink:0; }
        .b6-fn-name { font-size:14px; font-weight:600; color:#fff; }
        .b6-fn-title { font-size:13px; color:rgba(255,255,255,0.6); }
        /* STAT OPENER */
        .b6-stat-opener { background:#f0fdf9; border:1px solid #d5e8e6; border-radius:12px; padding:28px 32px; margin:28px 0; text-align:center; }
        .b6-big-num { font-family:'Playfair Display',serif; font-size:72px; font-weight:900; color:#0f766e; line-height:1; }
        .b6-stat-opener p { font-size:17px; color:#4a4a4a; margin:10px auto 0; max-width:480px; }
        /* FAILURE CARDS */
        .b6-failure-grid { display:grid; grid-template-columns:1fr; gap:0; margin:28px 0; border:1px solid #d5e8e6; border-radius:12px; overflow:hidden; }
        .b6-fail-card { padding:24px 28px; border-bottom:1px solid #d5e8e6; display:flex; gap:20px; align-items:flex-start; }
        .b6-fail-card:last-child { border-bottom:none; }
        .b6-fail-card.alt { background:#fef9f9; }
        .b6-fail-num { min-width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:17px; flex-shrink:0; font-family:'Playfair Display',serif; background:#fde8e8; color:#991b1b; border:2px solid #fca5a5; }
        .b6-fail-content h4 { font-size:16px; font-weight:700; color:#7f1d1d; margin-bottom:6px; }
        .b6-fail-content p { font-size:14px; color:#4a4a4a; margin-bottom:10px; line-height:1.6; }
        .b6-fix-tag { display:inline-block; background:#f0fdf9; border:1px solid #99f6e4; color:#065f46; font-size:12px; font-weight:700; padding:4px 14px; border-radius:12px; }
        .b6-pattern-tag { display:inline-block; background:#fef2f2; border:1px solid #fca5a5; color:#991b1b; font-size:11px; font-weight:700; letter-spacing:.8px; text-transform:uppercase; padding:3px 10px; border-radius:10px; margin-bottom:10px; }
        /* TIMELINE COMPARE */
        .b6-timeline-compare { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:28px 0; }
        .b6-tc-card { border-radius:10px; padding:20px 22px; }
        .b6-tc-card.bad { background:#fef9f9; border:1px solid #fca5a5; }
        .b6-tc-card.good { background:#f0fdf9; border:1px solid #99f6e4; }
        .b6-tc-card h4 { font-size:15px; font-weight:700; margin-bottom:14px; }
        .b6-tc-card.bad h4 { color:#7f1d1d; }
        .b6-tc-card.good h4 { color:#065f46; }
        .b6-tc-month { display:flex; align-items:flex-start; gap:12px; margin-bottom:10px; }
        .b6-tc-dot { width:10px; height:10px; border-radius:50%; flex-shrink:0; margin-top:5px; }
        .bad .b6-tc-dot { background:#fca5a5; }
        .good .b6-tc-dot { background:#5eead4; }
        .b6-tc-month p { font-size:14px; color:#4a4a4a; margin-bottom:0; line-height:1.5; }
        /* SUCCESS STEPS */
        .b6-success-steps { margin:28px 0; }
        .b6-ss-item { display:flex; gap:16px; margin-bottom:20px; align-items:flex-start; }
        .b6-ss-icon { width:40px; height:40px; border-radius:10px; background:#f0fdf9; border:1px solid #99f6e4; display:flex; align-items:center; justify-content:center; font-size:18px; flex-shrink:0; }
        .b6-ss-content h4 { font-size:15px; font-weight:700; color:#042f2e; margin-bottom:4px; }
        .b6-ss-content p { font-size:14px; color:#888; margin-bottom:0; line-height:1.5; }
        /* ROADMAP */
        .b6-roadmap-wrap { margin:36px 0; }
        .b6-step-card { border-radius:12px; margin-bottom:16px; overflow:hidden; border:1px solid #d5e8e6; }
        .b6-step-header { display:flex; align-items:center; gap:16px; padding:20px 24px; }
        .b6-step-badge { min-width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:16px; flex-shrink:0; font-family:'Playfair Display',serif; }
        .b6-step-title { flex:1; }
        .b6-step-title h4 { font-size:17px; font-weight:700; margin-bottom:2px; }
        .b6-step-title span { font-size:13px; font-weight:400; }
        .b6-step-outcome { font-size:12px; font-weight:600; letter-spacing:.8px; text-transform:uppercase; padding:3px 12px; border-radius:20px; white-space:nowrap; }
        .b6-step-body { padding:4px 24px 22px 84px; }
        .b6-step-body ul { list-style:none; padding:0; display:grid; grid-template-columns:1fr 1fr; gap:6px 16px; }
        .b6-step-body li { font-size:14px; color:#4a4a4a; display:flex; align-items:baseline; gap:7px; }
        .b6-step-body li::before { content:'→'; font-weight:700; flex-shrink:0; }
        .b6-mcp-row { background:#fef3e2; border-radius:6px; padding:4px 10px; margin:-4px -10px; }
        .b6-mcp-tag { display:inline-block; background:#fac775; color:#633806; font-size:10px; font-weight:700; letter-spacing:.8px; text-transform:uppercase; padding:1px 7px; border-radius:10px; margin-left:6px; vertical-align:middle; }
        .b6-step-insight { margin-top:14px; font-size:14px; font-weight:600; padding:10px 14px; border-radius:6px; }
        .b6-s1 .b6-step-header{background:#f0faf4;} .b6-s1 .b6-step-badge{background:#a8dcbc;color:#0d4a22;} .b6-s1 .b6-step-title h4{color:#0d4a22;} .b6-s1 .b6-step-title span{color:#3a8a5a;} .b6-s1 .b6-step-outcome{background:#a8dcbc;color:#0d4a22;} .b6-s1 .b6-step-body li::before{color:#1a6b3c;} .b6-s1 .b6-step-insight{background:#e4f5eb;color:#0d4a22;}
        .b6-s2 .b6-step-header{background:#e8f0fb;} .b6-s2 .b6-step-badge{background:#b5d4f4;color:#0c447c;} .b6-s2 .b6-step-title h4{color:#0c447c;} .b6-s2 .b6-step-title span{color:#185fa5;} .b6-s2 .b6-step-outcome{background:#b5d4f4;color:#0c447c;} .b6-s2 .b6-step-body li::before{color:#185fa5;} .b6-s2 .b6-step-insight{background:#e4eef8;color:#0c447c;}
        .b6-s3 .b6-step-header{background:#f0edfb;} .b6-s3 .b6-step-badge{background:#cec8f4;color:#3c3489;} .b6-s3 .b6-step-title h4{color:#3c3489;} .b6-s3 .b6-step-title span{color:#534ab7;} .b6-s3 .b6-step-outcome{background:#cec8f4;color:#3c3489;} .b6-s3 .b6-step-body li::before{color:#534ab7;} .b6-s3 .b6-step-insight{background:#eeecfb;color:#3c3489;}
        .b6-s4 .b6-step-header{background:#fef6e8;} .b6-s4 .b6-step-badge{background:#fac775;color:#633806;} .b6-s4 .b6-step-title h4{color:#633806;} .b6-s4 .b6-step-title span{color:#854f0b;} .b6-s4 .b6-step-outcome{background:#fac775;color:#633806;} .b6-s4 .b6-step-body li::before{color:#ba7517;} .b6-s4 .b6-step-insight{background:#fef0d6;color:#633806;}
        .b6-s5 .b6-step-header{background:#fef6e8;} .b6-s5 .b6-step-badge{background:#fac775;color:#633806;} .b6-s5 .b6-step-title h4{color:#633806;} .b6-s5 .b6-step-title span{color:#854f0b;} .b6-s5 .b6-step-outcome{background:#fac775;color:#633806;} .b6-s5 .b6-step-body li::before{color:#ba7517;} .b6-s5 .b6-step-insight{background:#fef0d6;color:#633806;}
        .b6-s6 .b6-step-header{background:#fdeaea;} .b6-s6 .b6-step-badge{background:#f09595;color:#791f1f;} .b6-s6 .b6-step-title h4{color:#791f1f;} .b6-s6 .b6-step-title span{color:#a32d2d;} .b6-s6 .b6-step-outcome{background:#f09595;color:#791f1f;} .b6-s6 .b6-step-body li::before{color:#a32d2d;} .b6-s6 .b6-step-insight{background:#fce8e8;color:#791f1f;}
        /* PROJECTS */
        .b6-projects-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin:28px 0; }
        .b6-proj-card { background:#fff; border:1px solid #d5e8e6; border-radius:10px; padding:18px 20px; display:flex; gap:14px; align-items:flex-start; }
        .b6-proj-num { width:32px; height:32px; border-radius:50%; background:#042f2e; color:#fff; font-weight:700; font-size:14px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .b6-proj-card h5 { font-size:15px; font-weight:600; color:#0f0f0f; margin-bottom:4px; }
        .b6-proj-card p { font-size:13px; color:#888; margin-bottom:0; }
        /* CALLOUT */
        .b6-callout { background:#0f766e; color:#fff; border-radius:10px; padding:28px 32px; margin:36px 0; }
        .b6-callout strong { color:#5eead4; }
        .b6-callout p { color:rgba(255,255,255,0.85); margin-bottom:0; }
        /* QUOTE */
        .b6-quote-block { border-left:4px solid #0f766e; padding:18px 24px; margin:36px 0; background:#fff; border-radius:0 8px 8px 0; }
        .b6-quote-block p { font-family:'Playfair Display',serif; font-size:20px; font-style:italic; color:#0f0f0f; margin-bottom:6px; }
        .b6-quote-block cite { font-size:13px; color:#888; }
        /* INTERNAL LINKS */
        .b6-internal-links { background:#f0fdf9; border-radius:10px; padding:22px 26px; margin:28px 0; }
        .b6-internal-links h4 { font-size:13px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#042f2e; margin-bottom:12px; }
        .b6-il-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
        .b6-il-link { display:flex; align-items:center; gap:8px; font-size:14px; color:#042f2e; font-weight:500; text-decoration:none; padding:6px 0; }
        .b6-il-link:hover { text-decoration:underline; }
        .b6-il-link::before { content:'→'; color:#0f766e; font-weight:700; }
        /* FAQ */
        .b6-faq-wrap { margin:28px 0; }
        .b6-faq-item { background:#fff; border:1px solid #d5e8e6; border-radius:10px; padding:22px 24px; margin-bottom:12px; }
        .b6-faq-q { font-size:16px; font-weight:700; color:#042f2e; margin-bottom:10px; display:flex; align-items:flex-start; gap:10px; }
        .b6-faq-q::before { content:'Q'; background:#042f2e; color:#fff; min-width:24px; height:24px; border-radius:50%; font-size:12px; font-weight:700; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px; }
        .b6-faq-a { font-size:15px; color:#4a4a4a; padding-left:34px; line-height:1.7; }
        /* CTA */
        .b6-cta-box { background:#042f2e; border-radius:16px; padding:44px 40px; margin:56px 0; text-align:center; color:#fff; }
        .b6-cta-eyebrow { font-size:12px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:rgba(255,255,255,0.6); margin-bottom:10px; }
        .b6-cta-box h2 { font-family:'Playfair Display',serif; font-size:30px; margin-bottom:6px; color:#fff; margin-top:0; }
        .b6-cta-sub { font-size:15px; color:rgba(255,255,255,0.65); margin-bottom:24px; }
        .b6-webinar-list { display:inline-flex; flex-direction:column; gap:8px; text-align:left; margin-bottom:28px; }
        .b6-webinar-item { display:flex; align-items:center; gap:10px; font-size:15px; color:rgba(255,255,255,0.88); }
        .b6-webinar-item::before { content:'✓'; background:#1a6b3c; color:#fff; width:20px; height:20px; border-radius:50%; font-size:11px; font-weight:700; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .b6-cta-btn { display:inline-block; background:#0f766e; color:#fff; font-size:16px; font-weight:700; padding:16px 44px; border-radius:6px; letter-spacing:0.3px; border:none; cursor:pointer; }
        .b6-cta-btn:hover { background:#0d9488; }
        .b6-cta-note { font-size:12px; color:rgba(255,255,255,0.4); margin-top:12px; }
        /* AUTHOR */
        .b6-author-box { background:#fff; border:1px solid #d5e8e6; border-radius:12px; padding:28px 32px; margin:48px 0; display:flex; gap:24px; align-items:flex-start; }
        .b6-author-avatar { width:64px; height:64px; border-radius:50%; background:#042f2e; color:#fff; font-family:'Playfair Display',serif; font-size:22px; font-weight:700; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .b6-author-info h4 { font-size:17px; font-weight:700; color:#0f0f0f; margin-bottom:2px; }
        .b6-author-title { font-size:14px; color:#0f766e; font-weight:600; margin-bottom:10px; }
        .b6-author-info p { font-size:14px; color:#4a4a4a; margin-bottom:0; }
        .b6-author-tags { display:flex; flex-wrap:wrap; gap:8px; margin-top:10px; }
        .b6-author-tag { background:#f0fdf9; border:1px solid #99f6e4; color:#042f2e; font-size:13px; font-weight:600; padding:3px 12px; border-radius:20px; }
        .b6-linkedin-btn { display:inline-flex; align-items:center; gap:6px; background:#0a66c2; color:#fff; font-size:13px; font-weight:600; padding:6px 16px; border-radius:6px; text-decoration:none; margin-top:12px; }
        .b6-tags-row { display:flex; flex-wrap:wrap; gap:8px; margin:36px 0 20px; }
        .b6-kw-tag { background:#fff; border:1px solid #d5e8e6; color:#4a4a4a; font-size:13px; padding:4px 14px; border-radius:20px; }
        @media(max-width:600px) {
          .b6-timeline-compare, .b6-projects-grid, .b6-il-grid { grid-template-columns:1fr; }
          .b6-step-body ul { grid-template-columns:1fr; }
          .b6-cta-box { padding:32px 20px; }
          .b6-author-box { flex-direction:column; }
          .b6-step-outcome { display:none; }
          .b6-fail-card { flex-direction:column; }
        }
      `}</style>

      <div className="b6-root">

        <div className="b6-layout">

        <div className="b6-container">

          {/* TOC */}
          

          <div className="b6-article-body">

            <p>Every month, hundreds of experienced engineers in India start an AI learning journey. They buy courses, join bootcamps, watch YouTube playlists. And most of them — <strong>the vast majority</strong> — are in exactly the same position 6 months later as they were when they started. No job. No projects. No clarity.</p>
            <p>This isn't a talent problem. It's a pattern problem. And patterns can be identified, understood, and avoided.</p>

            {/* FOUNDER NOTE */}
            

            {/* HARD TRUTH */}
            <hr className="b6-divider" id="reality" />
            <h2>The Hard Truth About AI Learning</h2>

            <div className="b6-stat-opener">
              <div className="b6-big-num">73%</div>
              <p>of engineers who start self-directed AI learning abandon it within 6 months without completing a single production-grade project, based on our observations from mentoring working professionals.</p>
            </div>

            <p>The problem is not the engineers. The problem is the approach. AI/ML is a multi-disciplinary domain that requires <strong>structured progression</strong>, not random exploration. Yet most learning journeys are exactly that — random. A YouTube video here, a Coursera course there, a Udemy discount purchase that sits unwatched.</p>

            <div className="b6-quote-block">
              <p>"Most people who fail at learning AI don't fail because it is too hard. They fail because they never had a clear map of where they were going."</p>
              <cite>— Srinivas Dande, Founder, Dandes Academy</cite>
            </div>

            {/* 8 FAILURE PATTERNS */}
            <hr className="b6-divider" id="failures" />
            <h2>8 Failure Patterns We See Every Month</h2>
            <p>These are not hypothetical. These are the specific, recurring patterns we observe in engineers who come to us after months of going in circles:</p>

            <div className="b6-failure-grid">
              {[
                { n: 1, alt: false, tag: 'Most Common', title: 'The Random Tool Collector', body: 'Learns Python one week, then TensorFlow, then LangChain, then Spark, then Docker — with no structure connecting them. After 6 months, knows a surface level of 10 tools and the fundamentals of none of them. Job applications fail because no skill is deep enough to pass an interview.', fix: 'Fix: Complete each level of a structured roadmap before moving to the next' },
                { n: 2, alt: true, tag: 'Very Common', title: 'The Tutorial Addict', body: 'Watches 200 hours of YouTube content, takes 6 Udemy courses, reads 50 Medium articles — but builds absolutely nothing. Feels productive because learning is happening, but has zero projects to show a hiring manager. Knowledge without output is not a skill.', fix: 'Fix: For every 1 hour of content consumed, spend 2 hours building' },
                { n: 3, alt: false, tag: 'Very Common', title: 'The Statistics Skipper', body: "Skips the math and statistics foundation to get to the exciting stuff faster. Can call model.fit() but cannot explain what it does, why the model is failing, or how to evaluate results properly. Gets exposed immediately in technical interviews.", fix: 'Fix: Treat statistics as a non-negotiable foundation, not an optional extra' },
                { n: 4, alt: true, tag: 'Common', title: 'The Notebook Engineer', body: 'Builds beautiful Jupyter notebooks with clean visualisations and working models — that run only on their local laptop. Has never deployed a model, built a REST API around one, or monitored one in production. Hiring managers from engineering backgrounds see straight through this.', fix: 'Fix: Every project must be deployed with an API and a public GitHub repo' },
                { n: 5, alt: false, tag: 'Common', title: 'The Certification Collector', body: 'Completes 8 certifications from Coursera, Google, AWS, and Udemy. Lists them all on LinkedIn and their CV. Gets filtered out before the interview stage because certifications without projects demonstrate that you followed instructions, not that you can build things.', fix: 'Fix: One deployed project outweighs ten certifications every single time' },
                { n: 6, alt: true, tag: 'Common', title: 'The Lone Learner', body: 'Studies entirely alone, with no community, no mentorship, no accountability, and no one to course-correct when they go down rabbit holes. Spends weeks on topics that are fascinating but irrelevant to their target role. No external feedback means no calibration.', fix: 'Fix: Join a structured cohort with mentors who have made the transition themselves' },
                { n: 7, alt: false, tag: 'Underestimated', title: 'The Scope Underestimator', body: 'Assumes AI/ML can be learned in 4–6 weeks from YouTube. When reality sets in that it requires 6–9 months of structured, consistent effort, they feel they have failed and quit — even if they are making excellent progress by any realistic standard.', fix: 'Fix: Set realistic expectations from day one — 6 to 9 months part-time is the honest timeline' },
                { n: 8, alt: true, tag: 'Critical', title: 'The Perpetual Preparer', body: `Waits until they feel completely ready before starting to apply or build projects. "I'll apply when I finish this next course." "I'll build a project after I learn one more concept." This cycle never ends. Readiness comes from doing, not from waiting.`, fix: 'Fix: Start building at Step 2. Start applying at Step 4. Don\'t wait for Step 6' },
              ].map(item => (
                <div key={item.n} className={`b6-fail-card${item.alt ? ' alt' : ''}`}>
                  <div className="b6-fail-num">{item.n}</div>
                  <div className="b6-fail-content">
                    <span className="b6-pattern-tag">{item.tag}</span>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                    <span className="b6-fix-tag">✓ {item.fix}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* COMPARE */}
            <hr className="b6-divider" id="compare" />
            <h2>The Failing Journey vs The Successful Journey</h2>
            <p>Here is what 6 months looks like for two different engineers who both started with the same motivation and the same experience level:</p>

            <div className="b6-timeline-compare">
              <div className="b6-tc-card bad">
                <h4>✗ The Failing Journey</h4>
                {[
                  ['Month 1–2:', 'Python course. Feels good. Moves to another Python course.'],
                  ['Month 3:', 'Tries TensorFlow tutorial. Too hard without stats. Switches to LangChain. Builds a chatbot that barely works.'],
                  ['Month 4:', 'Buys 3 more Udemy courses. Watches them at 1.5x speed. Builds nothing.'],
                  ['Month 5:', "Applies for AI roles. Gets rejected. Doesn't know why."],
                  ['Month 6:', 'Considers giving up. Feels 6 months have been wasted. Back to square one.'],
                ].map(([month, text]) => (
                  <div key={month} className="b6-tc-month">
                    <div className="b6-tc-dot" />
                    <p><strong>{month}</strong> {text}</p>
                  </div>
                ))}
              </div>
              <div className="b6-tc-card good">
                <h4>✓ The Successful Journey</h4>
                {[
                  ['Month 1–2:', 'Python + statistics foundation. Builds first mini-projects in Python.'],
                  ['Month 3–4:', 'ML algorithms, model evaluation. Builds a deployed churn prediction API on GitHub.'],
                  ['Month 5:', 'LLMs, RAG, AI agents. Builds and deploys a RAG chatbot. Starts applying.'],
                  ['Month 6:', 'MLOps, capstone project. 2 portfolio projects deployed. First interviews coming in.'],
                  ['Month 7–9:', 'Offer in hand. Career transition complete.'],
                ].map(([month, text]) => (
                  <div key={month} className="b6-tc-month">
                    <div className="b6-tc-dot" />
                    <p><strong>{month}</strong> {text}</p>
                  </div>
                ))}
              </div>
            </div>

            <p>The difference is not intelligence or dedication. <strong>The difference is structure, mentorship, and a clear path.</strong></p>

            {/* SUCCESS */}
            <hr className="b6-divider" id="success" />
            <h2>What a Successful AI Learning Journey Looks Like</h2>
            <p>Based on the engineers who have successfully transitioned at Dandes Academy, here are the common traits of a journey that works:</p>

            <div className="b6-success-steps">
              {[
                { icon: '🎯', title: 'A clear target role from day one', body: 'They know whether they are targeting AI Engineer, ML Engineer, or another role before they start. This determines what they study, which projects they build, and which interviews they prepare for.' },
                { icon: '📚', title: 'A structured roadmap they follow sequentially', body: 'They do not skip steps. They do not jump ahead because something looks exciting. They trust the sequence because they understand why each step is prerequisite to the next.' },
                { icon: '🧑‍💻', title: 'A mentor who has made the same transition', body: 'Not a content creator. Not a university professor. Someone who was a software engineer, transitioned into AI, and can tell them exactly what to do, what to skip, and what a hiring manager actually looks for.' },
                { icon: '💻', title: 'Production projects, not notebook experiments', body: 'Every project they build is deployed, has a REST API, has a GitHub repo with a proper README, and demonstrates end-to-end thinking — not just model training in a notebook.' },
                { icon: '👥', title: 'A cohort for accountability and peer learning', body: 'They are not learning alone. They have peers at the same stage, who ask the same questions, who push them when momentum dips, and who share wins that keep motivation alive.' },
              ].map(item => (
                <div key={item.title} className="b6-ss-item">
                  <div className="b6-ss-icon">{item.icon}</div>
                  <div className="b6-ss-content">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="b6-callout">
              <p><strong>The Dandes Difference:</strong> Every one of these success traits is built into our program by design. Structured 6-step roadmap. Mentors who made the transition. Production-grade capstone projects. Weekend cohorts for accountability. You don't have to assemble these yourself — they come together.</p>
            </div>

            {/* ROADMAP */}
            <hr className="b6-divider" id="roadmap" />
            <h2>The Dandes 6-Step AI/ML Roadmap</h2>
            <p>This is the structured path that eliminates every failure pattern described above. It is sequential, complete, and designed specifically for working professionals:</p>

            <div className="b6-roadmap-wrap">
              {[
                { cls: 'b6-s1', n: 1, title: 'Build Strong Foundation', sub: 'Python · SQL · Mathematics · EDA', outcome: 'Non-negotiable', items: ['Python Fundamentals', 'Python for ML & Data Science', 'SQL & Data Modeling', 'Mathematics for ML', 'Exploratory Data Analysis', 'Statistics for ML'], insight: "Eliminates the Statistics Skipper pattern. You cannot skip this step in the Dandes program. The math foundation here is what makes everything from Step 2 onwards click instead of confuse." },
                { cls: 'b6-s2', n: 2, title: 'Become a Strong ML Engineer', sub: 'ML · Deep Learning · NLP', outcome: 'Build prediction systems', items: ['Machine Learning Foundation', 'Advanced Machine Learning', 'Deep Learning', 'Advanced Deep Learning', 'Natural Language Processing', 'Model Evaluation & Selection'], insight: 'Eliminates the Random Tool Collector pattern. By the end of this step, you have deep ML knowledge — not surface-level familiarity with 10 tools. You build your first real deployed project here.' },
                { cls: 'b6-s3', n: 3, title: 'Modern AI with Generative AI', sub: 'LLMs · RAG · Fine-Tuning · Chatbots', outcome: 'Understand modern AI architecture', items: ['Foundations of Generative AI', 'Prompt Engineering Techniques', 'Working with OpenAI & HuggingFace', 'Retrieval Augmented Generation (RAG)', 'LLMs & Fine-Tuning', 'Building AI Assistants & Chatbots'], insight: 'Eliminates the Notebook Engineer pattern. RAG chatbots and AI assistants must be deployed to be portfolio-worthy. Every project at this step ends with a deployed, accessible system.' },
                { cls: 'b6-s5', n: 5, title: 'Production & MLOps', sub: 'Deployment · Docker · CI/CD · Monitoring', outcome: 'Scalable production ML', items: ['Model Deployment Strategies', 'REST APIs for ML Models', 'Docker & Containerization', 'CI/CD for ML Systems', 'Model Monitoring & Logging', 'Scalable Production ML Systems'], insight: 'Eliminates the Notebook Engineer pattern permanently. After this step, every AI system you build is production-grade by default. For software engineers, this step is the fastest — you already know most of it.' },
                { cls: 'b6-s6', n: 6, title: 'Capstone Project & Interview Prep', sub: 'End-to-End AI System · Resume · Mock Interviews', outcome: 'Industry-ready', items: ['Build a complete end-to-end AI system', 'Data → Model → Deployment → Application', 'System design for AI systems', 'Resume building for AI roles', 'Mock technical interviews', 'Portfolio & GitHub optimisation'], insight: 'Eliminates the Certification Collector and Perpetual Preparer patterns. You graduate with deployed projects, a tailored resume, and mock interview experience. You are ready to apply from a position of strength.' },
              ].map(step => (
                <div key={step.n} className={`b6-step-card ${step.cls}`}>
                  <div className="b6-step-header">
                    <div className="b6-step-badge">{step.n}</div>
                    <div className="b6-step-title"><h4>{step.title}</h4><span>{step.sub}</span></div>
                    <span className="b6-step-outcome">{step.outcome}</span>
                  </div>
                  <div className="b6-step-body">
                    <ul>{step.items.map(i => <li key={i}>{i}</li>)}</ul>
                    <p className="b6-step-insight">{step.insight}</p>
                  </div>
                </div>
              ))}

              {/* Step 4 with MCP */}
              <div className="b6-step-card b6-s4">
                <div className="b6-step-header">
                  <div className="b6-step-badge">4</div>
                  <div className="b6-step-title"><h4>Modern AI with Agentic AI</h4><span>AI Agents · MCP · LangChain · LangGraph</span></div>
                  <span className="b6-step-outcome">Real-world agent use cases</span>
                </div>
                <div className="b6-step-body">
                  <ul>
                    <li>AI Agents Architecture</li>
                    <li>Tool Calling &amp; Function Calling</li>
                    <li className="b6-mcp-row">
                      <strong style={{ color: '#633806' }}>MCP — Model Context Protocol</strong>
                      <span className="b6-mcp-tag">New 2026</span>
                    </li>
                    <li>Multi-Step Reasoning Systems</li>
                    <li>AI Workflow Automation</li>
                    <li>Building Autonomous AI Assistants</li>
                    <li>Agent Frameworks — LangChain / LangGraph</li>
                  </ul>
                  <p className="b6-step-insight">The step most self-learners never reach because they burn out before getting here. Reaching Step 4 in a structured program with mentors is far more likely than reaching it alone after 6 months of YouTube.</p>
                </div>
              </div>
            </div>

            {/* PROJECTS */}
            <hr className="b6-divider" id="projects" />
            <h2>Recommended Portfolio Projects</h2>
            <p>These 5 projects are the antidote to the Notebook Engineer pattern. Every one of them must be deployed, documented, and accessible. That is what turns a learning exercise into a career asset:</p>

            <div className="b6-projects-grid">
              {[
                { n: 1, title: 'Customer Churn Prediction', desc: 'ML pipeline with feature engineering, model training, evaluation, and a deployed REST inference API.' },
                { n: 2, title: 'Enterprise RAG Chatbot', desc: 'Document ingestion, vector DB, LLM integration, production-grade API backend. Deployed and accessible.' },
                { n: 3, title: 'AI Resume Screener', desc: 'NLP-powered candidate ranking system using embeddings and similarity search, with a working API.' },
                { n: 4, title: 'Recommendation Engine', desc: 'Collaborative filtering system with real-time inference API. Shows end-to-end ML thinking.' },
                { n: 5, title: 'AI Agent for Customer Support', desc: 'Autonomous agent with MCP tool integration, multi-step reasoning, and full deployment.' },
                { n: 6, title: 'End-to-End MLOps Pipeline', desc: 'Production ML system with experiment tracking, model versioning, CI/CD, automated deployment, monitoring, and cloud infrastructure.' },
              ].map(p => (
                <div key={p.n} className="b6-proj-card">
                  <div className="b6-proj-num">{p.n}</div>
                  <div><h5>{p.title}</h5><p>{p.desc}</p></div>
                </div>
              ))}
            </div>

            {/* INTERNAL LINKS */}
            <div className="b6-internal-links">
              <h4>Continue Reading</h4>
              <div className="b6-il-grid">
                {['Will AI Replace Software Engineers?', 'Java Developer to AI Engineer', "Why Python Alone Won't Make You an AI Engineer", 'AI Engineer vs Data Scientist', 'Software Engineer to AI/ML', 'MCP Explained'].map(l => (
                  <a key={l} href="#" className="b6-il-link">{l}</a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <hr className="b6-divider" id="faq" />
            <h2>Frequently Asked Questions</h2>
            <div className="b6-faq-wrap">
              {[
                { q: 'Why do most self-directed AI learners fail?', a: 'The most common reasons are lack of structure (learning random topics in random order), lack of mentorship (no one to course-correct when they go wrong), and lack of output (watching content without building projects). All three compound each other — no structure means wasted time, no mentorship means wasted effort, and no output means no portfolio when it is time to apply.' },
                { q: 'How long does it realistically take to become an AI engineer?', a: 'For an experienced software engineer studying part-time with a structured program, 6–9 months is realistic. Self-directed learners without mentorship often take 12–18 months and frequently do not reach a hireable level at all. The difference is almost entirely in the quality of the structure and guidance, not in hours invested.' },
                { q: 'Is it too late to start learning AI in 2026?', a: 'No. In fact, 2026 is an excellent time to start. The tooling has matured, the demand is at an all-time high, and the AI market is still relatively early for production engineering roles. The engineers who start in 2026 and complete a structured transition will be well-positioned for the next 5–10 years of AI growth.' },
                { q: 'What is the single most important thing that separates successful AI learners?', a: 'Building production projects consistently throughout the learning journey, not just at the end. Engineers who deploy real systems from Month 3 onwards develop problem-solving intuition that no course or certification can provide. They also have something to show in interviews, which is what actually converts to offers.' },
                { q: 'Can I learn AI while working full-time?', a: 'Yes — but only with a structured program designed for it. Self-directed learning while working full-time is extremely difficult because there is no external accountability and it is very easy to let weeks slip by without progress. Weekend and evening cohorts with peer accountability change this dynamic completely.' },
                { q: 'How do I know if the Dandes program is right for me?', a: 'If you are an experienced software engineer with 5+ years of experience who wants to add AI/ML skills without quitting your job, the Dandes program is designed for you. The free webinar and 1:1 career session are the best starting points — they give you a personalised assessment of your current skills against the 6-step roadmap and an honest recommendation on your next steps.' },
              ].map(faq => (
                <div key={faq.q} className="b6-faq-item">
                  <div className="b6-faq-q">{faq.q}</div>
                  <div className="b6-faq-a">{faq.a}</div>
                </div>
              ))}
            </div>

          </div>

          {/* CTA */}
          

          {/* AUTHOR */}
          <div className="b6-author-box">
            <div className="b6-author-avatar">SD</div>
            <div className="b6-author-info">
              <h4>Srinivas Dande</h4>
              <div className="b6-author-title">Founder &amp; Lead Trainer — Dandes Academy</div>
              <p>20+ years in software engineering across enterprise systems, cloud architecture, and AI. Trained 25000+ working professionals. Specialises in helping experienced engineers make structured, high-ROI career transitions into AI roles.</p>
              <div className="b6-author-tags">
                {['✓ 20+ Years Experience', '✓ AI/ML Mentor', '✓ System Design Trainer', '✓ Mentor to Working Professionals'].map(t => (
                  <span key={t} className="b6-author-tag">{t}</span>
                ))}
              </div>
              
            </div>
          </div>

          <div className="b6-tags-row">
            {['#AILearning', '#AICareerSwitch', '#LearnAI2026', '#MLEngineer', '#AIRoadmap', '#DandesAcademy'].map(t => (
              <span key={t} className="b6-kw-tag">{t}</span>
            ))}
          </div>

        </div>

        <div className="b6-toc-box">
            <h3>In this article</h3>
            <ol>
              {[
                
                ['The Hard Truth About AI Learning', '#reality'],
                ['8 Failure Patterns We See Every Month', '#failures'],
                ['The Failing Journey vs The Successful Journey', '#compare'],
                ['What a Successful AI Learning Journey Looks Like', '#success'],
                ['The Dandes 6-Step AI/ML Roadmap', '#roadmap'],
                ['Recommended Portfolio Projects', '#projects'],
                ['Frequently Asked Questions', '#faq'],
              ].map(([label, href]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ol>
          </div>

        </div>
      </div>

      {modalOpen && <PopupFormModal onClose={() => setModalOpen(false)} />}
    </>
  )
}