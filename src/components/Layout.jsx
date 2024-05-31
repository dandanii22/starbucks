import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
    return (
        <div className="wrap">
            <Header />
            <div className="main">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
