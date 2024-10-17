import { Container } from "react-bootstrap";
import "../style/SobreNosotros.css";
import { motion } from "framer-motion";

const SobreNosotros = () => {
    return (
        <Container className="p-5 text-center sobreNosotros-container">
            <h3>Sobre nosotros</h3>
            <div className="py-5 d-flex flex-column gap-5 flex-lg-row justify-content-lg-around">
                <motion.div className="contenedor-card-sobre-nosotros"
                initial={{ opacity: 0, x: -100 }}  
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 2 }}     
                viewport={{ once: true }}
                >
                    <h4 className="py-3">Esteban</h4>
                    <div className="card-sobre-nosotros">
                        <div className="card-sobre-nosotros-background"></div>

                        <a
                            href="https://www.linkedin.com/in/esteban-molina-front-end/"
                            target="blank"
                        >
                            <div className="box box1 box-linkedin">
                                <span className="icon">
                                    <svg
                                        className="svg"
                                        fill="white"
                                        width="20"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 260 270"
                                    >
                                        <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
                                    </svg>
                                </span>
                            </div>
                        </a>

                        <a href="https://github.com/estebanrm1" target="blank">
                            <div className="box box2 box-git">
                                {" "}
                                <span className="icon">
                                    <svg
                                        className="svg"
                                        viewBox="0 0 256 250"
                                        width="20"
                                        height="20"
                                        fill="#fff"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid"
                                    >
                                        <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
                                    </svg>
                                </span>
                            </div>
                        </a>

                        <a
                            href="https://discordapp.com/users/887418499914412043"
                            target="blank"
                        >
                            <div className="box box3 box-discord">
                                <span className="icon">
                                    <svg
                                        viewBox="0 0 640 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg"
                                    >
                                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </div>
                </motion.div>
                <motion.div className="contenedor-card-sobre-nosotros"
                initial={{ opacity: 0, x: 100 }}  
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 2 }}     
                viewport={{ once: true }}
                >
                    <h4 className="py-3">Aron</h4>
                    <div className="card-sobre-nosotros">
                        <div className="background-aron"></div>
                        <a
                            href="https://www.linkedin.com/in/gabriel-aron-arias/"
                            target="blank"
                        >
                            <div className="box box1 box-linkedin">
                                <span className="icon">
                                    <svg
                                        className="svg"
                                        fill="white"
                                        width="20"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 260 270"
                                    >
                                        <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
                                    </svg>
                                </span>
                            </div>
                        </a>

                        <a href="https://github.com/Aron9377" target="blank">
                            <div className="box box2 box-git">
                                {" "}
                                <span className="icon">
                                    <svg
                                        className="svg"
                                        viewBox="0 0 256 250"
                                        width="20"
                                        height="20"
                                        fill="#fff"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid"
                                    >
                                        <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
                                    </svg>
                                </span>
                            </div>
                        </a>

                        <a
                            href="https://www.instagram.com/gabrielaronarias/"
                            target="blank"
                        >
                            <div className="box box3 box-instagram">
                                <span className="icon">
                                    <svg
                                        viewBox="0 0 30 30"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg"
                                    >
                                        <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
            <hr />
            <motion.p
            initial={{ opacity: 0, x: -100 }}  
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 3 }}     
            viewport={{ once: true }}
            >
                En A.M Soluciones Web, somos más que solo desarrolladores: somos
                apasionados por transformar ideas en experiencias digitales que impulsan
                negocios. Lo que comenzó como un sueño entre amigos se ha convertido en
                un emprendimiento comprometido en brindar soluciones web innovadoras,
                eficientes y personalizadas.
            </motion.p>
            <motion.p
            initial={{ opacity: 0, x: 100 }}  
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 4 }}     
            viewport={{ once: true }}
            >
                Con nuestra experiencia como programadores web full stack, estamos aquí
                para llevar tu proyecto al siguiente nivel. Sabemos que una presencia
                online sólida es clave para destacar en el mercado actual, y es por eso
                que trabajamos para que tu marca no solo esté en la web, sino que
                sobresalga. Desde sitios web dinámicos hasta plataformas de e-commerce,
                creamos herramientas digitales diseñadas para alcanzar y conectar con
                una audiencia global.
            </motion.p>
            <motion.p
            initial={{ opacity: 0, x: -100 }}  
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 5 }}     
            viewport={{ once: true }}
            >
                Nuestro compromiso es simple: convertir tus ideas en resultados
                visibles, optimizando cada detalle para ofrecer una experiencia
                atractiva, funcional y alineada con tus objetivos de negocio. Juntos,
                podemos llevar tu visión a nuevos horizontes.
            </motion.p>
        </Container>
    );
};

export default SobreNosotros;
