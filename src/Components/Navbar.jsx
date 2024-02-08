import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMouseOver = () => {
        setIsHovered(true);
    };
    
    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const buttonStyle = {
        backgroundColor: isHovered ? 'white' : '#ff3e66',
        borderColor: '#FF3E66',
        color: isHovered ? '#FF3E66' : 'white',
        borderRadius: '30px',
        width: '150px',
        height: '50px',
    };

    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-body-tertiary fixed-top${isScrolled ? ' navbar-scrolled' : ''}`}>
                <div className="container">
                    <img src="https://www.enarkuplift.in/wp-content/uploads/2023/03/Enark-Uplift-Logo-2.png" alt="" style={{ width: "253px", height: "83px" }} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <a className="nav-link" href="#" aria-expanded="false">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" aria-expanded="false">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" aria-expanded="false">
                                    Course
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" aria-expanded="false">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" aria-expanded="false">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <form>
                            <button className="btn btn-outline-success" type="submit" style={buttonStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Buy Now</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
