function ProjectCard({ project }) {
  // Mène au site du projet s'il existe, sinon à son repo GitHub
  const link = project.site || project.repo

  return (
    <a
      href={link}
      target="_blank" // ouvre dans un nouvel onglet
      rel="noopener noreferrer" // bonne pratique de sécurité avec target="_blank"
      className="block rounded-xl border border-slate-200 bg-white p-6 transition hover:border-blue-400 hover:shadow-md"
    >
      <p className="text-sm text-slate-500">
        {project.type === 'cours' ? 'Projet de cours' : 'Projet perso'} · {project.year}
      </p>

      <h3 className="mt-1 text-xl font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-2 text-slate-600">{project.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-700">
            {tech}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm font-medium text-blue-600">
        {project.site ? 'Voir le site du projet' : 'Voir le code sur GitHub'}
      </p>
    </a>
  )
}

export default ProjectCard