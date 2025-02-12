import {
  Braces,
  Code2,
  FileJson,
  Layout,
  Settings,
  Smartphone,
  PenToolIcon as Tool,
} from "lucide-react"

import { SiNextdotjs, SiReact, SiNodedotjs, SiTypescript, SiJavascript,SiHtml5, SiCss3, SiTailwindcss, SiJquery, SiBootstrap, SiExpress, SiMysql, SiRedux, SiGithub, SiWordpress, SiNpm, SiPostman  } from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export function Skills() {
  return (
    <section id="skills" className="py-20 px-5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[56px] font-bold text-center mb-16">
          <span className="text-[#333333]">S</span>kills
        </h2>

        <div className="space-y-16">
          {/* Frontend */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-[#333333]">F</span>rontend <span className="text-yellow">Technologies</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiReact />
                <span>React.js</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiNextdotjs />
                <span>Next.js</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiTypescript />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiJavascript />
                <span>JavaScript (ES6+)</span>
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
                <SiTailwindcss />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiBootstrap />
                <span>Bootstrap</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiJquery />
                <span>jQuery</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <Layout className="w-6 h-6" />
                <span>Responsive Design</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-[#333333]">B</span>ackend <span className="text-yellow">Technologies</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiNodedotjs />
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiExpress />
                <span>Express.js</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <Code2 className="w-6 h-6" />
                <span>REST APIs</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiMysql />
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-[#333333]">T</span>ools & <span className="text-yellow">Technologies</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiRedux />
                <span>Redux</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiGithub />
                <span>Git/GitHub</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <FileJson className="w-6 h-6" />
                <span>JSON</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <Smartphone className="w-6 h-6" />
                <span>Responsive Design</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiWordpress />
                <span>WordPress</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <Tool className="w-6 h-6" />
                <span>Dev Tools</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <Settings className="w-6 h-6" />
                <span>API Integration</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <Braces className="w-6 h-6" />
                <span>Clean Code</span>
              </div>
            </div>
          </div>

          {/* Development Tools */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-[#333333]">D</span>evelopment <span className="text-yellow">Environment</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <VscVscode />
                <span>VS Code</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiGithub />
                <span>GitHub</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiNpm />
                <span>npm</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiPostman />
                <span>Postman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

