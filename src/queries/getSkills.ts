// queries/getSkills.ts
import { Skill } from '../types';

const skillsData: Skill[] = [
  // Core AI & ML
  { name: 'Machine Learning', category: 'Core AI & ML', description: 'Supervised, unsupervised, and reinforcement learning', icon: 'Machine Learning' },
  { name: 'Deep Learning', category: 'Core AI & ML', description: 'Neural networks, CNNs, RNNs, transformers', icon: 'Deep Learning' },
  { name: 'Computer Vision', category: 'Core AI & ML', description: 'Image processing, object detection, segmentation', icon: 'Computer Vision' },
  { name: 'NLP', category: 'Core AI & ML', description: 'Text classification, sentiment analysis, LLMs', icon: 'NLP' },
  { name: 'GenAI', category: 'Core AI & ML', description: 'Generative AI, RAG, LLMs', icon: 'GenAI' },
  // Frameworks & Libraries
  { name: 'PyTorch', category: 'Frameworks & Libraries', description: 'Deep learning framework', icon: 'PyTorch' },
  { name: 'TensorFlow', category: 'Frameworks & Libraries', description: 'Deep learning framework', icon: 'TensorFlow' },
  { name: 'Keras', category: 'Frameworks & Libraries', description: 'High-level neural networks API', icon: 'Keras' },
  { name: 'OpenCV', category: 'Frameworks & Libraries', description: 'Computer vision library', icon: 'OpenCV' },
  { name: 'Hugging Face', category: 'Frameworks & Libraries', description: 'NLP and transformer models', icon: 'Hugging Face' },
  { name: 'LangChain', category: 'Frameworks & Libraries', description: 'LLM orchestration', icon: 'LangChain' },
  { name: 'FAISS', category: 'Frameworks & Libraries', description: 'Vector search', icon: 'FAISS' },
  { name: 'Scikit-learn', category: 'Frameworks & Libraries', description: 'ML algorithms and utilities', icon: 'Scikit-learn' },
  { name: 'Pandas', category: 'Frameworks & Libraries', description: 'Data manipulation', icon: 'Pandas' },
  { name: 'NumPy', category: 'Frameworks & Libraries', description: 'Numerical computing', icon: 'NumPy' },
  // Accelerated Computing
  { name: 'CUDA', category: 'Accelerated Computing', description: 'GPU programming', icon: 'CUDA' },
  { name: 'TensorRT', category: 'Accelerated Computing', description: 'Inference optimization', icon: 'TensorRT' },
  { name: 'NVIDIA_NeMo', category: 'Accelerated Computing', description: 'Conversational AI toolkit', icon: 'NVIDIA NeMo' },
  { name: 'Triton  Inference  Server', category: 'Accelerated Computing', description: 'Model serving', icon: 'Triton Inference Server' },
  { name: 'cuDNN', category: 'Accelerated Computing', description: 'GPU-accelerated primitives', icon: 'cuDNN' },
  { name: 'ONNX', category: 'Accelerated Computing', description: 'Open neural network exchange', icon: 'ONNX' },
  // Full-Stack
  { name: 'Python', category: 'Full-Stack', description: 'Programming language', icon: 'Python' },
  { name: 'Node.js', category: 'Full-Stack', description: 'Backend JavaScript runtime', icon: 'Node.js' },
  { name: 'Express', category: 'Full-Stack', description: 'Node.js web framework', icon: 'Express' },
  { name: 'React.js', category: 'Full-Stack', description: 'Frontend library', icon: 'React.js' },
  { name: 'MongoDB', category: 'Full-Stack', description: 'NoSQL database', icon: 'MongoDB' },
  { name: 'Django', category: 'Full-Stack', description: 'Python web framework', icon: 'Django' },
  { name: 'Flask', category: 'Full-Stack', description: 'Python microframework', icon: 'Flask' },
  { name: 'FastAPI', category: 'Full-Stack', description: 'Python web framework', icon: 'FastAPI' },
  { name: 'HTML/CSS/JS', category: 'Full-Stack', description: 'Web technologies', icon: 'HTML/CSS/JS' },
  // Data Science
  { name: 'Data Visualization', category: 'Data Science', description: 'Charts, graphs, dashboards', icon: 'Data Visualization' },
  { name: 'Model Optimization', category: 'Data Science', description: 'Hyperparameter tuning', icon: 'Model Optimization' },
  { name: 'EDA', category: 'Data Science', description: 'Exploratory data analysis', icon: 'EDA' },
  { name: 'Feature Engineering', category: 'Data Science', description: 'Feature creation and selection', icon: 'Feature Engineering' },
  { name: 'Metrics', category: 'Data Science', description: 'Evaluation metrics', icon: 'Metrics' },
  // Soft Skills
  { name: 'Leadership', category: 'Soft Skills', description: 'Team leadership', icon: 'Leadership' },
  { name: 'Communication', category: 'Soft Skills', description: 'Effective communication', icon: 'Communication' },
  { name: 'Teamwork', category: 'Soft Skills', description: 'Collaboration', icon: 'Teamwork' },
  { name: 'Time Management', category: 'Soft Skills', description: 'Efficient time use', icon: 'Time Management' },
  { name: 'Public Speaking', category: 'Soft Skills', description: 'Presentations', icon: 'Public Speaking' },
  { name: 'Theatre', category: 'Soft Skills', description: 'Stage performance', icon: 'Theatre' },
];

export async function getSkills(): Promise<Skill[]> {
  return skillsData;
}
