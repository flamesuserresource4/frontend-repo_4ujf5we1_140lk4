import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[rgb(33,24,16)] text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-rose-600 grid place-items-center text-white font-black">TP</div>
            <div className="font-serif text-xl">Trattoria Pizzeria</div>
          </div>
          <p className="mt-3 text-amber-200/80 text-sm">Warm hospitality, honest ingredients, and the spirit of Italy in every plate.</p>
        </div>
        <div>
          <div className="font-semibold text-amber-50">Contact</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Via Roma 123, 00100 Roma</li>
            <li>hello@trattoriapizzeria.it</li>
            <li>+39 123 456 7890</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-amber-50">Hours</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Mon–Thu: 12:00–15:00, 18:30–23:00</li>
            <li>Fri: 12:00–15:00, 18:30–23:30</li>
            <li>Sat: 12:30–23:30</li>
            <li>Sun: 12:30–22:30</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-amber-50">Connect</div>
          <div className="flex gap-3 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Instagram className="w-4 h-4" /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Facebook className="w-4 h-4" /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20">TikTok</a>
          </div>
          <div className="mt-4 flex flex-col text-xs text-amber-300/70">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 text-xs text-center py-4 text-amber-300/80">© {new Date().getFullYear()} Trattoria Pizzeria. All rights reserved.</div>
    </footer>
  )
}
