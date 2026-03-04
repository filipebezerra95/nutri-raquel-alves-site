import styled from "styled-components";

export const GridSeries = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 4rem 6rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 2rem 1.5rem;
  }

`;

export const Card = styled.a`
  position: relative;
  display: block;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 3/4;
  cursor: pointer;
  transform: translateY(40px);
  opacity: 0;
  animation: fadeUp 0.8s ease forwards;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    opacity: 1;
  }

  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  div {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7),
      transparent
    );
    color: white;
    font-weight: 600;
    font-family: 'Montserrat';
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {

  transform: none;
  animation: none;
  opacity: 1;

  &:hover img {
    transform: none;
  }

  div {
    opacity: 1;
  }
}
`;