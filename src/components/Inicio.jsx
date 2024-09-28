import imgBanner from "../assets/Creamos tu web.png";
import "../style/Inicio.css";
import { Container, Row } from "react-bootstrap";
const Inicio = () => {
    return (
        <>
            <div
                className="inicio-banner"
                style={{ backgroundImage: `url(${imgBanner})` }}
            ></div>
            <h1 className="text-center my-5">
                Páginas web modernas, adaptadas a tus necesidades, diseñadas para
                destacar.
            </h1>
            <section>
                <article className="fondo-negro p-5 text-center">
                    <h3>Servicios destacados</h3>
                    <Row className="justify-content-between m-5">
                        <div class="card">
                            <div class="first-content">
                                <span>Desarrollo web personalizado</span>
                            </div>
                            <div class="second-content">
                                <span> Desde landing pages hasta sitios más complejos</span>
                            </div>
                        </div>


                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <p class="title">DISEÑO</p>
                                    <p>Responsivo</p>
                                </div>
                                <div class="flip-card-back">
                                    <p class="title">Tu pagina web</p>
                                    <p>adaptada a todos los dispositivos</p>
                                </div>
                            </div>
                        </div>


                        <div class="card-SEO">
                            <h2>Optimización y SEO : Ayuda a que los sitios de tus clientes aparezcan en los motores de búsqueda</h2>
                        </div>



                        <div class="card-mantenimiento">
                            <div class="content">
                                <div class="front">
                                    <h3 class="title">Soporte</h3>
                                    <p class="subtitle">Y MANTENIMIENTO</p>
                                </div>

                                <div class="back">
                                    <p class="description">
                                    Para clientes que necesitan asistencia continua.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </Row>

                </article>
            </section>
        </>
    );
};

export default Inicio;
