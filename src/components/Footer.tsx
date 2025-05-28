const Footer = () => {
    return (
      <footer className="bg-slate-900 text-gray-400 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Nicolás Dev. All rights reserved.</p>
        <p>Contact: <a href="mailto:nicolas.sebasec@gmail.com" className="text-cyan-400 hover:underline">nicolas.sebasec@gmail.com</a></p>
      </footer>
    );
  };
  
  export default Footer;
  