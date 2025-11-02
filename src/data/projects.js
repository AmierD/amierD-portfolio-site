import reactIcon from "../assets/reactLogo.png";
import viteIcon from "../assets/viteLogo.png";
import cssIcon from "../assets/cssLogo.png";
import jsIcon from "../assets/jsLogo.png";
import htmlIcon from "../assets/htmlLogo.png";
import gameMakerIcon from "../assets/gameMakerLogo.png";
export const projects = [
    {
        name: "Portfolio Website",
        description: "Portfolio website that displays my projects, skills, and experiences. Built using the following technologies:",
        technologies: [
            {name: "JavaScript", icon: jsIcon},
            {name: "CSS", icon: cssIcon},
            {name: "HTML", icon: htmlIcon},
            {name: "React", icon: reactIcon},
            {name: "Vite", icon: viteIcon},
        ],
        image: "https://via.placeholder.com/150",
        gitHubLink: "https://github.com/AmierD/amierD-portfolio-site",
    },
    {
        name: "Unnamed Asteroid Game",
        description: "A space-themed arcade shooter game developed in the GameMaker engine, utilizing GML (a C-like scripting language) for gameplay logic:",
        technologies: [
            {name: "GameMaker", icon: gameMakerIcon},
        ],
        image: "https://via.placeholder.com/150",
        gitHubLink: "https://github.com/AmierD/Unnamed-Asteroid-Game",
    },
];