import AboutUs from '@/components/landing-page/AboutUs';
import Header from '@/components/landing-page/Header';
import Hero from '@/components/landing-page/Hero';
import MissionVision from '@/components/landing-page/MissionVision';
import Services from "@/components/landing-page/Services"
import OrganizationalStructure from "@/components/landing-page/OrganizationalStructure"
import { ProjectTimeline } from '@/components/landing-page/ProjectTimeline';
import CTA from '@/components/landing-page/CTA';
import { Footer } from '@/components/landing-page/Footer';


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <MissionVision />
        <Services />
        <OrganizationalStructure />
        <ProjectTimeline />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
