import React from 'react';
import {
  Search,
  PenTool,
  Code2,
  ClipboardCheck,
  Rocket,
  GraduationCap,
  ShieldCheck,
  Lock,
  FileClock,
  DatabaseBackup,
  Layers,
  BookOpen,
} from 'lucide-react';
import SectionHeader from '../../../components/shared/SectionHeader/SectionHeader';

const stages = [
  {
    icon: Search,
    title: 'Discovery',
    desc: 'Stakeholder workshops and detailed analysis of requirements and goals.',
    deliverable: 'Signed-off SRS',
  },
  {
    icon: PenTool,
    title: 'Strategy & Design',
    desc: 'Architecture planning, technology selection and UI/UX prototypes.',
    deliverable: 'Architecture, DB design, clickable prototype',
  },
  {
    icon: Code2,
    title: 'Development',
    desc: 'Agile execution in 2-week sprints with demos and transparent reporting.',
    deliverable: 'Working increments, sprint reports',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Assurance',
    desc: 'Unit, integration, system and user acceptance testing.',
    deliverable: 'Test reports, UAT sign-off',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    desc: 'Controlled release, data migration and post-launch optimisation.',
    deliverable: 'Live system, deployment guide',
  },
  {
    icon: GraduationCap,
    title: 'Training & Support',
    desc: 'Role-based user and administrator training; warranty and maintenance.',
    deliverable: 'User manuals, support log',
  },
];

const practices = [
  { icon: Lock, title: 'Role-based access', desc: 'Permissions, strong authentication and audit logs of user actions.' },
  { icon: ShieldCheck, title: 'Data protection', desc: 'Encrypted HTTPS/TLS connections and restricted database access.' },
  { icon: DatabaseBackup, title: 'Backup & recovery', desc: 'Scheduled automatic backups with tested restore procedures.' },
  { icon: Layers, title: 'Separate environments', desc: 'Development, testing and production kept apart; controlled releases.' },
  { icon: FileClock, title: 'Project governance', desc: 'Named project manager, weekly progress reports, formal change requests.' },
  { icon: BookOpen, title: 'Full documentation', desc: 'Design documents, user manuals, admin guides and source code under Git.' },
];

const DeliveryApproach = () => {
  return (
    <section className="section-shell section-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="How We Deliver"
          title={
            <>
              A documented process built for <span className="gradient-text">institutional projects</span>
            </>
          }
          subtitle="Every engagement follows the same six stages, with clear deliverables at each step — so clients see progress early and can steer the work."
        />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <li
                key={stage.title}
                className="reveal relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/5"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-4xl font-extrabold text-slate-100 tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{stage.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{stage.desc}</p>
                <p className="text-xs font-semibold text-brand-700 bg-brand-50/70 rounded-lg px-3 py-2">
                  Deliverable: <span className="font-medium text-slate-700">{stage.deliverable}</span>
                </p>
              </li>
            );
          })}
        </ol>

        <div className="reveal mt-14 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-600/30 blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-300 mb-2">
              Quality, security &amp; support
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 max-w-2xl">
              Practices applied to every system we build
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7">
              {practices.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 text-brand-300 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 pt-6 border-t border-white/10 text-sm text-slate-400">
              Bangla and English interfaces · Hosting on client servers, an approved data centre or
              cloud · Warranty and annual maintenance contracts after every implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryApproach;
