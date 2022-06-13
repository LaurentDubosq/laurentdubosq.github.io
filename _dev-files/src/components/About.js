const About = () => {
  return (
    <div className="about-container theme-white" id="about">
      <section className="wrapper">
        <header>
          <h2>À propos</h2>
        </header>
        <div className="content">
          <picture>
            <source
              media="(max-width: 399px)"
              srcSet="./img/portrait-laurent-dubosq-250w.jpg, ./img/portrait-laurent-dubosq-500w.jpg 2x"
            />
            <source
              media="(min-width: 400px)"
              srcSet="./img/portrait-laurent-dubosq-400w.jpg, ./img/portrait-laurent-dubosq-800w.jpg 2x"
            />
            <img
              src="./img/portrait-laurent-dubosq-800w.jpg"
              alt="Portrait de Laurent Dubosq"
            />
          </picture>
          <div className="text">
            <h3>
              Double <span className="color-emphased">Casquette</span>
            </h3>
            <p>
              Après m’être formé au métier d’entrepreneur par la création de la
              marque{" "}
              <a
                href="https://www.awakningjewelry.com/"
                target="_blank"
                className="txt"
                rel="noreferrer"
              >
                Awakningjewelry.com
              </a>{" "}
              et de son site e-commerce, j'ai pu atteindre les objectifs à titre
              professionnel et personnel que je m'étais fixés. Désormais, je
              recentre mon activité professionnelle en revenant à mes débuts, à
              savoir un poste à plein-temps dans le développement front-end. Ce
              type de poste me permettra de continuer d'évoluer d'un point de
              technique (en continuant d'évoluer en React) et entrepreneurial
              (par la participation au développement d'autres business web). De
              plus, cette nouvelle orientation me conférera un autre double
              avantage, celui d'une stabilité professionnelle et sociale à la
              fois compatible avec une vie d'entrepreneur sur mon temps libre.
            </p>
            <div className="cta">
              <a
                href="https://www.laurentdubosq.com/files/cv-laurent-dubosq-2022.pdf"
                download="cv-laurent-dubosq-2022.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
