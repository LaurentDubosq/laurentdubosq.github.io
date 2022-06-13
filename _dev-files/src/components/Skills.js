import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Gauges from "./Gauges";
import emailjs from "@emailjs/browser";

const Skills = () => {
  const [gauges, setGauges] = useState([]);
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_4kyxxtm",
        "template_3ro5haf",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert(
            "Certaines données n'ont pas pu être récupérées. Un message d'alerte à été envoyé à l'administrateur du site."
          );
        },
        (error) => {
          console.log(error.text);
          alert(
            "Une erreur s'est produite quant à l'affichage des données. Veuillez nous en excuser."
          );
        }
      );
  };

  useEffect(() => {
    if (window.location.host === "laurentdubosq.com") {
      axios
        .get("https://laurentdubosq.com/data/gauges.json")
        .then((res) => setGauges(res.data))
        .catch(() => {
          sendEmail();
        });
    } else {
      axios
        .get("https://www.laurentdubosq.com/data/gauges.json")
        .then((res) => setGauges(res.data))
        .catch(() => {
          sendEmail();
        });
    }
  }, []);

  return (
    <div className="skills-container theme-white" id="skills">
      <section className="wrapper">
        <header>
          <h2>Compétences</h2>
        </header>
        <div className="content">
          <div className="text">
            <h3>Mon savoir-être & mes acquis.</h3>
            <p>
              Lors de mes années d'intégrateur Web au sein du groupe Photobox,
              j'ai développé une maturité technique liée au poste d'intégrateur
              de contenu (merchandising, landing page, promotions, etc.) et
              d'intégration emailing (promotionnels, triggers, etc.), ainsi que
              relationnelle y ayant développé une bonne empathie et
              communication du fait d'un travail constant en équipe (vertical
              comme transversal). Ces 7 années m'ont conféré une certaine
              confiance et envie d'apprendre l'entreprenariat Web en assumant
              chaque métier inhérent à la conception d'une marque anglophone et
              du site e-commerce qui doit l'accompagner. J'ai au cours de cette
              expérience d'entrepreneur obtenu une meilleure compréhension des
              fonctions de chaque corps de métier, comment ils s'imbriquent et
              se complètent, j'y ai appris à être résilient, travailler par
              itération et me remettre en cause. Souhaitant repartir dans le
              développement front-end, je me suis remis à niveau techniquement
              en étudiant les flexbox, grid, media-queries, SASS, en
              approfondissant le Vanilla javascript, en apprenant à développer
              en ReactJS et en mettant en application toutes ces technologies
              lors de la création de ce portfolio.
            </p>
          </div>
          <div className="gauges">
            <h3>Mes compétences techniques</h3>
            <ul>
              {gauges.map((gauge, index) => (
                <Gauges key={index} gauge={gauge} />
              ))}
            </ul>
          </div>
          <div className="degree">
            <h3>Mon diplôme</h3>
            <p>
              Développeur d'Application Multimédia (BAC +2)
              <br />
              <span>Centre de formation Doranco - Paris</span>
            </p>
          </div>
        </div>
      </section>
      <form ref={form}></form>
    </div>
  );
};

export default Skills;
