# Listakezelő függvények gyakorlása

## Specifikáció

Jelenítsük meg az adatainkat egy táblázatban.
Az űrlapban lehessen sort beszúrni.
Tudjunk törölni ikonnal a táblázatból.
Legyen egy szűrőmező, ami segítségével tudunk sorra szűrni.

## Függvények

1. tablazatLetrehoz(lista)
   - lista alapján html táblázat, paraméter lista, visszatérési érték txt
   - minden sor mellett egy törlés ikonnal
2. megjelenit(txt)
   - megjelenít egy szöveget amit kap
3. rendez(lista) -> const RLISTA
   - megrendezi a listát az adott paraméter szerint, a megrendezett listát visszaadja
   - akkor fut le, amikor rákattintunk a táblázat fejlécére
4. szures(lista, keresoSzoveg) -> const SZURT_LISTA
   - akkor fog lefutni, ha a szűrő mezőben változás történik (keyup)
   - A listában a név mezőben keres egyezéseket és szűri a listát ez alapján - filter
5. sorBeszur(lista) -> const UJ_LISTA
   - ha a submit gombra kattintunk, akkor fut le a függvény
   - űrlap adatokat átalakítjuk object-re majd pusholjuk
6. torol(lista, index)
   - törli a lista indexedik sorát
   - törlés ikonra kattintva (class -ra event listener, vissza adja az indexet)
