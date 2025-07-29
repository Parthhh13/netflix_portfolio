// Hobbies.tsx

import React from 'react';
import './Hobbies.css';

const hobbies = [
  {
    title: "Theatre 🎭",
    imgSrc: "/hobbies/theatre.jpg",
    description: "Acting since 3rd standard, I’ve gone on to write 5+ street plays, 5+ stage productions, and directed 10+ plays with 20+ actors. As theatre society president, I’ve won 8+ awards and built leadership, communication, and teamwork skills that shape how I approach both tech and life."
  },
  {
    title: "Standup Comedy 🎤",
    imgSrc: "/hobbies/standup.jpg",
    description: "I’ve performed 4+ standup comedy shows, each with 150+ people—delivering full 20-minute sets that kept the crowd laughing and engaged throughout. My sharp sense of humor isn’t just for the stage; it’s also a big part of how I bring teams together and foster great vibes wherever I go."
  },
  {
    title: "Gym and Fitness 🏋️‍♂️",
    imgSrc: "/hobbies/gym.jpg",
    description: "Forged in the gym, focused everywhere—training isn’t just about muscle; it’s discipline, consistency, and the drive to break limits. Every session pushes me to level up, stay sharp, and bring that same relentless energy to every project, stage, and team I’m part of."
  },
  {
    title: "Event/Fest Organizing 🎉",
    imgSrc: "/hobbies/fest.jpg",
    description: "As part of the core organizing team for our cultural fest Ingenuity, I helped host 20+ high-energy events for a crowd of 5,000+ over two amazing years. I also love anchoring and emceeing at college events—the stage feels like home. These experiences have sharpened my leadership, people management, and crowd engagement skills, teaching me how to drive big results, build teams, and make every event unforgettable."
  },
  {
    title: "Dance 🕺",
    imgSrc: "/hobbies/dance.jpg",
    description: "Never a natural dancer, I chose to push myself and step far outside my comfort zone—learning new moves, taking the stage, and embracing every challenge. It’s been about growth, resilience, and the joy that comes from saying “yes” to new experiences, proving to myself that effort and courage matter more than talent alone."
  },
  {
    title: "Poetry ✍️",
    imgSrc: "/hobbies/poetry.jpg",
    description: "Jokes and scripts have always flowed easily for me, but poetry was a different test—expressing my deepest thoughts in beautifully wound words was out of my comfort zone at first. Still, I leaned in, discovered a powerful new way to share my perspective, and found a love for putting emotion and story into every line."
  },
];

const Hobbies: React.FC = () => {
  return (
    <div className="hobbies-container">
      <h2 className="hobbies-title"> Hobbies & Extra-curriculars</h2>
      <p className="hobbies-intro">Outside of AI, I dive headfirst into creativity, stage, and community. My extra-curriculars aren’t just hobbies—they’ve shaped my confidence, leadership, and ability to connect with people from every walk of life. Whether I’m performing, organizing, or pushing my physical limits, these experiences have made me adaptable, expressive, and ready to own every challenge on and off the job.

Theatre.</p>
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