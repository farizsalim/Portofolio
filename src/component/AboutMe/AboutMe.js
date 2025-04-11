import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="container">
        <h2 className="section-titles">About Me</h2>
        {/* Certification & Bootcamp Section */}
        <div className="certifications">
          <h3 className="certifications-title">Certification & Bootcamp</h3>
          
          {/* Eduwork Section */}
          <div className="certification-item">
            <h4 className="certification-title">Eduwork - Full Stack MERN</h4>
            <p className="certification-date">Aug 2023 – Present</p>
            <p>
              Studying Bootstrap to develop responsive and attractive user interfaces for websites. In this regard, Bootstrap helps accelerate the design process and ensures a consistent appearance across various devices.
            </p>
            <p>
              Learning JavaScript, the programming language used for web development, enabling the creation of dynamic and interactive websites with additional functionality.
            </p>
            <p>
              Studying ExpressJS as a framework for the backend of a website. ExpressJS facilitates development with its concise operation.
            </p>
            <p>
              Learning MongoDB as a NoSQL database to store data for websites, allowing flexible data storage formats and good scalability for web-based applications.
            </p>
            <a href="https://drive.google.com/file/d/10qEdTj9yzLY7S7sHvEzjAJ49P61j1ho4/view?usp=sharing" className="certificate-link">Link to Certificate</a>
          </div>

          {/* Infinite Learning Section */}
          <div className="certification-item">
            <h4 className="certification-title">Infinite Learning (MSIB Kampus Merdeka) - Web Programming</h4>
            <p className="certification-date">Aug 2022 – Jan 2023</p>
            <p>
              Studied UI/UX design, creating designs for websites using Figma. A solid understanding of UI/UX enables the creation of intuitive and user-friendly designs that enhance the overall user experience.
            </p>
            <p>
              Learned Backend Programming using Express JS and MySQL. Backend programming manages data, business logic, authentication, and communication with the database to ensure smooth application performance.
            </p>
            <p>
              Studied Frontend Programming using React JS, implementing UI/UX designs and ensuring the interactivity and responsiveness of the website.
            </p>
            <a href="https://drive.google.com/file/d/1dtge9j-M0wl3GIhU6mJLzu2SiIlJAYgE/view?usp=sharing" className="certificate-link">Link to Certificate</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
