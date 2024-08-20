import About from '../components/AboutUs';
import TeamData from "../data/TeamData"

const TeamGrid = () => {
    return (
        <div className="team__grid">
            {TeamData.map((member) => (
                <div key={member.id}>
                    <img src={member.img} alt={member.title} />
                    <p>{member.title}</p>
                </div>
            ))}
        </div>
    )
}

const AboutPage = ({logo, dayLogo}) => {
    return (
        <main>
            <About logo={logo} dayLogo={dayLogo} />
            <TeamGrid />
        </main>
    )
}

export default AboutPage