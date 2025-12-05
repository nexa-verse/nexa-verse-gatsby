const services = [
  {
    slug: "sieci-komputerowe",
    shortTitle: "Sieci komputerowe",
    title: "Zbudujemy stabilną i niezawodną sieć",
    icon: "PiNetwork",
    description: `
    
    <ul>Zadbamy o to, aby Twoja firmowa sieć była solidnym, bezpiecznym i niezawodnym fundamentem codziennej pracy. Zaprojektujemy środowisko, które sprosta zarówno obecnym potrzebom, jak i przyszłym wyzwaniom, zapewniając płynny przepływ danych oraz stabilne połączenia w całej organizacji. Dzięki profesjonalnemu podejściu i dbałości o każdy element infrastruktury otrzymasz sieć, która będzie wspierać rozwój Twojego biznesu i chronić go przed niepotrzebnymi przestojami.
      <li>Przeprowadzimy audyt infrastruktury sieciowej</li>
      <li>Skonfigurujemy i zabezpieczymy sprzęt sieciowy (switche, routery, access pointy, UTM)</li>
      <li>Zbudujemy lub zoptymalizujemy Twoją sieć lokalną i bezprzewodową</li>
    </ul>`,
  },
  {
    slug: "dane",
    shortTitle: "Dane",
    title: "Zadbamy o dostępność i porządek w Twoich danych",
    icon: "TbCloudDataConnection",
    description: `<ul>Zadbamy o to, aby Twoje dane były zawsze bezpieczne, dostępne i odpowiednio uporządkowane, niezależnie od tego, gdzie są przechowywane. Tworzymy stabilne środowiska serwerowe i chmurowe, które wspierają codzienną pracę firmy oraz zapewniają ciągłość działania nawet w sytuacjach awaryjnych. Dzięki przemyślanej architekturze, właściwemu zarządzaniu zasobami oraz skutecznym mechanizmom ochrony danych zyskasz pewność, że Twoje informacje są zabezpieczone, a kluczowe procesy mogą działać bez zakłóceń. 
  <li>Przeprowadzimy audyt  zarządzania ciągłością działania infrastruktury IT i procedur odtwarzania po katastrofie oraz zbudujemy i wdrożymy Politykę Bezpieczeństwa.</li> 
  <li>W razie potrzeby przeniesiemy Twoje środowisko serwerowe do wirtualnej infrastruktury . Zainstalujemy, skonfigurujemy oraz zaopiekujemy się Twoją infrastrukturą serwerową.</li> 
  <li>Zadbamy o regularny backup danych oraz przywracanie w przypadku awarii</li> 
  <li>Zajmiemy się konfiguracją uprawnień użytkowników, grup oraz katalogów Active Directory</li> 
  <li>W razie potrzeby zmigrujemy Twoje fizyczne środowiska do chmury (np. Azure)</li></ul>`
  },
  {
    slug: "cyberbezpieczenstwo",
    shortTitle: "Cyberbezpieczeństwo",
    title: "Zabezpieczymy Twoją firmę przed cyberzagrożeniami",
    icon: "TbShieldCheckFilled",
    description: `<ul>Zadbamy o to, aby Twoja firma była skutecznie chroniona przed współczesnymi cyberzagrożeniami i ryzykiem utraty danych. Budujemy bezpieczne środowiska, które minimalizują podatności, wzmacniają odporność na ataki i zapewniają ciągłość działania kluczowych systemów. Dzięki całościowemu podejściu do ochrony – obejmującemu zarówno technologię, jak i ludzi – Twoja organizacja zyska solidne fundamenty bezpieczeństwa, pozwalające pracować bez obaw o incydenty czy przestoje. 
  <li>Przeprowadzimy audyt bezpieczeństwa infrastruktury IT</li> 
  <li>Wdrożymy aktualne zabezpieczenia systemowe i sieciowe</li> 
  <li>Zadbamy o świadomość dot. cyberzagrożeń wśród pracowników Twojej firmy</li></ul> `
  },
  {
    slug: "telekomunikacja",
    shortTitle: "Telekomunikacja",
    title: "Bez zakłóceń połączymy Cię z Twoimi Klientami",
    icon: "MdOutlinePhoneForwarded",
    description: `<ul>Zadbamy o to, aby komunikacja w Twojej firmie była niezawodna, przejrzysta i dopasowana do codziennych potrzeb zespołu. Tworzymy środowiska, które umożliwiają sprawną wymianę informacji — zarówno wewnątrz organizacji, jak i z klientami czy partnerami — niezależnie od miejsca i formy kontaktu. Dzięki dobrze dobranym rozwiązaniom telekomunikacyjnym Twoja firma zyska stabilne narzędzia, które usprawnią współpracę, zwiększą efektywność i pozwolą skupić się na realizacji biznesowych celów.
  <li>Wdrożymy telefonię VoIP oraz zintegrujemy centralę PBX z Twoją siecią IT</li> 
  <li>Ułatwimy zarządzanie połączeniami i obsługę klienta dzięki nowoczesnym systemom komunikacji</li> 
  <li>Skonfigurujemy system zarządzania urządzeniami mobilnymi (MDM), np. Proget – dla kontroli i bezpieczeństwa urządzeń mobilnych</li></ul> `
  },
  {
    slug: "oprogramowanie",
    shortTitle: "Oprogramowanie",
    title: "Dobierzemy, wdrożymy i zaopiekujemy się Twoimi systemami wspomagającymi Twój biznes",
    icon: "PiCodeBold",
    description: `<ul>Zadbamy o to, aby wykorzystywane w Twojej firmie systemy i oprogramowanie realnie wspierały rozwój biznesu oraz ułatwiały codzienną pracę zespołu. Dobieramy rozwiązania, które odpowiadają na konkretne potrzeby organizacji — od narzędzi biurowych, przez systemy zarządzania procesami, po platformy wspierające kluczowe obszary działalności. Dzięki odpowiednio dobranemu i wdrożonemu oprogramowaniu Twoja firma zyska efektywne narzędzia, które usprawnią operacje, zwiększą produktywność i pozwolą skupić się na realizacji strategicznych celów.
  <li>Przeanalizujemy potrzeby Twojej firmy i pomożemy wdrożyć dopasowane systemy zarządzania przedsiębiorstwem (ERP) takie jak Comarch CDN XL, Microsoft Dynamics/Axapta czy Exact Globe</li> 
  <li>Zajmiemy się obsługą systemów zarządzania obiegiem dokumentów i procesami (WorkFlow)</li> 
  <li>Skonfigurujemy firmowe środowisko Microsoft 365 (Office 365, SharePoint, Teams itd.)</li> 
  <li>Stworzymy stronę WWW Twojego biznesu (Wordpress, React)</li> </ul>`
  },
  {
    slug: "automatyzacja",
    shortTitle: "Automatyzacja",
    title: "Zadbamy o automatyzację i inteligentne systemy wspierające Twoją działalność",
    icon: "MdOutlineSettingsSuggest",
    description: `<ul>
  Zadbamy o to, aby Twoja firma mogła w pełni wykorzystać potencjał cyfryzacji, inteligentnej automatyzacji oraz nowoczesnych systemów wspierających procesy produkcyjne. Tworzymy rozwiązania, które usprawniają przepływ danych między maszynami, liniami technologicznymi i systemami biznesowymi, zapewniając większą wydajność, przewidywalność i kontrolę nad procesami. Dzięki połączeniu technologii IT i OT pomożemy Ci przekształcić tradycyjną produkcję w nowoczesne, zintegrowane środowisko, które działa szybciej, mądrzej i bardziej efektywnie.
  <li>Analizujemy potrzeby produkcyjne i procesowe</li>
  <li>Dobieramy i wdrażamy systemy wspierające produkcję (MES, SCADA, IoT)</li>
  <li>Integrujemy rozwiązania IT z maszynami i liniami technologicznymi</li>
  <li>Automatyzujemy procesy i przepływ informacji</li>
  <li>Zapewniamy wsparcie i rozwój środowiska Industry 4.0</li>
</ul>
`
  },
  {
    slug: "bazy-danych",
    shortTitle: "Bazy danych",
    title: "Zadbamy o bazy danych Microsoft SQL oraz utworzymy zaawansowane raporty i analizy.",
    icon: "TbDatabaseSearch",
    description: `<ul>
  Zadbamy o tworzenie i utrzymanie środowiska bazodanowego, które zapewni Twojej firmie szybki dostęp do danych, ich spójność oraz pełne bezpieczeństwo. Projektujemy rozwiązania dopasowane do skali i potrzeb organizacji, dbając o wydajność, integralność oraz niezawodność przechowywanych informacji. Tworzymy również wygodne w użyciu raporty i analizy, które łączą dane z różnych systemów i wspierają świadome decyzje biznesowe każdego dnia.
  <li>Projektujemy i utrzymujemy bazy danych</li>
  <li>Integrujemy dane z różnych źródeł</li>
  <li>Optymalizujemy zapytania SQL i strukturę danych</li>
  <li>Budujemy zautomatyzowane raporty, dashboardy i analizy</li>
  <li>Zapewniamy backupy, monitoring i zabezpieczenia</li>
</ul>`
  },
  // kolejne usługi...
]
module.exports = services