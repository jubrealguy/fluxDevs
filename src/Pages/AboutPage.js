import About from '../components/AboutUs';
import Team from '../components/Team';

const AboutPage = ({logo, dayLogo}) => {
    return (
        <main>
            <About logo={logo} dayLogo={dayLogo} />
            <Team />
        </main>
    )
}

export default AboutPage