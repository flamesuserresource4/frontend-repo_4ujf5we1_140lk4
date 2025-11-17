export default function About() {
  return (
    <section id="about" className="relative bg-[rgb(252,247,238)]">
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'url(https://www.transparenttextures.com/patterns/white-wall-3.png)', opacity:.3}}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-3xl text-stone-800">Our Story</h2>
            <p className="mt-4 text-stone-700 leading-relaxed">
              Born from a small family kitchen in Emilia-Romagna, our trattoria celebrates recipes passed down through generations. We ferment our dough slowly, shape every pasta by hand, and cook with the rhythm of the seasons. To us, hospitality means pulling up an extra chair and pouring another glass.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/80 rounded-lg p-4 shadow">
                <div className="text-2xl font-serif text-emerald-700">1989</div>
                <div className="text-xs text-stone-500">Opened</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 shadow">
                <div className="text-2xl font-serif text-emerald-700">72h</div>
                <div className="text-xs text-stone-500">Dough Rise</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 shadow">
                <div className="text-2xl font-serif text-emerald-700">100%</div>
                <div className="text-xs text-stone-500">Italian Flour</div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" alt="Dining room" className="rounded-xl shadow object-cover h-64 w-full" />
            <img src="https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=1200&auto=format&fit=crop" alt="Kitchen" className="rounded-xl shadow object-cover h-64 w-full" />
            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop" alt="Making pasta" className="rounded-xl shadow object-cover h-64 w-full" />
            <img src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=1200&auto=format&fit=crop" alt="Team" className="rounded-xl shadow object-cover h-64 w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
