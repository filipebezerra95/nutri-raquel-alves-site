import styled, { keyframes } from "styled-components";


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
    transform: translateX(0);
    }
    to {
    opacity: 1;
    transform: translateX(100);
    }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff2da;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px 40px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivLogo = styled.div`
  margin-bottom: 10px;
  
`;

export const LogoImage = styled.img`
  height: 130px;
  &.show {
      animation: ${slideInUp} 1.5s ease-out forwards;
    }
`;

export const DivCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: center;

 @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
`;

export const Card = styled.div`
  position: relative;
  width: 243px;
  height: 315px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  /* troca a ordem no mobile */
  &:nth-child(1) {
    @media (max-width: 768px) {
      order: -1;
    }
  }

  &:nth-child(2) {
    @media (max-width: 768px) {
      order: -2;
    }
  }
  
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
 &.show {
      animation: ${slideInUp} 2s ease-out forwards;
    }
    
    @media (max-width: 768px) {
      &.show {
      animation: ${slideInUp} 1s ease-out forwards;
    }
    }
`;

export const PremiumButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 13rem;
  height: 55px;
  background: ${({ theme }) => theme.colors.premiumButton};
  border: ${({ theme }) => theme.colors.goldBorder};
  border-radius: 10px;
  box-shadow:
    inset 0 2px 0 #fff3c4,
    0 4px 0 #a9741f;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.brownDark};
  text-align: center;
  text-transform: uppercase;
  
  cursor: pointer;
  transition: all 0.2s ease;
  &.show {
      animation: ${slideInDown} 2s ease-out forwards;
    } 
  
  &:hover {
    box-shadow:
      inset 0 2px 0 #fff3c4,
      0 6px 0 #a9741f;
  }
  &:active {
    box-shadow:
      inset 0 2px 0 #fff3c4,
      0 2px 0 #a9741f;
  }

  @media (max-width: 768px) {
    width: 17rem;
    &.show {
      animation: ${slideInDown} 1.5s ease-out forwards;
    } 
     &:hover {
    box-shadow:none;
  }
    }
  

`;

export const AgendaButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 13rem;
  height: 55px;
  background: ${({ theme }) => theme.colors.greenButton};
  border: none;
  border-radius: 18px;
  box-shadow: 0 6px 0 #4f6654;
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white1};
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 2px 3px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &.show {
      animation: ${slideInDown} 2s ease-out forwards;
    } 
  &:hover {
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 8px 0 #4f6654;
  }
  &:active {
    transform: translateX(-50%) translateY(2px);
    box-shadow: 0 3px 0 #4f6654;
  }

   @media (max-width: 768px) {
    width: 17rem;
    
    &.show {
      animation: ${slideInDown} 1.5s ease-out forwards;
    } 
     &:hover {
    box-shadow:none;
  }
    }
`;

export const EbookButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 13rem;
  height: 55px;
  background: ${({ theme }) => theme.colors.brownLight};
  border: none;
  border-radius: 18px;
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white1};
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 2px 3px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &.show {
      animation: ${slideInDown} 2s ease-out forwards;
    } 
  &:hover {
    transform: translateX(-50%) translateY(-2px);
  }
  &:active {
    transform: translateX(-50%) translateY(2px);
  }
  @media (max-width: 768px) {
    width: 17rem;
    
    &.show {
      animation: ${slideInDown} 1.5s ease-out forwards;
    } 
     &:hover {
    box-shadow:none;
  }
    }
`;

export const ViradaButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 13rem;
  height: 55px;
  background: ${({ theme }) => theme.colors.greenButton};
  border: none;
  border-radius: 18px;
  box-shadow: 0 6px 0 #4f6654;
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white1};
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 2px 3px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &.show {
      animation: ${slideInDown} 2s ease-out forwards;
    } 

  &:hover {
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 8px 0 #4f6654;
  }

  &:active {
    transform: translateX(-50%) translateY(2px);
    box-shadow: 0 3px 0 #4f6654;
  }
  @media (max-width: 768px) {
    width: 17rem;
    
    &.show {
      animation: ${slideInDown} 1.5s ease-out forwards;
    } 
     &:hover {
    box-shadow:none;
  }
    }
`;

export const SerieButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 13rem;
  height: 55px;
  background: ${({ theme }) => theme.colors.brownDark};
  border: none;
  border-radius: 18px;
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white1};
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 2px 3px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &.show {
      animation: ${slideInDown} 2s ease-out forwards;
    } 

  &:hover {
    transform: translateX(-50%) translateY(-2px);
  }
  &:active {
    transform: translateX(-50%) translateY(2px);
  }
  @media (max-width: 768px) {
    width: 17rem;
    
    &.show {
      animation: ${slideInDown} 1.5s ease-out forwards;
    } 
     &:hover {
    box-shadow:none;
  }
    }
`;

export const AboutButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 13rem;
  height: 55px;
  background: ${({ theme }) => theme.colors.greenButton};
  border: none;
  border-radius: 18px;
  box-shadow: 0 6px 0 #4f6654;
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white1};
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 2px 3px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.2s ease;
  &.show {
      animation: ${slideInDown} 2s ease-out forwards;
    } 

  &:hover {
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 8px 0 #4f6654;
  }

  &:active {
    transform: translateX(-50%) translateY(2px);
    box-shadow: 0 3px 0 #4f6654;
  }
  @media (max-width: 768px) {
    width: 17rem;
    
    &.show {
      animation: ${slideInDown} 1.5s ease-out forwards;
    } 
     &:hover {
    box-shadow:none;
  }
    }
`;
