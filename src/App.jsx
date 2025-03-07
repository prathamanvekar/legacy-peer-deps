import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Team from './pages/Team'
import HomePage from "./pages/HomePage"
import Space from "./components/Space"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Event from './pages/Event'
import Contact from './pages/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="relative min-h-screen w-screen text-white flex flex-col">
        <Space />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/event" element={<Event />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;