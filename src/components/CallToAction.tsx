const CallToAction = () => {
    return (
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center rounded-lg max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Interested in working together?</h2>
        <p className="mb-8 text-lg max-w-xl mx-auto">
          Let's create something amazing. Contact me today and let's start your project!
        </p>
        <a
          href="mailto:awesomemail@mail.com"
          className="inline-block bg-white text-cyan-600 font-semibold px-8 py-3 rounded-lg hover:bg-cyan-100 transition"
        >
          Get in Touch
        </a>
      </section>
    );
  };
  
  export default CallToAction;
  