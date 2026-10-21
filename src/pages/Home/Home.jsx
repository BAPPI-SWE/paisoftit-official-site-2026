import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import SectionHeader from '../../components/shared/SectionHeader/SectionHeader';
import Hero from './hero/Hero';
import AboutUs from './about/AboutUs';
import AboutCompany from './about/AboutCompany';
import IndustryFootprint from './industries/IndustryFootprint';
import ProjectsShowcase from './projects/ProjectsShowcase';
import DeliveryApproach from './delivery/DeliveryApproach';
import Support from './support/Support';
import Team from './team/Team';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutUs />
      <AboutCompany />

      <section className="section-shell section-white">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader
            label="What We Do"
            title={
              <>
                Software services that fit <span className="gradient-text">your business</span>
              </>
            }
            subtitle="We listen first, then build what you actually need — from online stores to custom business tools."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((service, index) => (
                <div
                  key={service.id}
                  className="reveal card-stripe service-card p-7 group"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-white">
                    <img
                      src={service.image}
                      alt=""
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-h3 mb-2">{service.title}</h3>
                  <p className="text-body-sm mb-5 line-clamp-2">{service.description}</p>
                  <Link
                    to="/services"
                    className="service-card-link text-brand-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all text-sm"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsShowcase />
      <IndustryFootprint />
      <DeliveryApproach />
      <Support />
      <Team />

      <section className="section-shell cta-gradient">
        <div className="max-w-7xl mx-auto px-6 text-center reveal">
          <h2 className="text-h2 text-white mb-4">
            Have a <span className="text-blue-200">project in mind</span>?
          </h2>
          <p className="text-body text-blue-100 mb-8">
            Tell us what you&apos;re trying to build. We&apos;ll give you honest advice and a clear
            path forward — no pressure, no jargon.
          </p>
          <Link
            to="/contact"
            className="btn-stripe inline-flex items-center px-8 py-3 bg-white text-brand-700 hover:bg-blue-50 font-semibold text-base"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
