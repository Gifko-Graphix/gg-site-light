import Link from 'next/link';
import { Button } from '@material-ui/core';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import ProfileColumn from '../components/ProfileColumn';
import SectionHeader from '../components/SectionHeader';
import ServiceListSection from '../components/ServiceListSection';

export default function About() {
  return (
    <Layout>
      <PageHeader title="What's Gifko Graphix?" />
      <div className="flex flex-col items-center space-y-8 mt-4 mb-16">
        <p className="w-9/12 md:w-1/2 text-center text-gray-200 font-light">
          At Gifko, we have one priority; turning your design dreams into reality.
          We are obsessively passionate about giving our clients the graphic designs
          that reflect their simplicity, authenticity and creativity while maintaining
          the highly set standards of graphic design nowadays. Let us sculpt your minds
          and be the artists to your masterpieces.
        </p>
        <p className="w-9/12 md:w-1/2 text-center text-gray-200 font-light">
          We design your stories as if we were mind readers. So, feel free to
          contact us about your projects and how we can help! In the meantime,
          we will be designing our lives away!
        </p>
      </div>
      <SectionHeader text="What we do" />
      <div className="container mb-16">
        <p className="text-center lg:text-2xl my-4">We offer a wide range of services, including: </p>
        <div className="container grid md:grid-cols-4 w-11/12">
          <ServiceListSection
            title="Branding & Marketing"
            services={['Logo Design', 'Branding Identity Design', 'Business Cards', 'Brand-building consultation', 'Social Media Marketing', 'Product Design (coming soon)']}
          />
          <ServiceListSection
            title="Editorial Design"
            services={['Posters', 'Brochures', 'Business Documents', 'Books/Reports', 'Letter heads']}
          />
          <ServiceListSection
            title="Videos"
            services={['Advertisements', 'Compilations', 'Explainer Videos', 'Logo Intro/Outro']}
          />
          <ServiceListSection
            title="Mobile / Web"
            services={['UI Design', 'UX Design', 'Wireframing', 'Website / Web App Development', 'Mobile App Development (coming soon)']}
          />
        </div>
      </div>

      <SectionHeader text="Our Team" />
      <div className="container grid lg:grid-cols-4 w-11/12 mt-2 mb-16">
        <ProfileColumn
          name="Peter-Newman Messan"
          position="Founder & Co-Lead Designer"
          img="Peter.jpg"
          expertise="Logo Design, Editorial Design, Web Design, Video Production, 2D (Flat) Animations, Full-Stack Web Development"
        />
        <ProfileColumn
          name="Daniela Tsayem"
          position="Chief Executive Officer"
          img="Danie.jpg"
          expertise="Digital Marketing, Branding, Editorial Design, Web Design, Frontend Web Development"
        />
        <ProfileColumn
          name="Edwin Agbakpe"
          position="Co-Lead Designer"
          img="Edwin.jpg"
          expertise="UI/UX Design, Web Design, Editorial Design, Full-Stack Web Development"
        />
        <ProfileColumn
          name="Cynthia Ngouongo"
          position="Business Developer and Finance Manager"
          img="Cynthia.jpg"
          expertise="Business Development, Finance, Marketing, Voice-overs"
        />
      </div>
      <div className="w-10/12 md:w-1/2 container my-5 flex flex-col items-center">
        <h1 className="text-lg font-light text-center mb-4">Now that you&apos;ve met our team, get in touch with us today to find out how we can support you in your next project!</h1>
        <Link href="/contact" passHref>
          <Button className="inline" variant="contained">
            Contact Us
          </Button>
        </Link>
      </div>

    </Layout>
  );
}
