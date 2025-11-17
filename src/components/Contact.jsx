export default function Contact() {
  return (
    <section id="contact" className="bg-[rgb(250,245,236)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-3xl text-stone-800">Contact Us</h2>
            <div className="mt-4 space-y-2 text-stone-700">
              <p><strong>Address:</strong> Via Roma 123, 00100 Roma, Italia</p>
              <p><strong>Email:</strong> hello@trattoriapizzeria.it</p>
              <p><strong>Phone:</strong> +39 123 456 7890</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="font-semibold text-stone-800">Opening Hours</div>
                <ul className="mt-2 text-stone-700 space-y-1">
                  <li>Mon–Thu: 12:00–15:00, 18:30–23:00</li>
                  <li>Fri: 12:00–15:00, 18:30–23:30</li>
                  <li>Sat: 12:30–23:30</li>
                  <li>Sun: 12:30–22:30</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <iframe title="Map" src="https://www.google.com/maps?q=Rome%2C%20Italy&output=embed" className="w-full h-48 border-0" loading="lazy" />
                <a className="block bg-emerald-600 hover:bg-emerald-500 text-white text-center py-2" href="https://maps.google.com/?q=Via%20Roma%20123%2C%20Rome" target="_blank" rel="noreferrer">Get Directions</a>
              </div>
            </div>
          </div>

          <form className="bg-white rounded-xl p-6 shadow space-y-4" onSubmit={(e)=>e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-stone-700 mb-1">Name</label>
                <input className="w-full border border-stone-200 rounded-md px-3 py-2 shadow-inner" />
              </div>
              <div>
                <label className="block text-sm text-stone-700 mb-1">Email</label>
                <input type="email" className="w-full border border-stone-200 rounded-md px-3 py-2 shadow-inner" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-stone-700 mb-1">Message</label>
                <textarea rows="4" className="w-full border border-stone-200 rounded-md px-3 py-2 shadow-inner"></textarea>
              </div>
            </div>
            <button className="bg-rose-700 hover:bg-rose-600 text-white px-6 py-3 rounded-md shadow">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
