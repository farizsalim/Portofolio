import Photo from '../../media/PhotoCompress.png'
import './Hero.css'

const Hero = () => (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
            <div className="photo-container">
                <img className='myPhoto' src={Photo} alt="FarizSalim Profile"/>
            </div>
            <div className="hero-text">
                <h1 className="greeting">Hi, I'm Fariz Salim</h1>
                <p className="handle">Full Stack Web Developer</p>
                <a href="#projects" className="button-work">View My Project ↓</a>
                {/* Add Summary Section */}
                <div className="summary">
                    <p>
                        Information Technology student at Mataram University with a primary interest in Full Stack web development. I am proficient in JavaScript (Node.js, React.js, Express.js) and have experience using programming languages such as C++, Python, and Java in various campus assignments. I am ready to make a positive contribution to the rapidly evolving technology industry.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
);

export default Hero;
