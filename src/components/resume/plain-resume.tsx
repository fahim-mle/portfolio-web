import { JOURNEY } from '@/lib/resume-data';

export function PlainResume() {
  return (
    <div className="max-w-3xl mx-auto bg-white text-black p-8 md:p-12 shadow-sm my-8 font-sans">
      {/* Header */}
      <div className="border-b border-gray-300 pb-6 mb-6">
        <h1 className="text-3xl font-bold uppercase tracking-tight">Fahim Forhad</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
          <span>fahimforhad.brisbane@gmail.com</span>
          <span>•</span>
          <span>Brisbane, AU</span>
          <span>•</span>
          <a href="https://mindinroot.com" className="hover:underline">mindinroot.com</a>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Profile</h2>
        <p className="text-gray-800 leading-relaxed">
          Full-stack Software Engineer with 4+ years of experience building scalable web applications and leading engineering teams. 
          Combines strong React/Node.js expertise with a Master&apos;s in Data Science to deliver high-performance, data-informed products.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Experience</h2>
        <div className="space-y-6">
          {JOURNEY.filter(j => j.type === 'work').map((role) => (
            <div key={role.id}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-900">{role.title}</h3>
                <span className="text-sm text-gray-500">{role.period}</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">{role.company} — {role.location}</div>
              <p className="text-sm text-gray-800 leading-relaxed">{role.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Education</h2>
        <div className="space-y-4">
          {JOURNEY.filter(j => j.type === 'education').map((edu) => (
            <div key={edu.id}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-900">{edu.title}</h3>
                <span className="text-sm text-gray-500">{edu.period}</span>
              </div>
              <div className="text-sm text-gray-600">{edu.company}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
