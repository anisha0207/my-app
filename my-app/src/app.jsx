import './app.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <header>
          <h1>
            <Link to="/home">Innovating with Passion: One Project at a Time</Link>
          </h1>
        </header>

        {/* Image and Content Container */}
        <div className="image-and-content">
          {/* Profile Image */}
          <img src="/profile.jpg" className="portfolio-img" alt="Profile" />

          {/* Navigation and Section Content */}
          <div className="content-container">
            {/* Navigation Tabs */}
            <nav>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>

            {/* Main Message Displayed on Website Load */}
            <section className="content-box">
              <h2>Hi! My name is Anisha Dasgupta</h2>
              <p>I'm a sophomore at Lehigh University majoring in Computer Science and Engineering. Explore my portfolio to learn more about my projects, experiences, and passions in technology.</p>
            </section>

            {/* Routes for Content */}
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/research" element={<Research />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/home" element={<Home />} /> {/* Default route */}
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <footer>
          <p>© 2025 Anisha Dasgupta</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section className="content-box">
      <h2>Hi! My name is Anisha Dasgupta</h2>
      <p>I'm a sophomore at Lehigh University majoring in Computer Science and Engineering. Explore my portfolio to learn more about my projects, experiences, and passions in technology.</p>
    </section>
  );
}

function About() {
  return (
    <section className="content-box">
      <h2>About Me</h2>
      <p>Technology has always been a thrilling challenge for me, but nothing compares to the adrenaline rush of solving real-world problems under pressure. During my IT internship at Hard Rock Casino, I found myself racing against time to troubleshoot system crashes across multiple departments. Amidst the chaos, I discovered the thrill of diving into complex issues, staying calm, and applying critical problem-solving skills to restore operations. In addition to strengthening my technical skills, this experience ignited my passion for software development, database systems, and project management.</p>

<p>My work allowed me to analyze and improve critical systems, such as Halo and CMP, where I gained hands-on experience in bug analysis, software testing, and database reliability. Observing a project manager in action further inspired me to develop the leadership skills needed to align teams, delegate tasks, and deliver results efficiently.</p>

<p>Through academic projects, like building circuits and programming automated systems in a robotics lab, I’ve gained my technical foundation in software development and grown my interest in database systems. This allowed me to explore ways to optimize data handling and ensure robust, scalable software.</p>

<p>Balancing academic workload with challenging technical projects has taught me how to prioritize effectively, adapt to new environments, and stay organized. I am excited to continue advancing my skills within these realms that will transform industries and empower others to innovate as well.</p> 
    </section>
  );
}

function Research() {
  return (
    <section className="content-box">
      <h2>Research Projects</h2>
      <p>University of Galway Research Summer Program 2025...</p> {/* Shortened for simplicity */}
    </section>
  );
}

