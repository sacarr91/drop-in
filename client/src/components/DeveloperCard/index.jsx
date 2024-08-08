// import dave from '/images/dave.png'
// import steph from '/images/steph.png'
// import peter from '/images/peter.png'
// import pranith from '/images/pranith.png'
// import joe from '/images/joe.png'

// const Devs = [
//     {
//         name: "David Rauf",
//         bio: "Full Stack Web Developer, specializing in MERN stack. Checkout my GitHub in the link below!",
//         githubLink: "https://github.com/drauf727",
//         githubName: "drauf727",
//         image: dave
//     },
//     {
//         name: "Peter Smith",
//         bio: "Full stack web developer from Tampa Fl. Pete's career in technology began with chemistry working in rapid diagnostics, and evolved into engineering for automation, quality assurance and application development.",
//         githubLink: "https://github.com/peteCodes4U",
//         githubName: "peteCodes4U",
//         image: peter
//     },
//     {
//         name: "Joseph Ruff",
//         bio: "Experienced in full-stack web development with a focus on the MERN stack. Passionate about utilizing technology for positive outcomes and excited to apply my versatile skills to pioneering projects.",
//         githubLink: "https://github.com/joegruff16",
//         githubName: "joegruff16",
//         image: joe
//     },
//     {
//         name: "Stephanie Carr",
//         bio: "Full Stack Web Developer",
//         githubLink: "https://github.com/sacarr91",
//         githubName: "sacarr91",
//         image: steph
//     },
//     {
//         name: "Pranith Gunda",
//         bio: "Application Developer keen to learn front end technologies to develop intuitive and creative user interfaces.",
//         githubLink: "https://github.com/pranithgunda",
//         githubName: "pranithgunda",
//         image: pranith
//     }
// ]


const DeveloperCard = ({ dev }) => (
    <div style={{ width: '18rem', margin: '1rem', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <img src={dev.image} className="card-img-top" alt={dev.name} style={{ borderRadius: '8px 8px 0 0'}} />
        <div className="card-body" style={{ padding: '1rem' }}>
            <h5 className="card-title text-center">{dev.name}</h5>
            <p className="card-text text-center">{dev.bio}</p>
            <a href={dev.githubLink} className="btn" style={{ backgroundColor: 'rgb(101, 189, 71)', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px' }}>{dev.githubName}</a>
        </div>
    </div>
);

export default DeveloperCard;

