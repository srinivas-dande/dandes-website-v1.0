'use client'

import Image from 'next/image'

export function TechStackDiagram() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Image
        src="/images/courses/tech-stack-diagram.png"
        alt="Tech Stack Diagram - DA connected to GitHub, Docker, Python, PyTorch, and LangChain"
        width={520}
        height={560}
        className="w-full h-auto max-w-[520px]"
        priority
      />
    </div>
  )
}
