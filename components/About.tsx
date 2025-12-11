import AgeCounter from "./AgeCounter";

export default function About() {
  return (
    <section id="about">
      <div className="text-text-secondary text-[0.95rem] leading-[1.8] mx-6">
        <p className="mb-5">
          Hey! My name is Harry and I'm <span className="inline-block w-[11.75ch]"><AgeCounter /></span> years old. 
          I'm currently a Master's student at the University of Western Australia, studying Computational Physics and researching in the field of Quantum Computing. 
          I love building software, working with data, and have a deep appreciation for form and function. 
          Whether it's elegant code, scalable systems or intuitive UX, I enjoy building thoughtful solutions.
        </p>
        <p className="mb-5">
          When I’m not tinkering with code or wrangling data, 
          I’m probably out running, skiing or surfing.
        </p>
      </div>
    </section>
  )
}

