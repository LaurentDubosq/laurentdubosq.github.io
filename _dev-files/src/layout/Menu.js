import { useState } from "react";

const Menu = () => {
  const [burgerMenuMode, setBurgerMenuMode] = useState(false);

  const burgerMenuDisplay = () => {
    if (burgerMenuMode) {
      setBurgerMenuMode(false);
    } else {
      setBurgerMenuMode(true);
    }
  };

  return (
    <div className="menu-container">
      <div className="icon-container">
        <i
          className={
            burgerMenuMode
              ? "menu-burger-handler fa-solid fa-xmark"
              : "menu-burger-handler fa-solid fa-bars"
          }
          onClick={() => burgerMenuDisplay()}
        ></i>
      </div>
      <ul className={burgerMenuMode ? "showMenu" : null}>
        <li>
          <a href="#hero" onClick={() => burgerMenuDisplay()}>
            Accueil
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => burgerMenuDisplay()}>
            À propos
          </a>
        </li>
        <li>
          <a href="#experiences" onClick={() => burgerMenuDisplay()}>
            Expériences
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => burgerMenuDisplay()}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => burgerMenuDisplay()}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
