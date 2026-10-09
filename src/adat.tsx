export interface KepTipus{
    readonly id: number
    felirat: string
    kep: string
    nagyKep: boolean
}

export const KEPLISTA:KepTipus[] = [
    {
        id: 1,
        felirat: "Koala",
        kep: "kepek/koala.jpg",
        nagyKep: true

    },
    {
        id: 2,
        felirat: "Cica",
        kep: "kepek/szisza.jpg",
        nagyKep: false
    },
    {
        id: 3,
        felirat: "Kutya",
        kep: "kepek/tuta.jpg",
        nagyKep: false
    }
]