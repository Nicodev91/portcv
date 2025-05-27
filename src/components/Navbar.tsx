const Navbar = () => (
    <nav className="flex justify-between items-center p-6 text-white">
      <div className="text-2xl font-bold text-cyan-400">Nicolás Dev</div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-cyan-400 transition-colors">HOME</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">PAGE ▼</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">WORKS ▼</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">ARTICLE & NEWS ▼</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">CONTACT US</a>
        <a href="curriculum.pdf" download className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 transition-colors ml-4">Descargar CV</a>
      
      </div>
       
    </nav>
  );
  
  export default Navbar;
  