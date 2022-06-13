import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const jobsWriter = () => {
      const target = document.querySelector(".jobs-writer");

      let array = ["Développeur Front-End React", "Entrepreneur"];
      let countLanguage = 0;
      let countLetter = 27;
      let countPause = 0;

      const letterWriting = () => {
        target.textContent += array[countLanguage][countLetter];
        countLetter++;
      };

      const letterWritingPause = () => {
        countPause++;
      };

      const letterErasing = () => {
        target.textContent = target.textContent.slice(0, -1);
        countLetter--;
        if (countLetter === 0 && countLanguage !== array.length - 1) {
          countLanguage++;
          countPause = 0;
        } else if (countLetter === 0 && countLanguage === array.length - 1) {
          countLanguage = 0;
          countPause = 0;
        }
      };
      setInterval(() => {
        if (countLetter === array[countLanguage].length && countPause !== 32) {
          letterWritingPause();
        } else if (countPause === 32 && countLetter !== 0) {
          letterErasing();
        } else {
          letterWriting();
        }
      }, 50);
    };
    jobsWriter();
  }, []);

  return (
    <div className="hero-container" id="hero">
      <section className="wrapper">
        <p>Hello, je m'appelle</p>
        <h1>Laurent Dubosq</h1>
        <div>
          et je suis{" "}
          <h2 className="jobs-writer color-emphased">
            Développeur Front-End React
          </h2>
        </div>
        <div className="ctas">
          <a href="#contact" className="btn">
            Me recruter
          </a>
          <a
            href="https://www.laurentdubosq.com/files/cv-laurent-dubosq-2022.pdf"
            download="cv-laurent-dubosq-2022.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-off"
          >
            Télécharger mon CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
