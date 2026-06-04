import { useState } from 'react'
import clinica from '../assets/clinica.jpg'

function Hero() {
  

  return (
    <section className="hero" id="inicio">
      <div className="hero-text">
        <h1>Clínica Salud Vital</h1>

        <p>
          Cuidamos tu salud y la de tu familia con profesionales altamente
          capacitados.
        </p>

        
      </div>

      <img src={clinica} alt="clinica" />
    </section>
  )
}

export default Hero