import { SiNextdotjs, SiReact, SiJavascript, SiTailwindcss, SiReacthookform, SiMaildotru } from "react-icons/si";

export function PortfolioTech() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[56px] font-bold text-center mb-16">
          <span className="text-[#333333]">P</span>ortfolio Made <span className="text-yellow">With</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <SiJavascript />
            <span>JavaScript</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <SiReact />
            <span>ReactJS</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <SiNextdotjs />
            <span>NextJS</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <SiTailwindcss />
            <span>Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <SiReacthookform />
            <span>React Hook Forms</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
            <SiMaildotru />
            <span>Nodemailer</span>
          </div>
        </div>
      </div>
    </section>
  )
}

