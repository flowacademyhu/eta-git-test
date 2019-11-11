# Teszt

Név: 

## Kérdések:

1. Mit értünk egy `commit` alatt, mit tartalmaz?
	Commit alatt azt a műveletet értjük, amikor pl. egy fájl módosítást szeretnénk a staging
	szekcióból majd push-olni, és ezzel a paranccsal tehetjük a push parancs által elérhetővé.
	Tartalmazza a git add által megjelölt fájlokat, melyeket commitolni szeretnénk.
	
1. Mi a különbség a `fetch` es `pull` git parancsok között?
	A fetch felsorolja a két repó közötti különbségeket, míg a pull ténylegesen le is 
	húzza az a cél repóból a tartalmat a saját repónkba.
	
1. Mi a három állapota file-oknak git szempontjából, milyen parancsokkal mozgatjuk ezek között?
	Untracked
	Unmodified
	Modified
	New file
	Staged

	A git add paranccsal egy commit elemeihez rakhatjuk őket, git reset -- fájlnév paranccsal
	már addolt elemet vehetünk ki egy még végre nem hajtott commitból.

1. Mi a különbség a `git checkout origin/feature` és a `git checkout feature` parancsok között?
	A git checkout origin/feature paranccsal a github-on lévő feature branch-re lépünk, míg
	git checkout feature-el a lokális feature branch-re lépünk át.

1. Mi történik, ha valaki más is módosította a file-t amin dolgozunk és mit tudunk tenni ilyenkor?
	Ha más is módosít egy általunk használt fájt akkor előfordulhat, hogy conflict alakul ki
	merge során. Ezt conflict feloldással tudjuk orvosolni, mely után a merging lehetővé válik.

1. Mi az a `HEAD` és mi a jelentősége?
	A Head az éppen aktuális branch-nek az utolsó commitjának felel meg.

1. Mi a célja a branch-elésnek?
	A különféle branch-ek arra szolgálnak, hogy pl. adott részegységek fejlesztését egy 
	elszeparát helyen tudjuk fejleszteni, ezáltal is redukálhatjuk különféle conflictok
	számát. További fontossága a branch-eknek, hogy így nem a master branch-en lévő
	már jóváhagyott verziót piszkáljuk.

1. Hogyan lehet összehasonlítani file-ok állapotait, mire tudjuk még ezt a kimenetet használni?
	A git diff paranccsal láthatjuk a különbségeket.

1. Hogy lehet megnézni egy repo történetét, milyen eszközeink vannak ebben való keresésre?
	A git log paranccsal megnézhetjük egy adott repó-ban szereplő korábbi commitokat,
	így nyomon tudjuk követni, hogy milyen különféle változtatásokat léptettünk érvénybe.

1. Melyik git parancsot használnád, hogy megtudd milyen állapotban van épp a repo?
	A git status segítségével lehet megtekinteni, hogy az adott repó milyen állapotban
	van, illetve, hogy milyen lépések állnak rendelkezésünkre.


A node-express-app.js utoljára a aee7423746366c926a15c0f5bd62d8c97586390f megjelölésű commit
során volt megváltoztatva nov. 8-án.
