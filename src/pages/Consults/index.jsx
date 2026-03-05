import {
  BuyButton,
  ColumnText,
  ColumnText2,
  Container,
  Content,
  Content2,
  Content3,
  DivButtons,
  DivSemestral,
  DivText,
  DivTrimestral,
  FinalParagraph,
  Header,
  LastParagraph,
  Paragraph,
  ParagraphList,
  Pcolumn,
  Pcolumn2,
  PrimarySpan,
  SecondarySpan,
  Selo,
  SubTitle,
  TextBox,
  TextPlan,
  Title,
  TitleColumn,
  TitleColumn2,
  TitlePlan,
  Titles,
  TitleText,
} from "./styles";
import NavBar from "../../components/NavBar/index.jsx";
import SeloPremium from "../../assets/consult-page/selo-premium.svg";
import { useEffect } from "react";

function Consults() {
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
  const message1 = "Olá, vim pelo site e gostaria de aderir ao plano trimestral!";
  const message2 = "Olá, vim pelo site e gostaria de aderir ao plano semestral!";
  const phone = "5512991816453"; // por enquanto esa o numero da agencia

  return (
    <Container>
      <NavBar />
      <Header className="animate">
        <Titles>
          <Title className="animate">CONSULTA <span>PREMIUM</span></Title>
          <SubTitle className="animate">Acompanhamento Nutriconal Estratégico</SubTitle>
        </Titles>
        <Selo className="animate" src={SeloPremium} />
      </Header>
      <Content>
        <DivText>
          <Paragraph className="animate">
            Transformação real exige acompanhamento. Não é sobre uma consulta, é
            sobre direção, estratégia e constância.
            <br />
            <br /> Se você já começou e parou várias vezes, talvez o que faltou
            não foi força de vontade foi acompanhamento.
          </Paragraph>
          <TextBox>
            <TitleText className="animate">
              ESSE PROGRAMA É <br /> PARA VOCÊ QUE:
            </TitleText>
            <ParagraphList className="animate">
              ✔ Já tentou várias dietas e não conseguiu manter
              <br /> ✔ Sente que faz tudo “certo” mas não evolui
              <br /> ✔ Quer reduzir gordura, melhorar exames e ter energia
              <br /> ✔ Entende que saúde não se constrói em 30 dias
              <br /> ✔ Quer acompanhamento próximo e estratégia personalizada
            </ParagraphList>
          </TextBox>
        </DivText>
        <LastParagraph className="animate">
          Não é para quem quer uma orientação pontual, mas sim para quem quer
          <br />
          transformação consistente.
        </LastParagraph>
      </Content>
      <Content2>
        <ColumnText>
          <TitleColumn className="animate">
            NO PROGRAMA <br />
            CONSULTA PREMIUM
            <br /> VOCÊ TEM:
          </TitleColumn>
          <Pcolumn className="animate">
            •Consultas mensais individuais comigo
            <br /> • Avaliação corporal detalhada (InBody no presencial)
            <br /> • Análise estratégica de exames
            <br /> • Plano alimentar totalmente individualizado
            <br /> • Ajustes mensais conforme evolução
            <br /> • Direcionamento baseado na sua rotina real
            <br /> A primeira consulta tem duração média de 1h30, porque
            entender você profundamente é parte do processo.
          </Pcolumn>
        </ColumnText>
        <ColumnText2>
          <TitleColumn2 className="animate">DIFERENCIAL</TitleColumn2>
          <Pcolumn2 className="animate">
            Aqui, a alimentação é parte central, mas nunca isolada. Eu
            considero:
            <br /> • Seu histórico metabólico
            <br /> • Seu intestino e padrão inflamatório <br />• Sua rotina de
            trabalho
            <br /> • Seu nível de estresse
            <br /> • Seu sono
            <br /> • Sua composição corporal Você não sai com uma dieta. <br />
            Você sai com estratégia.
          </Pcolumn2>
        </ColumnText2>
      </Content2>
      <Content3>
        <DivButtons>
          <DivTrimestral className="animate">
            <TitlePlan className="animate">PLANO TRIMESTRAL</TitlePlan>
            <TextPlan className="animate">
              3 meses de acompanhamento
              <br /> Investimento: R$ 597
              <br /> ou parcelado no cartão
            </TextPlan>
            <BuyButton onClick={() =>window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message1)}`, "_blank")} className="animate">COMPRAR</BuyButton>
          </DivTrimestral>
          <DivSemestral className="animate">
            <TitlePlan className="animate">PLANO SEMESTRAL</TitlePlan>
            <TextPlan className="animate">
              6 meses de acompanhamento
              <br /> Investimento: R$ 1.097
              <br /> ou parcelado no cartão
            </TextPlan>
            <BuyButton onClick={() =>window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message2)}`, "_blank")}  className="animate">COMPRAR</BuyButton>
          </DivSemestral>
        </DivButtons>
        <FinalParagraph className="animate">
          <PrimarySpan className="animate">Consulta avulsa</PrimarySpan> é para quem quer orientação pontual.<br/><PrimarySpan>Consulta Premium</PrimarySpan> 
           é para quem quer transformação.<br/><SecondarySpan className="animate">GARANTIA/ SEGURANÇA</SecondarySpan> <br/> Compromisso,
          estratégia e acompanhamento contínuo.<br/> Você investe na sua saúde com
          clareza, direção e acompanhamento profissional.<br/><br/> Se você está pronta
          para parar de começar e parar, esse é o seu momento.<br/> Garanta sua vaga
          no Programa Consulta Premium.
        </FinalParagraph>
      </Content3>
    </Container>
  );
}

export default Consults;
