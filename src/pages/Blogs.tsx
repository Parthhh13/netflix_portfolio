import React from 'react';
import './Blogs.css';
import { FaLinkedin } from 'react-icons/fa';

const blogs = [
  {
    title: "Decoding Generative AI: How ChatGPT and Tools Like It Actually Work",
    platform: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/posts/parth-pahwa-4501982a8_generativeai-chatgpt-nlp-activity-7335655923014606848-JJl-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEoQ3XwBZS3juzRItDUAfWR76HO3WWeyUJ4",
    description: "Simplified explanation of how tools like ChatGPT operate — from neural networks and LLMs to NLP and real-world use cases. Making AI understandable and accessible to everyone.",
    date: "1 month ago"
  },
  {
    title: "AI Set to Revolutionize Content Creation for YouTube & Instagram Reels",
    platform: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/posts/parth-pahwa-4501982a8_ai-set-to-revolutionize-content-creation-activity-7339261038095159297-o1uV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEoQ3XwBZS3juzRItDUAfWR76HO3WWeyUJ4",
    description: "Exploring how AI is reshaping content creation for platforms like YouTube & Instagram reels — from scriptwriting to smart editing, the creative process is evolving fast.",
    date: "1 month ago"
  },
  {
    title: "You're Using ChatGPT Wrong! Here's How to Fix That",
    platform: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/posts/parth-pahwa-4501982a8_youre-using-chatgpt-wrong-activity-7343894966538002432-sjHT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEoQ3XwBZS3juzRItDUAfWR76HO3WWeyUJ4",
    description: "A reality check and guide rolled into one. Dives into the most common mistakes users make and shows how to actually use Generative AI like a pro.",
    date: "1 month ago"
  },
  {
    title: "AI in 2025: The Future of Large Language Models",
    platform: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/posts/parth-pahwa-4501982a8_aiin2025-llms-generativeai-activity-7347212778836762625-rBpS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEoQ3XwBZS3juzRItDUAfWR76HO3WWeyUJ4",
    description: "Exploring the future of Large Language Models and their impact on various industries. Part of the AI in 2025 blog series.",
    date: "1 month ago"
  }
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">Thought leadership articles on AI, Generative AI, and the future of technology. Published on LinkedIn and featured by SMARRTIF AI.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-meta">
                <span className="blog-platform">{blog.platform}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
