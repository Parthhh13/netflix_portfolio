// queries/getSkills.ts
import { Skill } from '../types';

const skillsData: Skill[] = [
  // Core AI & ML
  { name: 'Machine Learning', category: 'Core AI & ML', description: 'Supervised, unsupervised, and reinforcement learning', icon: 'FaReact' },
  { name: 'Deep Learning', category: 'Core AI & ML', description: 'Neural networks, CNNs, RNNs, transformers', icon: 'FaReact' },
  { name: 'Computer Vision', category: 'Core AI & ML', description: 'Image processing, object detection, segmentation', icon: 'FaReact' },
  { name: 'NLP', category: 'Core AI & ML', description: 'Text classification, sentiment analysis, LLMs', icon: 'FaReact' },
  { name: 'GenAI', category: 'Core AI & ML', description: 'Generative AI, RAG, LLMs', icon: 'FaReact' },
  // Frameworks & Libraries
  { name: 'PyTorch', category: 'Frameworks & Libraries', description: 'Deep learning framework', icon: 'FaReact' },
  { name: 'TensorFlow', category: 'Frameworks & Libraries', description: 'Deep learning framework', icon: 'FaReact' },
  { name: 'Keras', category: 'Frameworks & Libraries', description: 'High-level neural networks API', icon: 'FaReact' },
  { name: 'OpenCV', category: 'Frameworks & Libraries', description: 'Computer vision library', icon: 'FaReact' },
  { name: 'Hugging Face', category: 'Frameworks & Libraries', description: 'NLP and transformer models', icon: 'FaReact' },
  { name: 'LangChain', category: 'Frameworks & Libraries', description: 'LLM orchestration', icon: 'FaReact' },
  { name: 'FAISS', category: 'Frameworks & Libraries', description: 'Vector search', icon: 'FaReact' },
  { name: 'Scikit-learn', category: 'Frameworks & Libraries', description: 'ML algorithms and utilities', icon: 'FaReact' },
  { name: 'Pandas', category: 'Frameworks & Libraries', description: 'Data manipulation', icon: 'FaReact' },
  { name: 'NumPy', category: 'Frameworks & Libraries', description: 'Numerical computing', icon: 'FaReact' },
  // Accelerated Computing
  { name: 'CUDA', category: 'Accelerated Computing', description: 'GPU programming', icon: 'FaReact' },
  { name: 'TensorRT', category: 'Accelerated Computing', description: 'Inference optimization', icon: 'FaReact' },
  { name: 'NVIDIA NeMo', category: 'Accelerated Computing', description: 'Conversational AI toolkit', icon: 'FaReact' },
  { name: 'Triton Inference Server', category: 'Accelerated Computing', description: 'Model serving', icon: 'FaReact' },
  { name: 'cuDNN', category: 'Accelerated Computing', description: 'GPU-accelerated primitives', icon: 'FaReact' },
  { name: 'ONNX', category: 'Accelerated Computing', description: 'Open neural network exchange', icon: 'FaReact' },
  // Full-Stack
  { name: 'Python', category: 'Full-Stack', description: 'Programming language', icon: 'FaReact' },
  { name: 'Node.js', category: 'Full-Stack', description: 'Backend JavaScript runtime', icon: 'FaNodeJs' },
  { name: 'Express', category: 'Full-Stack', description: 'Node.js web framework', icon: 'FaNodeJs' },
  { name: 'React.js', category: 'Full-Stack', description: 'Frontend library', icon: 'FaReact' },
  { name: 'MongoDB', category: 'Full-Stack', description: 'NoSQL database', icon: 'FaReact' },
  { name: 'Django', category: 'Full-Stack', description: 'Python web framework', icon: 'FaReact' },
  { name: 'Flask', category: 'Full-Stack', description: 'Python microframework', icon: 'FaReact' },
  { name: 'FastAPI', category: 'Full-Stack', description: 'Python web framework', icon: 'FaReact' },
  { name: 'HTML/CSS/JS', category: 'Full-Stack', description: 'Web technologies', icon: 'FaReact' },
  // Data Science
  { name: 'Data Visualization', category: 'Data Science', description: 'Charts, graphs, dashboards', icon: 'FaReact' },
  { name: 'Model Optimization', category: 'Data Science', description: 'Hyperparameter tuning', icon: 'FaReact' },
  { name: 'EDA', category: 'Data Science', description: 'Exploratory data analysis', icon: 'FaReact' },
  { name: 'Feature Engineering', category: 'Data Science', description: 'Feature creation and selection', icon: 'FaReact' },
  { name: 'Metrics', category: 'Data Science', description: 'Evaluation metrics', icon: 'FaReact' },
  // Soft Skills
  { name: 'Leadership', category: 'Soft Skills', description: 'Team leadership', icon: 'FaReact' },
  { name: 'Communication', category: 'Soft Skills', description: 'Effective communication', icon: 'FaReact' },
  { name: 'Teamwork', category: 'Soft Skills', description: 'Collaboration', icon: 'FaReact' },
  { name: 'Time Management', category: 'Soft Skills', description: 'Efficient time use', icon: 'FaReact' },
  { name: 'Public Speaking', category: 'Soft Skills', description: 'Presentations', icon: 'FaReact' },
  { name: 'Theatre', category: 'Soft Skills', description: 'Stage performance', icon: 'FaReact' },
];

export async function getSkills(): Promise<Skill[]> {
  return skillsData;
}
