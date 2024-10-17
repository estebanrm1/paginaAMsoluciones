import { Container, Navbar, NavbarBrand, NavDropdown, Nav} from "react-bootstrap"
import '../style/Navegacion.css'
import { Link } from "react-router-dom";
import { useState } from "react";


const BarraDeNavegacion = () => {

    const [expanded, setExpanded] = useState(false);

    const handleToogle = () => setExpanded(!expanded);
    const closeMenu = () => setExpanded(false);

    return (
        <>
            <Navbar expanded={expanded} onToggle={handleToogle} className="barra-fija" expand="lg" bg="black" data-bs-theme="dark">
                <Container>
                    <NavbarBrand as={Link} to={'/inicio'} className="text-light sombra">A.M Soluciones Web</NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="outline-light"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto gap-lg-5 text-center contenedor-navlink">
                            <Nav.Link as={Link} to={'/inicio'} onClick={closeMenu}>Inicio</Nav.Link>
                            <NavDropdown title="Servicios" id="basic-nav-dropdown">
                                <NavDropdown.Item className="text-center" as={Link} to={'/servicios/cv_basico'} onClick={closeMenu}>Cv On-line basico</NavDropdown.Item>
                                <NavDropdown.Item className="text-center" as={Link} to={'/servicios/sitio_personal'} onClick={closeMenu}>Sitio web Personal</NavDropdown.Item>
                                <NavDropdown.Item className="text-center" as={Link} to={'/servicios/pagina_info'} onClick={closeMenu}>Pagina web</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to={'/contacto'} onClick={closeMenu}>Contacto</Nav.Link>
                            <Nav.Link as={Link} to={'/sobre_nosotros'} onClick={closeMenu}>Sobre Nosotros</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default BarraDeNavegacion