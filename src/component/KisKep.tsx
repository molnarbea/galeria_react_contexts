import type { KepTipus } from "../adat";
import { useKepContext } from "../contexts/KepContext";

interface KisKepProps{
    kepem: KepTipus,
    index: number,
    isAktiv: boolean
}

export default function KisKep({kepem, index, isAktiv}:KisKepProps){
     const { kivalaszt } = useKepContext();


    return(
        <div className={`kepdiv ${isAktiv ? 'aktiv' : ''}`} onClick={() => kivalaszt(index)}>
            <div className="kep">
                <img src={kepem.kep} alt={kepem.felirat || 'Kép'} />
            </div>

        </div>
    )
}