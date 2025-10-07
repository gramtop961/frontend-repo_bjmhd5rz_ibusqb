function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} HelloWorld. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="mailto:hello@example.com" className="hover:text-slate-900 transition">Email</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
