React és TypeScript Alapfogalmak

Komponens
A komponens a React alkalmazás építőeleme. Egy önálló feladatot ellátó felületi elem, amely újra felhasználható.
Példa a projektből
A galéria több komponensből áll:
•	Galeria
•	KisKep
•	NagyKep
Mindegyik más feladatot lát el.

Props
A props segítségével adatot tudunk átadni egy komponensnek.
A komponens kívülről kapja meg az adatokat, amelyeket csak felhasználhat, de nem módosíthat közvetlenül.
Példa a projektből
A NagyKep komponens megkap egy képet:
•	kepem
Ezt használja a kép és a felirat megjelenítésére.

State
A state a komponens változó állapotát tárolja.
Amikor a state módosul:
•	a React újrarendereli az érintett komponenseket,
•	a felhasználó azonnal látja a változást.
Példa a projektből
A galériában a kiválasztott kép indexe változik.
Ha a felhasználó másik képre kattint:
•	módosul az aktuális index,
•	új kép jelenik meg a nagy nézetben.

useStaHook
A useStasegítségével állapotot kezelhetünk függvénykomponensekben.
Mire használjuk?
•	aktuális kép tárolása
•	számláló tárolása
•	játékállapot tárolása
•	lista módosítása
Példa a projektből
A Context tárolja, hogy éppen melyik kép van kiválasztva.
Amikor a felhasználó léptet vagy rákattint egy bélyegképre, az állapot megváltozik.

Eseménykezelés
Az eseménykezelés lehetővé teszi, hogy reagáljunk a felhasználó műveleteire.
Gyakori események
•	kattintás
•	gépelés
•	egérmozgás
Példa a projektből
A NagyKep komponensben a nyilakra kattintva fut le a léptető függvény.
Például:
•	bal nyíl → előző kép
•	jobb nyíl → következő kép

Állapot Felemelése (Lifting StaUp) és Adatáramlás
A Reactban az adat általában felülről lefelé áramlik.
Ha több komponens ugyanazt az adatot használja, akkor azt közös helyen kell tárolni.
Ezt nevezzük State Felemelésnek.
A galéria példája
A kiválasztott képet használja:
•	KisKep
•	NagyKep
Ha mindkettő saját állapotot tárolna, könnyen eltérés keletkezne.
Ezért az állapot központi helyre kerül.
Így minden komponens ugyanazt az aktuális képet látja.

Az Általános Komponensfa Hierarchia
App (elindítja az alkalmazást)
│
├── KepProvider (biztosítja a közös adatokat)
│
└── Galeria (összefogja a galériát)
    │
    ├── NagyKep(megjeleníti a kiválasztott képet)
    │
    └── KisKep (megjeleníti az összes bélyegképet)
        ├── KisKep
        ├── KisKep
        ├── KisKep
        └── ...
        
Általános Projekt Mappaszerkezet
src
│
├── components
│   ├── Galeria.tsx
│   ├── KisKep.tsx
│   └── NagyKep.tsx
│
├── contexts
│   └── KepContext.tsx
│
├── adat.tsx
├── App.tsx
└── main.tsx

Prop Drilling vs. Context API Értékelése
A két megoldás ugyanarra szolgál:
•	adatok megosztására a komponensek között.
A különbség az adatok továbbításának módjában van.

Mikor használjuk a Props továbbadását (Prop Drilling)?
A props továbbításnál az adatok komponensről komponensre haladnak.
Példa:
App
↓
Galeria
↓
KisKep

Mikor indokolt a Context API?
A Context API lehetővé teszi, hogy a komponensek közvetlenül hozzáférjenek a közös állapothoz anélkül, hogy propsokon keresztül kellene átadni mindent. A NagyKep például a useKepContext() segítségével éri el a léptető függvényt. 
Előnyök
•	nincs hosszú props lánc
•	könnyebb adatmegosztás
•	tisztább komponensstruktúra
A galéria projektben
A Context tárolja például:
•	aktuális kép indexe
•	képváltó függvény
•	kiválasztó függvény
