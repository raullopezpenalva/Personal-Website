const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>&copy; {currentYear} Raul Lopez Penalva. All rights reserved.</p>
        </footer>
    );
};

export default Footer;