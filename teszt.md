# Teszt

Név: 

## Kérdések:

1. Mit értünk egy `commit` alatt, mit tartalmaz? Egy azonos téma köré csoportosuló változtatások összesége, amely több fájl módosításait is tartalmazhatja.
1. Mi a különbség a `fetch` es `pull` git parancsok között? A git pull az mergeli a változtatásokat a fetch az nem piszkálja a staging areát és working directoryt sem.
1. Mi a három állapota file-oknak git szempontjából, milyen parancsokkal mozgatjuk ezek között? (untracked), modified,stageded fájlok, commitolt fájlok. A git add-dal és a git committal. 
1. Mi a különbség a `git checkout origin/feature` és a `git checkout feature` parancsok között? Az első a távoli repositoryba jelentkezik be a másik pedig a lokálisba. 
1. Mi történik, ha valaki más is módosította a file-t amin dolgozunk és mit tudunk tenni ilyenkor? Akkor a git nem fogja engedni, hogy felpusholjuk a módosításunkat, először pullolnunk kel majd és ha automatikusan nem tud mergelni akkor kézileg kell a conlictot megoldani, majd ha ezzel véegztünk, akkor már felpusholhatjuk a fájlt.
1. Mi az a `HEAD` és mi a jelentősége? Az utolsó commitra való hivatkozás az adott branchben.
1. Mi a célja a branch-elésnek? Az hogy ha többen dolgoznak egy projekten akkor mindenki tudjon dolgozni anélkül, hogy folyton conflictokat kelljen megoldani, és ezekkel csak a végén legyen gond.
1. Hogyan lehet összehasonlítani file-ok állapotait, mire tudjuk még ezt a kimenetet használni? git diff-vel, összehasonlíthatunk még vele commitokat, brancheket stb is.
1. Hogy lehet megnézni egy repo történetét, milyen eszközeink vannak ebben való keresésre? git log, greppel lehet benne keresni.
1. Melyik git parancsot használnád, hogy megtudd milyen állapotban van épp a repo? git status
