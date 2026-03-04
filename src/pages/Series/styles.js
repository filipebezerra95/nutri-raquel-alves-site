import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const slideInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const slideInUp = keyframes`
    from {
    opacity: 0;
    transform: translateY(50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`;

const slideInDown = keyframes`
    from {
    opacity: 0;
    transform: translateY(-50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`;

const pointerEnter = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.8) rotate(-10deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
`;

const pointerPulse = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(8px) rotate(-6deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

export const Content = styled.div`
  display: flex;
  margin: 2rem auto 1rem auto;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 2rem;
  }
`;

export const PrimaryDiv = styled.div`
  margin-top: 2rem;
  margin-right: 10rem;
  @media (max-width: 768px) {
    
  }
`;

export const Title = styled.h1`
  font-family: "anton";
  font-size: 3.5rem;
  color: #fffaf1;
  line-height: 1.5rem;
  text-shadow: 0 2px 3px #000;
  &.show {
    animation: ${slideInUp} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-family: "anton";
  font-size: 4.2rem;
  color: #fffaf1;
  text-shadow: 0 2px 3px #000;
  &.show {
    animation: ${slideInDown} 2s ease-out forwards;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Paragraph = styled.p`
  width: 475px;
  font-family: "montserrat";
  font-size: 1.3rem;
  font-weight: bold;
  color: #fffaf1;
  margin-top: 2rem;
  &.show {
    animation: ${slideInLeft} 2.5s ease-out forwards;
  }
  @media (max-width: 768px){
    width: 300px;
    font-size: 1rem;
    margin-bottom: 2rem;
    
  }
`;

export const SecondaryDiv = styled.div`
  @media (max-width: 768px) {
    margin-right: 10rem;
  }
`;

export const SecondTitle = styled(Title)`
  font-size: 3.2rem;
  line-height: 4rem;
  &.show {
    animation: ${slideInUp} 2s ease-out forwards;
  }
  @media (max-width: 768px){
    font-size: 1.7rem;
    line-height: 2rem;
    line-break: auto;
    
  }
`;

export const SecondParagraph = styled.p`
  width: 475px;
  font-family: "montserrat";
  font-size: 1.3rem;
  font-weight: bold;
  color: #fffaf1;
  margin-top: 2rem;
  &.show {
    animation: ${slideInLeft} 2.5s ease-out forwards;
  }
  @media (max-width: 768px){
    width: 300px;
    font-size: 1rem;
    margin-bottom: 1rem;   
  }
`;

export const Content2 = styled.div`
  display: flex;
  margin: 1rem auto auto auto;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 2rem;
    margin-top: 0;
  }
`;

export const Content3 = styled.div`
  
`;


export const Content4 = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 5rem;
  overflow: hidden; /* importante */
  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 3rem;
    height: 100vh;
  }
`;

export const FinalDiv = styled.div`
  position: relative;
  margin-top: 2rem;
  z-index: 2; /* garante que fique na frente */
  max-width: 700px;
  @media (max-width: 768px){
    margin-bottom: 0;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  z-index: 2;
  @media (max-width: 768px){
    margin-bottom: 7rem;
    margin-right: 5rem;
  }
`;

export const FinalTitle = styled(Title)`
  margin-top: 5rem;
  margin-bottom: 2rem;
  &.show {
    animation: ${slideInLeft} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    margin-top: 3rem;
    font-size: 3rem;
    width: 350px;
    line-height: 3rem;
    text-align: center;
  }
`;

export const FinalParagraph = styled.p`
  font-family: "montserrat";
  font-size: 1.5rem;
  font-weight: 600;
  color: #fffaf1;
  margin-bottom: 1rem;
  &.show {
    animation: ${slideInRight} 1.5s ease-out forwards;
  }
  @media (max-width: 768px){
    font-size: 1rem;
  }
`;

export const FinalSub = styled.h1`
  font-family: "anton";
  font-weight: 400;
  font-size: 3.9rem;
  line-height: 3.5rem;
  color: #fffaf1;
  max-width: 600px;
  &.show {
    animation: ${slideInUp} 2.5s ease-out forwards;
  }
  @media (max-width: 768px){
    margin-bottom: 30rem;
    font-size: 2.7rem;
    line-height: 2.5rem;
  }
`;

export const AgendeButton = styled.button`
  background: #f1eee7; /* bege claro */
  color: #3e2f25; /* marrom escuro */
  border: none;
  border-radius: 60px;
  padding: 10px 70px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Anton", sans-serif;
  text-align: center;
  /* Base verde */
  box-shadow: 0px 12px 0px #75886b;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(4px);
    box-shadow: 0px 8px 0px #75886b;
  }
  &:active {
    transform: translateY(8px);
    box-shadow: 0px 4px 0px #90a784;
  }
  .title {
    font-size: 32px;
    margin: 0;
    line-height: 1.2;
    &.show {
      animation: ${slideInLeft} 2.5s ease-out forwards;
    }
  }
  .subtitle {
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 4px;
    &.show {
      animation: ${slideInRight} 2.5s ease-out forwards;
    }
  }
  @media (max-width: 768px){
    width: 15rem;
    height: 3rem;
    padding: 0;
    position: relative;
    bottom: 36rem;
    
    .title {
      font-size: 1rem;
    }
    .subtitle {
      font-size: 0.7rem;
    }

  }
`;

export const PointerClick = styled.img`
  position: relative;
  bottom: 3rem;
  width: 78px;
  height: 120px;
  margin-left: 1rem;
  &.show {
    animation:
      ${pointerEnter} 0.8s ease-out forwards,
      ${pointerPulse} 1.6s ease-in-out 1s infinite;
  }
  @media (max-width: 768px) {
    width: 3rem;
    bottom: 40rem;
    margin-left: 0;
  }
`;

export const RaquelSerie = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 75dvh;
  width: auto;
  object-fit: contain;
  z-index: 1;
  &.show {
    animation: ${slideInUp} 1.5s ease-out forwards;
  }
  @media (max-width: 768px){
    bottom: 0;
    left:13%;  
    height: 45vh;
    width: auto;
  }
  
`;
