import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CtaSection from '@/components/sections/CtaSection';
import { featuredProjects } from '@/data/projectsData';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProjectsSection projects={featuredProjects} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
