import React from 'react';
import './TechnicalSkills.css';
import { FaJs, FaReact, FaCss3, FaHtml5, FaNode,FaBootstrap } from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { SiFigma } from 'react-icons/si';

const TechnicalSkills = () => {
  const skills = [
    { icon: <FaJs />, title: 'JavaScript', description: 'A versatile programming language for both client-side and server-side development.' },
    { icon: <FaReact />, title: 'React.js', description: 'A library for building user interfaces with reusable components.' },
    { icon: <FaCss3 />, title: 'CSS', description: 'Styling language for web pages, controlling layout and appearance.' },
    { icon: <FaHtml5 />, title: 'HTML', description: 'The standard language for structuring web pages and defining elements.' },
    { icon: <FaNode />, title: 'Node.js', description: 'JavaScript runtime for building scalable backend services.' },
    { icon: <FaNode />, title: 'Express.js', description: 'Minimalist web framework for Node.js to build APIs and server-side applications.' },
    { icon: <DiMongodb />, title: 'MongoDB', description: 'A NoSQL database for storing data in JSON-like format.' },
    { icon: <DiMysql />, title: 'MySQL', description: 'A relational database management system using SQL.' },
    { icon: <FaBootstrap />, title: 'Bootstrap', description: 'A front-end framework for responsive web design.' },
    { icon: <SiFigma />, title: 'Figma', description: 'A web-based UI/UX design tool for collaborative interface design.' },
  ];

  return (
    <section id="skills" className="technical-skills">
      <div className="container">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
