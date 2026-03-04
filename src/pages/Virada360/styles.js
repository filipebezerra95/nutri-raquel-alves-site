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

const pointerClick = keyframes`
  0%, 100% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
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
    height: 100%;
    align-items: flex-end;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }   
`;

export const PrimaryDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;
`;

export const DivText = styled.div`
    max-width: 782px;
    margin: 0 auto  1rem;

    @media (max-width: 768px) {
      width: 350px;
    }
`;

export const Title = styled.h1`
    font-family: 'anton';
    font-size:6rem;
    line-height: 9rem;
    color: #FFFaF1;
    &.show {
      animation: ${slideInLeft} 2s ease-out forwards;
    } 
    @media (max-width: 768px) {
      font-size: 4rem;
      line-height: 5rem;
    }
`;

export const SubTitle = styled.h2`
    font-family: 'anton';
    font-size: 9rem;
    line-height: 8rem;
    color: #FFFAF1;
    &.show {
      animation: ${slideInRight} 2s ease-out forwards;
    } 
    @media (max-width: 768px) {
      font-size: 5rem;
      line-height: 5rem;
    }
`;

export const Paragraph = styled.p`
    font-family: 'montserrat';
    font-weight: 600;
    font-size: 1.5rem;
    color: #45372E;
    margin: 2rem auto;
    &.show {
      animation: ${slideInLeft} 2s ease-out forwards;
    } 
    @media (max-width:768px) {
      width: 335px;
      line-height: 1rem;
      font-size: 0.95rem;
    }
`;

export const TitleBody = styled.h1`
    font-family: 'anton';
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 50px;
    color: #45372e;
    &.show {
      animation: ${slideInUp} 2s ease-out forwards;
    } 
    @media (max-width:768px) {
      width: 340px;
      line-height: 1rem;
      font-size: 2.4rem;
    }
`; 

export const ButtonCTA = styled.button`
  width: 100%;
  max-width: 500px;
  height: 100px ;
  font-size: 2rem;
  font-weight: 700;
  border: none;
  border-radius: 60px;
  cursor: pointer;
  &.show {
      animation: ${slideInLeft} 2s ease-out forwards;
    } 

  background: linear-gradient(
    180deg,
    #ffc83d 0%,
    #ffb300 60%,
    #ffa000 100%
  );

  color: #3a2a00;

  box-shadow: 
    0 12px 0 #e69500,
    0 20px 30px rgba(0, 0, 0, 0.25);

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 15px 0 #e69500,
      0 25px 35px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(8px);
    box-shadow: 
      0 4px 0 #e69500,
      0 10px 15px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 768px) {
    width: 350px;
    font-size: 1.5rem;
  }
`;

export const PointerBlack = styled.img`
    width: 5rem;
    position: relative;
    left: 25rem;
    bottom: 2rem;
    z-index: 1;
    opacity: 0;

  &.show {
    animation: 
      ${pointerEnter} 0.8s ease-out forwards,
      ${pointerPulse} 1.6s ease-in-out 1s infinite,
      ${pointerClick}  1.6s ease-in-out 1s infinite;
  }
  @media (max-width: 768px){
    width: 4rem;
    left: 15rem;
  }
`;



export const ProfessionalImage = styled.img`
    position: relative;
    width: 35rem;
    object-fit: cover;
    top: 0;
    left: 0rem;
    z-index: -1;
    &.show {
      animation: ${slideInUp} 2s ease-out forwards;
    } 
    @media (max-width: 768px) {
      width: 25rem;
    }
    
    
`;

