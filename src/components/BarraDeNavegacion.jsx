import { Container, Navbar, NavbarBrand, NavDropdown, Nav} from "react-bootstrap"
import '../style/Navegacion.css'
import { Link } from "react-router-dom";


const BarraDeNavegacion = () => {

    return (
        <>
            <Navbar className="barra-fija" expand="lg" bg="black" data-bs-theme="dark">
                <Container>
                    <NavbarBrand as={Link} to={'/inicio'} className="text-light sombra">A.M Soluciones Web</NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="outline-light"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto gap-lg-5 text-center contenedor-navlink">
                            <Nav.Link as={Link} to={'/inicio'}>Inicio</Nav.Link>
                            <NavDropdown title="Servicios" id="basic-nav-dropdown">
                                <NavDropdown.Item className="text-center" href="#action/3.1">Cv On-line basico</NavDropdown.Item>
                                <NavDropdown.Item className="text-center" href="#action/3.2">
                                    Sitio web Personal
                                </NavDropdown.Item>
                                <NavDropdown.Item className="text-center" href="#action/3.3">
                                    Pagina web
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to={'/contacto'}>Contacto</Nav.Link>
                            <Nav.Link as={Link} to={'/sobre_nosotros'}>Sobre Nosotros</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default BarraDeNavegacion