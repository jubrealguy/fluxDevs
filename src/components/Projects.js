import { Link } from "react-router-dom";
import formatDate from '../utilities/time_format'

import React, { useState, useEffect } from 'react';

const Projects = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "https://fluxdevsng.pythonanywhere.com/api/projects/?format=json"
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

    return (
        <div className="projects__recent">
            <h2>Recent works</h2>
            <ul className="projects__list">
                {data.map((project) => {
                    return (
                        <li key={project?.id} className="projects__list--item">
                            <div>
                                <Link to={project.link.replace('/projects', '')}>Click to view</Link>
                                <h3 className="content">{project?.name}</h3>
                                <p>{project?.description}</p>
                                <p>{project?.more_details}</p>
                                <p className="date">{`Project update: ${formatDate(project.date)}`}</p>
                            </div>
                            <img src={project.image} alt="" />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Projects