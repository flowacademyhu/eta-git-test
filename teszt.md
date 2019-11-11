# Teszt

Név: 

## Kérdések:

1. Mit értünk egy `commit` alatt, mit tartalmaz?
A módosítások eltárolására szolgál a lokális tárolóban. Egy pillanatfelvétel a fejesztés adott állapotáról. Amikor a fejlesztések, módosítások száma elér egy adott számot (szintet), akkor egy commit segítségével ezeket a módosításokat elmentjük a helyi repóban.

1. Mi a különbség a `fetch` es `pull` git parancsok között?
Fetch: a távoli (remote) repóban lévő commitokat importáljuk a lokális repóba. Sem a stanging area, sem a working directory tartalma nem változik. Arra szolgál, hogy megnézzük a változtatásokat, amelyek a remote-ban voltak anélkül, hogy integrálnánk a helyi branch-be (ilyenkor a commitok a remote brancs-ben vannak, nem a local branch-ben)
Pull: a remote-ban lévő változatások letöltése a lokális repóba az aktuális branc-be, iyen merge-ve is van, azaz a working directory-ba is bekerülnek a módosítások.

1. Mi a három állapota file-oknak git szempontjából, milyen parancsokkal mozgatjuk ezek között?
Untracked: olyan változás, amely még nincs a stanging area-ben. A git add paranccsal lehet a working directoryból a stanging area-ba áthelyezi fájlokat. Ezek a fáljok nincsenek benne a verziókezelésben.
Tracked: olyan fájlok, amelyet a Git verziókövet, ezek változását a Git nyomonköveti. Egy ilyen fájl lehet modified, azaz módosult a legutóbbi comit óta, unmodified (tiszta), nincs mdosítás a legutolsó commit óta. A git commit paranccsal lehet a Staged állapotba tenni egy fájt.
Staged, cached: olyan fájl, amiről már készült pillanatfelvétel (commit)

1. Mi a különbség a `git checkout origin/feature` és a `git checkout feature` parancsok között?
git checkout feature = az aktuális branch a feature lesz.
git checkout origin/feature =

1. Mi történik, ha valaki más is módosította a file-t amin dolgozunk és mit tudunk tenni ilyenkor?
Abban az esetben, ha nem ugyanabban a sorban van a módosítás, akkor a Git automatikusan merge-l. Ha azonos helyeken történt a változtatás, akkor conflct adódik, ezt manuálisan kell feloldanunk. A szerkesztőben <<<<<< branc1 ======= között van az egyik fejéesztő módosítása, az ====== és a brancs2 >>>>>> között a másik fejéesztő munkájsa, és a megfeleő részt kitörölve oldom fel a conflict-et.

1. Mi az a `HEAD` és mi a jelentősége?

A legutolsó commitre való hivatkozás az aktuális branch-ben. 

1. Mi a célja a branch-elésnek?

Ezek segítségével lehet biztosítani, hogy az egyes fejlesztések ne "ronthassák el" egymást. Amikor az egy branch-ben bármilyen változás történik, az egy másik branch-bennem okoz változást addig, amíg a branch-eket nem egyesítik.

1. Hogyan lehet összehasonlítani file-ok állapotait, mire tudjuk még ezt a kimenetet használni?
A git status szolgál az állapot lekérdezésére. Megmutatja, hogy vannak-e untracked és stanging-elésre (commitolásra) váró fájljaink

1. Hogy lehet megnézni egy repo történetét, milyen eszközeink vannak ebben való keresésre?
A git log parancs megmutatja a commit-ek listáját, lehetőség van adott commit-et keresni, a HEAD állítására
1. Melyik git parancsot használnád, hogy megtudd milyen állapotban van épp a repo?
