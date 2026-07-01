"use client"
import Image from "next/image"

export function LiveClassesSection() {
  const features = [
  {
    image: "/icons/liveclass.png",
    iconBg: "bg-emerald-50",
    title: "Live Instructor-Led Classes",
    description:
      "Learn directly from experienced instructors through interactive live sessions, where concepts are explained step by step and your questions are answered in real time."
  },
  {
    image: "/icons/lms-recording.png",
    iconBg: "bg-orange-50",
    title: "5-Year LMS & Class Recordings",
    description:
      "Never miss your learning. Rewatch recorded sessions anytime and access course materials through our LMS for up to 5 years."
  },
  {
    image: "/icons/practice-skill.png",
    iconBg: "bg-purple-50",
    title: "Hands-On Practice & Assignments",
    description:
      "Strengthen your skills through practical assignments, guided exercises, and real-world projects that prepare you for technical interviews and industry work."
  }
]

  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
          Learn Live. Practice Consistently. Build Real Skills.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <article
              key={index}
              className="bg-card rounded-xl border border-border p-6 md:p-8"
            >
              <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
