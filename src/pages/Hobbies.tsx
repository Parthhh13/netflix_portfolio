// Hobbies.tsx

import React from 'react';
import './Hobbies.css';

const hobbies = [
  {
    title: "Gaming",
    imgSrc: "/hobbies/gaming.jpg",
    description: "Passionate about strategic games and problem-solving challenges. Love exploring new worlds and competing in multiplayer games."
  },
  {
    title: "Photography",
    imgSrc: "/hobbies/photography.jpg",
    description: "Capturing moments and exploring creative perspectives through the lens."
  },
  {
    title: "Fitness & Sports",
    imgSrc: "/hobbies/fitness.jpg",
    description: "Maintaining an active lifestyle through various sports and fitness activities."
  },
  {
    title: "Music",
    imgSrc: "/hobbies/music.jpg",
    description: "Exploring different genres and occasionally playing instruments."
  },
  {
    title: "Art & Design",
    imgSrc: "/hobbies/art.jpg",
    description: "Expressing creativity through digital art and design projects."
  },
  {
    title: "Cooking",
    imgSrc: "/hobbies/cooking.jpg",
    description: "Experimenting with recipes and learning new cuisines."
  },
];

const Hobbies: React.FC = () => {
  return (
    <div className="hobbies-container">
      <h2 className="hobbies-title">🎯 Hobbies & Extra-curriculars</h2>
      <p className="hobbies-intro">Beyond my professional life, these activities keep me balanced and inspired.</p>
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={hobby.imgSrc} alt={hobby.title} className="hobby-image" />
            <div className="hobby-info">
              <h3 className="hobby-title">{hobby.title}</h3>
              <p className="hobby-description">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies; 