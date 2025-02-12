import { SiNextdotjs, SiReact, SiNodedotjs, SiTypescript, SiJavascript,SiHtml5, SiCss3, SiPhp, SiJquery,  SiWordpress, SiNpm, SiPostman  } from "react-icons/si";

import {
  Braces,
  Code2,
  FileJson,
  Layout,
  Settings,
  Smartphone,
  PenToolIcon as Tool,
} from "lucide-react"

export function Projects() {
  return (
    <section id="projects" className="py-20 px-5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[56px] font-bold text-center mb-16">
          <span className="text-[#333333]">P</span>rojects{" "}
          <span className="text-yellow">
            I've
            <br />
            Worked on
          </span>
        </h2>

        <div className="space-y-8">
          {/* Educase India */}
          <div className="relative p-8 rounded-[32px] bg-card overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/image/educase.png"
                  alt="Educase India"
                  className="w-full rounded-2xl"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-8">Educase India</h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-2">Worked on</h4>
                    <div className="flex gap-2">
                      <span className="px-4 py-2 rounded-full bg-white/10">Website</span>
                      <span className="px-4 py-2 rounded-full bg-white/10">Admin Panel</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies I have used</h4>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiJavascript />
                        <span>JavaScript (ES6+)</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiJquery />
                        <span>jQuery</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiWordpress />
                        <span>WordPress</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiHtml5 />
                        <span>HTML5</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiCss3 />
                        <span>CSS3</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://educase.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <span>🔗</span>
                  Go To Educase
                </a>
              </div>
            </div>
          </div>
          <div className="relative p-8 rounded-[32px] bg-card overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/image/reelax.png"
                  alt="Reelax"
                  className="w-full rounded-2xl"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-8">Reelax</h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-2">Worked on</h4>
                    <div className="flex gap-2">
                      <span className="px-4 py-2 rounded-full bg-white/10">Website</span>
                      <span className="px-4 py-2 rounded-full bg-white/10">Admin Panel</span>
                      <span className="px-4 py-2 rounded-full bg-white/10">Plugin</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies I have used</h4>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiJavascript />
                        <span>JavaScript (ES6+)</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiJquery />
                        <span>jQuery</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiWordpress />
                        <span>WordPress</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiHtml5 />
                        <span>HTML5</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiCss3 />
                        <span>CSS3</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiPhp />
                        <span>PHP</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <Settings className="w-6 h-6" />
                        <span>API Integration</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiPostman />
                        <span>Postman</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://getreelax.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <span>🔗</span>
                  Go To Reelax
                </a>
              </div>
            </div>
          </div>
          <div className="relative p-8 rounded-[32px] bg-card overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/image/aerowheel.png"
                  alt="Aerowheel Surface Finishing"
                  className="w-full rounded-2xl"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-8">Aerowheel Surface Finishing</h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-2">Worked on</h4>
                    <div className="flex gap-2">
                      <span className="px-4 py-2 rounded-full bg-white/10">Website</span>
                      <span className="px-4 py-2 rounded-full bg-white/10">Admin Panel</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies I have used</h4>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiJavascript />
                        <span>JavaScript (ES6+)</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiJquery />
                        <span>jQuery</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiWordpress />
                        <span>WordPress</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiHtml5 />
                        <span>HTML5</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiCss3 />
                        <span>CSS3</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://aerowheel.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <span>🔗</span>
                  Go To Aerowheel
                </a>
              </div>
            </div>
          </div>
          <div className="relative p-8 rounded-[32px] bg-card overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/image/aan.png"
                  alt="Aeyy Aenn Media"
                  className="w-full rounded-2xl"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-8">Aeyy Aenn Media</h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-2">Worked on</h4>
                    <div className="flex gap-2">
                      <span className="px-4 py-2 rounded-full bg-white/10">Website</span>
                      <span className="px-4 py-2 rounded-full bg-white/10">Admin Panel</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies I have used</h4>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiJavascript />
                        <span>JavaScript (ES6+)</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiJquery />
                        <span>jQuery</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiWordpress />
                        <span>WordPress</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiHtml5 />
                        <span>HTML5</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                        <SiCss3 />
                        <span>CSS3</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://educase.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <span>🔗</span>
                  Go To CricTracker
                </a>
              </div>
            </div>
          </div>

          {/* Repeat similar structure for SportsBuzz */}
        </div>
      </div>
    </section>
  )
}

