import React from 'react';
import DeveloperCard from '../components/DeveloperCard';
import dave from '/images/dave.png';
import steph from '/images/steph.png';
import peter from '/images/peter.png';
import pranith from '/images/pranith.png';
import joe from '/images/joe.png';

const Devs = [
    {
        name: "David Rauf",
        bio: "Full Stack Web Developer, specializing in MERN stack. Checkout my GitHub in the link below!",
        githubLink: "https://github.com/drauf727",
        githubName: "drauf727",
        image: dave
    },
    {
        name: "Peter Smith",
        bio: "Full stack web developer from Tampa Fl. Pete's career in technology began with chemistry working in rapid diagnostics, and evolved into engineering for automation, quality assurance and application development.",
        githubLink: "https://github.com/peteCodes4U",
        githubName: "peteCodes4U",
        image: peter
    },
    {
        name: "Joseph Ruff",
        bio: "Experienced in full-stack web development with a focus on the MERN stack. Passionate about utilizing technology for positive outcomes and excited to apply my versatile skills to pioneering projects.",
        githubLink: "https://github.com/joegruff16",
        githubName: "joegruff16",
        image: joe
    },
    {
        name: "Stephanie Carr",
        bio: "Web Developer & Music Ed, passionate about product quality and user experience. Thoroughly convinced anything can be handled suitably with determination, creativity, and southern charm.",
        githubLink: "https://github.com/sacarr91",
        githubName: "sacarr91",
        image: steph
    },
    {
        name: "Pranith Gunda",
        bio: "Application Developer keen to learn front end technologies to develop intuitive and creative user interfaces.",
        githubLink: "https://github.com/pranithgunda",
        githubName: "pranithgunda",
        image: pranith
    }
];

const OurTeam = () => {
    return(
        <>
        <div className='row'>
        {Devs.map((dev, index) => (
        <DeveloperCard key={index} dev={dev} />
        ))}
    </div>
        </>
    )
}

export default OurTeam;