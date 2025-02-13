import { FaDownload } from "react-icons/fa"
import { SiNextdotjs, SiReact, SiNodedotjs, SiTypescript } from "react-icons/si"

export function Hero() {
  return (
    <section className="min-h-screen pt-32 px-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-wave-pattern opacity-10" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-8">
            <span className="text-2xl">👋</span>
            <p className="text-lg">
              Hello! I am <span className="text-yellow font-semibold">Pradeep Saran</span>
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-[56px] leading-[1.2] font-bold mb-6">
            Expert <span className="text-yellow">React.js</span> & <span className="text-yellow">Node.js</span>,
            <br />
            Including <span className="text-yellow">Full Stack Solutions</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            Experienced <span className="font-semibold">Full Stack Developer</span> with expertise in building scalable,
            dynamic,
            <br />
            and high-performance web applications, specializing in <span className="font-semibold">React.js</span> and{" "}
            <span className="font-semibold">Node.js</span> development.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <a
              href="/Pradeep_Resume.pdf"
              className="h-[52px] px-8 rounded-full border-2 border-yellow text-yellow hover:bg-yellow hover:text-dark transition-all flex items-center gap-2"
              download
            >
              <FaDownload className="w-5 h-5" />
              Download CV
            </a>
            <a
              href="#contact"
              className="flex items-center h-[52px] px-8 rounded-full bg-yellow text-dark font-medium hover:bg-yellow/90 transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
              <SiNextdotjs className="w-6 h-6" />
              <span>Next.js</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
              <SiReact className="w-6 h-6 text-[#61DAFB]" />
              <span>React.js</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
              <SiNodedotjs className="w-6 h-6 text-[#339933]" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
              <SiTypescript className="w-6 h-6 text-[#3178C6]" />
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

