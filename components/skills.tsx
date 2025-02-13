import { FaReact, FaNodeJs, FaGitAlt, FaNpm, FaWordpress, FaFigma, FaBootstrap, FaGithub } from "react-icons/fa"
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPostman,
  SiJquery,
  SiNextdotjs,
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"
import { BiCodeAlt } from "react-icons/bi"
import { BsTools } from "react-icons/bs"
import { MdOutlineDesignServices, MdDevices } from "react-icons/md"
import { TbApi } from "react-icons/tb"

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
                <FaReact className="w-6 h-6 text-[#61DAFB]" />
                <span>React.js</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiNextdotjs className="w-6 h-6 text-white" />
                <span>Next.js</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiTypescript className="w-6 h-6 text-[#3178C6]" />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />
                <span>JavaScript (ES6+)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <BiCodeAlt className="w-6 h-6 text-[#E34F26]" />
                <span>HTML5</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <MdOutlineDesignServices className="w-6 h-6 text-[#1572B6]" />
                <span>CSS3</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <FaBootstrap className="w-6 h-6 text-[#7952B3]" />
                <span>Bootstrap</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiJquery className="w-6 h-6 text-[#0769AD]" />
                <span>jQuery</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <MdDevices className="w-6 h-6 text-white" />
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
                <FaNodeJs className="w-6 h-6 text-[#339933]" />
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiExpress className="w-6 h-6 text-white" />
                <span>Express.js</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <TbApi className="w-6 h-6 text-white" />
                <span>REST APIs</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiMysql className="w-6 h-6 text-[#4479A1]" />
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
                <FaGitAlt className="w-6 h-6 text-[#F05032]" />
                <span>Git</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <FaGithub className="w-6 h-6 text-white" />
                <span>GitHub</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <FaNpm className="w-6 h-6 text-[#CB3837]" />
                <span>npm</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <FaWordpress className="w-6 h-6 text-[#21759B]" />
                <span>WordPress</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <BsTools className="w-6 h-6 text-white" />
                <span>Dev Tools</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <TbApi className="w-6 h-6 text-white" />
                <span>API Integration</span>
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
                <VscCode className="w-6 h-6 text-[#007ACC]" />
                <span>VS Code</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <FaGithub className="w-6 h-6 text-white" />
                <span>GitHub</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <FaNpm className="w-6 h-6 text-[#CB3837]" />
                <span>npm</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <SiPostman className="w-6 h-6 text-[#FF6C37]" />
                <span>Postman</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                <FaFigma className="w-6 h-6 text-[#F24E1E]" />
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

