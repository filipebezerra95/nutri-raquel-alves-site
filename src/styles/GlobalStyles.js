import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

 

  body {
    background: ${({ theme }) => theme.colors.background};
    background-size: cover;
    overflow-x: hidden;
  
    font-family: "Poppins", sans-serif;
    color: black;
  }

  h1 {
    text-shadow: 0 2px 3px #000;
  }
  h2{
    text-shadow: 0 2px 3px #000;
  }
  h3{
    text-shadow: 0 2px 3px #000;
  }

  span {
    text-shadow: 0 2px 3px #000;
  }

 @media (hover: none) {
  *:hover {
    transform: none !important;
  }
}
`;