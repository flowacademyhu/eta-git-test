# Teszt

Név: Dumitras István

## Kérdések:

1. Mit értünk egy `commit` alatt, mit tartalmaz?
commit: a commitban adjuk meg a commentet amiben változtatásokat írunk le, mik módosultak az előző kódhoz képest. Cégtől függően adhatunk neki projekt számot is pl #107_header_modified. Célszerű minél részletesebben leírni mit módosítottunk, hogy abban az esetben ha egy másik programozó veszi át akkor könynebben lássa át. megadhatunk git commit -m "" ekkor csak a címet írjuk meg de enterrel szintén adhatunk több sort is, vagy git commit ahol viszont az elso sor a cím és a többibe pedig a leirast irhatjuk meg.

1. Mi a különbség a `fetch` es `pull` git parancsok között?
git fetch: a fetch nem mergel bele a local repoba ezt kézzel kell megtenni.
git pull: a pull az fetchel is. Maga a locális repoba mergeli a távoli repot.

1. Mi a három állapota file-oknak git szempontjából, milyen parancsokkal mozgatjuk ezek között?
1.1 git add . (vagy filenév.kiterjesztes)--> feltesszük a stage-re
	amugy git resettel levehetjük.
1.2 git commit -m vagy simán git commit itt leírást készítünk, hogy mi milyen változasok történtek.
1.3 git push:  feltoljuk a távoli repoba (és reménykedünk hogy nem lesz conflict (:  )
  

1. Mi a különbség a `git checkout origin/feature` és a `git checkout feature` parancsok között?
Az origin akkor kell ha a távoli repot akarom hozzáadni a local repomhoz. az alapertelmezett távoli repo szerint ilyenkor az origin névvel hozzuk létre.
Az origin nélküli átirja a változtatásokat a localban.

1. Mi történik, ha valaki más is módosította a file-t amin dolgozunk és mit tudunk tenni ilyenkor?
Attól függ: ha a módosítás megtörtént és le akarom húzni egy még soha nem pullolt verziót akkor semmi nem történik leszedem és dolgozom vele. Ha többen dolgozunk ugyan azon akkor felpusholásnál csak akkor lesz gont(conflict) ha ugyan azon soron módosítottunk. ha kül. sorokban történtek módosítások akkor megusztuk a conflictot. amúy ha conflict van: pl: code index.js --> vscode kidobja hogy melyik módosítást fogadom el. ha meg harc lesz a saját kódunkért akkor egy felettest megkérdezünk és ámen.
1. Mi az a `HEAD` és mi a jelentősége?
A head mutatja meg az utolsó állapotot a lokális repomról. Vágülis ő az én "aktuális" branchem.

1. Mi a célja a branch-elésnek?
Brancheléssel érjük el azt, hogy a munkafolyamatot átláthatóvá és könnyen javithatóvá tudjuk tenni. példaképpen egy projekt megtervezésénél minél kisseb darabra szedjuk a projektet és feature branchekben kezdjük el tárolni őket, majd ha már van egy jól működő projekt amit akár a tesztelőknek is odaadhatunk, hogy ne unatkozzanak akkor azt már  a developba teszszük fel. Itt még ha találnak hibát az adott verziószámmal ellátott programban akkor innen még visszadobhatjuk a develop alá hoyg kijavitsuk a hibákat vagy esetleges pllusz featureket belerakjunk ha pl kimaradtak vagy más az elképzelés. a masterbe csak az kerülhet ami átment a tesztelésen is. itt már több verziószámmal ellátot programunk összegyúrt végleges verziószámmal ellátot projektünk lesz amit már az ügyfél felé be tudunk mutatni.

1. Hogyan lehet összehasonlítani file-ok állapotait, mire tudjuk még ezt a kimenetet használni?
git status. megkapom vele a fileok állapotát, hogy mely fileok vannak a stage-n illetve melyek lettek módosítva vagy kik azok akik nem kerültek a stage-re . vagy arra is jó hogy ha nem vagyok biztos abban hgy commitoltam akkor itt megnézhetem hogy a working tree clean -e vagy sem. ez akkor lehet jó ha pl branchet akarok váltani mert az esetben ha van nem felpusholt kódom akkor addig nem enged át masik branchre. ekkor pl lehet egy git checkout és eldobom a változtatásokat ha eleve nem is kellenének vagy stash

1. Hogy lehet megnézni egy repo történetét, milyen eszközeink vannak ebben való keresésre?
- git log : git logban látom magát a az utvonalat pl: HEAD--> master, origin,master origin,HEAD. Magát a commit sorszámát illetve ki volt a "szerző", ki csinálta azt a commitot, és mikor. git log -n 2 --> így meg szűrni tudom hogy ha túl sok van a log file-ba akkor csak anynit lássak amennyit akarok itt pl 2.


1. Melyik git parancsot használnád, hogy megtudd milyen állapotban van épp a repo?
Nem biztos hogy jól értem de szerintem a git statusról lenne itt szó ami megmutatja hogy a repóban voltak e módosítások vagy a tree clean.

