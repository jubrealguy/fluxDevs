import TeamData from "../data/TeamData"

const Team = () => {
    return (
        <section className="team">
            <div className="team__heading">
                <h2>Our Team</h2>
                <p>our web development team is the cornerstone of our success, bringing together a diverse set of skills and a wealth of experience to deliver exceptional digital solutions. Here's what sets our team apart:</p>
            </div>
            <div className="team__wrapper">
                {[...Array(3)].map((_, index) => (
                    <div className="team__details" key={index}>
                        {TeamData.map((member) => (
                            <div key={member.id}>
                                <img src={member.img} alt={member.title} />
                                <p>{member.title}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Team