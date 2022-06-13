import { useState } from "react";

const Footer = () => {
  const [scrollTopMode, setScrollTopMode] = useState(false);

  const scrollTopDisplay = () => {
    if (window.scrollY > 10) {
      setScrollTopMode(true);
    } else {
      setScrollTopMode(false);
    }
  };

  const scrollTopHandler = () => {
    window.addEventListener("scroll", () => {
      scrollTopDisplay();
    });
  };

  return (
    <div className="footer-container theme-white" id="footer">
      <footer className="wrapper">
        <p>
          Design Created & Freely Distributed by{" "}
          <a
            href="https://www.codingnepalweb.com/"
            target="_blank"
            rel="noreferrer"
            className="txt"
          >
            CodingNepal
          </a>{" "}
          | Integrated by{" "}
          <a href="#about" className="txt">
            {" "}
            Laurent Dubosq
          </a>{" "}
          in march 2022
        </p>
        <a
          href="#hero"
          id="scrollTop"
          className={scrollTopMode ? "scrollTopVisible" : "scrollTopHidden"}
          onLoad={scrollTopHandler()}
        >
          <i className="fas fa-angle-up"></i>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
