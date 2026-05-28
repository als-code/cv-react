import { useState } from 'react'

function Contact(){

    const [nombre, setNombre] = useState('')
    const [motivo, setMotivo] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [email, setEmail] = useState('')

    // TODO: Implementar el envío del formulario mediante una API (y persistir/reenviar email desde backend).
    // Mientras no exista backend, el formulario no envía emails.
    function enviarFormulario(event) {
    event.preventDefault()
    return
  }
    
    return(
        <section className="resume-page">
            <div className="resume-section-card">
                <h2 className="resume-section-title">
                    <span className="icon">✉️</span> Contacto
                </h2>
                <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
                    Este formulario está en preparación. De momento no envía emails.
                </p>
                <form className="contact-form" onSubmit={enviarFormulario}>
                <div className="form-group">
                    <label className="form-label" htmlFor="nombre">Nombre</label>
                    <input className="form-input" type="text" id="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} placeholder="Tu nombre..." />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="motivo">Motivo</label>
                    <select className="form-input" id="motivo" value={motivo} onChange={(event) => setMotivo(event.target.value)} required>
                        <option value="" disabled hidden>Selecciona un motivo</option>
                        <option value="Oferta laboral">Oferta laboral</option>
                        <option value="Networking">Networking</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="mensaje">Mensaje</label>
                    <textarea className="form-textarea" id="mensaje" value={mensaje} onChange={(event) => setMensaje(event.target.value)} placeholder="¿En qué puedo ayudarte?"></textarea>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input" type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="tu@email.com" />
                </div>
            </form>
            </div>
        </section>
    )
}
export default Contact 