import type { KepTipus } from "../adat";
import { useKepContext } from "../contexts/KepContext";
import './NagyKep.css'

interface NagyKepProps{
     kepem: KepTipus
}

export default function NagyKep({kepem}:NagyKepProps){
    const { leptet } = useKepContext();

    if (!kepem) {
        return <div className="nagykepdiv">Nincs megjeleníthető kép</div>
    }
    return(
         <div className="nagykepdiv" >
            <button className="bal" onClick={() => leptet(false)} aria-label="Következő kép"
                type="button">◀</button>
            <div>
                <div className="kep">
                    <img src={kepem.kep} alt={kepem.felirat || 'Kép'} />
                </div>
                <p>{kepem.felirat}</p>
            </div>
            <button className="jobb" onClick={() => leptet(true)} aria-label="Következő kép"
                type="button">▶</button>
        </div>
    )
}