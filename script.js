 const app = document.getElementById('app');

// Data pro měsíce
const months = [
  { name: 'Leden', days: 31 },
  { name: 'Únor', days: 28 }, // Pro jednoduchost neřešíme přestupný rok
  { name: 'Březen', days: 31 },
  { name: 'Duben', days: 30 },
  { name: 'Květen', days: 31 },
  { name: 'Červen', days: 30 },
  { name: 'Červenec', days: 31 },
  { name: 'Srpen', days: 31 },
  { name: 'Září', days: 30 },
  { name: 'Říjen', days: 31 },
  { name: 'Listopad', days: 30 },
  { name: 'Prosinec', days: 31 }
];

// Data pro pohádky (přidáme jen pár ukázek)
const stories = {
  // Formát klíče: 'měsíc-den'
  '1-1': {
    title: 'Kouzelný sněhulák',
    content: `Byl jednou jeden malý chlapec jménem Péťa, který miloval zimu. První den v lednu se rozhodl postavit sněhuláka. Ale nebyl to obyčejný sněhulák! Když Péťa přidal poslední knoflík, sněhulák otevřel oči a usmál se. "Děkuji, že jsi mě probudil," řekl sněhulák. Společně prožili den plný dobrodružství, klouzali se na ledě a hráli si v závějích. Když slunce začalo zapadat, sněhulák se rozloučil: "Zítra mě najdeš na vrcholku kopce!" A tak začalo jejich zimní přátelství, které trvalo celý měsíc.`
  },
  '1-2': {
    title: 'Dobrodružství v ledovém lese',
    content: `Malá holčička Anička se vydala na procházku do lesa za domem. Les byl pokryt ledem a sněhem, stromy zářily jako krystaly. Najednou uslyšela tichý pláč. Šla za zvukem a našla malého ledového skřítka, který ztratil svou kouzelnou hůlku. Anička mu pomohla hůlku najít, a skřítek jí za odměnu ukázal tajemná místa v lese, kde zvířata uměla mluvit a sníh se třpytil jako diamanty. Anička se vrátila domů s úsměvem a vzpomínkou na kouzelné dobrodružství.`
  },
  '1-3': {
    title: 'Tajemství zamrzlého jezera',
    content: `Honza a jeho sestra Klárka se vydali bruslit na zamrzlé jezero. Když klouzali po ledu, všimli si pod hladinou záblesku světla. Zvědavost je přivedla ke středu jezera, kde objevili uvězněnou vodní vílu. "Pomozte mi," zašeptala víla. Děti použily teplé ruce a srdce plné lásky k rozpuštění ledu. Víla byla volná a za odměnu jim darovala kouzelné náramky, které jim přinesly štěstí po celý rok.`
  },
  '1-4': {
    title: 'Noční návštěva měsíčního skřítka',
    content: `Když Filip nemohl usnout, zadíval se z okna na jasný měsíc. Najednou se objevil malý skřítek se stříbrným kloboukem. "Pojď se mnou na měsíční procházku," řekl skřítek. Společně létali nad střechami, viděli svět z výšky a poslouchali noční písně hvězd. Když se Filip vrátil do postele, cítil se šťastný a usnul s úsměvem. Ráno si nebyl jistý, zda to byl sen, ale pod polštářem našel stříbrný klobouček.`
  },
  '1-5': {
    title: 'Záhadný svět za sněhovou vločkou',
    content: `Eliška chytala sněhové vločky na dlaň a obdivovala jejich krásu. Jedna vločka se však nerozpustila a začala zářit. "Dotkni se mě a uvidíš zázraky," zašeptala. Eliška se jí dotkla a ocitla se v kouzelném světě, kde sněhové vločky byly bytostmi tančícími ve větru. Prošla ledovými zámky a setkala se s královnou zimy. Po nádherném dobrodružství se vrátila domů s vědomím, že kouzlo je všude kolem nás.`
  },
  '1-6': {
    title: 'Medvědí zimní sen',
    content: `V hlubokém lese žil malý medvídek jménem Míša, který nemohl usnout zimním spánkem. Rozhodl se tedy vypravit za sovou, moudrou ochránkyní lesa. "Sovo, jak usnu?" zeptal se. Sova mu poradila, aby si představil nejkrásnější sny. Míša zavřel oči a začal si představovat louky plné medu a tančící hvězdy. Konečně usnul a prožil nejkrásnější zimní sen. Když se na jaře probudil, byl plný energie a radosti.`
  },
  '1-7': {
    title: 'Ledová fialka',
    content: `Karolínka našla uprostřed zasněžené louky jedinou kvetoucí fialku. Bylo to zvláštní, protože všechny květiny měly spát pod sněhem. Fialka k ní promluvila: "Jsem kouzelná fialka a plním jedno přání." Karolínka si přála, aby všichni v jejím městě byli šťastní. Fialka se zazářila a vyšlehla z ní světla do všech domů. Lidé se začali usmívat a sdílet radost. Karolínka se vrátila domů s pocitem, že i malé přání může změnit svět.`
  },
  '1-8': {
    title: 'Ztracený tučňák',
    content: `Tomáš našel na zahradě malého tučňáka. "Jak ses sem dostal?" zeptal se. Tučňák smutně kývl: "Ztratil jsem se z rodiny." Tomáš se rozhodl pomoci mu vrátit se domů. Společně podnikli cestu na daleký jih, prošli sněhovými bouřemi a setkali se s různými zvířaty. Když konečně našli tučňákovu rodinu, rozloučili se. Tučňák poděkoval a jako památku daroval Tomášovi své peříčko, které nikdy neroztálo.`
  },
  '1-9': {
    title: 'Sněhová čarovná hůlka',
    content: `Kristýnka objevila v lese hůlku pokrytou ledovými krystaly. Když ji zvedla, zjistila, že může ovládat sníh. Vytvořila sněhové sochy, ledové paláce a dokonce sněhové draky, na kterých létala. Ale brzy pochopila, že moc hůlky je třeba používat moudře. Vrátila ji na místo, kde ji našla, a sníh začal padat přirozeně. Kristýnka si uvědomila, že největší kouzlo je v přírodě samotné.`
  },
  '1-10': {
    title: 'Hřejivá srdce v zimě',
    content: `V malé vesničce lidé prožívali neobyčejně chladnou zimu. Děti se rozhodly uspořádat hřejivý festival. Sbíraly dříví, zdobily náměstí a připravily horký čaj. Když večer zapálily oheň, celá vesnice se sešla. Lidé zpívali, tančili a sdíleli příběhy. Teplo ohně a láska v jejich srdcích rozehřály nejen těla, ale i duše. Od té doby se festival stal tradicí, která spojovala všechny bez ohledu na počasí.`
  },
  '1-11': {
    title: 'Mrazivý král a odvážná holčička',
    content: `Mrazivý král letos poslal na zemi neobvykle silnou zimu. Malá Ema se rozhodla zjistit proč. Vydala se na cestu do jeho ledového zámku. Když se s králem setkala, zjistila, že je osamělý. "Nikdo mě nenavštěvuje," řekl smutně. Ema mu nabídla přátelství a pozvala ho do jejich vesnice. Král souhlasil a spolu přinesli do vesnice nádherné zimní radovánky. Lidé se radovali a Mrazivý král již nikdy nebyl sám.`
  },
  '1-12': {
    title: 'Sněžný drak',
    content: `Alenka milovala příběhy o dracích. Jednoho dne uviděla v horách velký stín. Když přišla blíž, zjistila, že je to bílý sněžný drak. Drak byl smutný, protože ztratil schopnost létat. Alenka mu pomohla najít kouzelný ledový krystal, který mu vrátil sílu. Na oplátku ji drak vzal na let nad zasněženými vrcholky. Společně objevili krásy světa z výšky a stali se přáteli navždy.`
  },
  '1-13': {
    title: 'Kouzelný horký nápoj',
    content: `Matěj našel v babiččině kuchyni starý recept na horký nápoj. Když ho uvařil, celý dům se naplnil vůní koření a ovoce. Nápoj měl zvláštní moc – kdo ho vypil, cítil náhlou radost a teplo. Matěj se rozhodl podělit se o něj s celou vesnicí. Lidé byli nadšení a sdíleli mezi sebou příběhy a smích. Nápoj přinesl do chladných dnů nové přátelství a spojil všechny dohromady.`
  },
  '1-14': {
    title: 'Tanec sněhových vloček',
    content: `Klárka si všimla, že sněhové vločky padají v rytmu hudby, kterou si prozpěvovala. Zjistila, že její zpěv ovládá sníh. Když zazpívala veselou melodii, vločky tančily radostně. Smutná píseň je změnila v pomalý pád. Rozhodla se potěšit ostatní a uspořádala koncert. Celé město se shromáždilo a sledovalo nádherný tanec vloček pod hvězdami. Díky Klárčině hudbě byla zima ještě kouzelnější.`
  },
  '1-15': {
    title: 'Zimní zrcadlo',
    content: `Na půdě starého domu našel Lukáš zvláštní zrcadlo pokryté mrazem. Když se do něj podíval, viděl svět plný fantazie – létající sněhuláky, mluvící stromy a barevné hvězdy. Zjistil, že může do tohoto světa vstoupit. Prožil tam celý den plný dobrodružství. Když se vrátil, uvědomil si, že kouzlo je uvnitř nás a že s trochou představivosti může být každý den výjimečný.`
  },
  '1-16': {
    title: 'Sáně s kouzelnými zvonky',
    content: `Eli a její bratr Ondra našli na půdě staré sáně s malými zvonečky. Když na nich sjeli z kopce, zvonky začaly hrát melodii a sáně se vznesly do vzduchu. Létali nad městem, lesy a horami. Viděli svět z ptačí perspektivy a cítili vítr ve tvářích. Když se vrátili domů, věděli, že zažili něco neopakovatelného. Sáně uložili zpět s vědomím, že kouzlo je pro ty, kteří věří.`
  },
  '1-17': {
    title: 'Pramen věčného ledu',
    content: `V horách byl ukrytý pramen, který vytvářel nejčistší led na světě. Legenda říkala, že kdo ho najde, splní se mu přání. Malá skupina dětí se vydala na výpravu. Překonali sněhové bouře a strmé cesty. Když pramen našli, uvědomili si, že jejich největším přáním je přátelství a dobrodružství, které spolu prožili. Vzali si kousek ledu jako památku a vrátili se domů s novým pochopením hodnoty přátelství.`
  },
  '1-18': {
    title: 'Zimní hvězda přání',
    content: `Každou zimu padala z nebe jedna zvláštní hvězda, která plnila přání. Tereza čekala celou noc, aby ji spatřila. Když hvězda konečně spadla, rychle si přála uzdravení pro svou nemocnou babičku. Ráno babička vstala a cítila se lépe než kdy jindy. Tereza pochopila, že síla lásky a víry je nejsilnějším kouzlem na světě.`
  },
  '1-19': {
    title: 'Kouzlo sněhové koule',
    content: `Daniel dostal od dědečka sněhovou kouli s malou vesničkou uvnitř. Když ji zatřásl, sněžilo nejen uvnitř, ale i venku. Zjistil, že může ovládat počasí. Nejprve si užíval sněhových radovánek, ale brzy si uvědomil, že příliš mnoho sněhu způsobuje potíže. Rozhodl se kouli použít moudře a přinést počasí, které bylo potřeba. Naučil se odpovědnosti a důležitosti rovnováhy v přírodě.`
  },
  '1-20': {
    title: 'Ledová harfa',
    content: `V opuštěné jeskyni našla Amálka ledovou harfu. Když na ni zahrála, melodie rozezvučela hory a probudila zimní duchy. Ti jí ukázali tajemství přírody a naučili ji rozumět řeči větru a sněhu. Amálka se stala ochránkyní hor a její hudba přinášela klid a harmonii. Když se vrátila domů, věděla, že hudba má moc spojovat světy.`
  },
  '1-21': {
    title: 'Sněhový labyrint',
    content: `V lese se objevil záhadný sněhový labyrint. Děti ze vsi se rozhodly ho prozkoumat. Každá cesta vedla k jinému překvapení – ledové sochy, mluvící zvířata nebo zářící krystaly. Na konci labyrintu našly starého muže, který jim řekl, že labyrint splní jejich největší přání. Děti si přály, aby zima přinesla všem radost. Když se vrátily, vesnice byla plná smíchu a veselí.`
  },
  '1-22': {
    title: 'Světla polární záře',
    content: `Markéta vždy snila o tom, že uvidí polární záři. Jedné noci se vydala na kopec za městem. Na obloze se rozzářily barevné světla a před ní se objevil polární lišák. "Chceš vidět skutečnou krásu světa?" zeptal se. Vzal ji na cestu po obloze, kde viděla zázraky přírody zblízka. Když se vrátila, věděla, že sny se mohou splnit, když jim věříme.`
  },
  '1-23': {
    title: 'Sněhová princezna',
    content: `V zámku z ledu žila Sněhová princezna, která hledala opravdového přítele. Vítek, chlapec z vesnice, se k zámku dostal náhodou. Spřátelili se a Vítek ji naučil smát se a užívat si jednoduchých radostí. Princezna mu ukázala svůj svět plný kouzel. Společně překonali kouzlo osamělosti a zjistili, že přátelství je největším pokladem.`
  },
  '1-24': {
    title: 'Křišťálový jednorožec',
    content: `Petra našla v lese stopu, která vedla k vysoké hoře. Na jejím vrcholu objevila křišťálového jednorožce uvězněného v ledu. S pomocí slunečních paprsků a svého čistého srdce led roztavila. Jednorožec se jí odvděčil tím, že jí splnil tajné přání. Petra si přála, aby příroda byla vždy chráněna. Jednorožec zmizel v záblesku světla a od té doby les vzkvétal.`
  },
  '1-25': {
    title: 'Sněhový malíř',
    content: `Viktor byl malíř, který maloval obrazy jen z bílých odstínů. Jednoho dne jeho obrazy ožily a sněhové krajiny vystoupily z rámů do skutečného světa. Lidé byli fascinováni a radovali se z nové krásy. Ale Viktor si uvědomil, že skutečná krása je v různorodosti barev. Pomocí svého štětce vrátil svět do rovnováhy a začal malovat barevné obrazy, které přinášely lidem radost.`
  },
  '1-26': {
    title: 'Příběh stříbrného zvonku',
    content: `Na stromě před domem Adélky visel stříbrný zvonek, který nikdy nezazvonil. Jedné noci uslyšela jeho jemný tón. Zvonek jí prozradil, že zazvoní jen pro ty, kteří věří v kouzla. Adélka se usmála a přála si, aby všichni lidé našli ve svých srdcích kousek kouzla. Od té doby zvonek zvonil každý večer a připomínal všem, aby nezapomínali snít.`
  },
  '1-27': {
    title: 'Ledový malíř na oknech',
    content: `Každé ráno obdivovala Lenka nádherné vzory na oknech, které vytvářel mráz. Chtěla potkat umělce, který je tvoří. Jednou v noci zůstala vzhůru a spatřila malého ledového skřítka s malířským štětcem. Spřátelili se a skřítek jí ukázal, jak maluje obrazy z ledu. Lenka se naučila vidět krásu v drobných věcech a vážit si umění přírody.`
  },
  '1-28': {
    title: 'Srdce zimního lesa',
    content: `Jakub se ztratil v lese během sněhové bouře. Když už ztrácel naději, objevil světlo mezi stromy. Vedlo ho k teplé jeskyni, kde žila laskavá stará žena. Postarala se o něj a vyprávěla mu příběhy o duchovi lesa, který chrání zbloudilé duše. Ráno Jakub zjistil, že jeskyně zmizela, ale cítil v srdci vděčnost. Věřil, že potkal samotné srdce zimního lesa.`
  },
  '1-29': {
    title: 'Měsíční zahrada',
    content: `Vojta objevil zahradu, která kvetla i v zimě, ale jen v měsíčním světle. Květiny zářily stříbrným leskem a voněly jako jarní ráno. Setkal se tam s měsíční vílou, která mu pověděla, že zahrada je odměnou pro ty, kteří hledají krásu ve tmě. Vojta si uvědomil, že i v nejchladnější zimě může najít teplo a krásu, když má otevřené srdce.`
  },
  '1-30': {
    title: 'Přátelství s polární medvědicí',
    content: `Na severní výpravě se malý výzkumník Max setkal s osamělou polární medvědicí. Spřátelili se a Max jí pomohl najít ztracené mládě. Společně překonali nástrahy ledu a sněhu. Když našli medvídě, medvědice mu poděkovala medvědím objetím. Max se vrátil domů s nezapomenutelným zážitkem a pochopením, jak důležité je chránit přírodu a všechna její stvoření.`
  },
  '1-31': {
    title: 'Kouzlo posledního lednového večera',
    content: `Na poslední lednový večer se dělo něco zvláštního. Hvězdy zářily jasněji a na obloze se objevila kometa. Děti ze vsi se shromáždily na kopci a sledovaly nebeské divadlo. Kometa zanechala na obloze světelnou stopu, která vytvořila nápis: "Věřte v kouzla". Děti si uvědomily, že každý den může být kouzelný, když otevřeme svá srdce a mysl novým zázrakům.`
},
  // Přidej další pohádky ve stejném formátu...
};

