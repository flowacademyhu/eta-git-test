# Teszt

Név: Vajgely Tamás 

## Kérdések:

1. Mit értünk egy `commit` alatt, mit tartalmaz?
A commit a gépen lévő working directoryból származó módosításokat helyezi át a local repositoryba. Ez vagy úgy történik, hogy először add paranccsal feltesszük a stagre-re a fájlokat és azokat commit paranccsal feltesszük a local repositoryba. Vagy a "commit -am" paranccsal, ha nincs untracked file a working directoryba, akár az add ki is hagyható.  
1. Mi a különbség a `fetch` es `pull` git parancsok között?
A fetch parancs a push ellentéte. A remote repositoryból lehúzza a local repositoryba a frissített tartalmat. Ebben az esetben a user megnézheti, hogy milyen módosítások történtek és utána azt még a working directoryval mergelnie kell, de ez a parancs nem írja felül a working directory-t. A pull parancs a fetch és a merge egyben, lehúzza a remote repo-ból a tartalmakat és egyből felülírja a working directory-t is, így az ott lévő nem commitolt változások elveszhetnek. 
1. Mi a három állapota file-oknak git szempontjából, milyen parancsokkal mozgatjuk ezek között?
A nulladik típus az untracked, ebben az esetben olyan fájl van working directoryba, amelyről még nem készült snapshot, így a módosítások nem az kerülnek naplózásra
A tracked fájlok közül az első megkülönböztetés lehet modified vagy unmodified. Előbbi jelenti, ha módosult a fájl, utóbbi ha nem történt benne változás. A modified fájlokat a "git add" paranccsal tudjuk áthelyezni a stagere. 
A második típus staged/cached. Ebben az esetben a korábban változtatott fájl már felkerült a stagere, viszont még nem került át a local repositoryba. A "git commit" paranccsal kerülhet át a local repoba.
A harmadik típus a committed, ebben az esetben a fájl már átkerült a local repoba, innen a push paranccsal kerülhet át a remote szerveren lévő repositoryba.   
1. Mi a különbség a `git checkout origin/feature` és a `git checkout feature` parancsok között?
Az origin/feature mindig a remote repositoryra utal. Az első parancs hibát fog dobni. A második parancs esetében local branchet tudunk váltani, ebben az esetben a feature branchre váltunk át.
1. Mi történik, ha valaki más is módosította a file-t amin dolgozunk és mit tudunk tenni ilyenkor?
Ha ugyanazon pontokon két fejlesztő is módosított akkor conflict keletkezik. Ez merge vagy pull request esetében megakadályozhatja a végrehajtást. A tovább lépés érdekében a conflictot fel kell oldani, vagyis el kell dönteni, hogy a két rivális módosítás közül melyiket akarjuk megtartani.
1. Mi az a `HEAD` és mi a jelentősége?
A `HEAD` a legutolsó commitra való hivatkozás az aktuális branchben. Segítségével könnyebb a fejlesztés nyomon követni, esetlegesen visszaállítani a korábbi állapotot. 
1. Mi a célja a branch-elésnek?
A fejlesztési folyamat strukturálása, ez különösen akkor fontos ha többen dolgoznak különböző feladatokon. A fejlesztési folyamatok elszaparálását szolgája a hatékonyság érdekében. 
1. Hogyan lehet összehasonlítani file-ok állapotait, mire tudjuk még ezt a kimenetet használni?
A legfőbb parancs erre a "git diff". A diff megmutatja a stagen és working directorbyan lévő fájlok különbözőségét. Vagy akár két commit, branch és fájlok összehasonlítására is használható. Mergelésnél és conflict feloldásnál vagy a korábbi verzióra való visszaállásnál nyújthat segítséget.  
1. Hogy lehet megnézni egy repo történetét, milyen eszközeink vannak ebben való keresésre?
Erre a legfőbb parancs a git log. Számtalan paraméter állítható be a parancs számára, hogy testreszabható legyen a kimenet és könnyen kereshetővé váljon az eredmény. Lehet paraméterezni és limitálni is a keresett eredményt, vagy kifejezetten szűrni. 
1. Melyik git parancsot használnád, hogy megtudd milyen állapotban van épp a repo?
A git status parancs megmutatja a working directory és local repository állapotát.
