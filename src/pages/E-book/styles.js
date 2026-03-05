import styled, { keyframes, css } from "styled-components";


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
const throwFirst = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(0deg) scale(0.8);
  }

  30% {
    opacity: 1;
    transform: translate(-50px, -110px) rotate(40deg);
  }

  70% {
    transform: translate(-160px, 80px) rotate(10deg);
  }

  85% {
    transform: translate(-150px, 150px) rotate(5deg);
  }

  100% {
    transform: translate(-160px, 270px) rotate(0deg);
  }
`;
const throwSecond = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(0deg) scale(0.8);
  }

  30% {
    opacity: 1;
    transform: translate(-60px, -130px) rotate(60deg);
  }

  70% {
    transform: translate(-90px, 150px) rotate(-15deg);
  }

  85% {
    transform: translate(-85px, 80px) rotate(5deg);
  }

  100% {
    transform: translate(-90px, 90px) rotate(0deg);
  }
`;
const throwThird = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(0deg) scale(0.8);
  }

  30% {
    opacity: 1;
    transform: translate(-40px, -120px) rotate(-50deg);
  }

  70% {
    transform: translate(-30px, 120px) rotate(15deg);
  }

  85% {
    transform: translate(-25px, 95px) rotate(-5deg);
  }

  100% {
    transform: translate(-30px, 170px) rotate(0deg);
  }
 
`;
const splashPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0px rgba(255,0,0,0));
  }
  50% {
    transform: scale(1.1);
    filter: drop-shadow(0 0 20px rgba(255,0,0,0.6));
  }
`;
const arrowPulse = keyframes`
  0%, 100% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(10px) scale(1.05);
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

const fruitBase = css`
  width: 90px;
  height: 90px;
  position: absolute;
  top: 80px;     /* ajuste fino pra boca do saco */
  right: 120px;  /* ajuste fino */
  z-index: 2;
  will-change: transform;
  @media (max-width:768px) {
    width: 60px;
    z-index: -2;
  }
`;

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column; 
  
  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

export const BagWrapper = styled.div`
  position: relative;
  width: 600px; /* ajuste conforme layout */
  height: 500px;
  @media (max-width: 768px) {
    width: 390px;
    height: auto;
  }
`;


export const BagFruit = styled.img`
  width: 334px;
  height: 395px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  &.show {
    animation: ${slideInRight} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 220px;
  }
`;

export const First = styled.img`
  ${fruitBase};

  &.show {
    animation: ${throwFirst} 1.5s cubic-bezier(.22,1,.36,1) forwards;
    animation-delay: 0.2s;
  }
`;

export const Second = styled.img`
  ${fruitBase};

  &.show {
    animation: ${throwSecond} 1.6s cubic-bezier(.22,1,.36,1) forwards;
    animation-delay: 0.7s;
  }
  
`;

export const Third = styled.img`
  ${fruitBase};

 &.show {
    animation: ${throwThird} 1.7s cubic-bezier(.22,1,.36,1) forwards;
    animation-delay: 1.2s;
  }
  @media (max-width:768px){
    z-index: 2;
  }
  @media (max-width: 370px) {
    top: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    margin-top: 10rem;
  }
`;

export const DivText = styled.div`
  margin-left: 66px;
  @media (max-width: 768px) {
    margin-left: 2rem;
  }
`;

export const Title = styled.h1`
  font-family: 'anton';
  font-size: 150px;
  font-weight: 400;
  color: #EBF1e4;
  text-shadow: 0 5px  10px #000 ;
   &.show {
    animation: ${slideInLeft} 2s ease-out forwards;
  }
  @media (max-width:768px) {
    font-size: 8rem;
    
  }
  @media (max-width: 370px) {
    font-size: 5rem;
  }
`;

export const SubTitle = styled.h2`
  width: 430px;
  font-family: 'montserrat';
  font-weight: bold;
  font-size: 30px;
  color: #Ebf1e4;
   &.show {
    animation: ${slideInRight} 2s ease-out forwards;
  }
  @media (max-width:768px){
    width: 390px;
    font-size: 1.5rem;
  }
  @media (max-width: 370px) {
    width: 25rem;
    font-size: 1.4rem;
  }
