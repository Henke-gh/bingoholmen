const items = [
  {
    name: "HÖRLURAR",
    icon: "Headphones",
    text: 'I andra säsongspremiären av Götepod ställs frågan "Är Lindholmen Göteborgs eget Brooklyn?" Vad tror du?',
  },
  {
    name: "CYKEL",
    icon: "PedalBike",
    text: "Sveriges första laddstation för cyklar finns på Chalmers campus. Att ladda en cykel kanske låter som ett relativt nytt koncept, men faktum är att de första elcyklarna kom redan mot slutet av 1800-talet. Det utvecklades flera prototyper som färdiga elcyklar under 1900-talet, men konceptet kom inte att bli en kommersiell framgång förrän på slutet av 90-talet.",
  },
  {
    name: "BYGGARBETSPLATS",
    icon: "Construction",
    text: "Behöver du gå omvägar till och från bussen? Det beror på den spåranläggning som pågår mellan Frihamnen och Lindholmen. Den beräknas vara klar någon gång runt jul 2025.",
  },
  {
    name: "BUTIK",
    icon: "Storefront",
    text: "På Lindholmen finns totalt cirka 400 företag och här finns även två universitet och sex gymnasieskolor, ett 50-tal restauranger och ett växande antal bostäder.",
  },
  {
    name: "STUDENT",
    icon: "School",
    text: "Det finns sedan flera år 156 små inredda studentlägenheter i containerform, så kallade Urban Cribs, precis vid Lindholmspiren.",
  },
  {
    name: "ELSKÅP",
    icon: "Inventory",
    text: "Lindholmen hade varit en av hållplatserna på linbanan som var tänkt att gå från Järntorget till Wieselgrensplatsen. Men projektet blev 1,1 miljarder för dyrt och skrotades.",
  },
  {
    name: "GLASS",
    icon: "Icecream",
    text: "Kineserna gjorde glass så tidigt som 3000-talet före vår tideräkning. Under medeltiden föll den i glömska tills Marco Polo återvände till Kina under slutet av 1200-talet. Det vi skulle känna igen som dagens glass uppfanns troligen av Katarina di Medicis sockerbagare som fryste fruktpuré, under 1600-talets första hälft. Därefter blev det snabbt en trend bland den franska överklassen.",
  },
  {
    name: "ELSPARKCYKEL",
    icon: "ElectricScooter",
    text: "Elsparkcyklarna kom till Sverige 2018 och spred sig snabbt över städernas gator. Till en början fanns ingen reglering. År 2021 fanns hela 23.000 elsparkcyklar utspridda i Stockholms stad.",
  },
  {
    name: "LIVBOJ",
    icon: "Support",
    text: "En livboj, eller frälsarkrans, är en flytande kastring som används vid livräddning i vatten. Livbojar skall finnas på båtar, vid badplatser och andra kustområden. Livbojar är formade som en hästsko, ring eller krans och har vanligen hård fyllning av kork eller skumplast.",
  },
  {
    name: "FÄRJA",
    icon: "DirectionsBoat",
    text: "Älvsnabben och Älvsnabbare är de två båtlinjer som tar dig över Göta älv. Linje 285 Älvsnabben kör längs med älven med flera stopp både på Hisingen och fastlandet medan linje 286 Älvsnabbare enbart kör mellan Stenpiren och Lindholmspiren. Linje 287 kör enbart mellan Stenpiren och Lundbystrand på Hisingen. Utöver att gå snabbare är färjan Älvsnabbare dessutom gratis att åka med. “Konstigt” säger kanske du som känner Västtrafik.",
  },
  {
    name: "KAKA",
    icon: "Cookie",
    text: "Kaka eller kakor, om man vill ha fler, är ett trevligt avslut på kanske ett möte eller en lång studiedag. Det finns gott om kak-alternativ runt om på Lindholmen för den sugne. Varför inte Ester Mosessons?",
  },
  {
    name: "MOPED",
    icon: "Moped",
    text: "På tal om mopeder. Cake är en svensk tillverkare av elektriska motorcyklar och mopeder. Den första modellen som gjordes tillgänglig för allmänheten hette Kalk och introducerades 2018. Cake höll ett prova-på-event i Lindholmen Science Park i mars 2023 men bara ett år senare, i februari 2024, ansökte Cake om konkurs.",
  },
  {
    name: "INSEKT",
    icon: "EmojiNature",
    text: "De först uppskickade varelserna från jorden till rymden var bananflugor. Insekterna var alltså först i rymden.",
  },
  {
    name: "HUND",
    icon: "Pets",
    text: "Båtsman är ju en hund i boken om Saltkråkan. Men hunden fick sitt namn från ett yrke som heter båtsman. En båtsman arbetar med att bestämma lite över de som jobbar med att måla och fixa på ett fartyg och tar hand om alla de grejer som behövs då.",
  },
  {
    name: "FÅGEL",
    icon: "FlutterDash",
    text: "Det finns strax över 250 fågelarter i Sverige, men omkring 540 olika arter har totalt skymtats i vårt avlånga land. Det är bara en bråkdel av de nästan 11.000 som finns i världen. Vilken är vanligast just här på Lindholmen? Det finns inga exakta data på det, men det bör väl rimligtvis stå mellan kråka, skata, duva och fiskmås. Vad tror du?",
  },
  {
    name: "BARNVAGN",
    icon: "ChildFriendly",
    text: "I barnvagnar finns ju ofta små människor, så kallade “barn”. Under 1930-talet konstruerades på Lindholmen ett barnrikehus. Barnrikehus var bostäder som byggdes för att ge stora familjer med många barn en bättre levnadsstandard till överkomliga priser. Dessa hus var en del av den svenska socialpolitiska satsningen för att förbättra bostadssituationen för familjer med låg inkomst och många barn.",
  },
  {
    name: "MOTORCYKEL",
    icon: "TwoWheeler",
    text: "Tysken Gottleib Daimler satte 1885 fast en motor på en cykel och fick en motorcykel. Vid 1900-talets början var motorcykeln ett sportredskap för rika unga män i storstäderna. Under 1930-talet blev den ett transportmedel för arbetarklassen. På 1950-talet symboliserade motorcykeln en ny ungdomskultur. Att äga en motorcykel säger något om vem du är.",
  },
  {
    name: "HAMNBASSÄNGEN",
    icon: "Church",
    text: "I hamnbassängen flyter en skulptur av Kent Karlsson, “Tempel för tvivel och hopp”. När verket först placerades stod det lite längre ut mot hamnkanalen, men efter en rejält blåsig dag i januari 2012 slet sig ”kyrkan”. Som tur var klarade den sig oskadd. Därefter flyttades den längre in i hamnbassängen där den står mer skyddad mot väder och vind.",
  },
  {
    name: "SKULPTUR “Your 15 minutes of fame”",
    icon: "ColorLens",
    text: "Av Tina Frausin. Titeln på verket anspelar på Andy Warhols berömda uttalande om att alla kommer vara världsberömda 15 minuter i framtiden. Skulpturen är både ett konstverk, en scen och en sittplats. Placerat framför Backa Teater. “Gränslös tanke” av Eino Hanski. Mitt i Kunskapscentrum Lindholmen står ett fem meter högt torn, bestående av bokstäver, symboler, två hjul och geometriska former. Högst upp tronar en mänsklig hjärna.",
  },
  {
    name: "SKULPTUR “Polaren”",
    icon: "Diversity3",
    text: "Av Charles Brånå. Denna skulptur ser ut att vara hämtad från en science fiction-film eller som något som lämnats kvar efter ett besök av utomjordingar. Stycka upp en rund glob i sex skivor och dra sedan isär delarna via en mittaxel, så uppstår denna ovala form.",
  },
];

export default items;
