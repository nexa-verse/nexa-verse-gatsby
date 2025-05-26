import * as React from "react"
import Layout from "../components/Layout"
import '../styles/globals.scss'
import Seo from "../components/Seo"
import Button from "../components/reusable/Button";
import Signet from "../components/reusable/Signet";
import { Link } from "gatsby"
import { MdConnectWithoutContact,MdOutlineHandshake } from "react-icons/md";
import { IoPricetagOutline, IoCheckmarkCircleOutline, IoCheckbox } from "react-icons/io5";
import { PiNumberSquareThreeFill, PiNumberSquareOneFill, PiNumberSquareTwoFill, PiNumberSquareFourFill } from "react-icons/pi";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <>
    <Seo/>
    <Layout>
       <section className="home-hero">
          <h1 className="headline">nowoczesne i niezawodne <span className="uppercase">IT</span> <br/> <span className="smaller">to rozwój Twojej Firmy a nasza odpowiedzialność</span></h1>        
          <p className="text">Pozwalamy przedsiębiorcom skupić się na <span className="accent">rozwoju swojego biznesu</span> bez martwienia się o aspekt technologiczny. </p>
          <p className="text"><span className="accent">Bierzemy pełną odpowiedzialność za Twój dział IT,</span> żebyś Ty mógł w całości wykorzystać swój czas i potencjał na rozwój swoich usług i produktów. </p>
          <p className="text">Wierzymy, że <span className="accent">zaufany partner</span> ze świata technologii może uwolnić potencjał każdej firmy! </p>
          <div className="buttons-container">
            <Link to='/kontakt'>
              <Button icon={<MdConnectWithoutContact/>} modifier='filled'>
              Skontaktuj się z nami!
              </Button>
            </Link>  
            <Link to='/uslugi'>
              <Button icon={<IoPricetagOutline/>} modifier='outlined' color="light">
              Sprawdź nasze usługi
              </Button>
            </Link>  
          </div>
        </section> 
        <Signet/>
        <section className="why">
          <h2 className="subheadline">Dlaczego warto nam powierzyć swój dział it?</h2>
          <div className="container">
            <div className="why-item">
              <IoCheckmarkCircleOutline className="icon"/>
              <p className="text"><span className="accent">Relacje.</span> Relacje z klientem są naszą wartością. Nie palimy za sobą żadnego mostu. Budujemy nasz biznes na relacji z klientem opartej na połączeniu naszych kompetencji i doświadczenia z transparentnością, odpowiedzialnością i wzajemnym zrozumieniem.</p>
            </div>
            <div className="why-item">
              <IoCheckmarkCircleOutline className="icon"/>
              <p className="text"><span className="accent">Odpowiedzialność.</span> Każde zlecenie zostawiamy w stanie, który nie wymaga żadnych dalszych prac. Nie interesują nas zlecenia cząstkowe. Bierzemy odpowiedzialność za całość infrastruktury/systemów IT. Rozwiązany problem to dla nas taki, do którego nie trzeba już wracać!</p>
            </div>
            <div className="why-item">
              <IoCheckmarkCircleOutline className="icon"/>
              <p className="text"><span className="accent">Rozwój.</span> Naszym celem jest ciągły wzrost, po pierwsze wartości biznesu klienta, po drugie naszych kompetencji. Wdrażane przez nas rozwiązania nie są po to, aby zażegnać chwilowy problem i utrzymać status quo. Działamy tak by dzięki naszemu działaniu klient rozwinął swój biznes - uzyskał konkretną wartość. Razem z klientem rośniemy i my.</p>
            </div>
          </div>
          <Button modifier="filled" color="accent3" icon={<MdOutlineHandshake/>}>Zobacz nasze realizacje</Button>
        </section> 
        <Signet/>
        <section className="infrascan">
          <h2 className="subheadline">360°InfraScan by</h2>
          <p className="text"><span className="accent">Bezpłatna analiza Twojej infrastruktury ICT</span> – pierwszy krok do stabilności i rozwoju</p>
          <p className="text">Czy Twoja infrastruktura IT działa optymalnie? Czy jest odporna na awarie i gotowa na rozwój Twojej firmy? IT InfraScan by NexaVerse to darmowy audyt, który pomoże Ci zrozumieć stan Twoich systemów i wskaże kluczowe obszary do optymalizacji.</p>
          <div className="container">
            <StaticImage 
              src="../images/360-infrascan.png"
              alt="360 InfraScan by NexaVerse"
              className="infrascan-image"
              placeholder="blurred"
            />
            <div className="gain">
              <p className="text accent">Co zyskujesz?</p>
              <div className="gain-item">
                <IoCheckbox className="icon"/>
                <p className="text">Kompleksowy przegląd infrastruktury ICT</p>
              </div>
              <div className="gain-item">
                <IoCheckbox className="icon"/>
                <p className="text">Identyfikację zagrożeń i słabych punktów</p>
              </div>
              <div className="gain-item">
                <IoCheckbox className="icon"/>
                <p className="text">Rekomendacje usprawnień dopasowane do Twojej firmy</p>
              </div>
              <div className="gain-item">
                <IoCheckbox className="icon"/>
                <p className="text">Bez zobowiązań – pełna transparentność</p>
              </div>
            </div>
            <div className="how">
              <p className="text accent">Jak to działa?</p>
              <div className="how-item">
                <PiNumberSquareOneFill className="icon"/>
                <p className="text">Spotkanie i wstępna konsultacja</p>
              </div>
              <div className="how-item">
                <PiNumberSquareTwoFill className="icon"/>
                <p className="text">Analiza Twojej infrastruktury IT </p>
              </div>
              <div className="how-item">
                <PiNumberSquareThreeFill className="icon"/>
                <p className="text">Opracowanie raportu z wnioskami</p>
              </div>
              <div className="how-item">
                <PiNumberSquareFourFill className="icon"/>
                <p className="text">Omówienie wyników i rekomendacji.</p>
              </div>
            </div>
          </div>
          <p className="text">Zyskaj wgląd w swoje IT i podejmuj świadome decyzje biznesowe.</p>
          <a href="https://outlook.office.com/owa/calendar/Umwsina360InfraScanbyNexaVerse@nexa-verse.pl/bookings/" target="blank"><Button modifier="filled" color="accent3" icon={<MdConnectWithoutContact/>}>Umów się na spotkanie!</Button></a>
        </section>
    </Layout>
    </>
    
  )
}

export default IndexPage

