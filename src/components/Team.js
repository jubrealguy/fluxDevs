import React, { useState } from 'react';
import TeamData from '../data/TeamData';

const Team = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const membersPerPage = 4;

    // Calculate the indices of the members to display
    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = TeamData.slice(indexOfFirstMember, indexOfLastMember);

    const totalPages = Math.ceil(TeamData.length / membersPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className="team">
            <div className="team__heading">
                <h2>Our Team</h2>
                <p>Our web development team is the cornerstone of our success...</p>
            </div>
            <div className="team__details">
                {currentMembers.map((member) => (
                    <div key={member.id}>
                        <img src={member.img} alt={member.title} />
                        <p>{member.title}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <div
                        key={index + 1}
                        className={`page ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => paginate(index + 1)}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Team;
