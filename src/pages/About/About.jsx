import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Building2, Handshake, Wrench, Boxes, Users2, Code2 } from 'lucide-react';
import { siteConfig } from '../../config/site';
import Vision from '../../assets/vision.png';
import PageHero from '../../components/shared/PageHero/PageHero';

const values = [
  { title: 'Precision', desc: 'Meticulous attention to detail in every line of code.' },
  { title: 'Integrity', desc: 'Honest timelines, transparent pricing and unwavering commitment.' },
  { title: 'Innovation', desc: 'Constant learning to bring the latest technology, including AI and ML, to our clients.' },
  { title: 'Ownership', desc: 'We treat every client system as if it were our own product.' },
];

const strengths = [
  { icon: Wrench, title: 'End-to-end delivery', desc: 'Requirements, UI/UX, development, testing, deployment, training and maintenance under one roof — one accountable team.' },
  { icon: Code2, title: 'Enterprise-ready stack', desc: 'Java / Spring Boot, Node.js, React and PostgreSQL — proven open-source technology with no licence lock-in for the client.' },
  { icon: Boxes, title: 'Product mindset', desc: 'We build and run our own products (Sheba Pai and Aladin Craft), so we understand real users, real data and real production operations.' },
  { icon: Users2, title: 'Local and accessible', desc: 'A Dhaka-based in-house team working in Bangla and English, available on-site for workshops, training and support.' },
  { icon: Building2, title: 'Long-term support', desc: 'Post-launch maintenance, updates and help-desk support as a standard part of every engagement.' },
  { icon: Handshake, title: 'Partnership-ready', desc: 'Structured to work as a technical JV member, development partner or subcontractor alongside larger institutions.' },
];

const About = () => {
  const { legal, contact } = siteConfig;

  const facts = [
    { label: 'Company name', value: siteConfig.name },
    { label: 'Legal form', value: legal.legalForm },
    { label: 'Established', value: legal.established },
    { label: 'Trade licence', value: `${legal.tradeLicense} (${legal.issuedBy})` },
    { label: 'Head office', value: contact.address },
    { label: 'Business hours', value: contact.hours },
  ];

  return (
    <div>
      <PageHero
        label="About Us"
        title={
          <>
            Engineering <span className="text-blue-300">Reliability</span> Since Inception.
          </>
        }
        subtitle="PAISOFT IT was founded to bridge the gap between complex business challenges and practical, reliable software. We design, build and support custom software — ERP and business systems, web and mobile applications, e-commerce and POS — and stay with every system after launch."
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Vision / Mission / Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">
            <div className="reveal">
              <img
                src={Vision}
                alt="PAISOFT IT vision"
                className="rounded-2xl shadow-xl border border-slate-200 w-full"
              />
            </div>
            <div className="space-y-8 reveal">
              <div className="border-l-4 border-brand-600 bg-brand-50/60 rounded-r-2xl p-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700 mb-2">
                  Our Vision
                </h3>
                <p className="text-body text-slate-700 italic">
                  To be the most trusted technology partner for businesses undergoing digital
                  transformation, known for building systems that never fail.
                </p>
              </div>
              <div className="border-l-4 border-brand-600 bg-brand-50/60 rounded-r-2xl p-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700 mb-2">
                  Our Mission
                </h3>
                <p className="text-body text-slate-700 italic">
                  To bridge the gap between complex business challenges and elegant software
                  solutions — delivering reliable, secure and scalable systems, on honest
                  timelines, with support that continues after launch.
                </p>
              </div>
              <div>
                <h3 className="text-h3 mb-4">
                  Our <span className="gradient-text">Core Values</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {values.map((v) => (
                    <div key={v.title} className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="font-bold text-slate-900 mb-1">{v.title}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Why partner */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12 reveal">
              <p className="section-label mb-3">Why Partner With Us</p>
              <h2 className="text-h2 text-slate-800">
                A dependable technology partner for{' '}
                <span className="gradient-text">institutions &amp; companies</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {strengths.map(({ icon: Icon, title, desc }, index) => (
                <div
                  key={title}
                  className="reveal card-stripe p-6"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-body-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Company information */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24 items-start">
            <div className="lg:col-span-4 reveal">
              <p className="section-label mb-3">Company Information</p>
              <h2 className="text-h2 text-slate-800 mb-4">Registered &amp; based in Dhaka</h2>
              <p className="text-body-sm text-slate-600 mb-6">
                Supporting documents — trade licence, CVs of key personnel, project references and
                completion certificates — are available to institutions and partners on request.
              </p>
              <Link to="/projects" className="btn-primary text-sm">
                See our projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <dl className="lg:col-span-8 reveal rounded-2xl border border-slate-200 bg-white divide-y divide-slate-100 overflow-hidden">
              {facts.map((f) => (
                <div key={f.label} className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 px-6 py-4">
                  <dt className="text-sm font-semibold text-slate-500">{f.label}</dt>
                  <dd className="text-sm font-medium text-slate-900">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="card-highlight rounded-2xl p-10 lg:p-16 text-center reveal">
            <h2 className="text-h2 mb-4">
              Need a <span className="gradient-text">reliable tech partner</span>?
            </h2>
            <p className="text-body text-slate-600 mb-6 max-w-xl mx-auto">
              We welcome the opportunity to discuss how PAISOFT IT can support your projects.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="text-xl lg:text-2xl font-bold text-brand-600 hover:underline"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
