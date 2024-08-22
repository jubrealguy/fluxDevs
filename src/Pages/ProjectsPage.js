import cover from "../img/Rectangle 4489.png";
import Question from '../components/Question';
import Projects from "../components/Projects"

const ProjectHead = () => {
    return (
        <div>
            <h2 className="cover">Our projects</h2>
            <div className="projects__intro">
                <img src={cover} alt="" />
                <div className="projects__intro--text">
                    <h3>Our Projects</h3>
                    <p>Embark on a visual journey as you look through our projects</p>
                </div>
            </div>
        </div>
    )
}

const ProjectsPage = () => {
    return (
        <section className="projects">
            <ProjectHead />
            <Projects />
            <Question />
        </section>
    )
}

export default ProjectsPage