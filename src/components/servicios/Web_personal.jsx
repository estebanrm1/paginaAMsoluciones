import { Col, Container, Row } from "react-bootstrap";
import "../../style/Servicios.css";
import personal1 from "../../assets/servicios/web_personal1.png";
import personal2 from "../../assets/servicios/web_personal2.png";
import personal3 from "../../assets/servicios/web_personal3.png";
import personal4 from "../../assets/servicios/web_personal4.png";

import { motion } from "framer-motion";

const Web_personal = () => {
  return (
    <Container className="py-5 text-center text-light">
      <h3 className="pb-lg-5">
        Páginas Web Personal - Portafolio Profesional: Destaca tu talento en
        línea
      </h3>
      <Row className="py-lg-5">
        <Col lg={5}>
          <motion.p
            className="py-5 text-start"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            En A.M Soluciones Web, diseñamos páginas web personales tipo
            portafolio para que puedas mostrar tu trayectoria, habilidades y
            proyectos de manera profesional y atractiva. Este servicio es ideal
            para freelancers, creativos y profesionales que desean crear una
            presencia online que refleje su identidad y trabajo.
          </motion.p>
          <button className="cta pb-5">
            <a className="text-decoration-none" href="https://am-solucionesweb.github.io/portfoliocv/" target="blank">

            <span className="hover-underline-animation"> VER DEMO </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
              fill="white"
              >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
                ></path>
            </svg>
                </a>
          </button>
        </Col>
        <Col lg={7}>
          <motion.img
            className="img-fluid img_servicios"
            src={personal1}
            alt=""
            initial={{ opacity: 0, x: 100 }} // Estado inicial (invisible y fuera de pantalla)
            whileInView={{ opacity: 1, x: 0 }} // Estado al estar en el viewport
            transition={{ duration: 1 }} // Duración de la animación
            viewport={{ once: true }}
          />
        </Col>
      </Row>

      <hr />
      <h5>¿Qué incluye?</h5>
      <Row className="py-5">
        <Col xs={{ order: 2 }} lg={{ order: 1, span: 7 }}>
          <motion.img
            className="img-fluid img_servicios"
            src={personal2}
            alt=""
            initial={{ opacity: 0, y: 100 }} // Estado inicial (invisible y fuera de pantalla)
            whileInView={{ opacity: 1, y: 0 }} // Estado al estar en el viewport
            transition={{ duration: 2 }} // Duración de la animación
            viewport={{ once: true }} // Solo animar una vez
          />
        </Col>
        <Col xs={{ order: 1 }} className="text-start py-3" lg={5}>
          <h5>Características principales:</h5>
          <motion.ul
            className="p-0 m-0"
            initial={{ opacity: 0, x: 100 }} // Estado inicial (invisible y fuera de pantalla)
            whileInView={{ opacity: 1, x: 0 }} // Estado al estar en el viewport
            transition={{ duration: 3 }} // Duración de la animación
            viewport={{ once: true }} // Solo animar una vez
          >
            <li>
              Integración con redes sociales y contacto directo: Facilita la
              conexión con empleadores o clientes a través de tus redes o correo
              electrónico.
            </li>
            <li>
              Rápida implementación y soporte continuo: Tu portafolio estará
              listo para el mundo en pocos días, con opciones de mantenimiento y
              actualización.
            </li>
          </motion.ul>
        </Col>
      </Row>

      <hr />

      <Row className="py-lg-5">
        <Col lg={5}>
          <motion.ul
            className="p-0 m-0 text-start"
    
            initial={{ opacity: 0, y: 100 }} // Estado inicial (invisible y fuera de pantalla)
            whileInView={{ opacity: 1, y: 0 }} // Estado al estar en el viewport
            transition={{ duration: 3 }} // Duración de la animación
            viewport={{ once: true }} // Solo animar una vez
          >
            <li>
              Sección de proyectos destacada: Presenta tus mejores trabajos con
              imágenes, descripciones y enlaces interactivos.
            </li>
            <li>
              Diseño personalizado y profesional: Cada portafolio se adapta a tu
              estilo y campo de trabajo, garantizando una página web que resalta
              tu marca personal.
            </li>
          </motion.ul>
        
        </Col>
        <Col lg={7}>
          <motion.img
            className="img-fluid img_servicios"
            src={personal3}
            alt=""
            initial={{ opacity: 0, x: 100 }} // Estado inicial (invisible y fuera de pantalla)
            whileInView={{ opacity: 1, x: 0 }} // Estado al estar en el viewport
            transition={{ duration: 1 }} // Duración de la animación
            viewport={{ once: true }}
          />
        </Col>
      </Row>

      <hr />
      <Row className="py-5">
        <Col xs={{ order: 2 }} lg={{ order: 1, span: 7 }}>
          <motion.img
            className="img-fluid img_servicios"
            src={personal4}
            alt=""
            initial={{ opacity: 0, y: 100 }} // Estado inicial (invisible y fuera de pantalla)
            whileInView={{ opacity: 1, y: 0 }} // Estado al estar en el viewport
            transition={{ duration: 2 }} // Duración de la animación
            viewport={{ once: true }} // Solo animar una vez
          />
        </Col>
        <Col xs={{ order: 1 }} className="text-start py-3" lg={5}>
          
          <motion.ul
            className="p-0 m-0"
            initial={{ opacity: 0, x: 100 }} // Estado inicial (invisible y fuera de pantalla)
            whileInView={{ opacity: 1, x: 0 }} // Estado al estar en el viewport
            transition={{ duration: 3 }} // Duración de la animación
            viewport={{ once: true }} // Solo animar una vez
          >
            <li>
              Formulario de contacto directo: Incluimos un formulario que
              permite a los visitantes enviarte mensajes directamente a tu
              correo electrónico, facilitando la comunicación.
            </li>
            <li>
              Optimización para dispositivos móviles: Tu portafolio será 100%
              responsive, asegurando que luzca impecable en cualquier
              dispositivo.
            </li>
            <li>
            Rápida implementación y soporte continuo: Tu portafolio estará listo para el mundo en pocos días, con opciones de mantenimiento y actualización.
            </li>
          </motion.ul>
        </Col>
      </Row>
      <p className="fs-4">
      Transforma tu presencia digital y demuestra todo lo que puedes ofrecer con un portafolio que habla por ti.
      </p>
    </Container>
  );
};

export default Web_personal;
