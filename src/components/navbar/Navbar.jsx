import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 40);
            setIsHidden(currentScrollY > lastScrollY && currentScrollY > 40);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-dark fixed-top navbar-expand-lg ${isScrolled ? 'navbar-scroll' : 'navbar-top'} ${isHidden ? 'hide' : ''}`}>
            <div className="container mt-2">
                <Link className="navbar-brand fw-bold text-white icono" to='/'>
                    <img style={{ height: '57px' }} src={''} alt="#" /> PGOSA
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item underline-hover">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item underline-hover">
                            <Link className="nav-link" to="/">Quiénes Somos</Link>
                        </li>
                        <li className="nav-item underline-hover">
                            <Link className="nav-link" to="/">Servicios</Link>
                        </li>
                        <li className="nav-item underline-hover">
                            <Link className="nav-link" to="/">Suministros</Link>
                        </li>

                        <li className="nav-item d-none d-lg-block">
                            <Link className="btn btn-light ms-2 login-button contact rounded-4" to='#'>CONTACTANOS</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
