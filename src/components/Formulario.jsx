import { Col, Container, Row } from 'react-bootstrap';
import '../style/Contacto/Formulario.css';
import RedesSociales from './RedesSociales';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';

const Formulario = () => {

  const {register, handleSubmit, formState: { errors }, reset} = useForm();

  const form = useRef();
  const sendEmail = (data) => {
    emailjs
      .sendForm('service_jud1lzf', 'template_zbaeqx1', form.current, {
        publicKey: 'VRpn3E_3VKSTYBneL',
      })
      .then(
        () => {
          Swal.fire({
            customClass:{popup:"alert-enviado"},
            icon: "success",
            title: "Mensaje enviado",
            color: "#eb2603",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('SUCCESS!');
          reset();
        },
        (error) => {
          Swal.fire({
            customClass:{popup:"alert-no-enviado"},
            icon: "error",
            color: "#eb2603",
            title: "Error",
            text: "Mensaje NO enviadol!"
          });
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Container className='pb-5'>
    <Row className='pt-5'>
      <Col lg={6} sm={12} className='mt-5'>
      <div className="form-card1">
  <div className="form-card2">
    <form ref={form} onSubmit={handleSubmit(sendEmail)} className="form">
      <h4 className="form-heading">Envíanos tu consulta</h4>

      <div className="form-field">
        <input
        {...register("to_name", {
          required: "El nombre es obligatorio",
          minLength:{
            value:3,
            message:"El nombre debe contener al menos 3 caracteres"
          },
          maxLength:{
            value:20,
            message:"El nombre debe contener como maximo 20 caracteres"
          },
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "El nombre solo puede contener letras y espacios",
          },
        })}
          placeholder="Nombre"
          className="input-field"
          type="text"
        />
      </div>
        {errors.to_name && <p className="error-message">{errors.to_name.message}</p>}

      <div className="form-field">
        <input
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "El formato del email no es válido",
            },
          })}
          placeholder="Email"
          className="input-field"
          type="email"
          autoComplete='email'
        />
      </div>
        {errors.email && <p className="error-message">{errors.email.message}</p>}

      <div className="form-field">
        <input
          {...register("asunto", {
            required: "El asunto es obligatorio",
            minLength: {
              value: 4,
              message: "El asunto debe tener al menos 4 caracteres",
            },
            maxLength:{
              value:40,
              message: "El asunto debe tener como maximo 40 caracteres"
            },
            pattern: {
              value: /^[A-Za-z0-9\s]+$/,
              message: "El asunto solo puede contener letras, números y espacios",
            },
          })}
          placeholder="Asunto"
          className="input-field"
          type="text"
        />
      </div>
        {errors.asunto && <p className="error-message">{errors.asunto.message}</p>}

      <div className="form-field">
        <textarea
          {...register("message", {
            required: "El mensaje es obligatorio",
            minLength: {
              value: 10,
              message: "El mensaje debe tener al menos 10 caracteres",
            },
          })}
          placeholder="Mensaje"
          cols="30"
          className="input-field"
        ></textarea>
      </div>
        {errors.message && <p className="error-message">{errors.message.message}</p>}

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