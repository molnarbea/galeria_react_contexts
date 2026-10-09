import './galeria.css'
import type { KepTipus } from "../adat";
import KisKep from "./KisKep";

interface ListaProps{
    kivalaszt: (index: number) => void,
    lista: KepTipus[]
    aktIndex:number
}

export default function Galeria({lista, kivalaszt, aktIndex }: ListaProps){
    return(
        <div className='galeria'>
            {
                lista.map((e, i) => {
                    return <KisKep kepem={e} kivalaszt={kivalaszt} index={i} key={i} isAktiv={i === aktIndex} />
                })
            }

        </div>
    )
}