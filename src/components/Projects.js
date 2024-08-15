import cover from "../img/Rectangle 4489.png"
import cardImg from '../img/card-img.png'
import Question from '../components/Question'

const Projects = () => {
    return (
        <section  className="projects">
            <h2 className="cover">Our projects</h2>
            <div className="projects__intro">
                <img src={cover} alt="" />
                <div className="projects__intro--text">
                    <h3>Our Projects</h3>
                    <p>Embark on a visual journey as you look through our projects</p>
                </div>
            </div>
            <div className="projects__recent">
                <h2>Recent works</h2>
                <ul className="projects__list">
                    <li className="projects__list--item">
                        <div>
                            <a href="##">Click to view</a>
                            <p className="content">An E-commerce website for Furniture </p>
                            <p className="date">Project update : 6th August 2024</p>
                        </div>
                        <img src={cardImg} alt="" />
                    </li>
                    <li className="projects__list--item">
                        <div>
                            <a href="##">Click to view</a>
                            <p className="content">An E-commerce website for Furniture </p>
                            <p className="date">Project update : 6th August 2024</p>
                        </div>
                        <img src={cardImg} alt="" />
                    </li>
                    <li className="projects__list--item">
                        <div>
                            <a href="##">Click to view</a>
                            <p className="content">An E-commerce website for Furniture </p>
                            <p className="date">Project update : 6th August 2024</p>
                        </div>
                        <img src={cardImg} alt="" />
                    </li>
                    <li className="projects__list--item">
                        <div>
                            <a href="##">Click to view</a>
                            <p className="content">An E-commerce website for Furniture </p>
                            <p className="date">Project update : 6th August 2024</p>
                        </div>
                        <img src={cardImg} alt="" />
                    </li>
                </ul>
            </div>
            <Question />
        </section>
    )
}

export default Projects