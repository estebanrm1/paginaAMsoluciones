import { Col, Container, Row } from "react-bootstrap";
import "../../style/Servicios.css";
import basicoLg from "../../assets/servicios/captura_cv_basico_lg.webp";
import basicoLg2 from "../../assets/servicios/captura_cv_basico_lg2.webp";
import { motion } from "framer-motion";


const Cv_basico = () => {
    return (
        <Container className="py-5 text-center text-light">
            <h3 className="pb-lg-5">Cv On-line básico</h3>
            <Row className="py-lg-5">
                <Col className="animacion-container" lg={5}>
                    <motion.p className="py-5 text-start"
                    initial={{ opacity: 0, y: 100 }}  
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 2 }}     
                    viewport={{ once: true }}
                    >
                        En A.M Soluciones Web, te ayudamos a dar el salto al entorno digital
                        con un CV On-line Básico, ideal para quienes buscan una presencia
                        profesional en la web de manera accesible y efectiva. Este servicio
                        incluye el diseño y desarrollo de un currículum interactivo y
                        moderno que destaca tus habilidades, experiencia y logros,
                        permitiendo que los reclutadores y empleadores accedan a tu perfil
                        en cualquier momento y desde cualquier dispositivo.
                    </motion.p>
                    <a href="https://demo-cv-basico.netlify.app/" target="blank">
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
                    <motion.img className="img-fluid img_servicios" src={basicoLg} alt="" 
                    initial={{ opacity: 0, x: 100 }}  
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1 }}     
                    viewport={{ once: true }}
                    />
                </Col>
            </Row>
            

            <hr />
            <Row className="py-5">
                <Col className="animacion-container" xs={{ order: 2 }} lg={{ order: 1, span: 7}}>
                    <motion.img className="img-fluid img_servicios" src={basicoLg2} alt="" 
                    initial={{ opacity: 0, y: 100 }}  
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 2 }}     
                    viewport={{ once: true }}         
                    />
                </Col>
                <Col xs={{ order: 1 }} className="animacion-container text-start py-3" lg={5}>
                    <h5>Características principales:</h5>
                    <motion.ul  className="p-0 m-0 fuente-play"
                    initial={{ opacity: 0, x: 100 }}  
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 3 }}     
                    viewport={{ once: true }}         
                    >
                        <li>
                            Diseño limpio y profesional: Tu CV estará optimizado para la
                            lectura, con una estructura clara y organizada.
                        </li>
                        <li>
                            Responsive y adaptable: Compatible con dispositivos móviles,
                            tablets y computadoras.
                        </li>
                        <li>
                            Integración con redes sociales y correo electrónico: Facilita el
                            contacto directo con tus potenciales empleadores.
                        </li>
                        <li>Rápida entrega: Tu CV estará listo en pocos días.</li>
                    </motion.ul>
                </Col>
            </Row>
            <p className="fs-4">
                Da una excelente primera impresión y aumenta tus oportunidades laborales
                con un CV digital que resalta lo mejor de ti.
            </p>
        </Container>
    );
};

export default Cv_basico;
