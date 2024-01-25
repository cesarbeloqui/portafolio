import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/logo2.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Desarrollador Web Full Stack"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Bienvenido a mi Portafolio</span>
              <h1>Hola! Soy Cesar Beloqui Desarrollador Web Full Stack</h1>
              <p>
                con experiencia en JavaScript, TypeScript, Node.js, React.js,
                Redux.js, Express.js y PostgreSQL. Tengo experiencia en el
                trabajo en equipo y en Backend y Frontend. Git Flow, Firebase
                Authenticator, Sendgrid, Estructura de datos, Algoritmos y
                Microservicios. Capacidad probada para crear soluciones en Front
                End y Back End utilizando estas tecnologías. Responsable,
                detallista y orientado a cumplir plazos. Persigo metas con
                perseverancia y siempre en búsqueda de aprendizaje. Nivel A2 de
                Inglés Británico.
              </p>
              <a href="#connect">
                <button>
                  Contactame <ArrowRightCircle size={25} />
                </button>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
