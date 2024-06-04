export const Conctact = () =>{
    return (
        <section id="Contact" className="contact">
          <div className="contactLabel">
            <h1>Contáctame</h1>
            <p>Si deseas contactarte conmigo, puedes escribirme a cualquiera de los medios que te muestro a continuación</p>
          </div>
          <aside className="contactContent">
          <form action="POST" className="form">
            <label>Nombre Completo</label>
            <input type="text" placeholder="Escribe tu nombre completo"/>
            <label>Correo</label>
            <input type="mail" placeholder="Escribe tu correo electrónico"/>
            <label>Asunto</label>
            <input type="text" placeholder="Escribe la razón de tu mensaje"/>
            <label>Mensaje</label>
            <textarea placeholder="Escribe tu mensaje"></textarea>
            <button className="buttons">Enviar mensaje</button>
          </form>
          <aside className="contactMethods">
          <div className="contactColumn">
            <div className="contactRow">
              <img src="./img/mark.svg" alt="" />
              <div className="contactRowContent">
                <h3>Correo</h3>
                <p>juandagv95@gmail.com</p>              
              </div>
            </div>
            <div className="contactRow">
              <img src="./img/what.svg" alt="" />
              <div className="contactRowContent">
                  <h3>Whtasapp</h3>
                  <p>+57 318 854 9815</p>
              </div>
            </div>
            </div>
            <div className="contactColumn">
            <div className="contactRow">
              <img src="./img/github.svg" alt="" />
              <div className="contactRowContent">
                  <h3>GitHub</h3>
                  <p>JuanGV95</p>
              </div>
            </div>
            <div className="contactRow">
              <img src="./img/in.svg" alt="" />
              <div className="contactRowContent">
                  <h3>LinkedIn</h3>
                  <p>juan-david-gonzalez</p>
              </div>
            </div>
            </div>
          </aside>
          </aside>
        </section>
    )
}