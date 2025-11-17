import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PreviewSections from './components/PreviewSections'
import About from './components/About'
import Menu from './components/Menu'
import Reservations from './components/Reservations'
import Social from './components/Social'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen bg-[rgb(249,244,236)] text-stone-800">
      <Header onSearch={setSearchTerm} />
      <main>
        <Hero />
        <PreviewSections />
        <About />
        <Menu searchTerm={searchTerm} />
        <Reservations />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
