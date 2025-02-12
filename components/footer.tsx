export function Footer() {
  return (
    <footer className="mt-20">
      <div className="bg-yellow py-4">
        <div className="max-w-[1440px] mx-auto px-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center">
              <span className="text-yellow font-semibold">PS</span>
            </div>
            <span className="text-dark font-semibold">PRADEEPSARAN</span>
          </div>
          <p className="text-dark">
            Designed & Built by <span className="font-semibold">Pradeep Saran</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

