# Teszt

Név: Urbán József

## Kérdések:

1. Mit értünk egy `commit` alatt, mit tartalmaz?
Elemi egység, a fájlokról elmentett pillanatkép. Minél gyakrabban és minél kisebb logikailag összetartozó egységet kommitoljunk. A fileokon előző commit óta elvégzett módosításokat tartalmazza.

1. Mi a különbség a `fetch` es `pull` git parancsok között?
A fetch a távoli repository változásainak letöltése a local repositoryba.
A pull a változások letöltése és egyben merge-elése is.

1. Mi a három állapota file-oknak git szempontjából, milyen parancsokkal mozgatjuk ezek között?
-Az első állapot amikor dolgozunka file-on, az a working copy. Ennek Az állapota modified ha módosítottuk az utolsó commit óta.
-A második állapot amikor a stage-re küldjük őket a git add filenév paranccsal. Állapota staged.
-A harmadik állapot amikor commit-oljuk őket. Ebben az esetben bekerül a local repoba. Commited.

1. Mi a különbség a `git checkout origin/feature` és a `git checkout feature` parancsok között?
A `git checkout origin/feature` a távoli repositoryra utal, a `git checkout feature` a lokális repora utal.

1. Mi történik, ha valaki más is módosította a file-t amin dolgozunk és mit tudunk tenni ilyenkor?
Merge-elni tudjuk őket. Ha ugyan abba a sorba írtunk módosításokat akkor conflict keletkezik, ezt a git nem tudja feloldani, így manuálisan kell kiválasztanunk, hogy melyik módosítás maradjon.

1. Mi az a `HEAD` és mi a jelentősége?
A HEAD az utolsó commit az aktuális branchen amin dolgozunk. Lényegében egy referencia az utolsó commitra, így nem kell megkeresnünk a log-ok között az ID-ját, hanem a HEAD-el hivatkozhatunk rá.

1. Mi a célja a branch-elésnek?
A branchelés célja, hogy minnél jobban eloszhatóak és átláhatóak legyenek a feladatok. A master branchre csak az a működő verzió kerül ki, amit kiadunk a kezünkből. Nem ezen folyik a munka, hanem létrehozunk egy develop branchet. A develop branch-en folyik a munka, de a projecthez kapcsolódó minden featuret külön branchen készítjük el és ha jól működik akkor mehet a developba.

1. Hogyan lehet összehasonlítani file-ok állapotait, mire tudjuk még ezt a kimenetet használni?
Fileok állapotait a git diff parancsal tudjuk összehasonlítani.

1. Hogy lehet megnézni egy repo történetét, milyen eszközeink vannak ebben való keresésre?
A git log paranccsal. A git log --grep="amit keresünk" paranccsal tudunk keresni benne.


1. Melyik git parancsot használnád, hogy megtudd milyen állapotban van épp a repo?
git status


