import './galeria.css'
import type { KepTipus } from "../adat";
import KisKep from "./KisKep";

interface ListaProps{
    lista: KepTipus[]
    aktIndex:number
}

export default function Galeria({lista,  aktIndex }: ListaProps){
    return(
        <div className='galeria'>
            {
                lista.map((e, i) => {
                    return <KisKep kepem={e}  index={i} key={i} isAktiv={i === aktIndex} />
                })
            }

        </div>
    )
}