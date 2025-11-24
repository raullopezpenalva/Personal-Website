import { NavLink } from 'react-router-dom';
import { Button } from '../ui/Button';

const Header: React.FC = () => {
  return (
    <header className="Header">
  <NavLink to="/" className="Header-logo">
    <img src="src/assets/5FDFF6B2-FA3D-44B7-BAF5-BF63D3C60778.PNG" alt="Logo" />
  </NavLink>
        <nav className="Header-nav">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/about">Sobre mí</NavLink>
            <NavLink to="/services">Servicios</NavLink>
            <NavLink to="/projects">Proyectos</NavLink>
            <NavLink to="/blog">Blog</NavLink>

            <Button to="/contact" variant="primary">
                Contacto
            </Button>
        </nav>
    </header>
  );
};

export default Header;