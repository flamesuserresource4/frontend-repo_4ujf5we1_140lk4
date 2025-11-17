export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=2000&auto=format&fit=crop"
          alt="Wood-fired pizza oven"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[rgba(24,16,10,0.55)] mix-blend-multiply" />
        <div className="absolute inset-0" style={{backgroundImage:'url(https://www.transparenttextures.com/patterns/wood-pattern.png)', opacity:.18}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-amber-50">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl drop-shadow-lg">
          Authentic Italian Trattoria & Pizzeria
        </h1>
        <p className="mt-4 max-w-2xl text-amber-100/90">
          Slow-fermented dough, seasonal ingredients, and family recipes from the heart of Italy. Benvenuti a casa.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#reservations" className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full shadow-lg shadow-black/30 transition">Reserve a Table</a>
          <a href="#menu" className="bg-white/15 hover:bg-white/25 text-amber-50 px-6 py-3 rounded-full backdrop-blur transition">Explore Menu</a>
        </div>
      </div>
    </section>
  )
}
