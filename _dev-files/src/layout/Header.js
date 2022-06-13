import Logo from "./Logo";
import Menu from "./Menu";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrollMode, setScrollMode] = useState(false);

  useEffect(() => {
    const bgMenuOnScroll = () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
          setScrollMode(true);
        } else {
          setScrollMode(false);
        }
      });
    };
    bgMenuOnScroll();
  }, []);

  return (
    <div
      className={
        scrollMode ? "header-container header-on-scroll" : "header-container"
      }
    >
      <header className="wrapper">
        <nav>
          <Logo scrollMode={scrollMode} />
          <Menu />
        </nav>
      </header>
    </div>
  );
};

export default Header;
