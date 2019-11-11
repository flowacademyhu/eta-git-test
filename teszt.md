# Teszt

Név: 

## Kérdések:

1. Mit értünk egy `commit` alatt, mit tartalmaz?
Azonos téma köré csoportosuló módosítások összessége, melyben több fájl módosítása is szerepelhet.
Több fájl módosításait tartalmazhatja
Meg kell adni egy commit message-t
Egy fájl hozzáadása (git add) és elvétele (git remove) is egy commit része
kell, hogy legyen
1. Mi a különbség a `fetch` es `pull` git parancsok között?
A fetch-el tudjuk lekérni, hogy milyen változtatások vannak egy távoli repóban, azonban ez nem változtatja meg a helyi repót. A pull-al ugyanezt tudjuk megtenni, csak az merge-el is egyet. A helyi branch-et update-eli.

1. Mi a három állapota file-oknak git szempontjából, milyen parancsokkal mozgatjuk ezek között?
unstaged állapot, amiből a git add paranccsal felpakolhatjuk a stage-re őket. Ezentúl staged lesz az állapotuk, majd a stage-ről commitolhatjuk a fájlokat a git commit-al, innentől kezdve pedig comitted lesz az állapotuk.

1. Mi a különbség a `git checkout origin/feature` és a `git checkout feature` parancsok között?


1. Mi történik, ha valaki más is módosította a file-t amin dolgozunk és mit tudunk tenni ilyenkor?
Conflict keletkezik, amelyet fel kell oldanunk.

1. Mi az a `HEAD` és mi a jelentősége?
A HEAD egy hivatkozás az utolsó commitra az aktuális branchen. Megmutatja hol áll az adott branch.

1. Mi a célja a branch-elésnek?
A verziókezelés átláthatóbbá tétele. Több részre lehet bontani a fejlesztést. Klasszikus megvalósítás erre, hogy van egy master branchünk, amibe a kész verziók kerülnek bele. Van egy develop branch-ünk, amibe a fejlesztések kerülnek bele a különböző feature branchekből, amik pedig a fejlesztés bizonyos kisebb részekre osztott részei, külön branchekben.

1. Hogyan lehet összehasonlítani file-ok állapotait, mire tudjuk még ezt a kimenetet használni?
A git diff paranccsal.
Itt látom a módosításokat, amit a helyi repóban végrehajtottam. Viszont itt csak azok látszanak, amiket még nem küldtem fel a stage-re. Ha git diff valami.val utasítást adok, akkro egy konkrét fájlt tudok megnézni, hogy azon milyen módosításokat hajtottam végre, de szintén nem a stage-en lévőeket.

git diff --staged - itt tudom megnézni, hogy milyen változások történtek a repoban lévő fájlokban, amik a stageben vannak.

git diff --cached valami.val - szintén a stage-re felküldött fájlok módosításait tudod megnézni vele, azonban itt konkrét fájlra nézve, nem global.

1. Hogy lehet megnézni egy repo történetét, milyen eszközeink vannak ebben való keresésre?
git log paranccsal. Ha terminálból keresünk, akkor lehet grep-et alkalmazni az abban való keresésre.

1. Melyik git parancsot használnád, hogy megtudd milyen állapotban van épp a repo?
git status
