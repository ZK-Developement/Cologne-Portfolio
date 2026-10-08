import './App.css'
import Hero from "./components/hero/hero"
import Header from './components/header/header'
import Onas from './components/onas/onas'
import Produkty from './components/produkty/produkty'
import OProdukcie from './components/oprodukcie/oprodukcie'
import Kontakt from './components/kontakt/kontakt'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <Header />
      <main className="bg-[radial-gradient(circle,_#201D1D,_#0F0E0E)] flex flex-col w-full h-[3600px] items-center">
        <Hero />
        <Onas />
        <Produkty />
        <OProdukcie />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}

export default App
