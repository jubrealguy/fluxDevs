import Intro from '../components/Intro';
import Features from '../components/Features';
import Team from '../components/Team';
import Faq from '../components/Faq';
import Question from '../components/Question';


const HomePage = ({logo, dayLogo}) => {
    return (
        <div>
            <Intro logo={logo} dayLogo={dayLogo} />
            <Features logo={logo} dayLogo={dayLogo} />
            <Team />
            <Faq logo={logo} dayLogo={dayLogo} />
            <Question />
        </div>
    )
}

export default HomePage