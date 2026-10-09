import type { KepTipus } from "../adat";

interface KisKepProps{
    kepem: KepTipus,
    index: number,
    kivalaszt: (index:number) => void,
    isAktiv:boolean
}

export default function KisKep({kepem, index, kivalaszt, isAktiv}:KisKepProps){

    return(
        <div className={`kepdiv ${isAktiv ? 'aktiv' : ''}`}  onClick={() => kivalaszt(index)}>
            <div className="kep">
                <img src={kepem.kep} alt={kepem.felirat || 'Kép'}/>
            </div>

        </div>
    )
}