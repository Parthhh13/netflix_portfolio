// queries/getProjects.ts
import { Project } from '../types';

const projectsData: Project[] = [
  {
    title: 'Agentic AI Document Assistant',
    description: 'Natural language → formatted Docs, Sheets, Presentations using LLMs + automation.',
    techUsed: 'LangChain, OpenAI, Python, Google APIs',
    image: { url: '' },
  },
  {
    title: 'DigiBuddy – RAG + LLM GenAI Chatbot',
    description: 'Built retrieval-augmented chatbot with fine-tuned LLMs and FAISS-powered vector search.',
    techUsed: 'LangChain, Hugging Face, FAISS, OpenAI, Streamlit',
    image: { url: '' },
  },
  {
    title: 'Plant Disease Classifier with Accelerated DL',
    description: 'Leaf-image classifier across 38+ diseases. CUDA-trained, 90%+ accuracy, real-time inference.',
    techUsed: 'TensorFlow, OpenCV, CNN, CUDA, NVIDIA DLI',
    image: { url: '' },
  },
  {
    title: 'ML-Based Intrusion Detection System',
    description: 'Research project on anomaly detection in CICDS-2017 dataset, emphasizing model tuning.',
    techUsed: 'Scikit-learn, ML',
    image: { url: '' },
  },
  {
    title: 'Retail Review Analyzer – Flipkart Customer Sentiment',
    description: 'Classifier + insights extractor based on sentiment analysis of Flipkart reviews.',
    techUsed: 'NLP, Pandas, NLTK, Matplotlib',
    image: { url: '' },
  },
  {
    title: 'Supermarket Inventory + Demand Forecasting System',
    description: 'Billing + stock manager with ML-driven demand forecasting to optimize restocking.',
    techUsed: 'Node.js, MongoDB, React.js, ML',
    image: { url: '' },
  },
];

export async function getProjects(): Promise<Project[]> {
  return projectsData;
}
