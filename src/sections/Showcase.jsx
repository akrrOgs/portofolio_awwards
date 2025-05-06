import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1 = useRef(null);
  const project2 = useRef(null);
  const project3 = useRef(null);

  useGSAP(() => {
    const projects = [project1.current, project2.current, project3.current];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Aoom-Zoom" />
            </div>
            <div className="text-content">
              <a
                href="https://aoom-bram.vercel.app"
                className="text-2xl md:text-3xl lg:text-4xl font-bold"
              >
                Meeting, studying or teaching remotely becomes easier with a
                sophisticated and easy-to-use application called Aoom.
              </a>
              <p className="text-white-50 md:text-xl">
                An app built with React JS, Next JS & Tailwind CSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Store-it" />
              </div>
              <a
                className="text-lg md:text-xl lg:text-2xl font-semibold mt-5"
                href="https://storage-management-solution-nu.vercel.app"
              >
                Storage Management Solution
              </a>
            </div>
            <div className="project" ref={project3}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="Imaginify" />
              </div>
              <a
                href="https://imaginfy-abs.vercel.app"
                className="text-lg md:text-xl lg:text-2xl font-semibold mt-5"
              >
                Imaginify - A Software as a Service (SaaS) Web Application
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
