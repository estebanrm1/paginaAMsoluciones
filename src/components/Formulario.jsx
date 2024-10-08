import { Col, Container, Row } from 'react-bootstrap'
import '../style/Contacto/Formulario.css'
import RedesSociales from './RedesSociales'

const Formulario = () => {
  return (
    <Container>
    <Row className='py-5'>
      <Col lg={6} sm={11} className='mt-5'>
        <div class="form-card1">
          <div class="form-card2">
            <form class="form">
              <h4 class="form-heading">Envíanos tu consulta</h4>

              <div class="form-field">
                <input required="" placeholder="Nombre" class="input-field" type="text" />
              </div>

              <div class="form-field">
                <input
                  required=""
                  placeholder="Email"
                  class="input-field"
                  type="email"
                />
              </div>

              <div class="form-field">
                <input
                  required=""
                  placeholder="Asunto"
                  class="input-field"
                  type="text"
                />
              </div>

              <div class="form-field">
                <textarea
                  required=""
                  placeholder="Mensaje"
                  cols="30"
                  rows="3"
                  class="input-field"
                ></textarea>
              </div>

              <button class="sendMessage-btn">Enviar mensaje</button>
            </form>
          </div>
        </div>

      </Col>
      <Col className='mt-lg-5 pt-lg-5' lg={6}>
      <RedesSociales></RedesSociales>
      </Col>
      </Row>
      </Container>
  )
}

export default Formulario