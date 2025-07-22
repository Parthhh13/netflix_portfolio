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
      'Worked on “AI/ML Interventions in Government and Public Sector” under EY’s Technology Consulting.',
      'Researched AI use cases in India’s TTDF program and supported backend technical analysis.',
      'Built mini projects and completed certifications in RAG, LLMs, Deep Learning, Django, and CUDA.'
    ],
    dateRange: 'May 2025 – Jul 2025',
  },
  {
    timelineType: 'work',
    name: 'Smarrtif AI',
    title: 'Associate Consultant and AI Trainer',
    techStack: 'GenAI, Client Solutions, Mentoring',
    summaryPoints: [
      'Mentored school, college, and corporate learners in AI. Conducted technical interviews.',
      'Delivered client-facing GenAI solutions and internal PoCs.'
    ],
    dateRange: 'May 2025 – Jul 2025',
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
    dateRange: 'Feb 2025 – May 2025',
  },
  {
    timelineType: 'work',
    name: 'Labmentix, Collegetips.in, 1 Stop AI',
    title: 'AI Intern',
    techStack: 'Python, scikit-learn, CV, NLP',
    summaryPoints: [
      'Built and deployed 20+ AI/ML mini-projects (supervised learning, CV, NLP, pipelines) using Python & scikit-learn.'
    ],
    dateRange: '6 Months Total',
  },
  // Education
  {
    timelineType: 'education',
    name: 'NIIT University',
    title: 'BTech in Computer Science (AI Specialization)',
    techStack: 'AI, Computer Science',
    summaryPoints: [
      'GPA: 9.18 / 10',
      'Aug 2022 – Aug 2026',
      'Neemrana, Rajasthan'
    ],
    dateRange: 'Aug 2022 – Aug 2026',
  },
  {
    timelineType: 'education',
    name: 'Delhi Public School, Rohini',
    title: '12th Standard – CBSE',
    techStack: 'Science',
    summaryPoints: [
      'GPA: 8.18 / 10',
      '2022',
      'New Delhi, India'
    ],
    dateRange: '2022',
  },
  {
    timelineType: 'education',
    name: 'Laurel High The School',
    title: '10th Standard – CBSE',
    techStack: 'General',
    summaryPoints: [
      'GPA: 9.74 / 10',
      '2020',
      'New Delhi, India'
    ],
    dateRange: '2020',
  },
];

export async function getTimeline(): Promise<TimelineItem[]> {
  return timelineData;
}
