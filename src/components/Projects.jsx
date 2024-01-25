import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "BMG Grupo Financiero",
      description: "Diseño Frontend y Backend",
      imgUrl: projImg4,
      href: "https://www.grupobmg.com.ar/",
    },
    {
      title: "Bonappetit",
      description: "Diseño de Backend e Integración con Frontend",
      imgUrl: projImg1,
      href: "https://bonappetite.vercel.app",
    },
    {
      title: "Doggy Page",
      description: "Diseño y Desarrollo Backend y Frontend",
      imgUrl: projImg2,
      href: "http://dogiapi-cb.alwaysdata.net",
    },
    {
      title: "App Rick and Morty",
      description: "Diseño y Desarrollo Backend y Frontend",
      imgUrl: projImg3,
      href: "https://cesarbeloqui-rickandmorty.alwaysdata.net",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className={"animate__animated animate__fadeIn"}>
              <h2>Proyectos</h2>
              <p>
                Estos son mis proyectos realizados a lo largo de mi formación en
                Soy Henry.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                {/*                     <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                <Tab.Content
                  id="slideInUp"
                  className={"animate__animated animate__slideInUp"}
                >
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="section">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quam, quod neque provident velit, rem explicabo
                      excepturi id illo molestiae blanditiis, eligendi dicta
                      officiis asperiores delectus quasi inventore debitis quo.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quam, quod neque provident velit, rem explicabo
                      excepturi id illo molestiae blanditiis, eligendi dicta
                      officiis asperiores delectus quasi inventore debitis quo.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
