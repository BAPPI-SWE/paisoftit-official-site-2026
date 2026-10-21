import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, FileCheck2 } from 'lucide-react';
import { projects, projectGroups } from '../../data/projects';
import PageHero from '../../components/shared/PageHero/PageHero';
import ProjectCard from '../../components/projects/ProjectCard';

const groupIntro = {
  delivered: 'Projects we have built end to end and handed over, now running in production.',
  product: 'Products PAISOFT IT designs, builds and runs itself — keeping our team close to real users.',
  ongoing: 'Projects currently under active development by our in-house team.',
};

const CaseStudies = () => {
  const [active, setActive] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    ...projectGroups.map((g) => ({
      ...g,
      count: projects.filter((p) => p.group === g.id).length,
    })),
  ];

  const visibleGroups =
    active === 'all' ? projectGroups : projectGroups.filter((g) => g.id === active);

  return (
    <div>
      <PageHero
        label="Our Work"
        title={
          <>
            Projects &amp; <span className="text-blue-300">Products</span>
          </>
        }
        subtitle="Platforms we have delivered, products we run ourselves, and the work currently in progress at PAISOFT IT."
      />

      <div className="py-14 lg:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="flex flex-wrap gap-2 sm:gap-3 mb-12"
            role="tablist"
            aria-label="Filter projects"
          >
            {tabs.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-500 hover:text-brand-600'
                  }`}
                >
                  {tab.label}
                  <span
                    className={`min-w-6 rounded-full px-1.5 py-0.5 text-xs ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="space-y-16">
            {visibleGroups.map((group) => {
              const items = projects.filter((p) => p.group === group.id);
              if (items.length === 0) return null;
              return (
                <section key={group.id} aria-labelledby={`group-${group.id}`}>
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6 pb-4 border-b border-slate-200">
                    <div>
                      <h2
                        id={`group-${group.id}`}
                        className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
                      >
                        {group.label}
                      </h2>
                      <p className="mt-1 text-body-sm text-slate-500">{groupIntro[group.id]}</p>
                    </div>
                    <span className="text-sm font-semibold text-slate-400">
                      {items.length} {items.length === 1 ? 'project' : 'projects'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-brand-100 bg-white p-6 sm:p-8">
            <div className="shrink-0 p-3 rounded-xl bg-brand-50 text-brand-600">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <p className="text-body-sm text-slate-600 flex-1">
              <strong className="text-slate-900">References on request.</strong> Further project
              references, work orders and completion certificates can be provided to institutions
              and partners as part of formal evaluation.
            </p>
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5 shrink-0">
              Request details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
