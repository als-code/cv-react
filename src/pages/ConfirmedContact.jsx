import { Link, useLocation } from 'react-router-dom'

function ConfirmedContact() {
  const location = useLocation()
  const nombre = location.state?.nombre
  const motivo = location.state?.motivo

  return (
    <section className="resume-page">
      <div className="resume-section-card" style={{ textAlign: 'center', padding: '40px' }}>
        <div className="sidebar-logo" style={{ margin: '0 auto 20px', width: '60px', height: '60px', fontSize: '30px' }}>
          ✅
        </div>
        <h2 className="resume-section-title" style={{ justifyContent: 'center' }}>
          ¡Mensaje Enviado!
        </h2>

        {nombre && motivo ? (
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '30px' }}>
            Gracias <strong>{nombre}</strong>. He recibido tu mensaje referente a: <em>{motivo}</em>. Te responderé lo antes posible.
          </p>
        ) : (
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Tu solicitud ha sido procesada con éxito.</p>
        )}

        <Link to="/" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
          Volver al Inicio
        </Link>
      </div>
    </section>
  )
}

export default ConfirmedContact