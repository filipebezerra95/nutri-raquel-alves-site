import styled from "styled-components";

export const NavBar = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  position: relative;
  z-index: 300;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: 0.3s;
`;

/* MENU — DESKTOP NORMAL */
export const Menu = styled.div`
   position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 30px;

  background: rgba(144, 167, 132, 0.6);
  padding: 40px;

  transform: ${({ open }) =>
    open ? "translateY(0)" : "translateY(-100%)"};
    
  transition: transform 1s ease-in-out;

  a {
    font-size: 2rem;
    font-weight: 400;
    font-family: "Anton", sans-serif;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
  }

  a:hover {
    color: #45372e;
    transform: translateX(5px);
  }
`;

/* 🍔 HAMBURGUER */
export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  z-index: 200;

  span {
    width: 30px;
    height: 3px;
    
   background: ${({ $active }) => ($active ? "#5d4b38" : "#fff")};
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  /* ❌ quando estiver aberto */
  ${({ open }) =>
    open &&
    `
    

    span:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  `}

 
`;


