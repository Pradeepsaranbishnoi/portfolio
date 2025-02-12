export function DiscussProject() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[56px] font-bold text-center mb-16">
          <span className="text-[#333333]">D</span>iscuss <span className="text-yellow">Project</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative p-16 rounded-[32px] bg-card text-center">
            <img src="https://pbs.twimg.com/profile_images/1818152276248100864/GY_Huc54_400x400.jpg" alt="Pradeep Saran" className="w-32 h-32 rounded-full mx-auto mb-6" />
            <h3 className="text-4xl font-bold text-yellow mb-4">Pradeep Saran</h3>
            <p className="text-xl text-white/80 mb-8">Front End Developer / Full Stack Developer / UI Developer</p>
            <div className="flex items-center justify-center gap-4">
              <a href="/Pradeep_Resume.pdf"
              className="h-[52px] px-8 rounded-full border-2 border-yellow text-yellow hover:bg-yellow hover:text-dark transition-all flex items-center gap-2"
              download>
                <span>📄</span>
                Resume
              </a>
              <a className="h-[52px] px-8 rounded-full bg-yellow text-dark font-medium hover:bg-yellow/90 transition-all flex items-center gap-2" href="#contact">
                <span>💬</span>
                Discuss Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

