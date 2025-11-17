export default function PreviewSections() {
  const cards = [
    {
      id: 'menu',
      title: 'Menu',
      text: 'Wood-fired pizzas, hand-cut pastas, and seasonal plates.',
      img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1200&auto=format&fit=crop',
      href: '#menu'
    },
    {
      id: 'about',
      title: 'About Us',
      text: 'A family table since 1989. Our kitchen is your kitchen.',
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
      href: '#about'
    },
    {
      id: 'reservations',
      title: 'Reservations',
      text: 'Book your table in a few taps. Groups welcome.',
      img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop',
      href: '#reservations'
    }
  ]

  return (
    <section className="bg-[rgb(250,245,236)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(card => (
            <a key={card.id} href={card.href} className="group rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.15)_0px_10px_30px] bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl text-stone-800">{card.title}</h3>
                <p className="text-stone-600 mt-1">{card.text}</p>
                <span className="inline-block mt-3 text-emerald-700 group-hover:underline">Learn More →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
