import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Schools from './components/Schools'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Header />
      <Hero />
      <About />
      <Schools />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
