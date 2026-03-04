import {
  CelFace,
  CelInsta,
  Container,
  Content,
  Content2,
  DivBox,
  DivMockups,
  DivPhones,
  DivSocials,
  FaceIcon,
  InstaIcon,
  NoteFace,
  Paragraph,
  PointerClick,
  PrimaryDiv,
  SubTitle,
  SubTitleBox,
  Title,
  TitleBox,
  WhatsIcon,
  YoutubeIcon,
} from "./styles";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/index.jsx";
import click from "../../assets/about-page/arrowclick.svg";
import face from "../../assets/about-page/facebook.svg";
import insta from "../../assets/about-page/instagram.svg";
import whats from "../../assets/about-page/whatsapp.svg";
import you from "../../assets/about-page/youtube.svg";
import faceCell from "../../assets/about-page/mockup-celFace.svg";
import mockupCelinsta from "../../assets/about-page/mockup-celinsta.svg";
import note from "../../assets/about-page/mockup-noteFace.svg";

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const message = "Olá, vim pelo site e gostaria de  mais informações!";
  const phone = "5512991060495"; // por enquanto esa o numero da agencia

  return (
    <Container>
      <NavBar />
      <Content>
        <PrimaryDiv>
          <Title className="animate">QUEM SOU EU?</Title>
          <SubTitle className="animate">RAQUEL ALVES</SubTitle>
          <Paragraph className="animate">
            Nutricionista Funcional Integrativa – CRN 84541/3
            <br /> Pós-graduada em Gastroenterologia e Nutrigenômica
            <br /> Especialista em saúde intestinal, comportamento alimentar e
            condições
            <br /> inflamatórias crônicas.
            <br />
            <br /> Minha trajetória profissional nasceu da
            <br /> minha própria história. Convivi com
            <br />
            transtorno de imagem e alimentar na
            <br /> adolescência e juventude, além do
            <br />
            diagnóstico posterior de Síndrome do
            <br /> Intestino Irritável (SII) e Fibromialgia,
            <br /> experiências que me levaram a estudar
            <br /> profundamente o eixo intestino-cérebro,
            <br /> inflamação crônica, microbiota e a relação
            <br />
            entre emoções, metabolismo e<br /> comportamento alimentar.
          </Paragraph>
        </PrimaryDiv>
        <Paragraph className="animate">
          Transformei dor em aprofundamento técnico.
          <br /> Busquei formação em Gastroenterologia
          <br /> para compreender o intestino como centro
          <br /> da imunidade, da absorção e do equilíbrio
          <br /> inflamatório.
          <br />
          <br /> Aprofundei-me em nutrigenômica para
          <br /> personalizar estratégias terapêuticas
          <br /> baseadas na individualidade biológica.
          <br /> Hoje atuo no tratamento integrativo de:
          <br /> • Obesidade e síndrome metabólica
          <br /> • Resistência insulínica
          <br /> • Disbiose e distúrbios digestivos
          <br /> • Dor crônica e inflamação de baixo grau
          <br /> • Compulsão alimentar e distorções na
          <br /> relação com a comida
          <br />
          <br /> Meu trabalho não se resume a prescrever dietas.
          <br /> Eu investigo causas, contexto e<br />
          comportamento.
          <br /> O objetivo não é apenas emagrecer é<br /> reconstruir saúde,
          autonomia e qualidade de
          <br /> vida de dentro para fora.
        </Paragraph>
      </Content>
      <Content2>
        <DivBox>
          <TitleBox className="animate">ME SIGA NAS</TitleBox>
          <SubTitleBox className="animate">REDES SOCIAIS</SubTitleBox>
          <DivSocials className="animate">
            <a
              href="https://www.instagram.com/nutriraquelalves/?hl=pt-br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstaIcon src={insta} />
            </a>
            <a
              href="https://www.facebook.com/nutriraquelalvess?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaceIcon src={face} />
            </a>
            <a href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsIcon className="animate" src={whats} />

            </a>
            
            <a
              href="https://www.youtube.com/@NutriRaquelAlves"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon src={you} />
            </a>
          </DivSocials>
          <PointerClick className="animate" src={click} />
        </DivBox>
        <DivMockups>
          <DivPhones className="animate">
            <CelFace className="animate" src={faceCell} />
            <CelInsta className="animate" src={mockupCelinsta} />
          </DivPhones>
          <NoteFace className="animate" src={note} />
        </DivMockups>
      </Content2>
    </Container>
  );
}

export default About;
