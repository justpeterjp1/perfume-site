export default function Navbar() {
  return (
    <header className="w-full bg-secondary border-b border-muted flex items-center justify-between px-6 py-4">
      <h1 className="text-primary font-bold text-xl tracking-wide">PERFUME</h1>

      <nav className="hidden md:flex items-center gap-6 text-primary">
        <a className="hover:text-accent transition">Home</a>
        <a className="hover:text-accent transition">Shop by Brand</a>
        <a className="hover:text-accent transition">Male</a>
        <a className="hover:text-accent transition">Female</a>

        <div className="relative group">
          <button className="hover:text-accent transition">Others</button>
          <div className="absolute hidden group-hover:flex flex-col top-6 left-0 bg-secondary shadow-lg rounded p-4 gap-2">
            <a className="text-primary hover:text-accent">Perfume Oils</a>
            <a className="text-primary hover:text-accent">Diffusers</a>
            <a className="text-primary hover:text-accent">Body Sprays</a>
            <a className="text-primary hover:text-accent">Soaps</a>
          </div>
        </div>
      </nav>

      <button className="px-4 py-2 bg-primary text-secondary rounded hover:bg-accent hover:text-primary transition">
        Cart
      </button>
    </header>
  );
}
