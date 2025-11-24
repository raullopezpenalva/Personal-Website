import { Outlet } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import Container from '../ui/Container.tsx';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;