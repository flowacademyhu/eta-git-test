# Teszt

Név: Mező János

## Kérdések:

1. Mit értünk egy `commit` alatt, mit tartalmaz?
Egy commit az előző verzóhoz képest a változtatásokat tartalmazza.

1. Mi a különbség a `fetch` es `pull` git parancsok között?
A fetch letölt minden adatot a remote repository-ból, de nem frissíti a lokális branchet, a pull frissíti a
lokális branchet a remote branch új commit-jaival.

1. Mi a három állapota file-oknak git szempontjából, milyen parancsokkal mozgatjuk ezek között?
untracked, staged, committed
git add parancsal untracked-ből staged lesz.
git commit parancsal a staging area-ban levő fájlokból egy commit-ot csinálunk
git reset parancsal vissza tudjuk állítani a fájlt staged-ről untracked-re, vagy egy commitot staged-re.

1. Mi a különbség a `git checkout origin/feature` és a `git checkout feature` parancsok között?
az git checkout feature parancs a lokális feature branch-et szedi le, a git checkout origin/feature pedig a remote feature branch-et.

1. Mi történik, ha valaki más is módosította a file-t amin dolgozunk és mit tudunk tenni ilyenkor?
A git merge parancsal össze tudjuk vonni a módosításokat. Ilyenkor Elő szokott előfordulni a merge conflict, ami akkor jelenik meg, ha ugyanott módosítottunk a fájl-on. Ezt fel tudjuk oldani ha megnyitjuk a fájlt és eldöntjük milyen módosítást tartunk meg és vetünk el benne.

1. Mi az a `HEAD` és mi a jelentősége?
A HEAD egy branch aktuális változatát jelöli.

1. Mi a célja a branch-elésnek?
A repo-n való egyes módosítások, elvégzéséhez használhatjuk a új brancheket, például feature hozzáadása, bug fix. Ezáltal könnyebben tudunk egyszerre többen dolgozni az adott repo-n, jobban nyomon tudjuk követni a változtatásokat és kevesebb lesz a conflict.

1. Hogyan lehet összehasonlítani file-ok állapotait, mire tudjuk még ezt a kimenetet használni?
A git diff parancsal. Az egyes commitok vagy branch-ek közötti különbségeket is meg tudjuk nézni vele.

1. Hogy lehet megnézni egy repo történetét, milyen eszközeink vannak ebben való keresésre?
A git log parancsal.

1. Melyik git parancsot használnád, hogy megtudd milyen állapotban van épp a repo?
git status

4. feladat:
2019.11.08-án lett megváltoztatva Mark Zuckerberg által a lenti okok miatt.

commit aee7423746366c926a15c0f5bd62d8c97586390f
Author: Mark Zuckerberg <zuck@facebook.com>
Date:   Fri Nov 8 13:08:59 2019 +0100

    Change the status endpoint to /health
    
    To follow industry standards, the endpoint responsible for the status of
    the service should live under the /health endpoint and return a bool
    value denoted by the `health` key.


