import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import Contact from '@/components/ContactSection';

export default function Home() {
  return (
    <main className='px-6 sm:px-10'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Contact />
    </main>
  );
}
