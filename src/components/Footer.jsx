import { Col, Container, Row } from "react-bootstrap"
import logo from '../assets/A.M.jpg'
import '../style/Footer.css'

const Footer = () => {
  return (
    <footer className=" bg-black">
      <Container>
      <Row className="text-center">
        <Col>
        <ul>
          <li><a href="">Inicio</a></li>
          <li><a href="">Contacto</a></li>
          <li><a href="">Sobre Nosotros</a></li>
        </ul>
        
        
        
        </Col>

        <Col lg={6}>
        <img className="img-logo" src={logo} alt="" />
        <p className="text-light sombra-footer">&copy;A.M Soluciones Web</p>
        </Col>

        <Col>
        <ul>
          <li><a href="">Instagram</a></li>
          <li><a href="">Linkedin</a></li>
        </ul>
        
        
        </Col>
      </Row>
      </Container>
    </footer>
  )
}

export default Footer