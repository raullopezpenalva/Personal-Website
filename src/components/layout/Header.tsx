import { NavLink } from 'react-router-dom';
import { Button } from '../ui-primitives/Button';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className="Header-left">
        <NavLink to="/" className="Header-logo">
          <img src="src/assets/5FDFF6B2-FA3D-44B7-BAF5-BF63D3C60778.PNG" alt="Logo" />
        </NavLink>
      </div>
      <div className="Header-center">
        <nav className="Header-nav">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/about">Sobre mí</NavLink>
          <NavLink to="/vision">Visión</NavLink>
          <NavLink to="/projects">Proyectos</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
      </div>
      <div className="Header-right">
        <Button to="/contact" variant="primary" className="Header-contact-btn">
          Contacto
       </Button>
      </div>
    </header>
  );
};

export default Header;