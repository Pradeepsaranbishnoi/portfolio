import {
  MapPin
} from "lucide-react"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[56px] font-bold text-center mb-16">
          <span className="text-[#333333]">T</span>estimonials
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="p-8 rounded-[32px] bg-card">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-white/80 mb-6">
              We approached Pradeep Saran to build our website, and the experience was fantastic! They delivered a modern, responsive site that truly represents our brand. Their attention to detail and expertise in Next.js and Tailwind CSS made a huge difference. Highly recommended!
            </p>
            <div className="flex items-center gap-3">
              <img src="https://aerowheel.co/wp-content/uploads/2021/11/1547827492755-_1_.jpg" alt="Vivek Mehra" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold">Vivek Mehra | Aerowheel</h4>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <span>Rajasthan, India</span>
                  <MapPin size={14} />
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-[32px] bg-card">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-white/80 mb-6">
              We needed a website that was fast, modern, and easy to manage, and they delivered exactly that. The attention to detail and smooth execution made the entire process effortless for us. Highly recommended!
            </p>
            <div className="flex items-center gap-3">
              <img src="https://cdn.getreelax.com/wp-content/uploads/2025/02/brij-ceo_resized.png" alt="Brij Singh" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold">Brij Singh | Reelax</h4>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <span>Noida, India</span>
                  <MapPin size={14} />
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-[32px] bg-card">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-white/80 mb-6">
              Their expertise in web development helped us improve both performance and usability. The way they understood our requirements and implemented them was truly impressive. A great team to work with!
            </p>
            <div className="flex items-center gap-3">
              <img src="https://educase.io/wp-content/uploads/2022/05/1594317847944.webp" alt="Alok" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold">Alok | Educase India</h4>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <span>Rajasthan, India</span>
                  <MapPin size={14} />
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-[32px] bg-card">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-white/80 mb-6">
              We approached Pradeep Saran to build our website, and the experience was fantastic! They delivered a modern, responsive site that truly represents our brand. Their attention to detail and expertise in Next.js and Tailwind CSS made a huge difference. Highly recommended!
            </p>
            <div className="flex items-center gap-3">
              <img src="https://aeyyaennmedia.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-11-04-at-3.28.31-PM-qwk2ikth4eyp6kfexygflrk820y25qgvnfn862zj1w.jpeg" alt="" className="w-12 h-12 rounded-full object-cover object-top" />
              <div>
                <h4 className="font-semibold">Jatin Sharma | Aeyy Aenn Media </h4>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <span>Rajasthan, India</span>
                  <MapPin size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Repeat similar structure for other testimonials */}
        </div>
      </div>
    </section>
  )
}

