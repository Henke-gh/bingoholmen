const buildings = [
  {
    name: "Lindholmens varv",
    icon: "Anchor",
    text: "Arbetet på Lindholmens varv var tufft och riskabelt. Det sägs att varvsarbetarnas händer frös fast i plåtarna under de stränga vintrarna under krigsåren. I dagligt tal kallades varvet för “hemmet”. Eriksberg var “torpet” och Götaverken “Herrgårn”. Lindholmen var lagom stort och hemmet där alla kände varandra. Under perioden 1848–1976 levererade Lindholmens varv cirka 1100 fartyg.",
    location: "Stapelbädden 7",
  },
  {
    name: "Balettakademien",
    icon: "SportsGymnastics",
    text: "På Balettakademien har dansare och musikalartister utbildats sedan 1967, då Lia Schubert och Claude Merchant startade skolan i Göteborg. Claude Merchant anses vara dansaren som tog jazzdansen till Sverige och han var en nyskapande kraft i den ganska konservativa dansvärlden. På sin nuvarande plats på Lindholmen har skolan funnits sedan 2023.",
    location: "Liberagatan 42",
  },
  {
    name: "Ester Mosessons gymnasium",
    icon: "FoodBank",
    text: "I en före detta maskinverkstad som tidigare tillhörde Lindholmens varv huserar sedan 1991 Ester Mosessons gymnasium. En restaurangskola som grundades 1928 av Ester Mosesson. På skolans salutorg kan man fika, äta lunch och köpa det som eleverna tillverkar. Ester Mosesson har gett namn åt spårvagn nummer 753 i Göteborg.",
    location: "Lärdomsgatan 5",
  },
  {
    name: "Backa Teater",
    icon: "TheaterComedy",
    text: "Backa teater grundades 1978 som en konstnärligt fristående del av Göteborgs Stadsteater. Till en början saknade teatern en egen scen och spelade på olika små scener samt ute i skolorna. Ofta på Backa kulturhus, som teatern tog sitt namn ifrån. Backa teater är en av Sveriges ledande barn- och ungdomsteater och har varit i sina nuvarande lokaler på Lindholmen sedan 2007.",
    location: "Lärdomsgatan 1C",
  },
  {
    name: "Aftonstjärnan",
    icon: "StarBorder",
    text: "Föreningen Aftonstjärnan föddes 1892 när unga varvsarbetare behövde en plats att samlas på och diskutera viktiga frågor. Det ledde till att de bildade ett teatersällskap och huset byggdes om för att ha en scen. Efter en brand 1902 byggdes huset upp igen och blev det första huset på Lindholmen som hade elektricitet. Vilket öppnade för möjligheten att börja med filmvisningar.",
    location: "Plåtslagaregatan 2",
  },
  {
    name: "Port Arthur",
    icon: "LocalDining",
    text: "Port Arthur är en hamnkrog som det pratades om i hamnar jorden runt. Här samlades hamnarbetare och sjöfolk och det kunde gå vilt till. Krogen har brunnit vid ett par tillfällen och byggdes upp från grunden och kunde öppnas igen 1997 av Catharina Olesen, som blev ägare efter att hon hört talas om krogen när hon var till sjöss.",
    location: "Gamla Ceresgatan 3",
  },
  {
    name: "Max",
    icon: "Fastfood",
    text: "Max på Lindholmen öppnade så sent som i oktober 2020. Den första Max-restaurangen öppnade 1968 i Gällivare. Den är idag en av alla 150 plus Max-restauranger i Sverige.",
    location: "Polstjärnegatan 9A",
  },
  {
    name: "Slottsberget",
    icon: "Landscape",
    text: "Fram till början av 1410-talet låg Lindholmens borg belägen på Slottsberget. Den omtalades först 1333 i en skrivelse av Magnus Eriksson, dåvarande kung av såväl Sverige som Norge. Hur borgen såg ut är det ingen som vet idag. I slutet av 1800-talet fick arbetare på Lindholmens varv tillåtelse att bygga egna bostäder på Slottsberget och en kåkstad tog form.",
    location: "Slottsberget",
  },
  {
    name: "Karlatornet",
    icon: "Business",
    text: "Karlatornet är inte bara Sveriges högsta byggnad, utan Nordens i allmänhet. På sina 246 meter rymmer tornet 73 våningar med såväl hotell och lägenheter som en skybar på 69:e. Karlatornet är det första av åtta höga byggnader som planeras i området. Planerna för byggnationen offentliggjordes redan 2010, men påbörjades inte förrän 2018.",
    location: "Lodjursstråket 1",
  },
  {
    name: "Ganesha Temple",
    icon: "TempleHindu",
    text: "På Kunskapsgatan på Lindholmen ligger det första Hindutemplet i Göteborg. Enligt en legend, fick Ganesha sitt huvud avhugget av sin far Shiva när han inte lät störa hans mor Parvatis bad. I och med sin ånger och ett ultimatum från sin hustru högg Shiva av en elefants huvud och använde det för att återge livet till sin son.",
    location: "Kunskapsgatan 1",
  },
  {
    name: "Gothenburg Film Studios",
    icon: "Movie",
    text: "Gothenburg Film Studios etablerades 2009 av ett gäng filmskapare. Sen dess har den växt till att bli centrum för kreativitet och eventkultur i Göteborg. De är förvånansvärt hemlighetsfulla.",
    location: "Kunskapsgatan 10",
  },
  {
    name: "Hasselblad",
    icon: "CameraAlt",
    text: "Kamerakonstruktören Victor Hasselblad, som företaget och kameran är döpt efter, hette egentligen Fritz i förnamn. Han var dessutom ornitolog. Efter att en Hasselblad 500C-kamera följde med den amerikanske astronauten Walter Schirra upp i omloppsbana 1962 arbetade Hasselblad AB för att utveckla den kamera som sedan kom att fota Buzz Aldrin och Neil Armstrong vid månlandningen 69.",
    location: "Utvecklingsgatan 2",
  },
  {
    name: "Kuggen",
    icon: "Circle",
    text: "Kuggen är designad av Wingårdh arkitektkontor. Gert Wingårdh tog sin arkitektexamen på Chalmers, dock inte på Lindholmen.",
    location: "Lindholmsplatsen 1",
  },
  {
    name: "SKULPTUREN Medmänsklighet",
    icon: "Handshake",
    text: "Eino Hanskis konstverk “Medmänsklighet” är placerat på en torgliknande yta mellan gymnasiebyggnaderna på Lindholmen. En arm med en öppen hand pressar sig med så pass stor kraft ut ur ett stycke granit att stenen splittras. Ned i den öppna handen sprutar en stråle vatten från en fontän.",
    location: "Utvecklingsgatan 4",
  },
  {
    name: "SKULPTUREN Di-Edersekvensen",
    icon: "ClearAll",
    text: "Konstnären Gert Marcus skapade skissen till “Di-Edersekvensen” redan på 1960-talet, men verket realiserades långt senare, när Lindholmen gått från varvsområde till kunskapscentrum.",
    location: "Diagonalen",
  },
  {
    name: "SKULPTUREN Berättelser från de sju haven",
    icon: "Waves",
    text: "Längs promenadstråket vid Sannegårdskajen finns en konstgestaltning av Jill Lindström  i fyra delar, “Berättelser från de sju haven”. Som alla på något sätt har med havet och sjöfart att göra. Tillsammans bildar de en slags visuell berättelse. Vanna Bowles “Orädd resa” - Lindholmshamnen 19 består av tre verk som är utplacerade längs ett huvudstråk i området och på så sätt skapar en visuell förbindelse mellan bostadskvarteren.",
    location: "Östra Sannegårdskajen",
  },
];

export default buildings;
