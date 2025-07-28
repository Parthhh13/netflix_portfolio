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
              {/* Add your about me content here */}
              I’m Parth Pahwa, a natural overachiever and allrounder—98% in 12th grade, 10 CGPA in my first year of BTech, and equally at home leading theatre productions or coding late into the night. Whether it’s debate, dance, standup, or tech competitions, I don’t just participate—I set the pace.</p>

              <p>Confidence and genuine curiosity are my trademarks. I instinctively step up as a leader wherever I go, not because I chase the spotlight, but because I love tackling challenges head-on and helping teams win—be it on stage or in the lab.</p>

              <p>My most valuable lessons come from theatre, where I mastered the art of presentation, storytelling, and crowd engagement. It’s trained me to communicate complex ideas with clarity and heart, manage teams under pressure, and bounce back from rejection stronger than before. These skills make me an effective AI engineer and a relatable human—someone who can coach, collaborate, and motivate in any room.</p>

              <p>My work is driven by a desire to make a real-world impact. Every project, internship, and competition is a chance to raise the bar—not just for myself, but for the organizations I join. Past recruiters describe me as “the company’s best investment,” and that’s a reputation I’m proud to build on.</p>

              <p>I believe in aiming high: I’m aspiring to join the GenAI and Agentic AI revolution, with my sights set on NVIDIA—the summit of AI innovation in today’s world. My goal is simple: to earn my success the hard way, through excellence, leadership, and relentless self-growth—not handouts.</p>

              <p>If you’re looking for someone who blends technical mastery, creative flair, and unstoppable drive—let’s build something extraordinary together.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 