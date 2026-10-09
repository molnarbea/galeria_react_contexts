
import './App.css'
import Galeria from './component/Galeria'
import NagyKep from './component/NagyKep'
import { useKepContext } from './contexts/KepContext';

function App() {

  const { kepLista, aktIndex } = useKepContext();

  return (
    <>
      <header>
        <h1>Galéria</h1>
      </header>

      <section>
        <NagyKep kepem={kepLista[aktIndex]} />
      </section>
      <article>
        
        <Galeria lista={kepLista} aktIndex={aktIndex} />
      </article>
    </>
  )
}

export default App
