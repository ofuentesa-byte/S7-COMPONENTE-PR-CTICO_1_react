import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <h2>Clínica Salud Vital</h2>
      </div>

      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navbar