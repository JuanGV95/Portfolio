import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'


export const Conctact = () =>{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) =>{
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:8080/send', formData)
    .then((response)=>{
      console.log('Email sent succesfully:', response);
      Swal.fire({
        position: "center",
        title: "Mensaje enviado",
        text: "Pronto me comunicaré contigo",
        showConfirmButton: false,
        timer: 4000
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((error)=>{
      console.error('There was an error sending the email:', error);
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      Swal.fire({
        position: 'top-right',
        backdrop: false,
        text: 'Correo copiado',
        showConfirmButton: false,
        timer: 1000,
        width: "200px",
        color: "#f5f5f5",
        background: "#0180056c"
      });
    }).catch((error) => {
      console.error('Failed to copy the text to clipboard:', error);
    });
  };

  return (
    <section id="Contact" className="contact">
      <div className="contactLabel">
        <h1>Contáctame</h1>
        <p>Si deseas contactarte conmigo, puedes escribirme a cualquiera de los medios que te muestro a continuación</p>
      </div>
      <aside className="contactContent">
        <form className="form" onSubmit={handleSubmit}>
          <label>Nombre Completo</label>
          <input
            type="text"
            name="name"
            placeholder="Escribe tu nombre completo"
            value={formData.name}
            onChange={handleChange}
            required="true"
          />
          <label>Correo</label>
          <input
            type="email"
            name="email"
            placeholder="Escribe tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required="true"
          />
          <label>Asunto</label>
          <input
            type="text"
            name="subject"
            placeholder="Escribe la razón de tu mensaje"
            value={formData.subject}
            onChange={handleChange}
            required="true"
          />
          <label>Mensaje</label>
          <textarea
            name="message"
            placeholder="Escribe tu mensaje"
            value={formData.message}
            onChange={handleChange}
            required="true"
          ></textarea>
          <button className="buttons" type="submit">Enviar mensaje</button>
        </form>
        <aside className="contactMethods">
          <div className="contactColumn">
          <div
              className="contactRow"
              onClick={() => copyToClipboard('juandagv95@gmail.com')}
              style={{ cursor: 'pointer' }}
            >
              <img src="./img/mark.svg" alt="Correo" />
              <div className="contactRowContent">
                <h3>Correo</h3>
                <p>juandagv95@gmail.com</p>
              </div>
            </div>
            <a href="https://wa.me/573188549815" target="_blank" rel="noopener noreferrer" className="contactRow">
              <img src="./img/what.svg" alt="" />
              <div className="contactRowContent">
                  <h3>Whatsapp</h3>
                  <p>
                    +57 318 854 9815
                  </p>
              </div>
            </a>
            </div>
            <div className="contactColumn">
            <a href="https://github.com/JuanGV95" target="_blank" rel="noopener noreferrer" className="contactRow">
              <img src="./img/github.svg" alt="" />
              <div className="contactRowContent">
                  <h3>GitHub</h3>
                  <p>JuanGV95</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/juan-david-gonzález" target="_blank" rel="noopener noreferrer" className="contactRow">
              <img src="./img/in.svg" alt="" />
              <div className="contactRowContent">
                  <h3>LinkedIn</h3>
                  <p>juan-david-gonzalez</p>
              </div>
            </a>
            </div>
          </aside>
        </aside>
      </section>
    );
};