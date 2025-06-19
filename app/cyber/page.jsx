// app/page.tsx or src/pages/index.tsx (Next.js 13+/App Router or traditional React)

import React from 'react';

export default function CyberpunkLandingPage() {
  return (
    <main className="bg-cyberpunk-black text-cyberpunk-light min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-cyberpunk-yellow">
          Welcome to My Cyberpunk World
        </h1>
        <p className="mt-4 max-w-xl text-cyberpunk-light text-lg">
          Building futuristic digital experiences with neon precision and dark vibes.
        </p>
        <button className="mt-6 bg-cyberpunk-blue hover:bg-cyberpunk-purple text-cyberpunk-black font-bold py-3 px-6 rounded-xl transition-all duration-300">
          Hire Me
        </button>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-cyberpunk-slate py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-cyberpunk-purple mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-cyberpunk-light">
          I’m a developer with a love for neon, speed, and crafting interfaces that feel alive. Always pushing the limits of design and interactivity.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-cyberpunk-yellow text-center mb-10">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {['React', 'Next.js', 'Tailwind CSS', 'TypeScript'].map((tech) => (
            <div
              key={tech}
              className="bg-cyberpunk-gunmetal p-4 text-center rounded-lg text-cyberpunk-light hover:shadow-lg hover:shadow-cyberpunk-purple transition"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT SECTION */}
      <section className="bg-cyberpunk-slate py-20 px-6">
        <h2 className="text-3xl font-bold text-cyberpunk-pink text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-cyberpunk-gunmetal p-6 rounded-xl hover:shadow-lg hover:shadow-cyberpunk-purple transition"
            >
              <h3 className="text-xl font-bold text-cyberpunk-purple mb-2">Project {i}</h3>
              <p className="text-cyberpunk-light text-sm">
                A futuristic UI app using cutting-edge tools and neon aesthetics.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="bg-cyberpunk-blue text-cyberpunk-black px-2 py-1 rounded text-xs">React</span>
                <span className="bg-cyberpunk-yellow text-cyberpunk-black px-2 py-1 rounded text-xs">Tailwind</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-cyberpunk-yellow mb-4">Contact Me</h2>
        <p className="text-cyberpunk-light mb-6">Got a project in mind or just want to say hi?</p>
        <button className="bg-cyberpunk-yellow hover:bg-cyberpunk-purple text-cyberpunk-black font-medium py-2 px-4 rounded-xl">
          Let’s Talk
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-cyberpunk-black text-center py-6 text-cyberpunk-light">
        © 2025 Neon Dev. Powered by light and code.
      </footer>
    </main>
  );
}
