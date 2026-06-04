import React, { useState } from 'react';

function Footer() {
  const [formData, setFormData] = useState({ nombre: '', telefono: '', correo: '', servicio: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <footer className="footer-profesional">
      <div className="footer-container">
        
        {/* PARTE INFERIOR: Estructura en Columnas */}
        <div className="footer-grid">
          
          {/* Columna Sobre Nosotros (Texto mejorado y ampliado) */}
          <div className="footer-section sobre-nosotros">
            <h4>Sobre Nosotros</h4>
            <p>
              En <strong>Clínica Salud Vital</strong> estamos plenamente comprometidos con el bienestar integral de nuestra comunidad. 
              Ofrecemos una atención médica de la más alta calidad, respaldada por un equipo de profesionales altamente capacitados, 
              instalaciones modernas y tecnología de vanguardia para garantizar diagnósticos oportunos y tratamientos efectivos.
            </p>
            
            <div className="mision-vision">
              <p><strong>Misión:</strong> Brindar atención médica integral con altos estándares de calidad, calidez humana y ética profesional, priorizando la seguridad del paciente.</p>
              <p><strong>Visión:</strong> Ser una clínica líder y reconocida a nivel nacional por nuestra excelencia médica, innovación tecnológica y compromiso con la salud.</p>
            </div>
          </div>

          {/* Columna Formulario Integrado Abajo */}
          <div className="footer-section formulario-footer">
            <h4>Agendar Cita Médica</h4>
            <form onSubmit={(e) => { e.preventDefault(); alert("¡Solicitud enviada!"); }} className="f-form">
              <input type="text" name="nombre" placeholder="Nombre completo" onChange={handleChange} required />
              <input type="tel" name="telefono" placeholder="Teléfono de contacto" onChange={handleChange} required />
              <input type="email" name="correo" placeholder="Correo electrónico" onChange={handleChange} required />
              
              <select name="servicio" onChange={handleChange} required>
                <option value="" disabled selected>Seleccione un servicio</option>
                <option value="medicina-general">Medicina General</option>
                <option value="pediatria">Pediatría</option>
                <option value="odontologia">Odontología</option>
                <option value="laboratorio">Laboratorio Clínico</option>
              </select>
              
              <button type="submit" className="btn-f-submit">Enviar Solicitud</button>
            </form>
          </div>

        </div>

        <hr className="footer-divider" />

        {/* PARTE FINAL: Contacto ordenado en línea justo arriba del Copyright */}
        <div className="footer-bottom-info">
          <div className="contact-info-row">
            <span>📞 099 123 4567</span>
            <span>📧 contacto@clinicasaludvital.com</span>
            <span>📍 Av. Principal y Calle Salud</span>
          </div>
          <p className="copyright">&copy; 2026 Clínica Salud Vital. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;