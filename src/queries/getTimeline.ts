// queries/getTimeline.ts
import { TimelineItem } from '../types';

const timelineData: TimelineItem[] = [
  // Work Experience
  {
    timelineType: 'work',
    name: 'Ernst & Young (EY)',
    title: 'AI/ML Intern',
    techStack: 'AI/ML, RAG, LLMs, Deep Learning, Django, CUDA',
    summaryPoints: [
      'Developed and deployed a cross-stack AI chatbot system, integrating React, Django REST APIs, and advanced LLMs for dynamic query handling in government/public sector use cases.',
      'Completed 10+ industry-grade courses focused on deep learning, large language models (LLMs), generative AI, RAG pipelines, and CUDA programming, reinforcing practical AI/ML skills.',
      'Led supplementary projects including customer sentiment classification, demand forecasting, and real-time medical/agricultural image recognition using accelerated computing.',
      'Contributed to public sector policy research, summarizing digital transformation initiatives like TTDF and analyzing application scenarios for AI in rural telecom and governance.',
      'Collaborated in team meetings, documented technical work, and supported knowledge-sharing through internal reports and reusable learning modules.'
    ],
    dateRange: 'May 2025 – Jul 2025 · On Site (New Delhi)',
    logo: '/companies/EY.png',
  },
  {
    timelineType: 'work',
    name: 'Smarrtif AI',
    title: 'Associate Consultant and AI Trainer',
    techStack: 'AI Tools Development,Technical Interviews,Client Acquisition,Team Management',
    summaryPoints: [
      'Developed core AI solutions, including CV Analyzer Tool and LinkedIn Analyzer Tool, applying advanced machine learning in real-world use cases.',
      'Supported client acquisition efforts, directly contributing to revenue growth through technical expertise and solution demos.',
      'Conducted technical interviews for talent acquisition, helping evaluate and select candidates for AI/ML roles.',
      'Contributed to AI training program design and project team management, demonstrating leadership and initiative.'
    ],
    dateRange: 'May 2025 – Jul 2025 · On Site (New Delhi)',
    logo: '/companies/Smarrtifai.png',
  },
  {
    timelineType: 'work',
    name: 'NIIT University',
    title: 'Teaching Assistant',
    techStack: 'Digital Image Processing',
    summaryPoints: [
      'Taught Digital Image Processing concepts.',
      'Explained matrices, filters, and CV techniques. Received excellent student feedback.'
    ],
    dateRange: 'Feb 2025 – May 2025 · On Site (Neemrana, Rajasthan)',
    logo: '/companies/NIIT.png',
  },
  {
    timelineType: 'work',
    name: 'Labmentix',
    title: 'AI & Data Intern',
    techStack: 'PowerBI, Pandas, SQL, Excel, CNN, GPU Acceleration, Data Visualization, Model Validation, Deep Learning, Python',
    summaryPoints: [
      'Developed end-to-end projects including Flipkart CSAT prediction, PolicyBazaar EDA, retail customer analysis, Strava data insights, and brain tumor classification using CNNs.',
      'Utilized PowerBI, pandas, SQL, Excel, and GPU acceleration for data processing, visualization, and model optimization.',
      'Published well-documented code, dashboards, and explanatory videos on GitHub showcasing project workflows and results.',
      'Strengthened skills in data analytics, deep learning, machine learning frameworks, and accelerated computing.',
      'Participated in resume optimization and career growth sessions to enhance professional readiness.'
    ],
    dateRange: 'May 2025 – Aug 2025 · Remote',
    logo: '/companies/Labmentix.png',
  },
  {
    timelineType: 'work',
    name: 'Collegetips.in',
    title: 'AI Intern',
    techStack: 'Python, scikit-learn, CV, NLP',
    summaryPoints: [
      'Recognized as Top Performer for outstanding initiative and contributions.',
      'Delivered 13+ high-impact tasks, including AI tool research, campaign websites, and interactive chatbots.',
      'Led the design of a "Pet-Friendly City" site and digital literacy chatbot for public engagement.',
      'Enhanced team presence through content creation (video/report/presentations) and comparative analysis.',
      'Strengthened web design, content, and creative problem-solving skills in a dynamic youth environment.'
    ],
    dateRange: 'May 2025 – June 2025 · Remote',
    logo: '/companies/collegetips.png',
  },
  {
    timelineType: 'work',
    name: '1 Stop AI',
    title: 'AI Intern',
    techStack: 'Python, scikit-learn, CV, NLP',
    summaryPoints: [
      'Learnt the basics of AI and ML and learned how to train, test , evaluate , inference and deploy models.',
      'Built 2 projects on Pet Classification and Text Sentiment Analysis.'
    ],
    dateRange: 'May 2023 – June 2023 · Remote',
    logo: '/companies/1Stop_logo_New.png',
  },
  // Education
  {
    timelineType: 'education',
    name: 'NIIT University',
    title: 'Bachelor of Technology (B.Tech), Computer Science and Engineering (AI Specialization)',
    techStack: 'AI, Computer Science',
    summaryPoints: [
      '2022 - 2026',
      'Neemrana, Rajasthan',
      'CGPA: 8.17/10',
      'Key Achievements:',
      '• Batch Topper in 1st year',
      '• Theatre Society President',
      '• Organized 20+ events in 4 years'
    ],
    dateRange: '2022 - 2026',
    logo: '/companies/NIIT.png',
  },
  {
    timelineType: 'education',
    name: 'Delhi Public School, Rohini',
    title: 'Senior Secondary (XII), CBSE',
    techStack: 'Science',
    summaryPoints: [
      '2022',
      'Rohini, Delhi',
      'Percentage: 97.4%',
      'Key Achievements:',
      '• School Topper in Maths, Computer Science, and Chemistry'
    ],
    dateRange: '2022',
    logo: '/companies/DPS.png', // Add if you have a logo
  },
  {
    timelineType: 'education',
    name: 'Laurel High the School',
    title: 'Secondary (X), CBSE',
    techStack: 'General',
    summaryPoints: [
      '2020',
      'Pitampura, Delhi',
      'Percentage: 91.8%',
      'Key Achievements:',
      '• Maths Topper',
      '• House Captain'
    ],
    dateRange: '2020',
    logo: '/companies/LaurelHigh.png', // Add if you have a logo
  },
];

export async function getTimeline(): Promise<TimelineItem[]> {
  return timelineData;
}
