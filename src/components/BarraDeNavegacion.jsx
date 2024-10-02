import { Container, Navbar, NavbarBrand, NavDropdown, Nav} from "react-bootstrap"
import '../style/Navegacion.css'


const BarraDeNavegacion = () => {

    return (
        <>
            <Navbar className="barra-fija" expand="lg" bg="black" data-bs-theme="dark">
                <Container>
                    <NavbarBrand className="text-light sombra">A.M Soluciones Web</NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="outline-light"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto gap-lg-5 text-center contenedor-navlink">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <NavDropdown title="Servicios" id="basic-nav-dropdown">
                                <NavDropdown.Item className="text-center" href="#action/3.1">Cv On-line basico</NavDropdown.Item>
                                <NavDropdown.Item className="text-center" href="#action/3.2">
                                    Sitio web Personal
                                </NavDropdown.Item>
                                <NavDropdown.Item className="text-center" href="#action/3.3">
                                    Pagina web
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                            <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default BarraDeNavegacion