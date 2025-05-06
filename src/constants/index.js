const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 6, suffix: "+", label: "Satisfied Clients" },
  { value: 60, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Python Developer",
  //   modelPath: "/models/python-transformed.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "I was able to bring creativity and technical expertise to the team, which significantly improved our frontend performance.",
    imgPath: "/images/exp-1.webp",
    logoPath: "/images/logo.webp",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed a website that is one of the best displays on the website awwards.",
      "https://awwards-iota.vercel.app",
    ],
  },
  {
    review:
      "I can work on Appwrite website because it provides high level of quality and efficiency. I can provide solutions that enhance web application experience & meet product needs.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2023 - Present",
    responsibilities: [
      "Built cross-platform Web apps using Next.js, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
    ],
  },
  {
    review:
      "By learning Docker, I learned to face challenges with a problem-solving mindset and how to use Docker to support microservice architecture.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Express & React Developer",
    date: "March 2024 - Present",
    responsibilities: [
      "Developing web applications with Docker, and with a focus on scalability.",
      "Can work on the backend side to integrate API with the frontend seamlessly.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Dietrich Anugrah",
    mentions: "@detrikss",
    review:
      "I can't say enough good things about Abraham. He was able to help me solve a problem with the website design for my thesis and also made the website look good.",
    imgPath: "/images/client1.jpeg",
  },
  {
    name: "Muhammad Zacky Ramadhan",
    mentions: "@zackyramadhan12",
    review:
      "Maybe I can only say this, namely, Abraham can make something that he has never made before, he has skills where he is quick to learn and is always thirsty for something new to learn and make.",
    imgPath: "/images/client2.jpeg",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/akr.renz",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/Roger%20Gold",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "#",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/abraham-renzha-031456332/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
