import { useState } from 'react'
import { Menu as MenuIcon, Search, X, Instagram, Facebook, Phone } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Contact', href: '#contact' },
]

export default function Header({ onSearch }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch?.(query)
    const menuEl = document.getElementById('menu')
    if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[rgba(32,20,12,0.6)] text-amber-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-rose-600 shadow-inner shadow-black/30 grid place-items-center text-white font-black">TP</div>
            <div className="leading-tight">
              <div className="text-lg font-serif tracking-wide">Trattoria Pizzeria</div>
              <div className="text-xs text-amber-200/80">Sapori di Casa</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-amber-100/90 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <form onSubmit={handleSubmit} className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes..."
                className="w-64 bg-[rgba(255,255,255,0.08)] placeholder:amber-100/60 text-white rounded-full pl-10 pr-4 py-2 outline-none focus:ring-2 ring-emerald-500/70 shadow-inner"
              />
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-emerald-300" />
            </form>
            <a href="#reservations" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-full shadow-md transition-colors">
              <Phone className="w-4 h-4" /> Reserve
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X className="text-white" /> : <MenuIcon className="text-white" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 pb-4 space-y-3">
            <form onSubmit={handleSubmit} className="relative mt-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes..."
                className="w-full bg-[rgba(255,255,255,0.08)] text-white rounded-full pl-10 pr-4 py-2 outline-none focus:ring-2 ring-emerald-500/70"
              />
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-emerald-300" />
            </form>
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-white/10 text-amber-100">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/90 hover:text-white"><Instagram className="w-5 h-5" /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white/90 hover:text-white"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
