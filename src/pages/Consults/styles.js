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

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

export const Header = styled.div`
  margin-top: 36px;
  width: 100%;
  height: 242px;
  display: flex;
  flex-direction: row;
  position: relative;
  background: ${({ theme }) => theme.colors.brownDark};
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    width: 370px;
    height: 150px;
    border-radius: 0px 15px 15px 0;
    padding-left: 15px;
    &.show {
      animation: ${slideInLeft} 2.5s ease-out forwards;
    }
  }
`;

export const Titles = styled.div`
  text-align: center;
  @media (max-width: 768px) {
    text-align: left;
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-family: "poppins", "sans-serif";
  color: ${({ theme }) => theme.colors.white1};
  text-shadow: 0 2px 3px #000;
  font-weight: bold;
  font-size: 4.5rem;
  line-height: 3rem;
  &.show {
    animation: ${slideInLeft} 1.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 3rem;
    span {
      font-size: 2.9rem;
    }
  }
`;

export const SubTitle = styled.h2`
  font-family: "poppins", "sans-serif";
  color: ${({ theme }) => theme.colors.white1};
  font-weight: 300;
  font-size: 2rem;
  text-shadow: 0 2px 3px #000;
  &.show {
    animation: ${slideInRight} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const Selo = styled.img`
  width: 168px;
  height: 167px;
  &.show {
    animation: ${slideInUp} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    position: absolute;
    width: 7rem;
    left: 15rem;
    bottom: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0 18px;
  }
`;

export const DivText = styled.div`
  margin: 56px auto;
  display: flex;
  gap: 140px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
    gap: 5rem;
  }
`;

export const Paragraph = styled.p`
  width: 472px;
  font-family: "montserrat";
  color: #f5f5ef;

  font-weight: 400;
  font-size: 1.5rem;
  &.show {
    animation: ${slideInLeft} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 350px;
  }
`;

export const TextBox = styled.div`
  @media (max-width: 768px) {
  }
`;

export const TitleText = styled.h1`
  font-family: "poppins", "sans-serif";
  color: ${({ theme }) => theme.colors.white1};
  font-weight: bold;

  font-size: 2.5rem;
  line-height: 2rem;
  &.show {
    animation: ${slideInRight} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
`;

export const ParagraphList = styled.p`
  width: 513px;
  font-family: "montserrat";
  color: ${({ theme }) => theme.colors.white1};
  font-weight: 400;
  font-size: 1.2rem;
  &.show {
    animation: ${slideInLeft} 2.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 350px;
    font-size: 1.4rem;
  }
`;

export const LastParagraph = styled.p`
  margin-top: 3rem;
  text-align: center;
  font-family: "arimo";
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white1};

  &.show {
    animation: ${slideInDown} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    margin-top: 0;
    text-align: left;
  }
`;

export const Content2 = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  gap: 10%;
  margin: 0 auto 100px auto;
  @media (max-width: 768px) {
    margin: 0 18px;
    flex-direction: column;
    margin-left: 1rem;
  }
`;

export const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;

export const ColumnText2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 0.3rem;
    margin-bottom: 2rem;
  }
`;

export const TitleColumn = styled.h1`
  width: 500px;
  font-family: "poppins";
  color: ${({ theme }) => theme.colors.white1};
  font-size: 3.8rem;
  font-weight: 800;
  line-height: 3.5rem;
  margin-bottom: 1rem;
  margin-bottom: 3rem;
  text-shadow: 0 2px 3px #000;
  &.show {
    animation: ${slideInLeft} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 380px;
    font-size: 2.2rem;
    line-height: 2.2rem;
    margin-left: 2rem;
    text-align: left;
  }
`;

export const Pcolumn = styled.p`
  width: 504px;
  font-family: "montserrat";
  color: ${({ theme }) => theme.colors.white1};
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
  &.show {
    animation: ${slideInRight} 1.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 380px;
    font-size: 1.3rem;
    margin-left: 2rem;
    line-height: 1.7rem;
  }
`;

export const TitleColumn2 = styled.h1`
  font-family: "poppins";
  color: ${({ theme }) => theme.colors.white1};
  font-size: 4rem;
  font-weight: 800;
  line-height: 5rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 3px #000;
  &.show {
    animation: ${slideInRight} 2.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 380px;
    font-size: 2.2rem;
    line-height: 2.2rem;
    margin-left: 2rem;
    text-align: left;
  }
`;

export const Pcolumn2 = styled.p`
  width: 504px;
  font-family: "montserrat";
  color: ${({ theme }) => theme.colors.white1};
  font-size: 1.6rem;
  line-height: 3rem;
  font-weight: 400;
  &.show {
    animation: ${slideInLeft} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 370px;
    font-size: 1.3rem;
    margin-left: 2rem;

    line-height: 1.7rem;
  }
`;

export const Content3 = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 20rem;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const DivTrimestral = styled.div`
  margin: 0 auto auto 0;
  width: 620px;
  min-height: 250px;
  background: #896751;
  border-radius: 0 18px 18px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 22px 96px 0 49px;
  &.show {
    animation: ${slideInLeft} 2.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 352px;
    height: 158px;
    padding: 10px 40px 020px;
  }
`;

export const DivSemestral = styled.div`
  margin: 103px 0 auto auto;
  width: 620px;
  min-height: 250px;
  background: #896751;
  border-radius: 18px 0 0 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 22px 96px 0 49px;
  &.show {
    animation: ${slideInRight} 2.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 352px;
    height: 158px;
    padding: 10px 40px 020px;
  }
`;

export const BuyButton = styled.button`
  position: relative;
  top: 2rem;
  width: 26rem;
  height: 5rem;
  background: #dfe7dc; /* verde claro */
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 10px 0 #4f6f50; /* base verde escura */
  font-weight: 800;
  font-size: 2.4rem;
  letter-spacing: 1px;
  color: #4b3f36; /* marrom escuro */
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  &.show {
    animation: ${slideInUp} 2s ease-out forwards;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 0 #4f6f50;
  }

  &:active {
    transform: translateX(-50%) translateY(2px);
    box-shadow: 0 3px 0 #4f6f50;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.8rem;
  }
`;

export const TitlePlan = styled.h1`
  font-family: "poppins";
  font-size: 3rem;
  font-weight: bold;
  color: #f5f5ef;
  margin-top: 3rem;
  &.show {
    animation: ${slideInLeft} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const TextPlan = styled.p`
  font-family: "poppins";
  font-size: 1.5rem;
  color: #f5f5fe;
  line-height: 1.6rem;
  &.show {
    animation: ${slideInRight} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const FinalParagraph = styled.p`
  margin-top: 100px;
  font-family: "poppins";
  color: #f5f5fe;
  line-height: 1.5rem;
  font-size: 1.4rem;
  margin-left: 10rem;
  margin-bottom: 5rem;
  &.show {
    animation: ${slideInUp} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    margin-left: 2rem;
    width: 350px;
  }
`;

export const PrimarySpan = styled.span`
  font-weight: bold;
  &.show {
    animation: ${slideInRight} 2s ease-out forwards;
  }
`;

export const SecondarySpan = styled.span`
  font-size: 2rem;
  font-weight: bold;
  line-height: 5rem;
  &.show {
    animation: ${slideInUp} 1.5s ease-out forwards;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 3.5rem;
  }
`;
