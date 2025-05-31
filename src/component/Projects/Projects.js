import './Projects.css';
import project1 from "./../../media/project1.png"
import selfhealing from '../../media/selfhealing.png'
import menthy from '../../media/menthy.png'
import studicase from '../../media/Studicase.png'
import dekoor from '../../media/dekoor.png'

const projects = [
  {
    name: 'Dekoor Furniture Website',
    date: '21 May 2025',
    description: 'Intern Frontend test from Sekawan Media',
    tools: ['ReactJS', 'MongoDB', 'Express JS', 'Node JS', 'Tailwind CSS'],
    links: {
      frontend: 'https://github.com/farizsalim/SkwnFrontendDev-1-AchmadFarizSalim',
      demo: 'https://skwn-frontend-dev-1-achmad-fariz-salim.vercel.app/'
    },
    thumbnail: dekoor
  },
  {
    name: 'Website Readdream',
    date: 'Sep 2023 - Oct 2023',
    description: 'Website to Read Comic and Novel',
    tools: ['React.JS', 'MongoDB', 'CSS', 'Express JS', 'Node JS'],
    links: {
      frontend: 'https://github.com/farizsalim/Frontend-Readdream',
      backend: 'https://github.com/farizsalim/Backend-Readdream',
      demo: 'https://frontend-readdream.vercel.app/'
    },
    thumbnail: project1
  },
  {
    name: 'APK Readdream',
    date: 'Mar 2021 - May 2021',
    description: 'Android Application for Reading Comics',
    tools: ['Android Studio', 'Firebase Google'],
    links: {
      portfolio: 'https://github.com/farizsalim/Android-Project-Readdream'
    },
    thumbnail: 'https://link-to-thumbnail.com/apk-readdream-thumbnail.jpg'
  },
  {
    name: 'SelfHealing',
    date: 'Dec 2022 - Jan 2022',
    description: 'Website to Support Mental Health',
    tools: ['ReactJS', 'MySQL', 'Express JS', 'Node JS', 'Figma'],
    links: {
      portfolio: 'https://github.com/farizsalim/SelfHealing-MassiveProject-Group3Tawanan'
    },
    thumbnail: selfhealing
  },
  {
    name: 'Menthy',
    date: 'Oct 2022 - Nov 2022',
    description: 'Website to Support Mental Health',
    tools: ['ReactJS', 'MySQL', 'Express JS', 'Node JS', 'Figma'],
    links: {
      portfolio: 'https://github.com/farizsalim/Menthy-Macro-Project'
    },
    thumbnail: menthy
  },
  {
    name: 'F&D',
    date: 'Nov 2024 - Dec 2024',
    description: 'Case Study Website for Eduwork Food and Beverage E-commerce',
    tools: ['ReactJS', 'MongoDB', 'Express JS', 'Node JS', 'CSS'],
    links: {
      frontend: 'https://github.com/farizsalim/Studi-Kasus-Frontend',
      backend: 'https://github.com/farizsalim/Studi-Kasus-Backend',
      demo: 'https://studi-kasus-frontend.vercel.app/'
    },
    thumbnail: studicase
  }
];

const Projects = () => (
  <section id="projects" className="projects">
    <div className="container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            {/* Thumbnail Image */}
            <div className="project-thumbnail">
              <img src={project.thumbnail} alt={`${project.name} Thumbnail`} />
            </div>
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
              <span className="project-date">{project.date}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tools">
              <strong>Tools: </strong>
              {project.tools.join(' | ')}
            </div>
            <div className="project-links">
              {project.links.frontend && <a href={project.links.frontend} target="_blank" rel="noopener noreferrer" className="link-btn">Frontend</a>}
              {project.links.backend && <a href={project.links.backend} target="_blank" rel="noopener noreferrer" className="link-btn">Backend</a>}
              {project.links.demo && <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="link-btn">Demo</a>}
              {project.links.portfolio && <a href={project.links.portfolio} target="_blank" rel="noopener noreferrer" className="link-btn">Portfolio</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
