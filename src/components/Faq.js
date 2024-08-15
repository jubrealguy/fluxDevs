const Faq = ({logo, dayLogo}) => {
    const listClass = logo === dayLogo ? 'faq__list-night' : 'faq__list-day'
    const specialistClass = logo === dayLogo ? 'faq__specialist-night' : 'faq__specialist-day'
    
    return (
        <section className="faq">
            <div className="faq__box">
                <h2>Frequently Asked <br />Questions</h2>
                <ul className={`faq__list ${listClass}`}>
                    <li>
                        <span>What Kind of website do you guys develop?</span>
                        <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="0,0 10,0 5,5" fill="#000"/>
                        </svg>
                    </li>
                    <li>
                        <span>How much do you charge</span>
                        <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="0,0 10,0 5,5" fill="#000"/>
                        </svg>
                    </li>
                    <li>
                        <span>Do you also design mobile apps?</span>
                        <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="0,0 10,0 5,5" fill="#000"/>
                        </svg>
                    </li>
                    <li>
                        <span>How can i contact you?</span>
                        <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="0,0 10,0 5,5" fill="#000"/>
                        </svg>
                    </li>
                </ul>
            </div>
            <div className={`faq__specialist ${specialistClass}`}>
                <div className="one"><span>&#10003;</span><span>we offer solutions</span></div>
                <p className="two">Our client-focused solutions include custom web design, innovative web development, UX/UI design, e-commerce solutions, and SEO optimization. We are dedicated to transforming your digital experience with designs that captivate and applications that perform. </p>
                <div className="three"><span>&#10003;</span><span>Backend De</span>v</div>
                <div className="four"><span>&#10003;</span><span>Frontend Dev</span></div>
                <div className="five"><span>&#10003;</span><span>Product Designers</span></div>
            </div>
        </section>
    )
}

export default Faq