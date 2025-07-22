// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

const profileBannerData: ProfileBanner = {
  backgroundImage: { url: '' }, // Add a background image URL or leave blank for default
  headline: 'Parth Pahwa | AI Engineer',
  resumeLink: { url: '/ParthPahwaResume.pdf' },
  linkedinLink: 'https://www.linkedin.com/in/parth-pahwa-4501982a8/',
  profileSummary: 'AI Engineer with a strong foundation across the full AI umbrella — Machine Learning, Deep Learning, Computer Vision, and NLP. Backed by 1 year of cumulative internship experience, part of the NVIDIA Inception and Developer Programs, and NVIDIA DLI Certified. Skilled in building and deploying end-to-end, production-ready GenAI agents and accelerated AI systems using CUDA, NeMo, and TensorRT — focused on solving real-world problems with impact.'
};

export async function getProfileBanner(): Promise<ProfileBanner> {
  return profileBannerData;
}
