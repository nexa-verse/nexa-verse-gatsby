import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Button from "../../components/reusable/Button"
import Signet from "../../components/reusable/Signet";
import { Link } from "gatsby"
import { MdDownloadDone, MdConnectWithoutContact, MdOutlinePhoneForwarded,MdOutlineSettingsSuggest} from "react-icons/md";
import { PiNetwork,PiCodeBold } from "react-icons/pi";
import { TbDatabaseSearch,TbCloudDataConnection,TbShieldCheckFilled } from "react-icons/tb";
import { StaticImage } from "gatsby-plugin-image";
import Service from "../../components/Service";
import ProcessPhase from '../../components/ProcessPhase';

const ServicesPage = () => {

  return (
    <>
      <Seo title="Usługi" description="Sprawdź co możemy dla Ciebie zrobić!" />
      <Layout>
        <section className="services-intro">
          <h1 className="headline">nasze usługi</h1>
          <StaticImage 
            src="../../images/services-hero.png"
            alt="Nexa Verse Services"
            placeholder="blurred"
          />
          <p className="text">Jesteśmy firmą z wieloletnim doświadczeniem w zarządzaniu zasobami IT w firmach o zasięgu krajowym i międzynarodowym. Posiadamy rozległą wiedzę w zakresie infrastruktury usług z obszaru ICT, podnoszących efektywność procesów zarządzania Twoim biznesem. Zamiast martwić się o awarie, zabezpieczenia czy rozwój infrastruktury – powierz to ekspertom z <span className="accent">Nexa Verse</span> ! Jako Twój zewnętrzny dział IT, zadbamy o stabilność, bezpieczeństwo i nowoczesność Twojego środowiska cyfrowego.</p>
          <p className="text">👉 Z <span className="accent">Nexa Verse</span>  masz pewność, że technologia pracuje na Twój sukces.</p>
          <Link to='/kontakt#form'>
            <Button icon={<MdConnectWithoutContact/>} modifier='filled'>
            Napisz do nas
            </Button>
          </Link>  
        </section>
        <Signet/>
        <section className="services-what-we-do">
          <h2 className="subheadline">Czym się zajmujemy?</h2>
          <ul className="what-we-do__list">
            <Service icon={<PiNetwork size={120}/>} text="Zbudujemy stabilną i niezawodną sieć" url='./sieci-komputerowe'/>
            <Service icon={<TbCloudDataConnection  size={120}/>} text="Zadbamy o dostępność i porządek w Twoich danych" url='./dane'/>
            <Service icon={<TbShieldCheckFilled size={120}/>} text="Zabezpieczymy Twoją firmę przed cyberzagrożeniami" url='./cyberbezpieczenstwo'/>
            <Service icon={<MdOutlinePhoneForwarded size={120}/>} text="Bez zakłóceń połączymy Cię z Twoimi Klientami" url='./telekomunikacja'/>
            <Service icon={<PiCodeBold size={120}/>} text="Dobierzemy, wdrożymy i zaopiekujemy się oprogramowaniem wspomagającym Twój biznes" url='./oprogramowanie'/>
            <Service icon={<MdOutlineSettingsSuggest size={120}/>} text="Zadbamy o automatyzację i inteligentne systemy wspierające Twoją działalność" url='./automatyzacja'/>
            <Service icon={<TbDatabaseSearch size={120}/>} text="Zadbamy o bazy danych Microsoft SQL oraz utworzymy zaawansowane raporty i analizy." url='./bazy-danych'/>
          </ul>
        </section>
        <Signet/>
        <section>
          <ProcessPhase nr="01" title="Poznajemy Twój biznes" desc="Zanim zaproponujemy jakiekolwiek rozwiązania, chcemy dokładnie zrozumieć, jak działa Twoja firma. Analizujemy procesy, infrastrukturę oraz cele biznesowe, by mieć pełny obraz sytuacji zastanej oraz Twoich potrzeb. Dzięki temu nasze działania będą nie tylko skuteczne, ale i idealnie dopasowane do specyfiki Twojego przedsiębiorstwa."/>
          <ProcessPhase nr="02" title="Planujemy Twój rozwój" desc="Technologia powinna wspierać Twój rozwój, a nie go ograniczać. Dlatego, wspólnie z Tobą, opracowujemy szczegółowy plan modernizacji i rozbudowy infrastruktury IT. Dbamy o to, by rozwiązania były nie tylko nowoczesne i bezpieczne, ale również skalowalne – gotowe na przyszłe wyzwania i rozwój Twojej firmy."/>
          <ProcessPhase nr="03" title="Wdrażamy rozwiązania" desc="Z teorii przechodzimy do praktyki. Wdrażamy starannie dobrane technologie i systemy, minimalizując przestoje i zakłócenia w codziennej pracy. Stawiamy na wydajność, automatyzację i bezpieczeństwo – tak, by Twoja firma działała szybciej, sprawniej i bezpieczniej niż dotychczas. Jeśli rynek nie oferuje odpowiedniego rozwiązania dokładamy wszelkich starań by stworzyć rozwiązanie dopasowane do Twojej firmy."/>
          <ProcessPhase nr="04" title="Bierzemy odpowiedzialność" desc="Twoje IT jest teraz w dobrych rękach. Przejmujemy odpowiedzialność za utrzymanie infrastruktury, monitorujemy jej działanie i szybko reagujemy na ewentualne problemy. Dbamy o to, by wszystko działało nieprzerwanie – tak, żebyś Ty mógł skupić się na prowadzeniu biznesu, a nie na martwieniu się o technologie."/>
        </section>
        <Signet/>
        <section className="services-solutions">
          <h2 className="subheadline">z jakich rozwiązań korzystamy?</h2>
          <h3 className="text-buttons">Nowe technologie? Wyzwania? Jesteśmy na to gotowi!</h3>
          <p className="text">W <span className="accent">Nexa Verse</span> wierzymy, że nie ma jednego, uniwersalnego rozwiązania dla wszystkich. Dlatego stale śledzimy rynek i nie boimy się sięgać po nowoczesne technologie, które mogą dać Twojej firmie przewagę. </p>
          <p className="text">Mamy jednak swoje sprawdzone, ulubione systemy i narzędzia, w których czujemy się jak ryba w wodzie — bo wiemy, że są niezawodne, bezpieczne i skuteczne. Łączymy to, co znamy najlepiej, z tym, co nowe i obiecujące — <span className="accent">zawsze z myślą o Twoim biznesie.</span></p>
          <div className="tech-list">
            <StaticImage 
            src="../../images/forti_logo.png"
            alt="Nexa Verse Services"
            placeholder="blurred"
            height={100}
            />
            <StaticImage 
            src="../../images/cisco_logo.png"
            alt="Nexa Verse Services"
            placeholder="blurred"
            height={100}
            />
            <StaticImage 
            src="../../images/vmware_logo.png"
            alt="Nexa Verse Services"
            placeholder="blurred"
            height={100}
            />
            
            <StaticImage 
            src="../../images/m365_logo.png"
            alt="Nexa Verse Services"
            placeholder="blurred"
            height={100}
            />
            <StaticImage 
            src="../../images/active-directory_logo.svg"
            alt="Nexa Verse Services"
            placeholder="blurred"
            height={100}
            />
            <StaticImage 
            src="../../images/veeam_logo.png"
            alt="Nexa Verse Services"
            placeholder="blurred"
            height={100}
            />
            <StaticImage 
            src="../../images/proget_logo.webp"
            alt="Nexa Verse Services"
            placeholder="blurred"
            height={100}
            />
            
            
            <StaticImage 
            src="../../images/wp-logo.png"
            alt="Nexa Verse Services"
            placeholder="blurred"
            height={100}
            />
            <StaticImage 
            src="../../images/azure_logo.png"
            alt="Nexa Verse Services"
            placeholder="blurred"
            height={100}
            />
          </div>
          <Link to='/realizacje'>
            <Button icon={<MdDownloadDone/>} modifier='filled' color="accent">
              Zobacz nasze realizacje!
            </Button>
          </Link>
        </section>
      </Layout>
    </>
      
  )
}

export default ServicesPage