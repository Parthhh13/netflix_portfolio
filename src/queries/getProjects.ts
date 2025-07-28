// queries/getProjects.ts
import { Project } from '../types';

const projectsData: Project[] = [
  {
    title: 'AI Interviewer Agent',
    description: 'AI-powered mock interviewer that integrates with Excel to simulate interviews, assess answers, and offer instant feedback.',
    techUsed: 'Python, Streamlit, Agentic AI, Gemini',
    image: { url: '/projects/AI-Interviewer.jpg' },
    link: 'https://github.com/Parthhh13/Excel-Interviewer.git'
  },
  {
    title: 'Digibuddy – RAG + GenAI Digital Literacy Chatbot',
    description: 'Retrieval-Augmented Generation (RAG) chatbot that empowers digital literacy; supports multi-language queries, interactive help, and content retrieval.',
    techUsed: 'Python, Django, React, GenAI, RAG',
    image: { url: '/projects/digibuddy.jpg' },
    link: 'https://github.com/Parthhh13/Digibuddy-Rag.git'
  },
  {
    title: 'Brain Tumor Detection using CNN',
    description: 'Deep learning model (CNN) to classify and detect brain tumors from medical images, enabling real-time, explainable diagnosis.',
    techUsed: 'CNN, Deep Learning, Medical Imaging, Python',
    image: { url: '/projects/Brain-tumor.jpg' },
    link: 'https://github.com/Parthhh13/Brain-Tumor.git'
  },
  {
    title: 'Plant Disease Detection using CV, ML, and Accelerated DL',
    description: 'Smart plant disease classifier combining computer vision, classical ML, and GPU-accelerated deep learning for rapid, field-ready diagnosis.',
    techUsed: 'Streamlit, CNN, Machine Learning, Computer Vision',
    image: { url: '/projects/Plant.jpg' },
    link: 'https://github.com/Parthhh13/Plant-Disease-Diagnosis.git'
  },
  {
    title: 'Machine Learning based Intrusion Detection System (Research Paper)',
    description: 'Research-driven anomaly detection system for network intrusion identification using advanced ML and cybersecurity approaches.',
    techUsed: 'Machine Learning, Anomaly Detection, Cybersecurity',
    image: { url: '/projects/ML IDS.jpg' },
    link: ''
  },
  {
    title: 'Supermarket Inventory Management System with Sales Forecasting',
    description: 'Full-stack inventory and billing system with real-time sales forecasting, leveraging AI for smarter restocking and operations.',
    techUsed: 'Node.js, Deep Learning, React, MongoDB, DevOps',
    image: { url: '/projects/supermarket.png' },
    link: 'https://github.com/Parthhh13/Supermarket-IMS.git'
  },
  {
    title: 'Pet Friendly City Campaign Website',
    description: 'Interactive campaign site—features info, stories, and a chatbot promoting pet-friendly urban policies for increased community impact.',
    techUsed: 'Web Development, React, Chatbot',
    image: { url: '/projects/Pet-friendly-city.jpg' },
    link: 'https://github.com/Parthhh13/paw-prints-in-motion.git'
  },
  {
    title: 'Netflix Portfolio',
    description: 'Personal portfolio inspired by the Netflix interface; showcases skills, projects, and credentials in an engaging, modern UI.',
    techUsed: 'Node.js, React',
    image: { url: '/projects/Netflix.jpg' },
    link: 'https://github.com/Parthhh13/netflix_portfolio.git'
  },
  {
    title: 'Flipkart CSAT Prediction',
    description: 'Sentiment analysis and customer satisfaction prediction using ML/NLP on Flipkart review data for actionable business insights.',
    techUsed: 'Machine Learning, NLP, Data Analysis, EDA',
    image: { url: '/projects/Flipkart.jpg' },
    link: 'https://github.com/Parthhh13/Flipkart-Project'
  },
  {
    title: 'Strava Data Analysis',
    description: 'Advanced analytics and dynamic visualizations of Strava users\' fitness/activity data using Python and PowerBI.',
    techUsed: 'Data Analysis, PowerBI, Python, Visualization',
    image: { url: '/projects/StravaDA.jpg' },
    link: 'https://drive.google.com/drive/folders/1yR0t0DQpiWM-KCeTVNnccmiCc_PG0dHK?usp=drive_link'
  },
];

export async function getProjects(): Promise<Project[]> {
  return projectsData;
}
