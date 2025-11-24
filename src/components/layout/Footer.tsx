const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <p className="footer-name">Raul Lopez Penalva</p>
                    <p className="footer-tagline">Tecnología · Código · Infraestructura</p>
                </div>
                <div className="footer-links">
                    <a href="/">Inicio</a>
                    <a href="/about">Sobre mí</a>
                    <a href="/services">Servicios</a>
                    <a href="/projects">Proyectos</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contacto</a>
                </div>
                <div className="footer-copy">
                    <p>© {currentYear} Raúl López Penalva. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;