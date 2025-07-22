// queries/getCertifications.ts
import { Certification } from '../types';

const certificationsData: Certification[] = [
  // NVIDIA Deep Learning Institute (DLI)
  { title: 'Getting Started with Deep Learning', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: '' },
  { title: 'Introduction to Transformer-Based NLP', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: '' },
  { title: 'Generative AI with Diffusion Models', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: '' },
  { title: 'Building LLM Applications with Prompt Engineering', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: '' },
  { title: 'Using Retrieval-Augmented Generation with LLMs', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: '' },
  { title: 'Rapid App Deployment with LLMs', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: '' },
  { title: 'CUDA in Python', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: '' },
  // Forage Virtual Job Simulations
  { title: 'Generative AI – BCG X', issuer: 'Forage', issuedDate: '', link: '', iconName: '' },
  { title: 'Virtual Technology Experience – Deloitte', issuer: 'Forage', issuedDate: '', link: '', iconName: '' },
];

export async function getCertifications(): Promise<Certification[]> {
  return certificationsData;
}
