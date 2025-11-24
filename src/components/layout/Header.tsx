import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="Header">
        <div className="Header-logo">Raúl · López</div>
        <nav className="Header-nav">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/about">Sobre mí</NavLink>
            <NavLink to="/services">Servicios</NavLink>
            <NavLink to="/projects">Proyectos</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contacto</NavLink>
        </nav>
    </header>
  );
};

export default Header;