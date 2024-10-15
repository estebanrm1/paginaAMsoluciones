import { Col, Container, Row } from "react-bootstrap";
import "../../style/Servicios.css";
import basicoLg from "../../assets/servicios/captura_cv_basico_lg.png";
import basicoLg2 from "../../assets/servicios/captura_cv_basico_lg2.png";

const Cv_basico = () => {
    return (
        <Container className="py-5 text-center text-light">
            <h3 className="pb-lg-5">Cv On-line básico</h3>
            <Row className="py-lg-5">
                <Col lg={5}>
                    <p className="py-5 text-start">
                        En A.M Soluciones Web, te ayudamos a dar el salto al entorno digital
                        con un CV On-line Básico, ideal para quienes buscan una presencia
                        profesional en la web de manera accesible y efectiva. Este servicio
                        incluye el diseño y desarrollo de un currículum interactivo y
                        moderno que destaca tus habilidades, experiencia y logros,
                        permitiendo que los reclutadores y empleadores accedan a tu perfil
                        en cualquier momento y desde cualquier dispositivo.
                    </p>
                    <button className="cta pb-5">
                <span class="hover-underline-animation"> VER DEMO </span>
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
                </Col>
                <Col lg={7}>
                    <img className="img-fluid img_servicios" src={basicoLg} alt="" />
                </Col>
            </Row>
            

            <hr />
            <Row className="py-5">
                <Col xs={{ order: 2 }} lg={{ order: 1, span: 7}}>
                    <img className="img-fluid img_servicios" src={basicoLg2} alt="" />
                </Col>
                <Col xs={{ order: 1 }} className="text-start py-3" lg={5}>
                    <h5>Características principales:</h5>
                    <ul className="p-0 m-0">
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
                    </ul>
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
