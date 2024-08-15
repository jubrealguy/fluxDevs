import logo from "../img/Subtract_white.png"
import ig from "../img/Frame (3).png"
import x from '../img/Frame (1).png'
import ln from '../img/Frame (2).png'
import proj from "../img/Frame 72.png"
import about from '../img/Frame 74.png'
import location from '../img/Frame 76.png'
import terms from '../img/Frame 85.png'
import privacy from '../img/Frame 84.png'
import review from '../img/Frame 82.png'
import faq from '../img/Frame 97.png'
import contact from '../img/Frame 95.png'
import pricing from '../img/Frame 94.png'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__media">
                    <div className="footer__primary">
                        <img src={logo} alt="" />
                        <span>Building products that meets users needs</span></div>
                    <div className="footer__socials">
                        <img src={ig} alt="" />
                        <img src={x} alt="" />
                        <img src={ln} alt="" />
                    </div>
                </div>
                <div className="footer__content">
                    <h5>Links</h5>
                    <ul>
                        <li><img src={proj} alt="" /><span>Our Projects</span></li>
                        <li><img src={about} alt="" /><span>About us</span></li>
                        <li><img src={location} alt="" /><span>Our Location</span></li>
                    </ul>
                </div>
                <div className="footer__content">
                    <h5>Legal</h5>
                    <ul>
                        <li><img src={terms} alt="" /><span>Terms and condition</span></li>
                        <li><img src={privacy} alt="" /><span>Privact and Policy</span></li>
                        <li><img src={review} alt="" /><span>Company reviews</span></li>
                    </ul>
                </div>
                <div className="footer__content">
                    <h5>Support</h5>
                    <ul>
                        <li><img src={faq} alt="" /><span>FAQs</span></li>
                        <li><img src={contact} alt="" /><span>Contact Us</span></li>
                        <li><img src={pricing} alt="" /><span>Pricing</span></li>
                    </ul>
                </div>
            </div>
            <div className="footer__foot">
                <p>© 2024 PTS. Copyright and All Rights reserved</p>
                <p>Terms and Condtions</p>
            </div>
        </footer>
    )
}

export default Footer