function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">HW</span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">HelloWorld</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-slate-900 transition">Home</a>
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </nav>
        <a href="#features" className="inline-flex md:hidden items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition">
          Explore
        </a>
      </div>
    </header>
  );
}

export default Header;
