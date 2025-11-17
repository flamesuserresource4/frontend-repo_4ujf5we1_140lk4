import { Instagram, Facebook, BadgeCent } from 'lucide-react'

export default function Social() {
  const insta = 'https://instagram.com'
  const fb = 'https://facebook.com'
  const tiktok = 'https://tiktok.com/@yourpage'
  const feed = [
    'https://images.unsplash.com/photo-1548365328-9f547fb09530?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=800&auto=format&fit=crop',
  ]
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl text-stone-800">Follow Us</h2>
            <p className="text-stone-600">See daily specials and behind-the-scenes from our kitchen.</p>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a href={insta} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-full bg-gradient-to-br from-rose-600 to-rose-500 text-white shadow">Instagram</a>
            <a href={fb} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-full bg-blue-600 text-white shadow">Facebook</a>
            <a href={tiktok} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-full bg-black text-white shadow">TikTok</a>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {feed.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg shadow">
              <img src={src} alt={`Social post ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
