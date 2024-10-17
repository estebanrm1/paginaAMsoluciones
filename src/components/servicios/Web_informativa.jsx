import { Col, Container, Row } from "react-bootstrap";
import "../../style/Servicios.css";
import paginaWeb1 from "../../assets/servicios/pagina_web1.webp";
import paginaWeb2 from "../../assets/servicios/pagina_web2.webp";
import paginaWeb3 from "../../assets/servicios/pagina_web3.webp";
import paginaWeb4 from "../../assets/servicios/pagina_web4.webp";
import { motion } from "framer-motion";

const Web_informativa = () => {
  return (
    <Container className="py-5 text-center text-light">
      <h3 className="pb-lg-5">
        Páginas Web Completas: Lleva tu negocio al siguiente nivel
      </h3>
      <Row className="py-lg-5">
        <Col className="animacion-container" lg={5}>
          <motion.p
            className="py-5 text-start"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            En A.M Soluciones Web, ofrecemos el desarrollo de páginas web
            completas diseñadas a medida para negocios que desean tener una
            fuerte presencia digital. Ideal para restaurantes, tiendas o
            empresas que buscan destacar con un sitio web profesional, moderno y
            funcional.
          </motion.p>
          <a href="https://demo-pagina-web.netlify.app/" target="blank">
          <button className="cta pb-5">
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
          </button>
          </a>
        </Col>
        <Col className="animacion-container" lg={7}>
          <motion.img
            className="img-fluid img_servicios"
            src={paginaWeb1}
            alt=""
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </Col>
      </Row>

      <hr />
      <h5>¿Qué ofrecemos?</h5>
      <Row className="py-5">
        <Col className="animacion-container" xs={{ order: 2 }} lg={{ order: 1, span: 7 }}>
          <motion.img
            className="img-fluid img_servicios"
            src={paginaWeb2}
            alt=""
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          />
        </Col>
        <Col className="animacion-container text-start py-3" xs={{ order: 1 }} lg={5}>
          <h5>Características principales:</h5>
          <motion.ul
            className="p-0 m-0 fuente-play"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
          >
            <li>
              Diseño atractivo y adaptado a tu marca: Creamos un diseño único
              que refleja la identidad de tu negocio, con una estructura visual
              atractiva y fácil de navegar.
            </li>
            <li>
              Páginas interactivas y dinámicas: Incluimos secciones clave como
              menú, galería de fotos, testimonios de clientes, formulario de
              reservas y contacto, entre otros.
            </li>
          
          </motion.ul>
        </Col>
      </Row>

      <hr />

      <Row className="py-lg-5">
        <Col className="animacion-container" lg={5}>
          <motion.ul
            className="py-5 text-start fuente-play"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <li>
              Integración con Google Maps, redes sociales y herramientas de SEO:
              Para facilitar que los usuarios te encuentren, integramos Google
              Maps, conectamos tus redes sociales y optimizamos tu sitio para
              mejorar tu posicionamiento en buscadores.
            </li>
            <li>
              Formulario de contacto directo: Un formulario que envía consultas
              directamente a tu correo, asegurando una comunicación fluida con
              tus clientes.
            </li>
          </motion.ul>
         
        </Col>
        <Col className="animacion-container" lg={7}>
          <motion.img
            className="img-fluid img_servicios"
            src={paginaWeb3}
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
        <Col className="animacion-container" xs={{ order: 2 }} lg={{ order: 1, span: 7 }}>
          <motion.img
            className="img-fluid img_servicios"
            src={paginaWeb4}
            alt=""
            initial={{ opacity: 0, y: 100 }} // Estado inicial (invisible y fuera de pantalla)
            whileInView={{ opacity: 1, y: 0 }} // Estado al estar en el viewport
            transition={{ duration: 2 }} // Duración de la animación
            viewport={{ once: true }} // Solo animar una vez
          />
        </Col>
        <Col xs={{ order: 1 }} className="animacion-container text-start py-3" lg={5}>
          <h5>Características principales:</h5>
          <motion.ul
            className="p-0 m-0 fuente-play"
            initial={{ opacity: 0, x: 100 }} // Estado inicial (invisible y fuera de pantalla)
            whileInView={{ opacity: 1, x: 0 }} // Estado al estar en el viewport
            transition={{ duration: 3 }} // Duración de la animación
            viewport={{ once: true }} // Solo animar una vez
          >
            <li>
            Mantenimiento y soporte técnico: Ofrecemos opciones de actualización y soporte para mantener tu sitio siempre funcionando al máximo.
            </li>
            
            <li>
              Responsive y optimizado para dispositivos móviles: Garantizamos
              que tu página se vea excelente en cualquier dispositivo, mejorando
              la experiencia del usuario.
            </li>
            
          </motion.ul>
        </Col>
      </Row>
      <p className="fs-4">
      Ya sea que tengas un restaurante o un negocio en crecimiento, te ayudamos a tener una página web completa que no solo atraiga más clientes, sino que impulse tu marca a un nuevo nivel.
      </p>
    </Container>
  );
};

export default Web_informativa;
