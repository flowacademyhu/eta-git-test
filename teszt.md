# Teszt

Név: Plesa Tamás

## Kérdések:

1. Mit értünk egy `commit` alatt, mit tartalmaz?

  Commitnak nevezik azt a folyamatot, amikor a megjelölt, és a stagingben lévő fájlokról készült snapshotokat a .git könyvtárban, azaz a lokális adatbázisban tárolja el biztonságosan, generál egy SHA-1 kódot is, ez a snapshotokra hivatkozik.
1. Mi a különbség a `fetch` es `pull` git parancsok között?

A git fetch ténylegesen csak letölti az új adatot a távoli repositoryból. Nem integrál semmilyen új adatot a már létező fájljainkba, soha nem manipulál semmit.
A git pull ellentétben arra van, hogy frissítsd a jelenlegi HEAD branched az utolsó változtatásokra a távoli repositoryról. Ez jelenti azt, hogy nem csak letölti, hanem felül is írja az adataidat. Ez problémát is okozhat ha nem figyel oda az ember.

1. Mi a három állapota file-oknak git szempontjából, milyen parancsokkal mozgatjuk ezek között?

modified, added, committed.
git add
git commit

1. Mi a különbség a `git checkout origin/feature` és a `git checkout feature` parancsok között?
Az origin/feature az a remote repository része, a sima feature pedig a local repositoryé.

1. Mi történik, ha valaki más is módosította a file-t amin dolgozunk és mit tudunk tenni ilyenkor?

Merge conflict fog jelentkezni. Editorban látjuk a különbségeket, és eldönthetjük hogy melyik maradjon a kettő közül, vagy akár mindkettő. Ha mindent kiválogattunk, akkor utána git add, majd git commit

1. Mi az a `HEAD` és mi a jelentősége?

a legutolsó commitra való hivatkozás az aktuális branchben. Pl.: Reset használata során az aktuális branch HEAD-jét állítja át a Git, ezáltal a branch commitjai módosulnak.

1. Mi a célja a branch-elésnek?

Arra szolgál, hogy a fejlesztést különböző részekre lehessen osztani, a fejlesztők egymástól függetlenül dolgozhatnak, az egyes ágakon, ugyanazon a repositoryn. Tudnak váltani ezek között, és egybe is tudjáká fűzni ezeket. ezzel a fejlesztés meneteit egybeolvasztani, így több eredményből egy közös keletkezik.

1. Hogyan lehet összehasonlítani file-ok állapotait, mire tudjuk még ezt a kimenetet használni?

git diff, a változásokat is megtudjuk nézni vele.

1. Hogy lehet megnézni egy repo történetét, milyen eszközeink vannak ebben való keresésre?

git log a legegyszerűbb erre.
oneline     minden commitot egy sorba rak. ezen kívül van short, full, fuller. Ez az információ méretét csökkenti/növeli.
git log -S    konkrét stringre kereshetünk
git grep

1. Melyik git parancsot használnád, hogy megtudd milyen állapotban van épp a repo?

git status





2)

a) klónoztam a repot, masterről git checkout app-al léptem át az app branchre.

b) commit aee7423746366c926a15c0f5bd62d8c97586390f
Author: Mark Zuckerberg <zuck@facebook.com>
Date:   Fri Nov 8 13:08:59 2019 +0100

    Change the status endpoint to /health
    
    To follow industry standards, the endpoint responsible for the status of
    the service should live under the /health endpoint and return a bool
    value denoted by the `health` key.

commit 88bc0973d417a6377d852a99066374ed230f0913
Author: András Maróy <andras@maroy.hu>
Date:   Fri Nov 8 14:10:54 2019 +0100

    Add basic node webapp and instructions to run it


c) git pull origin master    (úgy hogy az app branchen vagyok)

d) App branchen belül, git merge upstream, majd conflict megoldás, incoming changes elfogadása.
