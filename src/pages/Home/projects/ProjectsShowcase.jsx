import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../../../data/projects';
import SectionHeader from '../../../components/shared/SectionHeader/SectionHeader';
import ProjectCard, { ProjectMark, PlatformIcon } from '../../../components/projects/ProjectCard';

const ProjectsShowcase = () => {
  const featured = projects.filter((p) => p.featured);
  const ongoing = projects.filter((p) => p.group === 'ongoing' || (p.group === 'product' && !p.featured));

  return (
    <section className="section-shell bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="Our Work"
          title={
            <>
              Projects we have <span className="gradient-text">delivered &amp; are building</span>
            </>
          }
          subtitle="Real platforms in production, our own products, and the work our team is developing right now."
        />

        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="reveal mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Also in our portfolio</h3>
              <p className="text-sm text-slate-500">
                Own products and projects currently under active development.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              In progress
            </span>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ongoing.map((project) => (
              <li key={project.id}>
                <Link
                  to={`/projects/${project.id}`}
                  className="group flex items-center gap-4 rounded-xl border border-slate-100 p-3 hover:border-brand-200 hover:bg-brand-50/40 transition-colors"
                >
                  <ProjectMark project={project} />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-900 truncate group-hover:text-brand-600 transition-colors">
                      {project.title}
                    </p>
                    <p className="flex items-center gap-1.5 text-xs text-slate-500">
                      <PlatformIcon platform={project.platform} className="w-3.5 h-3.5" />
                      {project.platform} · {project.category}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-brand-600 transition-colors" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <Link to="/projects" className="btn-primary">
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
