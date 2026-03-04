import {
  ArrowRed,
  BagFruit,
  BoxText,
  BoxText2,
  ButtonBuy,
  Container,
  Content,
  Content2,
  Content3,
  DivFigures,
  DivList,
  DivMockup,
  DivText,
  First,
  FruitsRed,
  Info,
  Ipad,
  KiwiDiv,
  KiwiImage,
  ListParagraph,
  Paragraph,
  ParagraphSection,
  ParagraphText,
  ParagraphText2,
  Phrase,
  Second,
  SectionText,
  Splash,
  StanberryDiv,
  StranberryImage,
  SubTitle,
  Third,
  Title,
  TitleSection,
  TitleSection2,
  TitleText,
  TitleText2,
} from "./styles.js";
import NavBar from "../../components/NavBar/index.jsx";
import fruitBag from "../../assets/ebook-page/bag.svg";
import fruit1 from "../../assets/ebook-page/primary.svg";
import fruit2 from "../../assets/ebook-page/sec.svg";
import fruit3 from "../../assets/ebook-page/trd.svg";
import fruitRed from "../../assets/ebook-page/redFruits.svg";
import kiwi from "../../assets/ebook-page/kiwi.svg";
import stranberry from "../../assets/ebook-page/stranberry.svg";
import Arow from "../../assets/ebook-page/redArow.svg";
import splashred from "../../assets/ebook-page/red-splash.svg"
import ipadbook from "../../assets/ebook-page/mockup-pad.svg";
import { useEffect } from "react";

function Ebook() {
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
  return (
    <Container>
      <NavBar />
      <BagFruit className="animate" src={fruitBag} />
      <First className="animate" src={fruit1} />
      <Second className="animate" src={fruit2} />
      <Third className="animate" src={fruit3} />
      <Content>
        <DivText>
          <Title className="animate">E-BOOK</Title>
          <SubTitle className="animate">30 RECEITAS FUNCIONAIS</SubTitle>
          <Info className="animate">
            Sem Glúten • Sem Lactose • Sem Açúcar
            <br /> por <span>Nutri Raquel Alves</span>
          </Info>
          <Paragraph className="animate">
            Você quer comer melhor…
            <br /> mas está cansada de receitas complicadas, caras e sem sabor?
            <br />
            <br /> Este e-book foi criado para quem quer:
          </Paragraph>
          <DivList>
            <ListParagraph className="animate">
              ✔ Emagrecer sem passar fome <br /> ✔ Reduzir inchaço e desconforto
              <br />
              intestinal
              <br /> ✔ Comer doce sem culpa
              <br /> ✔ Ter opções práticas para o dia a dia
              <br /> ✔ Sair do “sempre a mesma coisa”
            </ListParagraph>
            <FruitsRed className="animate" src={fruitRed} />
          </DivList>
        </DivText>
      </Content>
      <Content2>
        <KiwiDiv>
          <BoxText>
            <TitleText className="animate">
              Nada de receitas
              <br /> aleatórias da internet.
            </TitleText>
            <ParagraphText className="animate">
              São preparações pensadas para:
              <br /> • melhorar digestão
              <br /> • estabilizar glicemia
              <br /> • aumentar saciedade
              <br /> • facilitar o processo de emagrecimento
            </ParagraphText>
          </BoxText>
          <KiwiImage className="animate" src={kiwi} />
        </KiwiDiv>
        <StanberryDiv>
          <StranberryImage className="animate" src={stranberry} />
          <BoxText2>
            <TitleText2 className="animate">
              Aqui você encontra 30
              <br /> receitas testadas na
              <br /> prática, com:
              <br />
            </TitleText2>
            <ParagraphText2 className="animate">
              Salgadas low carb
              <br /> Doces funcionais
              <br /> Chás e sucos estratégicos
              <br />
              Informação nutricional completa
              <br /> (kcal, carbo, proteína e gordura)
            </ParagraphText2>
          </BoxText2>
        </StanberryDiv>
      </Content2>
      <Content3>
        <SectionText>
          <TitleSection className="animate">
            Para quem é<br /> esse e-book?
          </TitleSection>
          <ParagraphSection className="animate">
            ✔ Homens e mulheres que vivem inchadas
            <br /> ✔ Quem quer reduzir açúcar sem sofrer
            <br /> ✔ Quem busca opções sem glúten e lactose
            <br /> ✔ Quem já tentou dieta e não conseguiu manter
            <br />
          </ParagraphSection>
          <TitleSection>O que você vai receber?</TitleSection>
          <ParagraphSection className="animate">
            E-book digital completo (PDF)<br/> Acesso imediato após pagamento<br/> Pode
            usar no celular, tablet ou imprimir
          </ParagraphSection>
          <TitleSection2 className="animate">
            Quero minhas 30 receitas<br/> funcionais agora!
          </TitleSection2>
          <ArrowRed className="animate" src={Arow}/>
        </SectionText>
        <DivFigures>
          <Splash className="animate" src={splashred}/>
          <DivMockup>
            <Ipad className="animate" src={ipadbook}/>
            <Phrase className="animate">
              Menos que<br/> um lanche<br/> no fim de<br/> semana e<br/> com<br/> impacto<br/> muito<br/> maior na<br/> sua saúde
            </Phrase>
            
          </DivMockup>
          <ButtonBuy className="animate">COMPRAR AGORA</ButtonBuy>
        </DivFigures>
      </Content3>
    </Container>
  );
}

export default Ebook;
