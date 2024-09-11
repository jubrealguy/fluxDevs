import listImg from '../img/Group 39530.png'
import offerImg from '../img/Frame 39606.png'

const Services = ({logo, dayLogo}) => {
    const offerClass = logo === dayLogo ? 'offer-night' : 'offer-day'
    const boxClass = logo === dayLogo ? 'service__box-night' : 'service__box-day'

    return (
        <section className='service'>
            <div className='service__request'>
                <div className='service__request-text'>
                    <p><span className='bolder'>Request a quote or consultation time</span><span className='bold'>Get responds between 24hours</span></p>
                    <div className='lighter'>
                        <p className='light'>We are aimed at helping companies across various industries transform their operations and enhance their digital presence.</p>
                        <button>Request now</button>
                    </div>
                </div>
                <div className='cover-box'></div>
            </div>
            <div className='offer'>
                <h3><span className='text'>What we offer </span><span className='arr'>&darr;</span></h3>
                <ul className='offer__list'>
                    <li className={`offer__list--item ${offerClass}`}>
                        <p className='jobs'>08 Jobs</p>
                        <h4>Branding</h4>
                        <p className='body'>we are aimed at helping companies across various industries transform their operations </p>
                        <img src={listImg} alt='' />
                    </li>
                    <li className={`offer__list--item ${offerClass}`}>
                        <p className='jobs'>08 Jobs</p>
                        <h4>Web Dev...</h4>
                        <p className='body'>we are aimed at helping companies across various industries transform their operations </p>
                        <img src={listImg} alt='' />
                    </li>
                    <li className={`offer__list--item ${offerClass}`}>
                        <p className='jobs'>08 Jobs</p>
                        <h4>UI/UX Design</h4>
                        <p className='body'>we are aimed at helping companies across various industries transform their operations </p>
                        <img src={listImg} alt='' />
                    </li>
                    <li className={`offer__list--item ${offerClass}`}>
                        <p className='jobs'>08 Jobs</p>
                        <h4>Seo</h4>
                        <p className='body'>we are aimed at helping companies across various industries transform their operations </p>
                        <img src={listImg} alt='' />
                    </li>
                </ul>
            </div>
            <div className={`service__recent ${boxClass}`}>
                <div className={`service__box`}>
                    <h2><span className='text'>Recent Work </span><span className='arr'>&rarr;</span></h2>
                    <div className='service__work'>
                        <h3>School website</h3>
                        <div className='img-box'><img src={offerImg} alt='' /></div>
                        <h5>We designed a full functional school website that captured the details of 120 students</h5>
                        <p>Requirement Gathering: We started by thoroughly understanding your needs, ensuring that every essential feature, from the student portal to the event calendar, was clearly defined and aligned with your school’s goals.</p>
                        <p>Development: With the designs approved, we moved into the development phase, where we built the site from the ground up. This included integrating all the necessary functionalities like enrollment forms, online payments, and secure access to student information.</p>
                        <a href='##'>Read more...</a>
                    </div>
                </div>
                <div className='service__work'>
                    <h3>School website</h3>
                    <div className='img-box'><img src={offerImg} alt='' /></div>
                    <h5>We designed a full functional school website that captured the details of 120 students</h5>
                    <p>Requirement Gathering: We started by thoroughly understanding your needs, ensuring that every essential feature, from the student portal to the event calendar, was clearly defined and aligned with your school’s goals.</p>
                    <p>Development: With the designs approved, we moved into the development phase, where we built the site from the ground up. This included integrating all the necessary functionalities like enrollment forms, online payments, and secure access to student information.</p>
                    <a href='##'>Read more...</a>
                </div>
            </div>
            <div className='service__subscribe'>
                <p>Subscribe to our newsletter and never miss a New products and good offers</p>
                <form>
                    <input type='text' placeholder='christian45gupme@gmail.com' /><button>Subscribe</button>
                </form>
            </div>
        </section>
    )
}

const ServicePage = ({logo, dayLogo}) => {
    return (
        <Services logo={logo} dayLogo={dayLogo} />
    )
}

export default ServicePage