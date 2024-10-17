import imgBanner from "../assets/creamos tu web.webp";
import "../style/Inicio.css";
const Inicio = () => {
    return (
        <>
            <img className="inicio-banner py-lg-5 d-none d-lg-block" src={imgBanner} alt="Banner de AM soluciones web" />
            <section>
                <article className="fondo-negro p-5 text-center">
                    <h1 className="titulo-inicio">Páginas web modernas, adaptadas a tus necesidades</h1>
                    <h3 className="my-5">Servicios destacados</h3>
                    <div className="contenedor-card-servicios justify-content-lg-around gap-5">
                        <div className="card fs-5">
                            <div className="first-content">
                                <span>Desarrollo web personalizado</span>
                            </div>
                            <div className="second-content">
                                <span> Desde landing pages hasta sitios más complejos</span>
                            </div>
                        </div>

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <p className="title">DISEÑO</p>
                                    <p>Responsivo</p>
                                </div>
                                <div className="flip-card-back">
                                    <p className="title">Tu pagina web</p>
                                    <p>adaptada a todos los dispositivos</p>
                                </div>
                            </div>
                        </div>


                        <div className="card-SEO">
                            <h2>Optimización y SEO : Ayuda a que los sitios de tus clientes aparezcan en los motores de búsqueda</h2>
                        </div>



                        <div className="card-mantenimiento">
                            <div className="content">
                                <div className="front">
                                    <h3 className="title">Soporte</h3>
                                    <p className="subtitle">Y MANTENIMIENTO</p>
                                </div>

                                <div className="back">
                                    <p className="description">
                                        Para clientes que necesitan asistencia continua.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </article>

                <article className="text-center p-5 fondo-negro borde-top-rojo">
                    <h3 className="titulo-inicio">Tecnologías que Impulsan Nuestro Trabajo</h3>
                    <p className="my-5">En A.M Soluciones Web, utilizamos las mejores herramientas del mercado para garantizar soluciones eficientes y de alta calidad. Estas tecnologías nos permiten desarrollar proyectos modernos, escalables y adaptados a las necesidades de cada cliente.</p>
                    <div className="contenedor-herramientas">
                        <div className="light-button pt-3">
                            <button className="bt">
                                <div className="light-holder">
                                    <div className="dot"></div>
                                    <div className="light"></div>
                                </div>
                                <div className="button-holder-html">
                                    <svg className="svg-html" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" role="img">
                                        <path d="M41 460L0 0h451l-41 460-185 52" />
                                        <path d="M226 472l149-41 35-394H226" />
                                        <path d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z" />
                                        <path d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" />
                                    </svg>
                                    <p>HTML</p>
                                </div>
                            </button>
                        </div>

                        <div className="light-button pt-3">
                            <button className="bt">
                                <div className="light-holder">
                                    <div className="dot"></div>
                                    <div className="light"></div>
                                </div>
                                <div className="button-holder-css">
                                    <svg className="svg-css" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
                                        <path d="M41 460L0 0h451l-41 460-185 52" />
                                        <path d="M226 472l149-41 35-394H226" />
                                        <path d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z" />
                                        <path d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z" />
                                    </svg>
                                    <p>CSS</p>
                                </div>
                            </button>
                        </div>

                        <div className="light-button pt-3">
                            <button className="bt">
                                <div className="light-holder">
                                    <div className="dot"></div>
                                    <div className="light"></div>
                                </div>
                                <div className="button-holder-bootstrap">
                                    <svg className="svg-bootstrap" viewBox="0 0 256 204" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z" /></svg>
                                    <p>Bootstrap</p>
                                </div>
                            </button>
                        </div>

                        <div className="light-button pt-3">
                            <button className="bt">
                                <div className="light-holder">
                                    <div className="dot"></div>
                                    <div className="light"></div>
                                </div>
                                <div className="button-holder-js">
                                <svg className="svg-js" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1052 1052">
                                <path d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"/></svg>
                                    <p>JavaScript</p>
                                </div>
                            </button>
                        </div>

                        <div className="light-button pt-3">
                            <button className="bt">
                                <div className="light-holder">
                                    <div className="dot"></div>
                                    <div className="light"></div>
                                </div>
                                <div className="button-holder-react">
                                    <svg className="svg-react" viewBox="0 0 256 228" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z"/></svg>
                                    <p>React.js</p>
                                </div>
                            </button>
                        </div>

                    </div>
                </article>
            </section>
        </>
    );
};

export default Inicio;
