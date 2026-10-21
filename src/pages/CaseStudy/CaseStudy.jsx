import React from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Users } from 'lucide-react';
import { projects, getProject, STATUS } from '../../data/projects';
import PageHero from '../../components/shared/PageHero/PageHero';
import ProjectCard, { StatusBadge, ProjectMark } from '../../components/projects/ProjectCard';

const FactRow = ({ label, children }) => (
  <div className="py-3.5 grid grid-cols-[110px_1fr] gap-4 border-b border-slate-100 last:border-0">
    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400 pt-0.5">{label}</dt>
    <dd className="text-sm text-slate-800">{children}</dd>
  </div>
);

const CaseStudy = () => {
  const { id } = useParams();
  const project = getProject(id);

  if (!project) {
    return (
      <div>
        <PageHero label="Projects" title="Project not found" />
        <div className="py-16 text-center">
          <Link to="/projects" className="text-brand-600 font-semibold hover:underline">
            Back to all projects
          </Link>
        </div>
      </div>
    );
  }

  const statusLabel = STATUS[project.status]?.label;
  const others = projects.filter((p) => p.id !== project.id);
  const more = [
    ...others.filter((p) => p.group === project.group),
    ...others.filter((p) => p.group !== project.group),
  ].slice(0, 3);
  const hasStory = project.objective || project.problem || project.solution || project.scope?.length;

  return (
    <div>
      <PageHero
        label={`${project.category} · ${statusLabel}`}
        title={project.title}
        subtitle={project.summary}
      />

      <div className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-600 mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> All projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Main content */}
            <div className="lg:col-span-7 space-y-10">
              <div className="flex items-center gap-4">
                <ProjectMark project={project} size="lg" />
                <div>
                  <StatusBadge status={project.status} />
                  <p className="mt-2 text-sm text-slate-500">{project.statusNote}</p>
                </div>
              </div>

              {project.objective && (
                <section>
                  <h2 className="text-h3 text-slate-900 mb-3">Objective</h2>
                  <p className="text-body text-slate-600">{project.objective}</p>
                </section>
              )}

              {project.problem && (
                <section>
                  <h2 className="text-h3 text-slate-900 mb-3">The problem</h2>
                  <p className="text-body text-slate-600">{project.problem}</p>
                </section>
              )}

              {project.solution && (
                <section>
                  <h2 className="text-h3 text-slate-900 mb-3">Our solution</h2>
                  <p className="text-body text-slate-600">{project.solution}</p>
                </section>
              )}

              {project.scope?.length > 0 && (
                <section>
                  <h2 className="text-h3 text-slate-900 mb-4">
                    {project.group === 'product' ? 'Key offerings' : 'What we built'}
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.scope.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                      >
                        <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.users?.length > 0 && (
                <section>
                  <h2 className="text-h3 text-slate-900 mb-4">Who uses it</h2>
                  <ul className="flex flex-wrap gap-2">
                    {project.users.map((u) => (
                      <li
                        key={u}
                        className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700"
                      >
                        <Users className="w-4 h-4" /> {u}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {!hasStory && (
                <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
                  <p className="text-body-sm text-slate-600">
                    This project is currently under active development by the PAISOFT IT team.
                    Further details can be shared with partners and institutions on request.
                  </p>
                </section>
              )}
            </div>

            {/* Facts sidebar */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Project facts
                </h2>
                <dl>
                  {project.client && <FactRow label="Client">{project.client}</FactRow>}
                  {project.sector && <FactRow label="Sector">{project.sector}</FactRow>}
                  <FactRow label="Platform">{project.platform}</FactRow>
                  {project.tech?.length > 0 && (
                    <FactRow label="Technology">
                      <ul className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <li
                            key={t}
                            className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </FactRow>
                  )}
                  {project.duration && <FactRow label="Timeline">{project.duration}</FactRow>}
                  {project.role && <FactRow label="Our role">{project.role}</FactRow>}
                  <FactRow label="Status">{project.statusNote || statusLabel}</FactRow>
                </dl>

                {project.links?.length > 0 && (
                  <div className="mt-5 flex flex-col gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
                      >
                        {link.label}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </aside>
          </div>

          {more.length > 0 && (
            <div className="mt-20">
              <div className="flex items-end justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">More projects</h2>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:gap-2 transition-all"
                >
                  View all <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {more.map((p) => (
                  <ProjectCard key={p.id} project={p} compact />
                ))}
              </div>
            </div>
          )}

          <div className="card-highlight text-center mt-20 rounded-2xl py-12 px-6">
            <h2 className="text-h2 text-slate-900 mb-4">
              Have a <span className="gradient-text">similar project</span> in mind?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Start a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
