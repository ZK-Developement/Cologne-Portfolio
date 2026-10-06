import './App.css'
import Hero from "./assets/components/hero/hero"
import Header from './assets/components/header/header'
import Onas from './assets/components/onas/onas'
import Produkty from './assets/components/produkty/produkty'
import OProdukcie from './assets/components/oprodukcie/oprodukcie'
import Kontakt from './assets/components/kontakt/kontakt'

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
    </>
  )
}

export default App
