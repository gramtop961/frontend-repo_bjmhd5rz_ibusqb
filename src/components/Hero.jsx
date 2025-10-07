import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden min-h-[70vh]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/YZdMZzNJGEMwyLli/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-orange-700 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-orange-600" />
              Welcome to your new app
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Hello World
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              A minimal, beautiful landing page starter built with Vite, React, and Tailwind CSS.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#features"
                className="inline-flex items-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-700 transition"
              >
                Get Started
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border border-slate-300 bg-white/90 backdrop-blur px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-white transition"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm">
              <div className="grid h-full place-items-center rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 text-white">
                <div className="text-center">
                  <p className="text-sm/5 opacity-90">Vite + React + Tailwind</p>
                  <p className="mt-2 text-3xl font-bold">Hello, World! 👋</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />
    </section>
  );
}

export default Hero;
