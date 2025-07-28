// queries/getContactMe.ts
import { ContactMe } from '../types';

const contactMeData: ContactMe = {
  profilePicture: { url: '/profile/profile-pic.jpg' }, // Replace with your own image URL or local path
  name: 'Parth Pahwa',
  title: 'AI Engineer',
  summary: 'AI Engineer with a strong foundation across the full AI umbrella — Machine Learning, Deep Learning, Computer Vision, and NLP. Backed by 1 year of cumulative internship experience, part of the NVIDIA Inception and Developer Programs, and NVIDIA DLI Certified. Skilled in building and deploying end-to-end, production-ready GenAI agents and accelerated AI systems using CUDA, NeMo, and TensorRT — focused on solving real-world problems with impact.',
  companyUniversity: 'NIIT University',
  linkedinLink: 'https://www.linkedin.com/in/parth-pahwa-4501982a8/',
  email: 'parthpahwa1301@gmail.com',
  phoneNumber: '+91 7835938373',
};

export async function getContactMe(): Promise<ContactMe> {
  return contactMeData;
}
