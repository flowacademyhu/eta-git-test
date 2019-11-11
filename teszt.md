# Teszt

Név: 

## Kérdések:

1. Mit értünk egy `commit` alatt, mit tartalmaz?
# A commit az egy-egy etap alatt a lokális repónk trackelt fájljain végzett módosítások összességét, az ezekről készült pillanatképet értjük. A commitokat mi magunk hozzuk létre, optimálisan minden logikailag egybefüggő részfeladat elvégzése után célszerű, a .git könyvtárban kerülnek biztonságosan eltárolásra.

1. Mi a különbség a `fetch` es `pull` git parancsok között?
# git fetch: A fetch parancs segítségével a távoli repo-n lévő commit-ok importálásra kerülnek a
helyi adatbázisba. A parancs csak a lokális adatbázist frissíti, a working directory-t és a
staging area-t érintetlenül hagyja.
# git pull: A központi szerverre felküldött commit-ok letöltése és merge-ölése az
aktuális branch-be. A fetch-elés után a working directory-ba, a fájlrendszerre is leírja (merge) a módosításokat.

1. Mi a három állapota file-oknak git szempontjából, milyen parancsokkal mozgatjuk ezek között?
#  I.  untracked: azon fájlok, amelyek állapotát a git nem trackeli/követi, git commit paranccsal nem kerül commitolásra.
# II.  tracked   : untracked állapotból a "git add <filename>" paranccsal adhatjuk a követett fájlokhoz, ezek állapotát a git   trackeli, ennek továbbihárom állapota lehet:
                  A) modified: a fájl módosult a legutolsó commit óta, de még nincs a staging area-ban
                  B) unmodified: a git trakeli, de a fájl nem módosult az utolsó commit óta
                  C) staged:  módosult az utolsó commit óta és készült róla pillanatkép, a következő commit-tal tárolásra kerül.

  
1. Mi a különbség a `git checkout origin/feature` és a `git checkout feature` parancsok között?
#  Remote repository-nak nevezzük a távoli szerveren lévő tárolót, ennek segítségével tartják egymással a kapcsolatot a fejlesztők. A remote szerverre, illetve annak bracnh-eire origin névvel hivatkoznak. A checkout parancs a branch-ek közötti váltásra szolgál.

1. Mi történik, ha valaki más is módosította a file-t amin dolgozunk és mit tudunk tenni ilyenkor?
#  Ebben az esetben, amennyiben külön branchen történtek a módosítások, a fájl megegyező soraiban történt módosításokra 
   merge-öléskor vagy pull-oláskor figyelmeztet a git: conflict-nek nevezzük, amikor a git nem tudja eldönteni, mely módosításokat kell megtartania. A konfliktus feloldása a feljesztő feladata, manuálisan, a kérdéses fájl szerkesztésével.
   
1. Mi az a `HEAD` és mi a jelentősége?
# A HEAD az aktuális branch utolsó commitját jelöli, ami óta az adott branchen még nem keletkezett újabb commit. 

1. Mi a célja a branch-elésnek?
# A branch szó jelentése (kb.) "ág"/"elágazás". A fejlesztés különböző rész-feladatainak, moduljainak párhuzamos követhetősége okán használjuk, így a fejlesztők egymástól függetlenül dolgozhatnak egyazon repositoryban. Lehetőség van a branch-ek közötti átjárásra és azok egybeolvasztására is.

1. Hogyan lehet összehasonlítani file-ok állapotait, mire tudjuk még ezt a kimenetet használni?
# A git diff paranccsal összehasonlíthatunk fájlok, commitok, branch-ek közötti változásokat, a git status paranccsal pedig a working directory fájljainak aktuális állapotát ellenőrizhetjük.

1. Hogy lehet megnézni egy repo történetét, milyen eszközeink vannak ebben való keresésre?
# A git log parancs megmutatja a commit előzményeket/historyt. Különböző "kapcsolói" segítenek a megjelenített adatok rendszerezésében.


1. Melyik git parancsot használnád, hogy megtudd milyen állapotban van épp a repo?
# git status, mely a working directory fájljainak állapotáról tájékoztat, vagy git diff ami fájlok, commitok, branchek közötti különbségeket mutatja meg
