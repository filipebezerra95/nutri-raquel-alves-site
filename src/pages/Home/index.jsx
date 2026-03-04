import {
  AboutButton,
  AgendaButton,
  Card,
  CardImage,
  Container,
  Content,
  DivCards,
  DivLogo,
  EbookButton,
  LogoImage,
  PremiumButton,
  SerieButton,
  ViradaButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/index.jsx";
import Logo from "../../assets/home-page/logomarca.svg";
import Premium from "../../assets/home-page/card-premium.svg";
import Agenda from "../../assets/home-page/card-agenda1.svg";
import Ebook from "../../assets/home-page/card-ebook.svg";
import Virada from "../../assets/home-page/card360.svg";
import Serie from "../../assets/home-page/card-serie.svg";
import Sobre from "../../assets/home-page/card-sobre1.svg";

function Home() {

   const navigate = useNavigate();
    //const [open, setOpen] = useState(false);
  
    const goTo = (path) => {
      navigate(path);
     // setOpen(false);
    }
    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else { entry.target.classList.remove("show"); }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  

  const message = "Olá, vim pelo site e gostaria de agendar uma consulta!";
  const phone = "5512991816453"; // por enquanto esa o numero da agencia

  return (
    <Container>
      <NavBar />
      <Content>
        <DivLogo>
          <LogoImage className="animate" src={Logo} />
        </DivLogo>
        <DivCards>
          <Card>
            <CardImage className="animate" src={Premium} />
            <PremiumButton className="animate" onClick={() => goTo("/consultas")}>
              Consulta Premium <br /> Clique Aqui
            </PremiumButton>
          </Card>
          <Card>
            <CardImage className="animate" src={Agenda} />
            <AgendaButton className="animate" onClick={() => window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")} >
              Agendar Consulta
              <span style={{ fontSize: "12px", fontWeight: 500 }}>
                Presencial / Online
              </span>
            </AgendaButton>
          </Card>

          <Card>
            <CardImage className="animate" src={Ebook} />
            <EbookButton className="animate" onClick={() => goTo("/e-book")}>Meu Ebook <br/> Clique aqui</EbookButton>
          </Card>
          <Card>
            <CardImage className="animate" src={Virada} />
            <ViradaButton className="animate" onClick={() => goTo("/virada360")}>Programa <br/> virada 360</ViradaButton>
          </Card>
          <Card>
            <CardImage className="animate" src={Serie} />
            <SerieButton className="animate" onClick={() => goTo("/series")}>assistir a série</SerieButton>
          </Card>
          <Card>
            <CardImage className="animate" src={Sobre} />
            <AboutButton className="animate" onClick={() => goTo("/sobre")}>quem sou eu <br /> clique aqui</AboutButton>
          </Card>
        </DivCards>
      </Content>
    </Container>
  );
}

export default Home;
