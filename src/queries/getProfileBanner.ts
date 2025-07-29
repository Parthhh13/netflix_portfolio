// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

const profileBannerData: ProfileBanner = {
  backgroundImage: { url: '' }, // Add a background image URL or leave blank for default
  headline: 'Parth Pahwa | AI Engineer',
  resumeLink: { url: '/ParthPahwaResume.pdf' },
  linkedinLink: 'https://www.linkedin.com/in/parth-pahwa-4501982a8/',
  profileSummary: 'AI Engineer specializing across the full AI spectrum—including ML, DL, Computer Vision, NLP, GenAI and Agentic AI—dedicated to building real-world, impact-driven projects. Backed by a year of diverse internship experience and multiple strong recommendations, I’m known for my problem-solving mindset, leadership, and collaborative skills. As an NVIDIA DLI certified developer, I continuously push technical boundaries, leveraging advanced tools for production-ready solutions. My aspiration is to keep creating and leading teams that turn cutting-edge AI into meaningful, lasting change—driving innovation that truly matters.'
};

export async function getProfileBanner(): Promise<ProfileBanner> {
  return profileBannerData;
}
