import { useGSAP } from "@gsap/react";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring To The Table"
        />

        <div className="tech-grid">
          {techStackIcons.map((tech) => (
            <div
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              key={tech.name}
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={tech} />
                </div>

                <div className="padding-x w-full">
                  <p className="">{tech.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
