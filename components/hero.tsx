import { SiNextdotjs, SiReact, SiNodedotjs, SiTypescript  } from "react-icons/si";

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
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 10L12 15M12 15L7 10M12 15V3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
              <SiNextdotjs />
              <span>Next.js</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
              <SiReact />
              <span>React.js</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
              <SiNodedotjs />
              <span>Node.js</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
              <SiTypescript />
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