// Funkce pro zobrazení měsíců
function showMonths() {
  app.innerHTML = '';
  const monthGrid = document.createElement('div');
  monthGrid.className = 'month-grid';

  months.forEach((month, index) => {
    const monthDiv = document.createElement('div');
    monthDiv.className = 'month';
    monthDiv.innerText = month.name;
    monthDiv.addEventListener('click', () => showDays(index + 1, month.days, month.name));
    monthGrid.appendChild(monthDiv);
  });

  app.appendChild(monthGrid);
}

// Funkce pro zobrazení dní v měsíci
function showDays(monthNumber, daysInMonth, monthName) {
  app.innerHTML = '';
  const dayGrid = document.createElement('div');
  dayGrid.className = 'day-grid';

  // Získání data prvního dne v měsíci pro určení dne v týdnu
  const year = new Date().getFullYear();
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, monthNumber - 1, day);
    const dayOfWeek = date.toLocaleDateString('cs-CZ', { weekday: 'long' });

    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    dayDiv.innerText = `${day}. ${dayOfWeek}`;
    dayDiv.addEventListener('click', () => showStory(monthNumber, day));
    dayGrid.appendChild(dayDiv);
  }

  // Tlačítko zpět
  const backButton = document.createElement('button');
  backButton.className = 'back-button';
  backButton.innerText = 'Zpět na měsíce';
  backButton.addEventListener('click', showMonths);

  app.appendChild(dayGrid);
  app.appendChild(backButton);
}

// Funkce pro zobrazení pohádky
function showStory(monthNumber, day) {
  app.innerHTML = '';

  const key = `${monthNumber}-${day}`;
  const storyData = stories[key];

  if (storyData) {
    const storyDiv = document.createElement('div');
    storyDiv.className = 'story';

    const title = document.createElement('h2');
    title.innerText = storyData.title;

    const content = document.createElement('p');
    content.innerText = storyData.content;

    storyDiv.appendChild(title);
    storyDiv.appendChild(content);
    app.appendChild(storyDiv);
  } else {
    const message = document.createElement('p');
    message.innerText = 'Pro tento den zatím nemáme pohádku.';

    app.appendChild(message);
  }

  // Tlačítko zpět
  const backButton = document.createElement('button');
  backButton.className = 'back-button';
  backButton.innerText = 'Zpět na dny';
  backButton.addEventListener('click', () => {
    const month = months[monthNumber - 1];
    showDays(monthNumber, month.days, month.name);
  });

  app.appendChild(backButton);
}

// Inicializace aplikace
showMonths();