`;

export const Info = styled.h3`
  width: 531px;
  font-family: 'montserrat', 'sans-serif';
  font-size: 20px;
  color: #ebf1e4;
  font-weight: 300;
   &.show {
    animation: ${slideInRight} 2s ease-out forwards;
  }
  span {
    font-weight: 700;
  }

  @media (max-width:7668px) {
    width: 380px;
    font-size: 1.1rem;
  }
  @media (max-width: 370px) {
    font-size: 1rem;
    width: 20rem;
    font-weight: 500;
  }
`;

export const Paragraph = styled.p`
  font-family: 'montserrat';
  font-size: 2rem;
  color: #ebf1e4;
  margin-top: 1rem;
   &.show {
    animation: ${slideInUp} 2s ease-out forwards;
  }
  @media (max-width:768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 370px) {
    width: 20rem;
  }
`;

export const DivList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  @media (max-width: 768px){
    flex-direction: column;
  }
`;

export const ListParagraph = styled.p`
  font-family: 'montserrat';
  font-size: 1.5rem;
  color: #F5f5ef;
  font-weight: bold;
   &.show {
    animation: ${slideInRight} 2s ease-out forwards;
  }
`;

export const FruitsRed = styled.img`
 &.show {
    animation: ${slideInRight} 2s ease-out forwards;
  }`;

export const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 1rem;
  @media (max-width:768px){
    justify-content: center;
  }
  
`;

export const KiwiDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: row;
  } 
`;

export const BoxText = styled.div`
  margin-left: 10rem;
  margin-bottom: 0;
  @media (max-width:768px) {
    margin-left:2rem;
  }
`;

export const TitleText = styled.h1`
  font-family: 'poppins';
  font-weight: bold;
  color: #F5f5fe;
  font-size: 50px;
  line-height: 35px;
  margin-bottom: 1rem;
   &.show {
    animation: ${slideInUp} 2s ease-out forwards;
  }
  @media (max-width:768px) {
    font-size: 1.8rem;
    line-height: 25px;
    width: 25rem;
  }
  @media (max-width: 370px) {
    width: 24rem ;
    font-size: 1.7rem;
  }
`;

export const ParagraphText = styled.p`
  font-family: 'montserrat';
  font-weight: bold;
  color: #f5f5ef;
  font-size: 30px;
  line-height: 30px; 
   &.show {
    animation: ${slideInRight} 2s ease-out forwards;
  }
  @media (max-width:768px) {
    font-size: 1.2rem;
    line-height: 1rem;
    width: 165px;
  }
  @media (max-width: 370px) {
    line-height: 1.4rem;
  }
`;

export const BoxText2 = styled.div`
  margin-left: 10rem;
  margin-bottom: 0;
  @media (max-width:768px) {
    position: relative;
    margin-left: 0;
    right: 12rem;
    
  }
`;

export const TitleText2 = styled(TitleText)`
  text-align: right;
   &.show {
    animation: ${slideInLeft} 2s ease-out forwards;
  }
  @media (max-width:768px) {
    position: relative;
    font-size: 1.9rem;
    line-height: 25px;
    width: 25rem;
    right: 3rem;   
  }
  @media (max-width: 370px){
    font-size: 1.8rem;
    width: 26rem;
    right: 6rem;
  }
`
export const ParagraphText2 = styled(ParagraphText)`
  text-align: right;
  margin-top: 3rem;
  font-weight: 500;
   &.show {
    animation: ${slideInRight} 1s ease-out forwards;
  }
  @media (max-width: 768px){
    position: relative;
    left: 10.3rem;
    width: 182px;
    font-size: 18px;
  }
  @media (max-width: 370px) {
    left: 8rem;
  }
`

export const KiwiImage = styled.img`
  width: 372px;
   &.show {
    animation: ${slideInDown} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 15rem;
    position: relative;
    top: 4rem;
    right: 15rem;
  }
`;

export const StanberryDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin:5rem 5rem auto 0 ;
`;

export const StranberryImage = styled.img`
  width: 20rem; 
  margin-left: 1rem;
   &.show {
    animation: ${slideInUp} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 13rem;
    position: relative;
    rotate: 23deg;
    top: 4rem;
    right: 6rem;
  }
