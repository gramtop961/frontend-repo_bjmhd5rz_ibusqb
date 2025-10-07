function Features() {
  const items = [
    {
      title: 'Fast Development',
      desc: 'Hot reload, instant feedback, and modern DX.'
    },
    {
      title: 'Beautiful by Default',
      desc: 'Tailwind CSS utilities for rapid, consistent UI.'
    },
    {
      title: 'Production Ready',
      desc: 'Ship a polished landing in minutes with best practices.'
    },
  ];

  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why you'll love it</h2>
          <p className="mt-4 text-slate-600">A tiny starter with big vibes.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-indigo-600 text-white font-bold">{i + 1}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
