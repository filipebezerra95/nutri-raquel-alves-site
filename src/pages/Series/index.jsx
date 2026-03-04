import {
  AgendeButton,
  
  Container,
  Content,
  Content2,
  Content3,
  Content4,
  FinalDiv,
  FinalParagraph,
  FinalSub,
  FinalTitle,
  Paragraph,
  PointerClick,
  PrimaryDiv,
  RaquelSerie,
  SecondaryDiv,
  SecondParagraph,
  SecondTitle,
  SubTitle,
  TextBox,
  Title,
} from "./styles";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/index.jsx";
import GridSeries  from "../../components/GridSeries/index.jsx";

import clickPointer from "../../assets/series-page/pointerHand.svg";
import serieRaquel from "../../assets/series-page/raquelSerie.svg";

function Series() {

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

    const message = "Olá, vim pelo site e gostaria de  agendar minha consulta!";
    const phone = "5512991060495"; // por enquanto esa o numero da agencia
    
  return (
    <Container>
      <NavBar/>
      <Content>
        <PrimaryDiv>
          <Title className="animate">NUTRIÇÃO</Title>
          <SubTitle className="animate">ALÉM DO PRATO</SubTitle>
          <Paragraph className="animate">
            Nutrição não é só sobre calorias, Não é só sobre emagrecimento
            E<br />
            definitivamente não é só sobre o que
            <br /> está no prato.
            <br />
            <br /> O Nutrição Além do Prato nasceu da
             minha própria história, uma trajetória
             marcada por transtorno alimentar e de
             imagem, Síndrome do Intestino Irritável
             (SII), Fibromialgia e a busca incansável
             por respostas.
            <br />
            Essa série é mais do que conteúdo.
            <br /> É uma construção de consciência sobre
             o que realmente sustenta a saúde:
             intestino, sistema nervoso, emoções,
             estilo de vida e propósito.
             O Nutrição Além do Prato é um projeto
             autoral que conecta ciência e vivência
             real.
          </Paragraph>
        </PrimaryDiv>
        <SecondaryDiv>
          <SecondTitle className="animate">
            AO LONGO DOS EPISÓDIOS,
            <br />
            COMPARTILHO:
          </SecondTitle>
          <SecondParagraph className="animate">
            • Minha trajetória pessoal com
            <br /> transtorno alimentar, distorção de
            <br /> imagem, SII e dor crônica
            <br />
            • A relação entre intestino, inflamação e sistema nervoso
            <br />
            • Como o eixo intestino-cérebro
            <br /> influencia metabolismo, humor e<br /> comportamento alimentar
            <br />
            • A importância do sono, exercício,
            <br /> gestão emocional e espiritualidade
            <br />
            • A construção de uma abordagem
            <br /> terapêutica integrativa
            <br />
            Cada episódio une experiência, base
            <br /> científica e prática clínica.
            <br />
            Porque saúde não começa na dieta.
            <br />
            Começa no entendimento.
          </SecondParagraph>
        </SecondaryDiv>
      </Content>
      <Content2>
        <PrimaryDiv>
          <Paragraph className="animate">
            A primeira temporada é uma jornada em 23
            <br /> episódios. Ela começa na dor Transtorno alimentar,
            <br /> vazio emocional, conflitos com o corpo e<br /> evolui para o
            diagnóstico de Fibromialgia e<br /> SII.
            <br />
            Ao longo da série, mostro como transformei
            <br /> sofrimento em especialização técnica,
            <br /> aprofundando-me em Gastroenterologia,
            <br /> microbiota intestinal, inflamação crônica e<br /> estratégias
            nutricionais terapêuticas.
            <br />
            A temporada constrói, passo a passo, os
            <br /> pilares da saúde:
            <br />
            <br />
            • Alimentação estratégica
            <br />
            • Movimento como ferramenta terapêutica
            <br />
            • Ritmo circadiano e sono
            <br />
            • Regulação do estresse
            <br />
            • Gestão emocional
            <br />
            • Espiritualidade como base de sustentação
            <br />
            <br />
            O encerramento marca não o fim da história,
            <br /> mas o início de uma nova fase: maturidade,
            <br /> propósito e prática clínica estruturada.
          </Paragraph>
        </PrimaryDiv>

        <SecondaryDiv>
          <SecondTitle className="animate">se você convive com:</SecondTitle>
          <Paragraph className="animate">
            – Sintomas digestivos recorrentes
            <br />
            – Inflamação crônica
            <br />
            – Dor persistente
            <br />
            – Compulsão alimentar
            <br />
            – Relação difícil com o próprio corpo
            <br />
            Essa série pode ajudar você a<br /> compreender o que está por trás
            dos
            <br /> sintomas.
            <br />
            Abaixo, você encontra todos os
            <br /> episódios da 1ª temporada.
            <br />
            Assista na ordem, Permita-se refletir E,
            <br /> se fizer sentido, caminhe comigo.
          </Paragraph>
        </SecondaryDiv>
      </Content2>
      <Content3>
        <GridSeries/>
      </Content3>
      <Content4>
        <FinalDiv>
          <TextBox>
            <FinalTitle className="animate">NUTRIÇÃO ALÉM DO PRATO</FinalTitle>
            <FinalParagraph className="animate">
              NÃO É APENAS UMA SÉRIE.
              <br />
              É A BASE DA MINHA ATUAÇÃO PROFISSIONAL.
              <br />
              ELE REPRESENTA A UNIÃO ENTRE VIVÊNCIA E CIÊNCIA E A<br /> CERTEZA
              DE QUE A DOR PODE SE TRANSFORMAR EM
              <br /> PROPÓSITO QUANDO É COMPREENDIDA.
            </FinalParagraph>
            <FinalSub className="animate">QUER APLICAR ISSO<br/> NA SUA REALIDADE?</FinalSub>
          </TextBox>
          <AgendeButton className="animate" onClick={() => window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")}>
            <span  className="title animate">AGENDE SUA CONSULTA</span>
            <span className="subtitle animate">PRESENCIAL OU ONLINE</span>
          </AgendeButton>
          <PointerClick className="animate" src={clickPointer}/>
        </FinalDiv>
        <RaquelSerie className="animate" src={serieRaquel}/>
      </Content4>
    </Container>
  );
}

export default Series;
