import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import TeamImage from '../../../assets/team.jpg';
import { Link } from 'react-router';

const AboutCompany = () => {
  const points = [
    'ERP & Business Systems',
    'Web & Mobile Applications',
    'E-commerce & POS Platforms',
    'Long-term Support & Maintenance',
  ];

  return (
    <section className="relative bg-white overflow-hidden py-14 lg:py-16">
      {/* Purple Gradient Grid Right Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
            radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
          `,
          backgroundSize: '96px 64px, 96px 64px, 100% 100%',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 reveal-left">
          <p className="section-label">About PAISOFT IT</p>

          <h2 className="text-h2 lg:text-[2.7rem]">
            Your ideas deserve software that{' '}
            <span className="gradient-text">actually works</span>
          </h2>

          <p className="text-lg leading-8 text-slate-700 max-w-7xl">
            PAISOFT IT is a Dhaka-based software engineering company. We work as a single team of
            developers, designers and problem-solvers who take a product from first requirement to
            launch — and stay with it afterwards. Alongside client work, we build and run our own
            products, so we understand real users and real production operations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0" />
                <span className="text-base font-medium text-slate-800">{point}</span>
              </div>
            ))}
          </div>

          <Link to="/contact" className="btn-primary">
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="lg:col-span-6 relative pb-12 reveal-right">
          <div className="img-zoom relative w-full aspect-[4/3] shadow-lg border border-slate-100">
            <img src={TeamImage} alt="PAISOFT IT team" className="w-full h-full object-cover" />
          </div>

          <div className="float-badge absolute -bottom-4 left-4 sm:left-8 card-highlight bg-white text-slate-900 p-6 max-w-[260px] border-brand-200! shadow-xl">
            <p className="text-3xl font-bold text-slate-900">15</p>
            <p className="text-sm text-slate-700 mb-3">In-house team members working from our Dhaka office</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 bg-white text-brand-700 text-xs font-bold px-3 py-2 rounded-full hover:bg-blue-50 transition"
            >
              Let&apos;s Talk <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
