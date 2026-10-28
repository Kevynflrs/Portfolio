import ProjectCard from './components/ProjectCard.jsx'
import { projects } from './data/projects.js'

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-slate-900">Mon portfolio</h1>

        <h2 className="mt-12 mb-6 text-2xl font-semibold text-slate-900">Projets</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App