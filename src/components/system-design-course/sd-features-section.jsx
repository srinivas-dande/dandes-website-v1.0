import Image from "next/image"

const features = [
  {
    image: "/icons/experience.png",
    iconBg: "bg-orange-100",
    title: "20 plus years",
    description: "of experience, Friendly transition track",
  },
  {
    image: "/icons/live-class.png",
    iconBg: "bg-purple-100",
    title: "Live instructor-led classes",
    description: "Learn with clarity",
  },
  {
    image: "/icons/recordings.png",
    iconBg: "bg-emerald-100",
    title: "LMS recordings",
    description: "included Stay consistent",
  },
  {
    image: "/icons/students.png",
    iconBg: "bg-cyan-100",
    title: "25,000 plus Trained",
    description: "learners Proof of delivery",
  },
]

export function SdFeaturesSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 text-center lg:mb-14">
          <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-black md:text-4xl lg:text-5xl">
            Made for{" "}
            <span className="text-[#dc2626]">
              Working Professionals
            </span>{" "}
            and
            <br className="hidden md:block" />
            {" "}Career-Focused Students
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <article
              key={index}
              className="flex min-h-[220px] flex-col rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <div
                className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg ${feature.iconBg}`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
              </div>

              <p className="text-sm leading-relaxed text-gray-900">
                <span className="font-bold">
                  {feature.title}
                </span>{" "}
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* JLC Legacy Badge */}
        <div className="mt-14 flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl">
            <Image
              src="/icons/jlc-logo.png"
              alt="JLC Logo"
              width={150}
              height={150}
              className="h-full w-full object-cover"
            />
          </div>

          <p className="max-w-xl text-base text-gray-700">
            Trusted by learners from the legacy JLC,{" "}
            <span className="font-bold">Java Learning Center</span>,
            <br />
            now Dandes Academy.
          </p>
        </div>

      </div>
    </section>
  )
}