import { useEffect, useState } from "react";
import profilePhoto from "./assets/kanchan.jpg.jpeg";
import "./App.css";

const contactEmail = "950chhayak@gmail.com";
const whatsappUrl = "https://wa.me/919662792704";

const skills = [
  {
    name: "Programming Languages",
    icon: "CODE",
    items: ["Java", "Python", "JavaScript", "C", "C++"],
  },
  {
    name: "Frontend Development",
    icon: "UI",
    items: ["HTML", "CSS", "React.js"],
  },
  { name: "Backend Development", icon: "API", items: ["Node.js", "ASP.NET"] },
  { name: "Database", icon: "DB", items: ["SQL", "PL/SQL"] },
  { name: "Frameworks", icon: "M", items: ["MERN Stack"] },
  {
    name: "Mobile Development",
    icon: "APP",
    items: ["Android Studio", "Mobile Application Development"],
  },
  {
    name: "Computer Science Fundamentals",
    icon: "CS",
    items: ["Object-Oriented Programming (OOP)", "Data Structures"],
  },
  {
    name: "UI/UX Design",
    icon: "UX",
    items: ["User Interface Design", "User Experience (UX)"],
  },
  { name: "Operating Systems", icon: "OS", items: ["Linux"] },
];

const projects = [
  {
    title: "Styashion",
    type: "Fashion e-commerce website",
    description:
      "Developed a fashion e-commerce website where users can browse, explore, and purchase products. Implemented product listings, category navigation, product details, and a responsive shopping experience.",
    tags: ["E-commerce", "Product listings", "Responsive design"],
    tone: "lavender",
    mark: "S.",
  },
  {
    title: "Online Assignment Submission System",
    type: "Python application",
    description:
      "Built a menu-driven application for students to submit and view assignments, with MySQL storage. Used Python functions, loops, conditionals, SQL queries, and CRUD operations to manage assignment records.",
    tags: ["Python", "MySQL", "CRUD"],
    tone: "peach",
    mark: "A+",
  },
  {
    title: "ChargeSpot",
    type: "EV Charging Station Platform",
    description:
      "A user-friendly EV charging platform profile experience for managing personal details, reservations, charging history, and account preferences.",
    tags: [
      "My Reservations",
      "Charging History",
      "Favorites",
      "Settings",
      "Profile",
      "Logout",
    ],
    tone: "mint",
    mark: "C.",
    contribution:
      "Designed the UI/UX with a focus on intuitive navigation, accessible layouts, and a consistent visual experience.",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#/" onClick={closeMenu}>
          <span className="brand-mark">k</span> kanchan
          <span className="brand-dot">.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#/" onClick={closeMenu}>
            Home
          </a>
          <a href="#/about" onClick={closeMenu}>
            About
          </a>
          <a href="#/skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#/projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#/experience" onClick={closeMenu}>
            Experience
          </a>
          <a className="nav-contact" href="#/contact" onClick={closeMenu}>
            Let’s talk <span>↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <span className="availability">
          <span /> Full Stack Developer
        </span>
        <p className="hero-intro">Hello, I’m Kanchan.</p>
        <h1>
          I build web
          <br />
          experiences from
          <br />
          <span>front to back.</span>
        </h1>
        <p className="hero-description">
          Turning ideas into functional, responsive, and user-friendly web
          applications.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#/projects">
            Explore my work <span>↗</span>
          </a>
          <a className="text-link" href="#/contact">
            Get in touch <span>→</span>
          </a>
        </div>
        <div className="hero-note">
          <span className="note-line" /> Based in Nadiad, Gujarat
        </div>
      </div>
      <div className="portrait-wrap">
        <div className="portrait-orbit orbit-one" />
        <div className="portrait-orbit orbit-two" />
        <div className="portrait-card">
          <img
            className="profile-photo"
            src={profilePhoto}
            alt="Kanchan Shrivastava"
          />
        </div>
        <span className="float-star star-one">✳</span>
        <span className="float-star star-two">✦</span>
        <span className="float-label">
          KANCHAN SHRIVASTAVA
          <br />
          <small>DEVELOPER </small>
        </span>
      </div>
    </section>
  );
}

