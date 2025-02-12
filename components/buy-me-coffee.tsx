export function BuyMeCoffee() {
  return (
    <section id="buy-me-coffee" className="py-20 px-5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[56px] font-bold text-center mb-16">
          <span className="text-[#333333]">B</span>uy Me a <span className="text-yellow">Coffee</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Resume Template */}
          <div className="bg-white rounded-[32px] p-6 overflow-hidden">
            <h3 className="text-dark text-xl font-bold mb-4">Modern Resume / CV Template</h3>
            <div className="flex items-center gap-2 mb-4">
              <img src="https://nikunjthesiya.vercel.app/assets/figma.svg" alt="Figma" className="w-6 h-6" />
              <span className="text-dark">Design</span>
            </div>
            <img
              src="https://nikunjthesiya.vercel.app/assets/resume-template.png"
              alt="Resume Template"
              className="w-full rounded-2xl mb-6"
            />
            <div className="flex items-center justify-between">
              <span className="text-dark text-2xl font-bold">$10</span>
              <button className="px-6 py-3 rounded-full bg-yellow text-dark font-medium">Purchase Design</button>
            </div>
          </div>

          {/* Portfolio UI */}
          <div className="bg-white rounded-[32px] p-6 overflow-hidden">
            <h3 className="text-dark text-xl font-bold mb-4">Modern Portfolio Website UI</h3>
            <div className="flex items-center gap-2 mb-4">
              <img src="https://nikunjthesiya.vercel.app/assets/figma.svg" alt="Figma" className="w-6 h-6" />
              <span className="text-dark">Design</span>
            </div>
            <img
              src="https://nikunjthesiya.vercel.app/assets/portfolio-ui.png"
              alt="Portfolio UI"
              className="w-full rounded-2xl mb-6"
            />
            <div className="flex items-center justify-between">
              <span className="text-dark text-2xl font-bold">$15</span>
              <button className="px-6 py-3 rounded-full bg-yellow text-dark font-medium">Purchase Design</button>
            </div>
          </div>

          {/* Portfolio Code */}
          <div className="bg-white rounded-[32px] p-6 overflow-hidden">
            <h3 className="text-dark text-xl font-bold mb-4">Modern Portfolio Website with Dark / Light Mode</h3>
            <div className="flex items-center gap-2 mb-4">
              <img src="https://nikunjthesiya.vercel.app/assets/code.svg" alt="Code" className="w-6 h-6" />
              <span className="text-dark">Code</span>
            </div>
            <img
              src="https://nikunjthesiya.vercel.app/assets/portfolio-code.png"
              alt="Portfolio Code"
              className="w-full rounded-2xl mb-6"
            />
            <div className="flex items-center justify-between">
              <span className="text-dark text-2xl font-bold">$35</span>
              <button className="px-6 py-3 rounded-full bg-yellow text-dark font-medium">Purchase Code</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

