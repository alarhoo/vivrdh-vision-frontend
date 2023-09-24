import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import VisionSection from '@/components/home/VisionSection';
import HowWeWorkSection from '@/components/home/HowWeWorkSection';
import ProjectSection from '@/components/home/ProjectSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import SubscribeSection from '@/components/home/SubscribeSection';
import { Metadata } from 'next';
import ContactSection from '@/components/home/ContactSection';
import FAQSection from '@/components/home/FAQSection';

export const metadata: Metadata = {
  title: 'Vision Creations',
  description: 'Vision Creations, an interior design firm for all',
  keywords: 'interior, architecture, firm, bangalore',
};

export default function Home() {
  const heading = 'Crafting Spaces that Inspire';
  const message =
    'At Vision Creations, we redefine spaces, turning them into works of art that inspire, captivate, and leave lasting impressions.';
  const cta = 'View Projects';

  return (
    <main>
      <HeroSection heading={heading} message={message} cta={cta} />
      <AboutSection />
      <HowWeWorkSection />
      <ProjectSection />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
