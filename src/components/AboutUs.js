import aboutImg from '../img/Rectangle 4509.png'

const About = ({logo, dayLogo}) => {
    const aboutClass = logo === dayLogo ? 'about-night' : 'about-day'

    return (
        <section className={`about ${aboutClass}`}>
            <div className='about__left'>
                <h3>How it started</h3>
                <p className='head'>Our Goal is to  transform your Ideas of Business into Reality </p>
                <p className='body'>PTS is a cutting-edge software development startup dedicated to creating bespoke software solutions that drive business growth and innovation. By leveraging the latest technologies and agile methodologies, CodeWave Innovations aims to help companies across various industries transform their operations and enhance their digital presence.</p>
            </div>
            <div className='about__right'>
                <img src={aboutImg} alt='' />
                <div className='about__rating'>
                    <p><span>2.5</span><span>Years of experience</span></p>
                    <p><span>30</span><span>Projects work</span></p>
                    <p><span>1.5k</span><span>Positive reviews</span></p>
                    <p><span>2K+</span><span>Customers</span></p>
                </div>
            </div>
        </section>
    )
}

export default About