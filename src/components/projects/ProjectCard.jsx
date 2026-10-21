import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, Globe, Smartphone, MonitorSmartphone, ExternalLink } from 'lucide-react';
import { STATUS } from '../../data/projects';

const toneClasses = {
  emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  amber: 'bg-amber-50 text-amber-800 ring-amber-600/25',
  brand: 'bg-brand-50 text-brand-700 ring-brand-600/20',
};

const dotClasses = {
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500',
  brand: 'bg-brand-500',
};

export const StatusBadge = ({ status, className = '' }) => {
  const s = STATUS[status] || STATUS.development;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ring-1 ring-inset ${toneClasses[s.tone]} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotClasses[s.tone]}`} />
      {s.label}
    </span>
  );
};

export const PlatformIcon = ({ platform, className = 'w-4 h-4' }) => {
  if (platform === 'Web') return <Globe className={className} />;
  if (platform === 'Android') return <Smartphone className={className} />;
  return <MonitorSmartphone className={className} />;
};

const initialsOf = (title) =>
  title
    .replace(/\(.*\)/, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

export const ProjectMark = ({ project, size = 'md' }) => {
  const [logoFailed, setLogoFailed] = useState(false);
  const dims = size === 'lg' ? 'w-16 h-16 text-xl' : 'w-12 h-12 text-base';

  // Show the app logo when one is set and the image loads; otherwise fall back to initials.
  if (project.logo && !logoFailed) {
    return (
      <div
        className={`${dims} shrink-0 rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-md`}
        style={{ boxShadow: `0 8px 20px -8px ${project.accent}66` }}
      >
        <img
          src={project.logo}
          alt={`${project.title} logo`}
          className="w-full h-full object-cover"
          onError={() => setLogoFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`${dims} shrink-0 rounded-2xl flex items-center justify-center font-extrabold text-white shadow-md`}
      style={{
        background: `linear-gradient(135deg, ${project.accent}, ${project.accent}cc)`,
        boxShadow: `0 8px 20px -8px ${project.accent}88`,
      }}
      aria-hidden="true"
    >
      {initialsOf(project.title)}
    </div>
  );
};

/**
 * Full project card used on the Projects page and the Home page.
 * Uses no scroll-reveal classes so it stays visible when lists are filtered.
 */
const ProjectCard = ({ project, compact = false }) => {
  const hasLinks = project.links?.length > 0;

  return (
    <article className="project-card group relative flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-600/10">
      <span
        className="absolute inset-x-0 top-0 h-1 rounded-t-2xl"
        style={{ background: project.accent }}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-3 mb-5">
        <ProjectMark project={project} />
        <StatusBadge status={project.status} />
      </div>

      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
        <PlatformIcon platform={project.platform} className="w-3.5 h-3.5" />
        <span>{project.platform}</span>
        <span className="text-slate-300">·</span>
        <span>{project.category}</span>
      </div>

      <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2">
        <Link
          to={`/projects/${project.id}`}
          className="after:absolute after:inset-0 after:content-[''] group-hover:text-brand-600 transition-colors"
        >
          {project.title}
        </Link>
      </h3>

      <p className={`text-body-sm text-slate-600 ${compact ? 'line-clamp-2' : ''}`}>
        {project.summary}
      </p>

      {!compact && project.tech?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
            >
              {t}
            </li>
          ))}
        </ul>
      )}

      {!compact && project.duration && (
        <p className="mt-4 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Timeline:</span> {project.duration}
        </p>
      )}

      <div className="mt-auto pt-5 flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
          View details
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>

        {hasLinks && !compact && (
          <div className="relative z-10 flex flex-wrap gap-2">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors"
              >
                {link.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
