import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';

// Core AI & ML Icons
import { FaBrain, FaEye, FaLanguage, FaRobot } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiKeras, SiOpencv, SiHuggingface, SiLangchain, SiScikitlearn, SiPandas, SiNumpy } from 'react-icons/si';

// Accelerated Computing Icons
import { SiNvidia, SiOnnx } from 'react-icons/si';

// Full-Stack Icons
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiDjango, SiFlask, SiFastapi, SiHtml5 } from 'react-icons/si';

// Data Science Icons
import { FaChartBar, FaCogs, FaSearch, FaWrench, FaCalculator } from 'react-icons/fa';

// Soft Skills Icons
import { FaUsers, FaComments, FaHandshake, FaClock, FaMicrophone, FaTheaterMasks } from 'react-icons/fa';

import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  // Core AI & ML
  'Machine Learning': <FaBrain />,
  'Deep Learning': <FaBrain />,
  'Computer Vision': <FaEye />,
  'NLP': <FaLanguage />,
  'GenAI': <FaRobot />,
  
  // Frameworks & Libraries
  'PyTorch': <SiPytorch />,
  'TensorFlow': <SiTensorflow />,
  'Keras': <SiKeras />,
  'OpenCV': <SiOpencv />,
  'Hugging Face': <SiHuggingface />,
  'LangChain': <SiLangchain />,
  'FAISS': <FaDatabase />,
  'Scikit-learn': <SiScikitlearn />,
  'Pandas': <SiPandas />,
  'NumPy': <SiNumpy />,
  
  // Accelerated Computing
  'CUDA': <SiNvidia />,
  'TensorRT': <SiNvidia />,
  'NVIDIA NeMo': <SiNvidia />,
  'Triton Inference Server': <SiNvidia />,
  'cuDNN': <SiNvidia />,
  'ONNX': <SiOnnx />,
  
  // Full-Stack
  'Python': <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express': <SiExpress />,
  'React.js': <FaReact />,
  'MongoDB': <SiMongodb />,
  'Django': <SiDjango />,
  'Flask': <SiFlask />,
  'FastAPI': <SiFastapi />,
  'HTML/CSS/JS': <SiHtml5 />,
  
  // Data Science
  'Data Visualization': <FaChartBar />,
  'Model Optimization': <FaCogs />,
  'EDA': <FaSearch />,
  'Feature Engineering': <FaWrench />,
  'Metrics': <FaCalculator />,
  
  // Soft Skills
  'Leadership': <FaUsers />,
  'Communication': <FaComments />,
  'Teamwork': <FaHandshake />,
  'Time Management': <FaClock />,
  'Public Speaking': <FaMicrophone />,
  'Theatre': <FaTheaterMasks />,
};


const Skills: React.FC = () => {

  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills()
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.name] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
