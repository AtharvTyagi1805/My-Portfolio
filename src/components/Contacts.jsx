import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("meokzbzn"); // Replace with your Formspree ID

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-transparent text-white flex items-center justify-center"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-berkshire mb-6 relative group w-fit">
            Let's Connect
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
          </h2>
          <p className="text-gray-300 font-bevietnam text-lg mb-8 max-w-md">
            Got a project in mind or just want to say hello? I'd love to hear
            from you! Drop me a message and I'll get back to you as soon as
            possible.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition flex items-center gap-2"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition flex items-center gap-2"
            >
              <span>Behance</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        <div className="bg-[#0d0d0d] border border-white/10 rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold font-belleza mb-2 relative group w-fit">
            Contact Me
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
          </h3>
          <p className="text-gray-400 mb-6">
            Get in touch and let's create something amazing together.
          </p>

          {state.succeeded ? (
            <p className="text-green-400 text-lg">
              Thanks! I’ll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="6"
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white placeholder-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-white"
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-black hover:text-white border border-transparent hover:border-white transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
