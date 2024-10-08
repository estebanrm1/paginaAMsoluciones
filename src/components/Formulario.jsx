import { Col, Container, Row } from 'react-bootstrap'
import '../style/Contacto/Formulario.css'
import RedesSociales from './RedesSociales'

const Formulario = () => {
  return (
    <Container className='pb-5'>
    <Row className='pt-5'>
      <Col lg={6} sm={11} className='mt-5'>
      <div className="form-card1">
  <div className="form-card2">
    <form className="form">
      <h4 className="form-heading">Envíanos tu consulta</h4>

      <div className="form-field">
        <input
          required
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          className="input-field"
          type="text"
        />
      </div>

      <div className="form-field">
        <input
          required
          id="email"
          name="email"
          placeholder="Email"
          className="input-field"
          type="email"
          autoComplete='email'
        />
      </div>

      <div className="form-field">
        <input
          required
          id="asunto"
          name="asunto"
          placeholder="Asunto"
          className="input-field"
          type="text"
        />
      </div>

      <div className="form-field">
        <textarea
          required
          id="mensaje"
          name="mensaje"
          placeholder="Mensaje"
          cols="30"
          rows="3"
          className="input-field"
        ></textarea>
      </div>

      <button className="sendMessage-btn" type="submit">Enviar mensaje</button>
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