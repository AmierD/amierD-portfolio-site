import reactIcon from "../assets/reactLogo.png";
import viteIcon from "../assets/viteLogo.png";
import cssIcon from "../assets/cssLogo.png";
import jsIcon from "../assets/jsLogo.png";
import htmlIcon from "../assets/htmlLogo.png";
export const projects = [
    {
        id: 1,
        name: "Portfolio Website",
        description: " This is my portfolio website that I built using React. It is a simple website This is my portfolio website that I built using React. It is a simple website that displays my projects.",
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
        id: 2,
        name: "Portfolio Website",
        description: "This is my portfolio website that I built using React. It is a simple website that displays my projects.",
        technologies: [
            {name: "React", icon: reactIcon},
            {name: "Vite", icon: viteIcon},
            {name: "CSS", icon: cssIcon},
        ],
        image: "https://via.placeholder.com/150",
        gitHubLink: "https://www.google.com",
    },
];