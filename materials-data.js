const materialsData = [
    {
        id: "dezinformace",
        title: "Dezinformace",
        image: "https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000016-9b1609b161/dezinformace%20infg.png?ph=d35666577a",
        perex: "Záměrné a systematické šíření nepravdivých informací s účelem ovlivnit rozhodování nebo názory adresátů.",
        content: `
            <h3>Souhrnná charakteristika</h3>
            <ul>
                <li><strong>Dezinformace:</strong> Záměrné šíření lží.</li>
                <li><strong>Misinformace:</strong> Šíření lží nevědomky (bez zlého úmyslu).</li>
                <li>Původ slova: Ruské "dězinformacija" (KGB, studená válka).</li>
            </ul>
            <h3>Cíle dezinformací</h3>
            <ul>
                <li><strong>Ekonomické:</strong> Zisk z reklamy (clickbait).</li>
                <li><strong>Diskreditace:</strong> Poškození pověsti osoby či firmy.</li>
                <li><strong>Polarizace:</strong> Prohloubení rozporů ve společnosti.</li>
                <li><strong>Vlivové operace:</strong> Podrývání bezpečnosti státu cizí mocností.</li>
            </ul>
            <h3>Techniky (Model FIRST)</h3>
            <ul>
                <li><strong>Falešný obsah:</strong> Úprava fotek, dokumentů.</li>
                <li><strong>Identita:</strong> Falešné účty, boti.</li>
                <li><strong>Rétorika:</strong> Argumentační fauly, emoce.</li>
                <li><strong>Symbolika:</strong> Zneužívání národních symbolů.</li>
            </ul>
        `
    },
    {
        id: "digitalni-wellbeing",
        title: "Digitální wellbeing",
        image: "https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000018-a6398a6399/digit%C3%A1ln%C3%AD%20wellbeing.png?ph=d35666577a",
        perex: "Ideální rovnovážný stav, kdy digitální technologie používáme tak, abychom byli spokojeni a cítili se dobře.",
        content: `
            <h3>O co jde?</h3>
            <p>Jde o vyváženost digitálního životního stylu. Nejde o to technologie zahodit, ale používat je tak, aby nám sloužily, ne my jim.</p>
            <h3>Proč to řešit?</h3>
            <ul>
                <li><strong>Fyzické zdraví:</strong> Bolavá záda, oči, spánek.</li>
                <li><strong>Psychika:</strong> FOMO (strach, že nám něco uteče), úzkosti, poruchy pozornosti.</li>
                <li><strong>Vztahy:</strong> Ztráta osobního kontaktu (phubbing).</li>
            </ul>
            <h3>Jak na to v praxi?</h3>
            <ul>
                <li>Omezit notifikace.</li>
                <li>Využívat aplikace na soustředění (Forest, Focus).</li>
                <li>Nejde o kvantitu času, ale kvalitu využití.</li>
                <li>Nezakazovat mobily dětem, ale učit je smysluplnému využití.</li>
            </ul>
        `
    },
    {
        id: "dunning-kruger",
        title: "Dunning-Krugerův efekt",
        image: "https://images.unsplash.com/photo-1555435024-2c4d456b63be?auto=format&fit=crop&w=800&q=80", // Náhradní ilustrace, v původním chyběl graf
        perex: "Kognitivní zkreslení, při kterém lidé s nízkou kompetencí přeceňují své schopnosti a experti se naopak podceňují.",
        content: `
            <h3>Princip</h3>
            <p>Hlupák neví, že je hlupák, protože mu chybí kognitivní kapacita na to, aby to poznal. Naopak expert si uvědomuje, jak je obor složitý, a proto často pochybuje.</p>
            <h3>Historie</h3>
            <p>Inspirováno případem lupiče McArthura Wheelera (1995), který vyloupil banky s obličejem potřeným citronovou šťávou. Věřil, že bude pro kamery neviditelný (jako neviditelný inkoust). Když ho chytili, byl v šoku.</p>
            <h3>Závěr výzkumu</h3>
            <p>Čím více člověk problematiku zná, tím reálněji hodnotí své schopnosti. Vzdělání je lékem na přehnané sebevědomí.</p>
        `
    },
    {
        id: "forma-vlady",
        title: "Forma vlády a státu",
        image: "https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000020-b83c3b83c4/formavlady.png?ph=d35666577a",
        perex: "Rozdělení států podle toho, kdo vládne (monarchie vs. republika) a jak je území organizováno.",
        content: `
            <h3>Monarchie</h3>
            <ul>
                <li><strong>Absolutistická:</strong> Panovník má plnou moc (Saúdská Arábie).</li>
                <li><strong>Konstituční:</strong> Moc omezena ústavou.</li>
                <li><strong>Parlamentní:</strong> Panovník má reprezentativní funkci (Velká Británie).</li>
            </ul>
            <h3>Republika</h3>
            <ul>
                <li><strong>Parlamentní:</strong> Vláda odpovědná parlamentu, prezident má malé pravomoci (ČR, Německo).</li>
                <li><strong>Prezidentská:</strong> Prezident je hlavou vlády, oddělen od parlamentu (USA).</li>
                <li><strong>Poloprezidentská:</strong> Moc dělena mezi prezidenta a vládu (Francie).</li>
            </ul>
            <h3>Forma státu</h3>
            <ul>
                <li><strong>Unitární:</strong> Jednotný stát (ČR).</li>
                <li><strong>Federace:</strong> Spojení států, které se vzdaly části suverenity (USA, Německo).</li>
                <li><strong>Konfederace:</strong> Volné sdružení států (historicky, dnes vzácné).</li>
            </ul>
        `
    },
    {
        id: "ideologie",
        title: "Ideologie",
        image: "https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000022-00b1a00b1c/ideologie.png?ph=d35666577a",
        perex: "Soubor názorů, přesvědčení a hodnot, které formují pohled na svět a politiku.",
        content: `
            <h3>Základní ideologie</h3>
            <ul>
                <li><strong>Liberalismus:</strong> Důraz na svobodu jednotlivce, minimální zásahy státu. Vznik v 16. století.</li>
                <li><strong>Konzervatismus:</strong> Důraz na tradice, řád, rodinu a náboženství. Skepticismu k rychlým změnám.</li>
                <li><strong>Socialismus:</strong> Důraz na rovnost, kolektivismus, sociální spravedlnost a roli státu v ekonomice.</li>
            </ul>
            <p>Další směry: Anarchismus, Nacionalismus, Feminismus, Environmentalismus.</p>
        `
    },
    {
        id: "manipulace",
        title: "Manipulace",
        image: "https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000024-a2d49a2d4b/manipulace.png?ph=d35666577a",
        perex: "Snaha působit na myšlení a chování druhých ve svůj prospěch, často skrytě a neférově.",
        content: `
            <h3>Kdo je manipulátor?</h3>
            <p>Člověk, který využívá emoce, charisma nebo lži k ovládání druhých. Často využívá slabosti oběti (strach, pocit viny, touha po uznání).</p>
            <h3>Techniky manipulace</h3>
            <ul>
                <li><strong>Citové vydírání:</strong> "Kdyby měls mě rád, udělal bys to."</li>
                <li><strong>Gaslighting:</strong> Zpochybňování příčetnosti oběti ("To sis vymyslel, to se nestalo").</li>
                <li><strong>Něco za něco:</strong> Vytváření pocitu dluhu.</li>
                <li><strong>Zahlcení láskou (Love bombing):</strong> Rychlé získání důvěry přehnanou náklonností.</li>
            </ul>
            <h3>Typy manipulátorů</h3>
            <img src="https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000028-b386bb386d/typyosobnosti.png?ph=d35666577a" style="width:100%; border-radius:12px; margin: 10px 0;">
            <p><em>Obrázek: Typologie osobnosti v kontextu manipulace.</em></p>
        `
    },
    {
        id: "masmedia",
        title: "Masmédia",
        image: "https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000036-9d0139d014/masm%C3%A9dium%20.png?ph=d35666577a",
        perex: "Hromadné sdělovací prostředky schopné zasáhnout velké a různorodé publikum.",
        content: `
            <h3>Funkce médií</h3>
            <ul>
                <li><strong>Informační:</strong> Zprávy o událostech.</li>
                <li><strong>Interpretační:</strong> Vysvětlování souvislostí.</li>
                <li><strong>Kontrolní:</strong> "Hlídací pes demokracie", kontrola moci.</li>
                <li><strong>Zábavní:</strong> Odpočinek a relaxace.</li>
                <li><strong>Sociální:</strong> Předávání kultury a norem.</li>
            </ul>
            <h3>Dělení</h3>
            <p>Tisk, Rozhlas, Televize, Internet (Nová média).</p>
            <h3>Marshall McLuhan</h3>
            <p>Rozdělení na <strong>Horká média</strong> (vysoká definice, pasivní příjem - např. kniha, rádio) a <strong>Chladná média</strong> (nízká definice, nutná aktivita diváka - např. televize, komiks).</p>
        `
    },
    {
        id: "medialni-gramotnost",
        title: "Mediální gramotnost",
        image: "https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000048-7a5317a533/infg-med.gram.png?ph=d35666577a",
        perex: "Schopnost vyhledávat, analyzovat, kriticky hodnotit a vytvářet mediální sdělení.",
        content: `
            <h3>Klíčové dovednosti</h3>
            <ul>
                <li><strong>Kritické myšlení:</strong> Ověřování zdrojů, rozpoznání manipulace.</li>
                <li><strong>Dekódování:</strong> Pochopení skrytých sdělení a reklam.</li>
                <li><strong>Tvorba:</strong> Schopnost sám tvořit obsah (psát, natáčet) a rozumět procesům výroby.</li>
                <li><strong>Digitální bezpečnost:</strong> Ochrana soukromí, silná hesla.</li>
            </ul>
            <p>Cílem není média nenávidět, ale rozumět jim a nenechat se jimi ovládat.</p>
        `
    },
    {
        id: "medialni-instituce",
        title: "Mediální instituce",
        image: "https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000050-74e2e74e2f/infg-med.instituce.png?ph=d35666577a",
        perex: "Organizace zabývající se produkcí a distribucí mediálního obsahu.",
        content: `
            <h3>Kdo tvoří mediální trh?</h3>
            <ul>
                <li><strong>Televizní a rozhlasové stanice:</strong> ČT, Nova, Prima, ČRo, Evropa 2...</li>
                <li><strong>Vydavatelství:</strong> Mafra, CNC, Vltava Labe Media (noviny a časopisy).</li>
                <li><strong>Online platformy:</strong> Seznam, Google, Meta (Facebook).</li>
                <li><strong>Tiskové agentury:</strong> ČTK (zdroj pro ostatní média).</li>
            </ul>
            <h3>Veřejnoprávní vs. Soukromá</h3>
            <p><strong>Veřejnoprávní (ČT, ČRo, ČTK):</strong> Zřízena zákonem, financována poplatky, cíl je veřejný zájem.<br>
            <strong>Soukromá:</strong> Cíl je zisk (reklama), vlastněna konkrétními podnikateli.</p>
        `
    },
    {
        id: "medialni-obsah",
        title: "Mediální obsah",
        image: "https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000052-282ee282ef/infg.m.obsah.png?ph=d35666577a",
        perex: "Veškerá sdělení, materiály a zprávy distribuované prostřednictvím médií.",
        content: `
            <h3>Formy obsahu</h3>
            <ul>
                <li><strong>Textový:</strong> Články, komentáře.</li>
                <li><strong>Vizuální:</strong> Fotky, infografiky.</li>
                <li><strong>Audio:</strong> Podcasty, rádio.</li>
                <li><strong>Video:</strong> Reportáže, filmy, streamy.</li>
            </ul>
            <p>Obsah formuje veřejné mínění a kulturu. Je vždy výběrový (Gatekeeping) - nikdy nevidíme realitu 1:1, ale její mediální obraz.</p>
        `
    },
    {
        id: "medialni-vychova",
        title: "Mediální výchova",
        image: "https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000046-867678678a/medialni%20vychova%20infg.png?ph=d35666577a",
        perex: "Proces osvojování mediální gramotnosti ve školním systému. Průřezové téma RVP.",
        content: `
            <h3>Ve škole</h3>
            <p>Není samostatným předmětem (většinou), ale tzv. průřezovým tématem. Prolíná se do ČJ, Občanské výchovy, Dějepisu a Informatiky.</p>
            <h3>Okruhy</h3>
            <ul>
                <li><strong>Receptivní:</strong> Žák jako divák/čtenář (analýza, kritika).</li>
                <li><strong>Produktivní:</strong> Žák jako tvůrce (psaní článku, tvorba videa).</li>
            </ul>
            <p>Cílem je vychovat občana, který se orientuje v informačním chaosu.</p>
        `
    },
    {
        id: "novinarska-etika",
        title: "Novinářská etika",
        image: "https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000058-4722b4722c/nov.etika.png?ph=d35666577a",
        perex: "Soubor norem a pravidel, kterými by se měli novináři řídit. Pravda, ověřování, nezávislost.",
        content: `
            <h3>Základní principy</h3>
            <ul>
                <li><strong>Objektivita (vyváženost):</strong> Dát prostor všem stranám sporu.</li>
                <li><strong>Ověřování:</strong> Dva nezávislé zdroje.</li>
                <li><strong>Nezávislost:</strong> Odmítání úplatků a nátlaku.</li>
                <li><strong>Ochrana soukromí:</strong> Ohled na oběti a děti.</li>
            </ul>
            <h3>Etický kodex</h3>
            <p>V ČR existuje Etický kodex Syndikátu novinářů. Není to zákon, ale morální závazek. Porušení vede k "propasti důvěryhodnosti".</p>
        `
    },
    {
        id: "propaganda",
        title: "Propaganda",
        image: "https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000060-1c1411c143/inf.propaganda.png?ph=d35666577a",
        perex: "Systematické šíření myšlenek s cílem ovlivnit dav, často pomocí emocí a manipulace.",
        content: `
            <h3>Typy propagandy</h3>
            <ul>
                <li><strong>Bílá:</strong> Zdroje jsou jasné, informace víceméně pravdivé (např. státní PR).</li>
                <li><strong>Šedá:</strong> Zdroj nejasný, informace pochybné.</li>
                <li><strong>Černá:</strong> Falešný zdroj, lživé informace (dezinformace).</li>
            </ul>
            <h3>Historie</h3>
            <p>Od antiky přes šíření víry (Congregatio de Propaganda Fide) až po masivní zneužití nacisty (Goebbels) a komunisty. Dnes dominuje na internetu.</p>
        `
    },
    {
        id: "socialni-site",
        title: "Sociální sítě",
        image: "https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000068-515a2515a3/soci%C3%A1ln%C3%AD%20s%C3%ADt%C4%9B.png?ph=d35666577a",
        perex: "Online služby pro sdílení obsahu a komunikaci. Facebook, Instagram, TikTok, YouTube.",
        content: `
            <h3>Rizika</h3>
            <ul>
                <li><strong>Kyberšikana:</strong> Anonymita usnadňuje útoky.</li>
                <li><strong>Bubliny (Echo chambers):</strong> Algoritmy nám ukazují jen to, s čím souhlasíme.</li>
                <li><strong>Ztráta soukromí:</strong> Obchodování s našimi daty.</li>
                <li><strong>Závislost:</strong> Dopaminová smyčka (lajky).</li>
            </ul>
            <h3>TikTok a dezinformace</h3>
            <p>Rychlá videa, minimální kontrola faktů, silné emoce. Ideální podhoubí pro šíření hoaxů mezi mladými.</p>
        `
    },
    {
        id: "vlastnici-medii",
        title: "Vlastníci médií",
        image: "https://d35666577a.cbaul-cdnwnd.com/73803269aab4c81b82c674cc7d598ffb/200000070-617ea617ed/vlastnicimedi%20infg%20%281%29.png?ph=d35666577a",
        perex: "Kdo ovládá média, ovládá informace. Je důležité vědět, komu médium patří.",
        content: `
            <h3>Oligarchizace médií</h3>
            <p>V ČR po roce 2008 odešli zahraniční vlastníci a média skoupili čeští miliardáři (Babiš, Křetínský, Bakala). Hrozí střet zájmů – médium může sloužit politickým nebo byznysovým cílům majitele.</p>
            <h3>Zákon o střetu zájmů</h3>
            <p>Politici by neměli vlastnit média (Lex Babiš). Často se to obchází přes svěřenské fondy.</p>
            <p><em>Vždy se ptejte: Cui bono? (V čí prospěch?)</em></p>
        `
    }
];