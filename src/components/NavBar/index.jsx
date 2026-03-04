import { useState } from "react";
import { NavBar, Menu, Hamburger, Overlay } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

function HeaderNavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const goTo = (path) => {
    navigate(path);
    setOpen(false);
  };

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <NavBar $active={isHome}>
      <Overlay open={open} onClick={() => setOpen(false)} />
      <Menu open={open}>
        <a onClick={() => goTo("/")}>HOME</a>
        <a onClick={() => goTo("/consultas")}>CONSULTAS</a>
        <a onClick={() => goTo("/e-book")}>E-BOOK</a>
        <a onClick={() => goTo("/sobre")}>SOBRE MIM</a>       
        <a onClick={() => goTo("/virada360")}>VIRADA 360</a>       
        <a onClick={() => goTo("/series")}  >NUTRIÇÃO ALÉM <br/>DO PRATO</a>
      </Menu>

      <Hamburger $active={isHome} open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>
    </NavBar>
  );
}

export default HeaderNavBar;