function Blog() {
  const [selectedMainTab, setSelectedMainTab] = useState(null);

  // Main tabs
  const mainTabs = ["Gilman Award Winner 2024 -- Essay Highlights", "Trip to Ireland Reflections"];

  // Content for Gilman Award Winner essays
  const gilmanContent = (
    <>
      <h3>Purpose</h3>
      <p>Here I am, staring at the empty blue screens– my heart is racing and my palms are sweating as I run to each computer screen across all departments on the casino floor. For anyone in IT, this is the ultimate nightmare: a system crashes throughout the entire department at the worst possible moment – when customers are coming in. My mind flooded with panic, but amidst the chaos, a surge of excitement hit me. I was able to dive deep into troubleshooting and solving something big. I felt the fear, but it was a journey that was filled with thrill and triumph in the end. I managed to reboot the system in time, and the experience taught me the value of staying calm under pressure and being able to apply my problem-solving skills. </p>
<p>reland stood out to me as the ideal host country for several reasons. First, Ireland’s impressive technology sector appealed to me in areas like software development and project management, which aligned with my career goals. With that said, the University of Galway offers a program that matches my interest in automated task allocation for software project management which is an opportunity for me to dive deep into this field and to learn from the experts. Second, I have always admired Irish culture, folklore, and traditions which taking a three-credit class in Irish Studies will allow me to learn more about. Not only am I excited to take this course, but I am also very eager to explore Ireland’s vibrant cities and historical sites. This unique opportunity will help me shape my personal growth and professional development. </p>
<p>This past summer, I was an IT intern at Hard Rock Casino. Adjusting to this new lifestyle and workplace was an experience that I will carry through to my study abroad trip to Ireland. Interacting with my co-workers in a professional and approachable manner helped me build strong relationships and learn more effectively. Note-taking, setting clear goals, staying organized, and seeking feedback from coworkers helped me cope with the new environment. This internship allowed me to learn how to work across generations and different ethnic backgrounds. Being the only young person on the team allowed me to learn how to get along with people. Learning alongside my co-workers helped me realize how I could fit into the environment and make it my own space for learning and building new skills. This experience is what will help me achieve my goals at the University of Galway in Ireland. During my internship, I had the opportunity to observe my co-worker, a project manager, in how she structured her day. I watched closely as she led team meetings, and ensured tasks were allocated and completed efficiently. Her communication style was direct and collaborative which gave her the ability to keep the team aligned and on track. I learned the importance of time management, actively listening to others, and being able to delegate tasks. These skills are vital for effective project management, which is something I would like to incorporate into my study abroad experience.</p>
<p>Becoming a Project Manager in Information Technology is a career path that I want to take. Attending the University of Galway for the summer of 2025 will be an opportunity to work with faculty and apply my degree globally, especially their program on automated task allocation for software project management. This program aligns with my passion for project management and managing software systems. Aside from developing my technical skills in software development, I aim to develop soft skills such as collaboration and cross-cultural communication. I am looking forward to engaging in discussions and group projects with diverse peers and faculty members as a part of this program to enhance my collaboration and communication skills. These experiences will give me insight into teamwork and leadership, which is essential when leading teams as a project manager in IT. This experience will be applied in the diverse market, particularly in AI and fintech. Having this program, which focuses on software development, data science, and more will deepen my insight into today’s interconnected and evolving technological world. While this will be my first international experience, having exposure to diverse cultures will help me approach technology from a more inclusive perspective and create solutions that are effective across different cultural aspects. </p>
<p>At Lehigh University, I took several classes that I believe will be valuable during my time in Ireland. I took classes like data structures and algorithms and applied real-world engineering applications in Python class to help me develop my problem-solving skills and gain a deeper understanding of other technical concepts. These courses will allow me to approach other projects, especially in Ireland, with a foundation while being able to collaborate with international peers. A challenge for me academically was balancing rigorous course workloads with extracurricular activities like participating in the LEELA Indian Fusion Dance Team and being the secretary of a Bangladeshi club in college. Initially, I found it difficult to balance these obligations, feeling overwhelmed by rehearsal schedules, deadlines, and club meetings. However, I learned to prioritize my tasks by creating schedules and goals each day. I became more adaptable to how I shifted my focus quickly between academic work, club responsibilities, and dance practices without losing track. Recently, I have been more proactive on most busy weeks and started to prepare in advance, allowing me to be more efficient. This experience taught me time management and adaptability which will help me along my journey to Ireland.</p> 
<p>Reflecting on my IT summer internship, I remember the flashing error messages and the chaos that filled the air as I sprinted from one blue screen to the other. In those moments, I learned how I can work under pressure, stay calm and think critically. This experience gave me a deeper understanding of how I can troubleshoot on a large scale and the satisfaction it gave me when resolving an urgent crisis. As I look ahead to my study abroad experience in Ireland, the technical skills from my internship along with my problem-solving and teamwork ability will be crucial. Just like the moment on the casino floor, I am ready to face new challenges and embrace the unexpected on my journey through my study abroad in Ireland.</p>

      <h3>Mutual Understanding</h3>
      <p>Growing up in an immigrant family from Bangladesh led me to witness the challenges, sacrifices, and hopes that pushed my parents to a better future for my brother and me. Their dedication gave me a sense of perseverance, gratitude, and shomman – a core value in my culture that emphasizes respect for elders, tradition, and family honor. These values shape my daily life by guiding my decisions, motivating me to work hard, and remaining grounded in my heritage. Every morning, no matter how busy or rushed I am to go to school or an important event, I make sure to get blessings from God and my parents before leaving the house. This is a small gesture that represents my gratitude and acknowledgment of my parent’s sacrifices and their love. This tradition is outside of what is typically expressed in love and thankfulness, but it was deeply rooted in my everyday routine growing up. </p>
<p>Adapting to the American way of life while connecting to my Bangladeshi heritage allowed me to understand the importance of resilience while having a sense of empathy. I learned to listen actively and support others facing similar challenges. Each time I faced confusion or felt out of place, I learned to persevere, finding strength in both my heritage and my adaptability, which will be valuable in a new environment in Ireland. With my cultural background as a first-generation American college student and experience as a U.S. citizen, I would highlight the diversity that America holds, where cultures coexist and foster a mutual understanding of one another. Just as I had a sense of shomman within all cultural backgrounds from friends and families, I will continue to uphold those values in Ireland.</p>
<p>I strive to get to know the people and what their lifestyles are like to be able to connect with them. In Ireland, I look forward to connecting with people in exploring art in all forms, especially through dance, allowing me to gain a new creative outlook. I view art as a form of a universal language that fills the cultural gap; art is one thing that made me appreciate how connected we all are and continue to be. University of Galway’s DanSoc (Dance Society), a dance performance team, intrigued me while researching the university’s arts and performances section. This resonates with my passion for dance, as I am actively performing at Lehigh University’s Indian Fusion dance team where I regularly perform and collaborate with others. I plan to connect with my peers on the DanSoc dance team by attending their practice rehearsals and also helping them backstage before their performances. Being an active member of a dance team taught me how dance brings people from diverse backgrounds together. I look forward to learning about the team dynamics, the practice culture, and how people communicate with each other through DanSoc. Having this cross-cultural experience is something that I can’t miss in Ireland. </p>

      <h3>STEM Interest</h3>
      <p>The robot beeped its tune! After hours of meticulous work, my robot finally followed my code. I manipulated the robot’s motions with a controller and made it approach people and tell a joke. It brought a smile to my face as I listened. My strategic thinking and problem-solving skills motivated me to pursue STEM fields. This drive led me to pursue computer science.</p>
<p>As a computer science major, I was particularly drawn to a research project in Ireland on automated task allocation for software project management. Specifically, I will be exploring how to build existing work on multiple objective optimization to improve schedule efficiency. After graduating from Lehigh, I plan to pursue project management, and this research experience will help me develop the skills necessary to create efficient project management tools for a large-scale team.</p>

      {/* Add more paragraphs as needed */}
    </>
  );

  const travelContent = (
    <>
      {/* Full content for Trip to Ireland Reflections */}
      <p>Reflections on traveling abroad and cultural experiences.</p>

      {/* Add more paragraphs */}
    </>
  );

  const handleGoBack = () => {
    setSelectedMainTab(null);
  };

  return (
    <section className="content-box">
      <h2>Blog</h2>

      {/* Main Tabs */}
      {!selectedMainTab && (
        <>
          <ul className="blog-tabs">
            {mainTabs.map((tab) => (
              <li
                key={tab}
                className={`blog-tab ${selectedMainTab === tab ? "active" : ""}`}
                onClick={() => setSelectedMainTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>

          {/* Initial Instructions */}
          {!selectedMainTab && (
            <div className="blog-content">
              <p>Select a topic above to view content.</p>
            </div>
          )}
        </>
      )}

      {/* Content for Gilman Award Winner */}
      {selectedMainTab === "Gilman Award Winner 2024 -- Essay Highlights" && (
        <>
          <div className="blog-content">{gilmanContent}</div>
          {/* Go Back Button */}
          <button className="go-back-button" onClick={handleGoBack}>
            Go Back to Main Blog Page
          </button>
        </>
      )}

      {/* Content for Travel Reflections */}
      {selectedMainTab === "Trip to Ireland Reflections" && (
        <>
          <div className="blog-content">{travelContent}</div>
          {/* Go Back Button */}
          <button className="go-back-button" onClick={handleGoBack}>
            Go Back to Main Blog Page
          </button>
        </>
      )}
    </section>
  );
}

function Contact() {
  return (
    <section className="content-box">
      <h2>Contact Me</h2>
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/anisha-dasgupta" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin.jpg" alt="LinkedIn" style={{ width: '50px', marginRight: '10px' }} />
      </a>

      {/* GitHub */}
      <a href="https://github.com/anisha0207" target="_blank" rel="noopener noreferrer">
        <img src="/github.png" alt="GitHub" style={{ width: '50px', marginRight: '10px' }} />
      </a>

      {/* Email */}
      <a href="mailto:anishadasgupta8@gmail.com">
        <img src="/gmail.jpg" alt="Email" style={{ width: '50px' }} />
      </a>
    </section>
  );
}

export default App;
