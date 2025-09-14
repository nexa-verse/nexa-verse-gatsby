const services = [
  {
    slug: "sieci-komputerowe",
    shortTitle: "Sieci komputerowe",
    title: "Zbudujemy stabilną i niezawodną sieć",
    icon: "PiNetwork",
    description: `
    
    <ul>Stworzymy stabilne i bezpieczne środowisko sieciowe, które wspierają codzienne działanie Twojej firmy.
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
    description: `<ul>Zapewnimy bezpieczeństwo, uporządkowanie i dostępność Twoich danych w każdej chwili. 
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
    description: `<ul>Zabezpieczymy Twoją firmę przed cyberzagrożeniami i utratą danych. 
  <li>Przeprowadzimy audyt bezpieczeństwa infrastruktury IT</li> 
  <li>Wdrożymy aktualne zabezpieczenia systemowe i sieciowe</li> 
  <li>Zadbamy o świadomość dot. cyberzagrożeń wśród pracowników Twojej firmy</li></ul> `
  },
  {
    slug: "telekomunikacja",
    shortTitle: "Telekomunikacja",
    title: "Bez zakłóceń połączymy Cię z Twoimi Klientami",
    icon: "MdOutlinePhoneForwarded",
    description: `<ul>Zapewnimy nowoczesne narzędzia komunikacji wewnętrznej i zewnętrznej, które ułatwiają codzienną współpracę i kontakt z klientami.
  <li>Wdrożymy telefonię VoIP oraz zintegrujemy centralę PBX z Twoją siecią IT</li> 
  <li>Ułatwimy zarządzanie połączeniami i obsługę klienta dzięki nowoczesnym systemom komunikacji</li> 
  <li>Skonfigurujemy system zarządzania urządzeniami mobilnymi (MDM), np. Proget – dla kontroli i bezpieczeństwa urządzeń mobilnych</li></ul> `
  },
  {
    slug: "oprogramowanie",
    shortTitle: "Oprogramowanie",
    title: "Dobierzemy, wdrożymy i zaopiekujemy się Twoimi systemami wspomagającymi Twój biznes",
    icon: "PiCodeBold",
    description: `<ul>Dostarczymy i utrzymamy systemy, które wspierają rozwój Twojej firmy na co dzień.
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
    description: `<p>Wprowadzimy Twoją firmę w erę cyfrowej produkcji i inteligentnej automatyzacji procesów. </p>
  <p>Pomożemy we wdrażaniu nowoczesnych systemów IT – od analizy potrzeb, przez dobór odpowiednich rozwiązań, aż po ich integrację z istniejącą infrastrukturą.</p> `
  },
  {
    slug: "bazy-danych",
    shortTitle: "Bazy danych",
    title: "Zadbamy o bazy danych Microsoft SQL oraz utworzymy zaawansowane raporty i analizy.",
    icon: "TbDatabaseSearch",
    description: `<p>Specjalizujemy się w kompleksowej obsłudze środowisk bazodanowych opartych na Microsoft SQL Server. </p>
  <p>Zajmujemy się zarówno projektowaniem i wdrażaniem nowych baz danych, jak i administracją oraz optymalizacją już istniejących struktur. </p>
  <p>Dbamy o bezpieczeństwo danych, ich integralność oraz wysoką dostępność, niezależnie od skali środowiska.  </p>
  <p>Tworzymy również zaawansowane raporty i analizy biznesowe w oparciu o SSRS (SQL Server Reporting Services), Power BI oraz Microsoft Excel. Dzięki integracji danych z różnych systemów (ERP, CRM, MRP itd.) dostarczamy czytelne i użyteczne raporty, które wspierają proces decyzyjny w Twojej firmie. </p>
  <ul>W ramach naszych usług: 
  <li>projektujemy i utrzymujemy bazy danych, </li> 
  <li>integrujemy dane z różnych źródeł,</li> 
  <li>optymalizujemy zapytania SQL i strukturę danych, </li> 
  <li>budujemy zautomatyzowane raporty, dashboardy i analizy,</li> 
  <li>zapewniamy backupy, monitoring i zabezpieczenia.</li>
  </ul>`
  },
  // kolejne usługi...
]
module.exports = services