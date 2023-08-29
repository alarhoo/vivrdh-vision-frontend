import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import VisionSection from '@/components/home/VisionSection';
import HowWeWorkSection from '@/components/home/HowWeWorkSection';
import ProjectSection from '@/components/home/ProjectSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vision Creations',
  description: 'Vision Creations, an interior design firm for all',
  keywords: 'interior, architecture, firm, bangalore',
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VisionSection />
      <HowWeWorkSection />
      <ProjectSection />
      <TestimonialSection />
    </main>
  );
}
