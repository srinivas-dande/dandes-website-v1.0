"use client"
import Image from "next/image"

export function LiveClassesSection() {
  const features = [
  {
    image: "/icons/liveclass.png",
    iconBg: "bg-emerald-50",
    title: "Live classes with real interaction",
    description:
      "You learn in live sessions where concepts are explained step by step, and questions are addressed in real time."
  },
  {
    image: "/icons/lms-recording.png",
    iconBg: "bg-orange-50",
    title: "Recordings and LMS access",
    description:
      "If you miss a session, you can catch up through recorded classes on the LMS and stay consistent."
  },
  {
    image: "/icons/practice-skill.png",
    iconBg: "bg-purple-50",
    title: "Practice that builds real skill",
    description:
      "Assignments and guided practice help you build interview-ready confidence instead of passive knowledge."
  }
]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
          Live online classes, practice, and support
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <article
              key={index}
              className="bg-card rounded-xl border border-border p-6 md:p-8"
            >
              <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6`}>
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
