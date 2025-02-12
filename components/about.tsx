export function About() {
  return (
    <section id="about" className="py-20 px-5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[56px] font-bold text-center mb-16">
          <span className="text-[#333333]">A</span>bout <span className="text-yellow">Me</span>
        </h2>

        <div className="grid gap-16">
          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative p-12 rounded-[32px] bg-card overflow-hidden group">
              <div className="absolute inset-0 bg-yellow/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-[56px] font-bold text-yellow mb-2">4+</h3>
                <p className="text-2xl font-bold">
                  Years
                  <br />
                  Experience
                </p>
              </div>
            </div>
            <div className="relative p-12 rounded-[32px] bg-card overflow-hidden group">
              <div className="absolute inset-0 bg-yellow/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-[56px] font-bold text-yellow mb-2">80+</h3>
                <p className="text-2xl font-bold">
                  Projects
                  <br />
                  Completed
                </p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="relative p-8 rounded-[32px] bg-card text-white/80 leading-relaxed">
            <p>
              Experienced React.js and Node.js developer with over 4 years of expertise in both front-end and back-end
              development. Proficient in building scalable, dynamic, and high-performance web applications. Skilled in
              integrating REST APIs, optimizing UI/UX, and developing reusable components. With a B.Tech in Computer
              Science and Engineering from Lovely Professional University and extensive professional experience, I've
              successfully delivered multiple projects including Curriculum Management Software and School Management
              platforms. My expertise extends to Next.js, TypeScript, and modern web technologies, consistently
              improving performance metrics and user satisfaction in my projects.
            </p>
          </div>

          <a
            href="#contact"
            className="mx-auto flex items-center gap-2 h-[52px] px-8 rounded-full border-2 border-yellow text-yellow hover:bg-yellow hover:text-dark transition-all"
          >
            <span className="text-xl">📱</span>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

