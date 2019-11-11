# Teszt

Név: 

## Kérdések:

1. Mit értünk egy `commit` alatt, mit tartalmaz?
1. Mi a különbség a `fetch` es `pull` git parancsok között?
1. Mi a három állapota file-oknak git szempontjából, milyen parancsokkal mozgatjuk ezek között?
1. Mi a különbség a `git checkout origin/feature` és a `git checkout feature` parancsok között?
1. Mi történik, ha valaki más is módosította a file-t amin dolgozunk és mit tudunk tenni ilyenkor?
1. Mi az a `HEAD` és mi a jelentősége?
1. Mi a célja a branch-elésnek?
1. Hogyan lehet összehasonlítani file-ok állapotait, mire tudjuk még ezt a kimenetet használni?
1. Hogy lehet megnézni egy repo történetét, milyen eszközeink vannak ebben való keresésre?
1. Melyik git parancsot használnád, hogy megtudd milyen állapotban van épp a repo?


1: Aa add paarncs után kiadható parancs, a staging area-ból a local repository-ba kerülnek a módosított  file-ok. Egy üzenetet tartalmaz, ami a módosításokról szól.

2:Az, hogy a fetch a working directory-t érintetlenül hagyja, a pull viszont az ott lévő fájlokat is érinti.

3: tracked, untracked és modified. 

4: az, hogy az utóbbival csak a local repository-n váltunk branchet, az előbbivel pedig a remote-on.

5: Fel kell oldani a conflictot, ami ilyenkor keletkezik.

6: A legutolsó commit állapot. Az a jelentósége, hogy a legfrissebb állapotot jelzi.

7: Az, hogy elkülönülve dolgozhatnak a különböző feature-ökön az emberek, anélkül, hogy állandóan conflict keletkezne + átláthatóság.

8: A diff paranccsal. Akár brancheket, commitokat is össze lehet vele hasonlítani, de a working directory és a staging area-t is össze tudja hasonlítani.

9: git log. Részletesebben: git log --graph --parents --name-status

10: git status


