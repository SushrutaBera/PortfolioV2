import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./App.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // --- Navbar Scroll Logic ---
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    // --- AOS Intersection Observer Logic ---
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.2 }); // Triggers when 20% of the element is visible

    const hiddenElements = document.querySelectorAll('.AOS');
    hiddenElements.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const projectData = [
    {
      id: 1,
      title: "Project One",
      desc: "AI Voice Assistant",
      github: "https://github.com/SushrutaBera/CS50-final-project"
    },
    {
      id: 2,
      title: "Project Two",
      desc: "Real or AI Image Detection Model",
      github: "https://github.com/SushrutaBera/Real-AI-Image-Detection"
    },
    {
      id: 3,
      title: "Project Three",
      desc: "EDA on Air Quality Dataset",
      github: "https://github.com/SushrutaBera/TAM-task"
    },
    {
      id: 4,
      title: "Project Four",
      desc: "Backend with Java Spring Boot",
      github: "https://github.com/SushrutaBera/Spring-Movies"
    },
    {
      id: 5,
      title: "Project Five",
      desc: "GUI Calculator using Javax",
      github: "https://github.com/SushrutaBera/GUI-calculator-java"
    }
  ];

  return (
    <>
      {/* Background */}
      <div className="bg-animation">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>
      <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
        <h2>My Portfolio</h2>

        {/* Hidden Checkbox*/}
        <input type="checkbox" id="nav-checkbox" className="nav-checkbox" />

        {/* Hamburger Icon*/}
        <label htmlFor="nav-checkbox" className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </label>

        {/* existing UL */}
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="home">
        <div className="intro AOS">
          <h1>Hi, I'm <span>Sushruta Bera</span></h1>
          <div>
            <p>I’m a full-stack developer who enjoys building web apps.</p>
            <p>I work with Spring Boot, Express.js, and C/C++.</p>
            <p>I explore Unity, Blender, and data analysis with Python & R.</p>
          </div>
        </div>
        <div className="profile">
          <div className="image-placeholder">Your Photo</div>
        </div>
      </section>

      {/*About me*/}
      {/* About Me Section */}
      <section id="about" className="about-section AOS">
        <div className="about-container">
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I am a passionate <strong>Full-Stack Developer</strong> currently honing my skills in
              modern web technologies. My journey started with a fascination for how
              software can solve real-world problems, leading me to master
              <strong> Spring Boot</strong> and <strong>Express.js</strong>.
            </p>

            <div className="skills-grid">
              <span className="skill-badge">Spring Boot</span>
              <span className="skill-badge">React</span>
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">expressJS</span>
              <span className="skill-badge">Python</span>
              <span className="skill-badge">Java</span>
              <span className="skill-badge">Unity</span>
              <span className="skill-badge">C/C++</span>
            </div>

            <div className="personal-details">
              <div className="education">
                <h3>Education</h3>
                <ul>
                  <li><p><strong>Class X(Secondary), ICSE - </strong></p><p>Vidyasagar Shishu Niketan, 2022</p></li>
                  <li><p><strong>Class XII(Higher-Secondary), ISC - </strong></p><p>Vidyasagar Shishu Niketan, 2024</p></li>
                  <li><p><strong>B.Tech</strong> - Vellore Instituite of Technology, Vellore</p></li>
                </ul>
              </div>

              <div className="hobbies">
                <h3>Beyond Coding</h3>
                <ul>
                  <li><p>I am passionate about <strong>Photography</strong>.</p></li>
                  <li><p>I love reading detective <strong>story books</strong> (Sherlock Holmes, Hercule Poirot etc...).</p></li>
                  <li><p>I once stood <strong>3rd</strong> in my district <strong>chess</strong> competition.</p></li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* NEW Projects Section */}
      <section id="projects">
        <h1 style={{ textAlign: "center", marginBottom: "50px" }}>My Projects</h1>

        <div className="timeline-line"></div>

        {projectData.map((project) => (
          <div key={project.id} className="project-item">
            <div className="circle"></div>
            <div className="project-card AOS">
              <h3>{project.title}</h3>
              <p><strong>{project.desc}</strong></p>

              {/* The GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </section>

      <section id="contact" className="AOS">
        <div className="contact-container">
          <h1>Get In Touch</h1>
          <p>Feel free to reach out to me via any one of these sites.</p>

          <div className="contact-links">
            {/* Email */}
            <a href="mailto:sushrutabera1502@gmail.com" className="contact-item">
              <FaEnvelope className="icon" />
              <div className="contact-text">
                <h3>Email</h3>
                <p>sushrutabera1502@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/sushruta-bera-372338254/" target="_blank" rel="noreferrer" className="contact-item">
              <FaLinkedin className="icon" />
              <div className="contact-text">
                <h3>LinkedIn</h3>
                <p>Sushruta Bera</p>
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/SushrutaBera" target="_blank" rel="noreferrer" className="contact-item">
              <FaGithub className="icon" />
              <div className="contact-text">
                <h3>GitHub</h3>
                <p>github.com/SushrutaBera</p>
              </div>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/sb_liminality" target="_blank" rel="noreferrer" className="contact-item">
              <FaInstagram className="icon" />
              <div className="contact-text">
                <h3>Instagram</h3>
                <p>@sb_liminality</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;