import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail, MdPhone, MdLanguage } from "react-icons/md"

export function Connect() {
  return (
    <section id="connect" className="py-20 px-5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[56px] font-bold text-center mb-16">
          <span className="text-[#333333]">C</span>onnect With <span className="text-yellow">Me</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://linkedin.com/in/pradeepsaran29"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-card hover:bg-card-light transition-colors"
          >
            <FaLinkedin className="w-6 h-6 text-[#0077B5]" />
            <span className="text-white font-medium">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Pradeepsaranbishnoi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-card hover:bg-card-light transition-colors"
          >
            <FaGithub className="w-6 h-6 text-white" />
            <span className="text-white font-medium">GitHub</span>
          </a>

          <a
            href="https://pradeep-saran.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-card hover:bg-card-light transition-colors"
          >
            <MdLanguage className="w-6 h-6 text-white" />
            <span className="text-white font-medium">Portfolio</span>
          </a>

          <div className="w-full flex justify-center gap-4 mt-4">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-card">
              <MdEmail className="w-6 h-6 text-[#EA4335]" />
              <span className="text-white font-medium">pradeepmadasar@gmail.com</span>
            </div>

            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-card">
              <MdPhone className="w-6 h-6 text-[#4CAF50]" />
              <span className="text-white font-medium">+91 8239103970</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