function Home() {
  return <Hero />;
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <SectionHeading
          eyebrow="ABOUT ME"
          title={
            <>
              Full stack, from idea
              <br />
              <span>to implementation.</span>
            </>
          }
        />
        <div className="about-copy">
          <p>
            I am a Full Stack Developer with hands-on experience building web
            applications using modern web technologies. I enjoy developing both
            frontend and backend solutions, from responsive user interfaces to
            server-side functionality and database integration.
          </p>
          <p>
            My technical skill set includes HTML5, CSS3, Java, Python,
            JavaScript, and C++, with frontend experience in React.js and JSX.
            For backend development, I work with Node.js and Express.js, and
            databases including MongoDB and SQL. I have integrated frontend
            interfaces with backend APIs and MongoDB databases in practical
            full-stack projects.
          </p>
          <p>
            I am passionate about learning new technologies, solving problems,
            writing clean code, and continuously improving my development
            skills.
          </p>
          <a href="#/contact" className="text-link">
            Get in touch <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function WorkExperience() {
  const experiences = [
    {
      title: "Customer Care Executive",
      designation: "Executive",
      company: "Reliance",
      period: "",
      location: "Anand, Gujarat",
      workMode: "Work From Home",
      description:
        "Working as a Customer Care Executive, handling customer queries and providing assistance with service-related issues. Developing communication, problem-solving, customer handling, and professional skills.",
    },
  ];
  return (
    <section className="section experience-page">
      <div className="container">
        <div className="experience-heading">
          <span className="eyebrow">WORK EXPERIENCE</span>
          <h2>Professional experience.</h2>
          <p>Roles and experience from my career.</p>
        </div>
        <div className="experience-timeline">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.title}-${experience.company || "pending"}`}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience }) {
  const initials = experience.company ? experience.company.slice(0, 1) : "C";
  return (
    <article className="experience-card">
      <span className="experience-mark" aria-hidden="true">
        {initials}
      </span>
      <div className="experience-copy">
        <div className="experience-title-row">
          <h3>{experience.title}</h3>
          {experience.designation && (
            <span className="experience-designation">
              {experience.designation}
            </span>
          )}
        </div>
        {experience.company && (
          <p className="experience-company">{experience.company}</p>
        )}
        {(experience.period || experience.location || experience.workMode) && (
          <div className="experience-meta">
            {experience.period && <span>{experience.period}</span>}
            {experience.location && <span>{experience.location}</span>}
            {experience.workMode && <span>{experience.workMode}</span>}
          </div>
        )}
        {experience.description && (
          <p className="experience-description">{experience.description}</p>
        )}
        {!experience.period && (
          <p className="experience-pending">Employment period not provided.</p>
        )}
      </div>
    </article>
  );
}
function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="skills-intro">
          <SectionHeading
            eyebrow="TECHNICAL SKILLS"
            title={
              <>
                Skills for building <span>across the stack.</span>
              </>
            }
          >
            <span>
              A broad foundation across software development, design, and
              computing.
            </span>
          </SectionHeading>
        </div>
        <div className="skills-grid">
          {skills.map((category) => (
            <SkillCategoryCard key={category.name} category={category} />
          ))}
        </div>
        <div className="credentials">
          <span className="eyebrow">CERTIFICATIONS & ACTIVITIES</span>
          <div className="credential-list">
            <article className="credential-card">
              <span className="credential-icon">✦</span>
              <div>
                <h3>HackOut’26 — Hackathon Participant</h3>
                <p>
                  Member of Team RKPulse, representing Dharmsinh Desai Institute
                  of Technology (DDIT), Gujarat, at DA-IICT Gandhinagar
                  Tech-Fest Vyom 2026.
                </p>
              </div>
              <span className="credential-year">2026</span>
            </article>
            <article className="credential-card">
              <span className="credential-icon">✦</span>
              <div>
                <h3>National Cadet Corps</h3>
                <p>National Cadet Corps (NCC)</p>
              </div>
            </article>
            <CertificateCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCategoryCard({ category }) {
  return (
    <article className="skill-card">
      <div className="skill-category-heading">
        <span className="skill-icon" aria-hidden="true">
          {category.icon}
        </span>
        <h3>{category.name}</h3>
      </div>
      <div className="skill-badges">
        {category.items.map((item) => (
          <span className="skill-badge" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function CertificateCard() {
  return (
    <article className="credential-card aws-certificate-card">
      <span className="credential-icon" aria-hidden="true">
        AWS
      </span>
      <div className="certificate-details">
        <span className="certificate-organization">
          AWS STUDENT BUILDER GROUP &middot; 2026
        </span>
        <h3>AWS Student Community Day 2026</h3>
        <p className="certificate-workshop">
          Building Multi-Agent Systems on Bedrock
        </p>
        <p>Dharmsinh Desai University (DDU) &middot; 26 September 2026</p>
        <p className="certificate-recipient">
          Awarded to Kanchan Ramankumar Srivastava
        </p>
      </div>
    </article>
  );
}
function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="projects-heading">
          <SectionHeading
            eyebrow="SELECTED PROJECTS"
            title="Things I’ve built."
          />
          <p>A mix of product design and development work.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const isChargeSpot = project.title === "ChargeSpot";
  return (
    <article className="project-card">
      <div className={`project-art ${project.tone}`}>
        <span className="project-art-mark">{project.mark}</span>
        <span className="art-decoration" />
      </div>
      <div className="project-info">
        <div className="project-meta">
          <span className="project-type">{project.type}</span>
          {isChargeSpot && (
            <span className="project-category-badge">UI/UX Design</span>
          )}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.contribution && (
          <p className="project-contribution">
            <strong>My contribution:</strong> {project.contribution}
          </p>
        )}
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const whatsappMessageUrl = `${whatsappUrl}?text=${encodeURIComponent("Hi Kanchan, I would like to discuss a project with you.")}`;
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setEmailCopied(true);
    } catch {
      setEmailCopied(false);
    }
  }
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">HAVE A GOOD ONE IN MIND?</span>
          <h2>
            Let’s make
            <br />
            something <span>great.</span>
          </h2>
          <p>
            Have a project, a question, or just want to say hello? Choose the
            way you’d like to reach me.
          </p>
        </div>
        <div className="contact-actions">
          <ContactMethod
            href={`mailto:${contactEmail}`}
            icon="@"
            title="Send an email"
            detail={contactEmail}
          />
          <ContactMethod
            href={whatsappMessageUrl}
            icon="W"
            title="Message on WhatsApp"
            detail="+91 96627 92704"
            external
          />
          <button
            className="contact-copy-button"
            type="button"
            onClick={copyEmail}
          >
            {emailCopied ? "Email address copied" : "Copy email address"}{" "}
            <span aria-hidden="true">{emailCopied ? "✓" : "+"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function ContactMethod({ href, icon, title, detail, external = false }) {
  return (
    <a
      className="contact-method"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="contact-method-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="contact-method-copy">
        <strong>{title}</strong>
        <small>{detail}</small>
      </span>
      <span className="contact-method-arrow" aria-hidden="true">
        &#8599;
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand" href="#/">
          <span className="brand-mark">k</span> kanchan
          <span className="brand-dot">.</span>
        </a>
        <p>
          Made with care & a little bit of coffee.{" "}
          <span>© 2026 Kanchan Shrivastava</span>
        </p>
        <div className="social-links">
          <a
            href="https://github.com/kanchanshrivastava2306"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span>↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kanchan-shrivastava-ab3067380?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span>↗</span>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp <span>↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [page, setPage] = useState(
    window.location.hash.replace("#/", "") || "home",
  );
  useEffect(() => {
    const updatePage = () =>
      setPage(window.location.hash.replace("#/", "") || "home");
    window.addEventListener("hashchange", updatePage);
    return () => window.removeEventListener("hashchange", updatePage);
  }, []);
  const pages = {
    home: <Home />,
    about: <About />,
    skills: <Skills />,
    projects: <Projects />,
    experience: <WorkExperience />,
    contact: <Contact />,
  };
  return (
    <>
      <Navbar />
      <main className="page-content" key={page}>
        {pages[page] || <Home />}
      </main>
      <Footer />
    </>
  );
}

export default App;
