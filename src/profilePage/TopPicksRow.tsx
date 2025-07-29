import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaCode, FaBriefcase, FaCertificate, FaHandsHelping, FaProjectDiagram } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'casual viewer';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "About Me", imgSrc: "https://picsum.photos/seed/recommendations/250/200", icon: <FaHandsHelping />, route: "/about-me" },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/workexperience/250/200", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/projects/250/200", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/skills/250/200", icon: <FaCode />, route: "/skills" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/certifications/250/200", icon: <FaCertificate />, route: "/certifications" },
    
  ],
  developer: [
    { title: "About Me", imgSrc: "https://picsum.photos/seed/recommendations/250/200", icon: <FaHandsHelping />, route: "/about-me" },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/development/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/coding/250/200", route: "/skills", icon: <FaCode /> },
    { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", route: "/blogs", icon: <FaHandsHelping /> },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/work/250/200", route: "/work-experience", icon: <FaBriefcase /> },

  ],
  'casual viewer': [
    { title: "About Me", imgSrc: "https://picsum.photos/seed/recommendations/250/200", icon: <FaHandsHelping />, route: "/about-me" },
    { title: "Hobbies", imgSrc: "https://picsum.photos/id/1026/300/200", route: "/hobbies", icon: <FaHandsHelping /> },
    { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", route: "/blogs", icon: <FaHandsHelping /> },
    { title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", route: "/music", icon: <FaHandsHelping /> },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/planning/250/200", route: "/projects", icon: <FaProjectDiagram /> },
   
  ],
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
