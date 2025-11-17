import { useEffect, useMemo, useState } from 'react'

export default function Menu({ searchTerm }) {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    setQuery(searchTerm || '')
  }, [searchTerm])

  useEffect(() => {
    const controller = new AbortController()
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (category) params.set('category', category)
    fetch(`${baseUrl}/menu?${params.toString()}`, { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => setItems(data))
      .catch(() => {})
    return () => controller.abort()
  }, [query, category])

  const categories = useMemo(() => (
    [
      { key: '', label: 'All' },
      { key: 'pizza', label: 'Pizzas' },
      { key: 'starter', label: 'Starters' },
      { key: 'pasta', label: 'Pastas' },
      { key: 'main', label: 'Main Courses' },
      { key: 'dessert', label: 'Desserts' },
      { key: 'drinks', label: 'Drinks' },
    ]
  ), [])

  return (
    <section id="menu" className="bg-[rgb(250,245,236)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl text-stone-800">Our Menu</h2>
            <p className="text-stone-600 mt-1">Choose a category or search for your favorite dish.</p>
          </div>
          <div className="flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes..."
              className="bg-white rounded-full px-4 py-2 shadow-inner border border-stone-200 w-64"
              aria-label="Search dishes"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map(c => (
            <button key={c.key} onClick={() => setCategory(c.key)} className={`px-4 py-2 rounded-full border shadow-sm text-sm ${category===c.key ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'}`}>
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_10px_25px]">
              {item.image && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-xl text-stone-800">{item.name}</h3>
                  <div className="text-emerald-700 font-semibold">€{item.price?.toFixed?.(2) || item.price}</div>
                </div>
                {item.description && <p className="text-stone-600 mt-2 text-sm">{item.description}</p>}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">{(item.category||'').toUpperCase()}</span>
                  {item.tags?.slice(0,3).map((t,i)=>(
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
