export function Education() {
  return (
    <section id="education" className="py-20 px-5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[56px] font-bold text-center mb-16">
          <span className="text-[#333333]">E</span>ducation
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 rounded-[32px] bg-card overflow-hidden group">
            <div className="absolute inset-0 bg-yellow/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark">
                  <span className="text-yellow">📅</span>
                  <span>2017 - 2022</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark">
                  <span className="text-yellow">🎓</span>
                  <span>B.Tech</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-4 py-2 rounded-full bg-dark">Computer Science and Engineering</span>
              </div>

              <h3 className="text-2xl font-bold mb-6">Lovely Professional University</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-yellow">📍</span>
                  <span>Punjab, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