`;
 export const Content3 = styled.div`
   margin-top:2rem;
   display: flex;
   
   padding-left: 2rem;
   margin-bottom: 0;

   @media (max-width: 768px){
    flex-direction: column;
    margin-top: 5rem;
   }
   
 `;

 export const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 638px;
  @media (max-width: 768px){
    max-width: 350px;
  }

 `;

 export const TitleSection = styled.h1`
  font-family: 'poppins';
  font-weight: bold;
  font-size: 62px;
  line-height: 50px;
  color: #f5f5fe;
   &.show {
    animation: ${slideInRight} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 370px) {
    font-size: 2.7rem;
    line-height: 2.3rem;
  }
 `;

 export const ParagraphSection = styled.p`
  font-family: 'montserrat';
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  color: #f5f5ef;
  margin-bottom: 2rem;
   &.show {
    animation: ${slideInLeft} 1s ease-out forwards;
  }
  @media (max-width: 768px){
    font-size: 1.3rem;
  }
  @media (max-width: 370px) {
    font-size: 1.2rem;
  }
 `;

export const TitleSection2 = styled.h1`
  font-family: 'poppins';
  font-weight: bold;
  font-size: 62px;
  line-height: 50px;
  color: #f5f5fe;
   &.show {
    animation: ${slideInRight} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 1.6rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
 `;

export const ArrowRed = styled.img`
  width: 15rem;
  position: relative;
  left: 20rem;
  &.show {
    animation: ${arrowPulse} 1.8s ease-in-out infinite;
  }
  @media (max-width: 768px){
    width: 10rem;
    left: 2rem;
    top: 3rem;
    rotate: 90deg;
    z-index: 2;
  }
`;

 export const DivFigures = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px){
    position: relative;
    bottom: 15rem;
  }
  @media (max-width: 370px) {
    right: 1rem;
  }
 `;

export const Splash = styled.img`
  position: relative;
  width: 321px;
  height: 318px;
  margin-left: 15rem;
  z-index: 1;

  &.show {
    animation: ${splashPulse} 1.5s ease-in-out infinite;
  }
  @media (max-width: 768px){
    width: 12rem;
    margin-left: 10rem;
    position: relative;
    top: 8rem;
  }
`;

 export const DivMockup = styled.div`
  display: flex;
  position: relative;
  bottom: 10rem;
  align-items: center;
  @media (max-width:768px){
    bottom: 2rem;
  }
 `;

 export const Ipad = styled.img`
  width: 30rem;
   &.show {
    animation: ${slideInUp} 1s ease-out forwards;
  }
  @media (max-width: 768px){
    width: 17rem;
    position: relative;
    top: 1rem;
    
  }
 `;

 export const Phrase = styled.p`
  font-family: 'montserrat';
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2rem;
  margin-right: 2px;
  color: #f5f5ef;
   &.show {
    animation: ${slideInDown} 2s ease-out forwards;
  }
  @media (max-width: 768px){
    font-size: 1rem;
    line-height: 1rem;
    position: relative;
    top: 2rem;
  }
  @media (max-width: 370px) {
    font-size: 0.8rem;
    line-height: 0.8rem;
    top: 1.7rem;
  }
  
 `;

 export const ButtonBuy = styled.button`
  position: relative;
  width: 30rem;
  height: 6rem;
  z-index: 1;
  margin-top: -17rem;
  padding: 22px 60px;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #f2f2f2;
  background: #5f7f57;
   &.show {
    animation: ${slideInRight} 2s ease-out forwards;
  }

  border:none;
  border-radius: 25px;

  cursor: pointer;

  /* Profundidade */
  box-shadow:
    0 8px 0 #4e6b47,
    0 15px 25px rgba(0, 0, 0, 0.25);

  transition: all 0.2s ease;

  /* Hover */
  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 12px 0 #4e6b47,
      0 20px 30px rgba(0, 0, 0, 0.3);
  }

  /* Clique */
  &:active {
    transform: translateY(6px);
    box-shadow:
      0 4px 0 #4e6b47,
      0 8px 15px rgba(0, 0, 0, 0.2);
  }

  /* Borda interna */
  &::before {
    content: "";
    position: absolute;
    inset: 8px;
    border: 5px solid #f2f2f2;
    border-radius: 18px;
    pointer-events: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 5rem;
    top: 12rem;
    font-size: 1rem;
  }
`;