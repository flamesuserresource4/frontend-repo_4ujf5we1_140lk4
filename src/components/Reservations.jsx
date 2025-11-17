import { useState } from 'react'

export default function Reservations() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '', guests: 2, requests: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const payload = {
        name: form.name,
        phone: form.phone,
        email: form.email || undefined,
        datetime: new Date(`${form.date}T${form.time}:00Z`).toISOString(),
        guests: Number(form.guests),
        requests: form.requests || undefined,
      }
      const res = await fetch(`${baseUrl}/reservations`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('success')
      setForm({ name: '', phone: '', email: '', date: '', time: '', guests: 2, requests: '' })
    } catch (e) {
      setStatus(`error:${e.message}`)
    }
  }

  return (
    <section id="reservations" className="bg-[rgb(252,247,238)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-3xl text-stone-800">Reserve a Table</h2>
            <p className="text-stone-600 mt-1">We look forward to welcoming you. Groups and celebrations are happily accommodated.</p>
            <a href="tel:+391234567890" className="inline-block mt-4 bg-rose-700 hover:bg-rose-600 text-white px-5 py-2 rounded-full shadow">Call to Reserve: +39 123 456 7890</a>
            <div className="mt-6 rounded-xl overflow-hidden shadow">
              <iframe title="Map" src="https://www.google.com/maps?q=Rome%2C%20Italy&output=embed" className="w-full h-64 border-0" loading="lazy" />
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-white rounded-xl p-6 shadow space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-stone-700 mb-1">Name</label>
                <input required name="name" value={form.name} onChange={onChange} className="w-full border border-stone-200 rounded-md px-3 py-2 shadow-inner" />
              </div>
              <div>
                <label className="block text-sm text-stone-700 mb-1">Phone</label>
                <input required name="phone" value={form.phone} onChange={onChange} className="w-full border border-stone-200 rounded-md px-3 py-2 shadow-inner" />
              </div>
              <div>
                <label className="block text-sm text-stone-700 mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} className="w-full border border-stone-200 rounded-md px-3 py-2 shadow-inner" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-stone-700 mb-1">Date</label>
                  <input type="date" required name="date" value={form.date} onChange={onChange} className="w-full border border-stone-200 rounded-md px-3 py-2 shadow-inner" />
                </div>
                <div>
                  <label className="block text-sm text-stone-700 mb-1">Time</label>
                  <input type="time" required name="time" value={form.time} onChange={onChange} className="w-full border border-stone-200 rounded-md px-3 py-2 shadow-inner" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-stone-700 mb-1">Guests</label>
                <input type="number" min="1" max="20" required name="guests" value={form.guests} onChange={onChange} className="w-full border border-stone-200 rounded-md px-3 py-2 shadow-inner" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-stone-700 mb-1">Special Requests</label>
                <textarea name="requests" value={form.requests} onChange={onChange} rows="3" className="w-full border border-stone-200 rounded-md px-3 py-2 shadow-inner" />
              </div>
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-md shadow" disabled={status==='submitting'}>
              {status==='submitting' ? 'Booking…' : 'Submit Reservation'}
            </button>
            {status?.startsWith?.('error:') && <p className="text-rose-700">{status.replace('error:','')}</p>}
            {status==='success' && <p className="text-emerald-700">Thank you! We will confirm your reservation shortly.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
