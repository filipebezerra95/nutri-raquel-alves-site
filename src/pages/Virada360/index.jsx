import {
  ButtonCTA,
  Container,
  Content,
  DivText,
  Paragraph,
  PointerBlack,
  PrimaryDiv,
  ProfessionalImage,
  SubTitle,
  Title,
  TitleBody,
} from "./styles";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/index.jsx";
import blackPointer from "../../assets/virada-page/pointer-Black.svg";
import professional from "../../assets/virada-page/professionals.svg";

function Virada360() {
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

  return (
    <Container>
      <NavBar/>
      <Content>
        <PrimaryDiv>
          <DivText>
            <Title className="animate">PROGRAMA</Title>
            <SubTitle className="animate">VIRADA 360</SubTitle>
            <Paragraph className="animate">
              O VIRADA 360° UNE PROFISSIONAIS PARA
              <br /> CUIDAR DE VOCÊ POR INTEIRO!
            </Paragraph>
            <TitleBody className="animate">CORPO, MENTE & TREINO</TitleBody>
            <Paragraph className="animate">
              É A CHANCE DE CONQUISTAR A<br /> TRANSFORMAÇÃO QUE VOCÊ JÁ TENTOU
              <br /> SOZINHO E NÃO CONSEGUIU.
            </Paragraph>
          </DivText>
          <ButtonCTA onClick={() => window.open("https://programavirada360.com.br/")} className="animate">Clique aqui e saiba mais</ButtonCTA>
          <PointerBlack className="animate" src={blackPointer} />
        </PrimaryDiv>

        <ProfessionalImage className="animate" src={professional} />
      </Content>
    </Container>
  );
}

export default Virada360;
