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
  margin: 2rem auto auto auto;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PrimaryDiv = styled.div`
  margin-top: 2rem;
  margin-right: 10rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    margin-right: 0;
  }
`;

export const Title = styled.h1`
  font-family: "anton";
  font-size: 3.5rem;
  color: #fffaf1;
  line-height: 1.5rem;
  &.show {
    animation: ${slideInUp} 1.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 0.5rem;
    margin-left: 1rem;
  }
`;

export const SubTitle = styled.h2`
  font-family: "anton";
  font-size: 5.2rem;
  color: #fffaf1;
  &.show {
    animation: ${slideInDown} 1.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-left: 1rem;
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
    animation: ${slideInLeft} 1.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-left: 1rem;
    width: 350px;
  }
  @media (max-width: 370px) {
    width: 21rem;
  }
`;

export const Content2 = styled.div`
  display: flex;
  margin-top: 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 5rem;
  }
`;

export const DivBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.h1`
  font-family: "anton";
  font-size: 65px;
  color: #fffaf1;
  text-align: center;
  line-height: 1rem;
  &.show {
    animation: ${slideInLeft} 1.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    line-height: 3.5rem;
  }
  @media (max-width: 370px) {
    font-size: 4rem;
  }
`;

export const SubTitleBox = styled.h1`
  font-family: "anton";
  font-size: 89px;
  color: #fffaf1;
  &.show {
    animation: ${slideInRight} 1.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 7rem;
    line-height: 7rem;
  }
  @media (max-width: 370px) {
    font-size: 6rem;
    line-height: 6rem;
  }
`;

export const DivSocials = styled.div`
  display: flex;
  justify-content: space-between;
  &.show {
    animation: ${slideInLeft} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const InstaIcon = styled.img`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    filter: brightness(1.2);
  }
`;

export const FaceIcon = styled.img`
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
    filter: brightness(1.2);
  }
`;

export const WhatsIcon = styled.img`
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    filter: brightness(1.2);
  }
`;

export const YoutubeIcon = styled.img`
  cursor: pointer;
  transition:
    transform 0.3s ease,
    filter 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    filter: brightness(1.2);
  }
`;

export const PointerClick = styled.img`
  width: 77px;
  margin-left: 10rem;
  &.show {
    animation:
      ${pointerEnter} 0.8s ease-out forwards,
      ${pointerPulse} 1.5s ease-in-out 1s infinite;
  }
`;

export const DivMockups = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivPhones = styled.div`
  display: flex;
  &.show {
    animation: ${slideInRight} 1.5s ease-out forwards;
  }
  @media (max-width: 370px) {
   
  }
`;

export const NoteFace = styled.img`
  width: 400px;
  position: relative;
  bottom: 4rem;
  left: 2rem;
  cursor: pointer;
  &.show {
    animation: ${slideInUp} 1.5s ease-out forwards;
  }
  &:hover {
    transform: translateY(-6px);
    filter: brightness(1.2);
  }
  @media (max-width: 768px) {
    width: 24rem;
    left: 0;
  }
  @media (max-width: 370px) {
    width: 22rem;
    left: 1rem;
  }
`;

export const CelFace = styled.img`
  width: 200px;
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
    filter: brightness(0.9);
    transition: 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 11rem;
  }
  @media (max-width: 370px) {
    width: 10.5rem;
  }
`;

export const CelInsta = styled.img`
  width: 220px;
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
    filter: brightness(0.9);
    transition: 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 13rem;
  }
`;
