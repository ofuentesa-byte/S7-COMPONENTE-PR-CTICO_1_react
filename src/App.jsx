import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';

// Tus imágenes importadas
import doctor from './assets/doctor.jpg';
import pediatria from './assets/pediatria.jpg';
import odontologia from './assets/odontologia.jpg';
import laboratorio from './assets/laboratorio.jpg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      {/* SECCIÓN DE NUESTROS SERVICIOS */}
      <section className="cards-section" id="servicios">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="cards-container">
          <Card 
            imagen={doctor}
            titulo="Medicina General" 
            descripcion="Atención médica integral." 
            extra="La medicina general permite diagnosticar y prevenir enfermedades mediante controles periódicos y tratamientos oportunos."
          />
          <Card 
            imagen={pediatria}
            titulo="Pediatría" 
            descripcion="Atención para niños." 
            extra="Nuestros especialistas realizan seguimiento del crecimiento, vacunación y prevención de enfermedades infantiles."
          />
          <Card 
            imagen={odontologia}
            titulo="Odontología" 
            descripcion="Salud bucal profesional." 
            extra="Ofrecemos limpieza dental, tratamientos preventivos y atención especializada para toda la familia."
          />
          <Card 
            imagen={laboratorio}
            titulo="Laboratorio Clínico" 
            descripcion="Resultados rápidos y confiables." 
            extra="Realizamos exámenes clínicos modernos que permiten diagnósticos precisos y oportunos."
          />
        </div>
      </section>

      {/* ======================================================== */}
      {/* AQUÍ BORRAMOS LA SECCIÓN VIEJA DE "NOSOTROS" Y "CONTACTO" */}
      {/* QUE ESTABA EN EL FONDO BLANCO                              */}
      {/* ======================================================== */}

      {/* Tu Footer que ahora contiene todo ordenado de forma elegante */}
      <Footer />
    </div>
  );
}

export default App;