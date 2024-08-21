import cover from "../img/Rectangle 4489.png"
import cardImg from '../img/card-img.png'

import React, { useState, useEffect } from 'react';

const Projects = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const url = `https://cors-anywhere.herokuapp.com/https://fluxdevsng.pythonanywhere.com/api/projects`;

                const url = "https://fluxdevsng.pythonanywhere.com/api/projects/?format=json"
                // const url = `https://api.allorigins.win/get?url=https://fluxdevsng.pythonanywhere.com/api/projects`;

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                console.log(result)
                setData(result);
                setLoading(false);
            } 
            
            catch (error) {
                setError(error);
                console.log(error)
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // return (
    //     <div className="projects-container">
    //         {data.map((project) => (
    //             <div key={project.id} className="project-card">
    //                 <h3 className="project-title">{project.date}</h3>
    //                 <p className="project-description">{project.description}</p>
    //                 {/* Add other project details as needed */}
    //             </div>
    //         ))}
    //     </div>
    // );


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
            <ul className="projects__list">
                {data.map((project) => {
                    return (
                        <li key={project?.id} className="projects__list--item">
                            <div>
                                <a href="##">Click to view</a>
                                <p className="content">{project?.name}</p>
                                <p>{project?.description}</p>
                                <p>{project?.more_details}</p>
                                <p className="date">{`Project update: ${project.date}`}</p>
                            </div>
                            <img src={cardImg} alt="" />
                        </li>
                    )
                })}
            </ul>
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
        </section>
    )
}

export default Projects