import { Container, Navbar, NavbarBrand } from "react-bootstrap"
import Logo from "./Logo"

const BarraDeNavegacion = () => {

    return (
    <>
    <Navbar expand="lg" className="bg-black">
        <Container>
            <NavbarBrand className="text-light">
                A.M Soluciones Web
            </NavbarBrand>
        </Container>
    </Navbar>
    </>
)
}

export default BarraDeNavegacion