import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="photo-section">
          <div className="photo-container">
            <img 
              src="profile/profile-photo.jpg" 
              alt="Parth Pahwa" 
              className="profile-photo"
            />
          </div>
        </div>
        
        <div className="text-section">
          <h1 className="about-title">About Me</h1>
          <div className="about-text">
            <p>
            I’m Parth Pahwa, an ambitious and driven AI engineer passionate about leveraging technology to create real-world impact. With a strong foundation in coding, problem-solving, and academic excellence scoring 98% in 12th grade and a perfect 10 CGPA in my first year of BTech. I approach every challenge with curiosity, dedication, and a collaborative spirit. My work ethos has been recognized in internships and projects, with past recruiters calling me “the company’s best investment” a standard I strive to live up to every day.</p>
              
              <p>I am deeply invested in pushing the boundaries of AI, with particular interest in the advancing fields of generative and agentic AI. I thrive on continuous learning, innovation, and applying my skills to build solutions that make a tangible difference.</p>

              <p>Beyond the technical realm, I bring unique strengths shaped by my experience in theatre and diverse extracurriculars. Leading theatre productions has honed my skills in storytelling, presentation, and audience engagement—abilities that enhance my capacity to communicate complex ideas with clarity. These experiences have also strengthened my resilience, adaptability, and ability to lead teams under pressure.</p>

              <p>Whether in a research lab, a competitive hackathon, or a creative stage production, I aim to blend technical mastery, creative insight, and leadership to deliver exceptional results. My goal is simple: to contribute meaningfully to a forward-thinking organization and build solutions that matter.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 