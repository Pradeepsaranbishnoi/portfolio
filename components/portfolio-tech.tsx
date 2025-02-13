import {
  SiFigma,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiReacthookform,
  SiMaildotru,
} from "react-icons/si"

export function PortfolioTech() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[56px] font-bold text-center mb-16">
          <span className="text-[#333333]">P</span>ortfolio Made <span className="text-yellow">With</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <SiFigma className="w-6 h-6 text-[#F24E1E]" />
            <span>Figma</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />
            <span>JavaScript</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <SiReact className="w-6 h-6 text-[#61DAFB]" />
            <span>ReactJS</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <SiNextdotjs className="w-6 h-6 text-white" />
            <span>NextJS</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />
            <span>Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <SiReacthookform className="w-6 h-6 text-[#EC5990]" />
            <span>React Hook Forms</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <SiMaildotru className="w-6 h-6 text-[#339933]" />
            <span>Nodemailer</span>
          </div>
        </div>
      </div>
    </section>
  )
}

