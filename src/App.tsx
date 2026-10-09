
import { useState } from 'react'
import './App.css'
import { KEPLISTA } from './adat'
import Galeria from './component/Galeria'
import NagyKep from './component/NagyKep'

function App() {

  const [aktIndex, setAktIndex] = useState(0)
  function kivalaszt(index: number) {
    setAktIndex(index)
  }

  function leptet(irany: boolean) {
    console.log(irany)
    let listaHossz = KEPLISTA.length
    if (listaHossz === 0) return
    let i: number = 0
    if (irany) {
      i = (aktIndex + 1) % listaHossz
    } else {
      i = ((aktIndex - 1) + listaHossz) % listaHossz
    }

    setAktIndex(i)
  }

  return (
    <>
      <header>
        <h1>Galéria</h1>
      </header>

      <section>
        <NagyKep kepem={KEPLISTA[aktIndex]} leptet={leptet}/>
      </section>
      <article>
        
        <Galeria kivalaszt={kivalaszt} lista={KEPLISTA} aktIndex={aktIndex}/>
      </article>
    </>
  )
}

export default App
