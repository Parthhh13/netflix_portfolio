// queries/getCertifications.ts
import { Certification } from '../types';

const certificationsData: Certification[] = [
  // NVIDIA Deep Learning Institute (DLI)
  { title: 'AI for all: From basics to Gen AI Practice', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: 'nvidia' },
  { title: 'Generative AI Explained', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: 'nvidia' },
  { title: 'Introduction to NVIDIA NIM™ Microservices', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: 'nvidia' },
  { title: 'Building A Brain in 10 Minutes', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: 'nvidia' },
  { title: 'Getting Started with Deep Learning', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: 'nvidia' },
  { title: 'Introduction to Transformer-Based Natural Language Processing', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: 'nvidia' },
  { title: 'Building LLM Applications With Prompt Engineering', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: 'nvidia' },
  { title: 'Augment your LLM Using Retrieval Augmented Generation', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: 'nvidia' },
  { title: 'An Even Easier Introduction to CUDA', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: 'nvidia' },
  { title: 'Fundamentals of Accelerated Computing with CUDA Python', issuer: 'NVIDIA DLI', issuedDate: '', link: '', iconName: 'nvidia' },
  // BCG-X Virtual Internship
  { title: 'AI/ML Virtual Internship (BCG-X)', issuer: 'BCG-X', issuedDate: '', link: '', iconName: 'bcgx' },
  // Deloitte Job Simulation
  { title: 'AI Engineering Job Simulation (Deloitte)', issuer: 'Deloitte', issuedDate: '', link: '', iconName: 'deloitte' },
];

export async function getCertifications(): Promise<Certification[]> {
  return certificationsData;
}
