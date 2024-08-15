import device from '../img/devices.png'
import person from '../img/person.png'
import transform from '../img/transform.png'
import planImg from '../img/Frame 207.png'

const Features = ({logo, dayLogo}) => {
    const listClass = logo === dayLogo ? 'list-night' : 'list-day'
    const detailClass = logo === dayLogo ? 'details-night' : 'details-day'

    return (
        <section className='features'>
            <h2 className='features__head'>Our Features</h2>
            <ul className={`features__list ${listClass}`}>
                <li>
                    <h4>Elevate Your Online Presence</h4>
                    <img src={device} alt="" />
                    <p>We create visually stunning, user-friendly websites that reflect your brand and captivate your audience.</p>
                </li>
                <li>
                    <h4>Client-focused solutions.</h4>
                    <img src={person} alt="" />
                    <p>Whether you need a sleek portfolio site or a complex web application, we design and develop solutions that meet your specific needs.</p>
                </li>
                <li>
                    <h4>Transforming Your Digital Experience.</h4>
                    <img src={transform} alt="" className='trans' />
                    <p>Build robust, high-performance applications that streamline your business processes and engage users effectively.</p>
                </li>
            </ul>
            <div className='features__plan'>
                <div className='features__figure'>
                    <h3>Start Planning</h3>
                    <img src={planImg} alt='' />
                </div>
                <div className={`features__details ${detailClass}`}>
                    <h4>We work with your</h4>
                    <ul>
                        <li><span>&#10003;</span><span>Budget</span></li>
                        <li><span>&#10003;</span><span>Timeline</span></li>
                        <li><span>&#10003;</span><span>Plans</span></li>
                        <li><span>&#10003;</span><span>Deadlines</span></li>
                    </ul>
                    <p>Start your journey with us today to achieve your online goals and stand out in the digital landscape.</p>
                </div>
            </div>
        </section>
    )
}

export default Features