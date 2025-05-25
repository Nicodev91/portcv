const Footer = () => {
    return (
      <footer className="bg-slate-900 text-gray-400 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} ZedPortfolio. All rights reserved.</p>
        <p>Contact: <a href="mailto:awesomemail@mail.com" className="text-cyan-400 hover:underline">awesomemail@mail.com</a></p>
      </footer>
    );
  };
  
  export default Footer;
  