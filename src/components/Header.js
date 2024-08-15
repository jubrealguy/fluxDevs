import brand from '../img/Subtract.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = ({ logo, themeClick, dayLogo }) => {
    const [isActive, setIsActive] = useState(1)
    const headerClass = logo === dayLogo ? 'header-night' : 'header-day';

    const makeActive = (index) => {
        setIsActive(index)
    }

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
                    <li><Link to='/projects' className={isActive === 4 ? 'active': ''} onClick={() =>makeActive(4)}>Our Projects</Link></li>
                </ul>
            </nav>
            <div className='header__box'>
                <img src={logo} alt='' onClick={themeClick}/>
                <a href='##'>Contact Us</a>
            </div>
        </header>
    )
}

export default Header