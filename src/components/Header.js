import brand from '../img/Subtract.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import nightHam from '../img/ham-black.png'
import dayHam from '../img/ham-light.png'
import dayCancel from '../img/dayCancel.png'
import nightCancel from '../img/nightCancel.png'

const Header = ({ logo, themeClick, dayLogo }) => {
    const [clickedNav, setclickedNav] = useState(true);
    const [isActive, setIsActive] = useState(1)
    const headerClass = logo === dayLogo ? 'header-night' : 'header-day';
    const navGround = logo === dayLogo ? 'navGround-night' : 'navGround-day';

    const clickHam = (e) => {
        e.preventDefault();
        setclickedNav(!clickedNav);
    }

    const makeActive = (index) => {
        setIsActive(index)
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest('.hamburger')) {
                setclickedNav(true); 
            }
        };

        if (!clickedNav) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [clickedNav]);

    const navMobile = <nav className={`header__nav-mobile ${navGround}`}>
                <div className='header__box-mobile'>
                    <img src={logo} alt='' onClick={themeClick}/>
                    <a href='##' onClick={themeClick}>{logo === dayLogo ? "Light Mode" : "Dark Mode"}</a>
                </div>
                <ul className='header__list-mobile'>
                    <li><Link to='/' className={isActive === 1 ? 'active': ''} onClick={() => makeActive(1)}>Home</Link></li>
                    <li><Link to='/about' className={isActive === 2 ? 'active': ''} onClick={() => makeActive(2)}>About Us</Link></li>
                    <li><Link to='/services' className={isActive === 3 ? 'active': ''} onClick={() => makeActive(3)}>Services</Link></li>
                    <li><Link to='/projects' className={isActive === 4 ? 'active': ''} onClick={() =>makeActive(4)}>Our Projects</Link></li>
                </ul>
                <img src={logo === dayLogo ? nightCancel: dayCancel} alt='' />
            </nav>

    return (
        
        <header className={`header ${headerClass}`}>
            <h1 className='header__primary'>
                <img src={brand} alt='' />
                <span>Fluxdevs</span>
            </h1>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li><Link to='/' className={isActive === 1 ? 'active': ''} onClick={() => makeActive(1)}>Home</Link></li>
                    <li><Link to='/about' className={isActive === 2 ? 'active': ''} onClick={() => makeActive(2)}>About Us</Link></li>
                    <li><Link to='/services' className={isActive === 3 ? 'active': ''} onClick={() => makeActive(3)}>Services</Link></li>
                    <li className='marleft'><Link to='/projects' className={isActive === 4 ? 'active': ''} onClick={() =>makeActive(4)}>Our Projects</Link></li>
                </ul>
            </nav>
            <div className='header__box'>
                <img src={logo} alt='' onClick={themeClick}/>
                <a href='##'>Contact Us</a>
            </div>
            
        { clickedNav && <img className='hamburger' src={logo === dayLogo ? nightHam : dayHam} onClick={clickHam} alt=''/>}
        { !clickedNav && navMobile}
        
        </header>
        
        
    )
}

export default Header