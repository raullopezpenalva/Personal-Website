import { NavLink } from 'react-router-dom';
import { Button } from '../ui-primitives/Button';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className="Header-inner">
        <div className="Header-left">
          <NavLink to="/" className="Header-logo">
            <img src="src/assets/5FDFF6B2-FA3D-44B7-BAF5-BF63D3C60778.PNG" alt="Logo" />
          </NavLink>
        </div>
        <div className="Header-center">
          <nav className="Header-nav">
            <NavLink to="/" className="btn btn-muted">Inicio</NavLink>
            <NavLink to="/about" className="btn btn-muted">Sobre mí</NavLink>
            <NavLink to="/vision" className="btn btn-muted">Visión</NavLink>
            <NavLink to="/projects" className="btn btn-muted">Proyectos</NavLink>
            <NavLink to="/blog" className="btn btn-muted">Blog</NavLink>
          </nav>
        </div>
        <div className="Header-right">
          <Button to="/contact" variant="secondary" className="Header-contact-btn">
            Contacto
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;