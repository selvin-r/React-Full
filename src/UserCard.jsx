import React from 'react'

const userData = [
    {
        name: "ANI",
        city: "New York",
        description: "Front-End Developer",
        skill: ["UI / UX", "Front-End Developer", "HTML", "CSS", "JavaScript", "React", "Node"],
        online: false,
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH7yoWij_qOZl4qgLmFmzo4xvu2cFuggvRIw&s"
    },

    {
        name: "Rahul",
        city: "Bangalore",
        description: "Full Stack Developer",
        skill: ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"],
        online: true,
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzeo0ZyOCJe-KZi7ewGp7jA4qOW4mWYyz42EUyD4M3w&s"
    },

    {
        name: "Priya",
        city: "Chennai",
        description: "UI/UX Designer",
        skill: ["Figma", "Adobe XD", "Photoshop", "UI Design", "UX Research"],
        online: true,
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfx6bAfVPmfgjfyQUUFwW3RGjHuv9PwNdP3DxLSylnyw&s"
    },

    {
        name: "Arjun",
        city: "Hyderabad",
        description: "Backend Developer",
        skill: ["Java", "Spring Boot", "MySQL", "REST API", "HTML"],
        online: false,
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55iBk1f84ermqEJO9BAdThE1zMSrJ7ceqByvbHQdh7w&s"
    },

    {
        name: "Kavya",
        city: "Coimbatore",
        description: "React Developer",
        skill: ["HTML", "CSS", "JavaScript", "React", "Redux", "JS"],
        online: true,
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVGJR6Ths6WzriR-uaCkc0kmx9LhMZNLNZ4Q41lbDMQ&s"
    },


    {
        name: "Vignesh",
        city: "Pune",
        description: "JavaScript Developer",
        skill: ["JavaScript", "TypeScript", "React", "Next.js", "API Integration"],
        online: true,
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKLKaTfCda8yqkkJq7TylvJ1s2Jf1PlRgt4A&s"
    },

    {
        name: "Nisha",
        city: "Delhi",
        description: "Frontend Engineer",
        skill: ["HTML", "CSS", "Sass", "Bootstrap", "JavaScript", "PHP"],
        online: false,
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNQPb-z5xlUsz9Fkxf9Zv_cpAxvUz3swlAQ&s"
    },

    {
        name: "Santhosh",
        city: "Mumbai",
        description: "MERN Stack Developer",
        skill: ["MongoDB", "Express", "React", "Node", "REST API"],
        online: true,
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzEPL_wvN6V9jAw-uuS10Sc1x_TWHe8gkrA&s"
    }
];

function User(props) {
    return (
        <div className='card-container'>
            <span className={props.online ? "pro online" : "pro offline"}>
                {props.online ? "ONLINE" : "OFFLINE"}
            </span>

            <img className='UserImg' src={props.profile} alt="User" />

            <h3>{props.name}</h3>
            <h3>{props.city}</h3>

            {/* description correct */}
            <p>{props.description}</p>

            <div className='buttons'>
                <button className='primary'>Message</button>
                <button className='primary outline'>Following</button>
            </div>

            <div className='skills'>
                <h6>Skills</h6>
                <ul>
                    {/* skills correct */}
                    {props.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const UserCard = () => {
    return (
        <>
            {
                userData.map((user, index) => (

                    <User
                        key={index}
                        name={user.name}
                        city={user.city}
                        description={user.description}
                        skills={user.skill}
                        online={user.online}
                        profile={user.profile}
                    />
                ))}
        </>
    );
}

export default UserCard;
