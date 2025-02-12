import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { BuyMeCoffee } from "@/components/buy-me-coffee"
import { DiscussProject } from "@/components/discuss-project"
import { Connect } from "@/components/connect"
import { Contact } from "@/components/contact"
import { PortfolioTech } from "@/components/portfolio-tech"
import { Footer } from "@/components/footer"
import { ClientSlider } from "@/components/client-slider"

export default function Home() {
  return (
    <main className="bg-dark text-white">
      <Header />
      <Hero />
      <About />
      <ClientSlider />
      <Testimonials />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      {/* <BuyMeCoffee /> */}
      <DiscussProject />
      <Connect />
      <Contact />
      <PortfolioTech />
      <Footer />
    </main>
  )
}

