import roboticBiopsy from "./project-writeups/robotic-biopsy.md?raw";
import lmoBatteries from "./project-writeups/lmo-batteries.md?raw";
import knotsDefectAnalysis from "./project-writeups/knots-defect-analysis.md?raw";
import stonesDefectAnalysis from "./project-writeups/stones-defect-analysis.md?raw";
import cryogenicVaccineStorage from "./project-writeups/cryogenic-vaccine-storage.md?raw";
import dlfeaHeartValve from "./project-writeups/dlfea-heart-valve.md?raw";
import immersionCoolingCfd from "./project-writeups/immersion-cooling-cfd.md?raw";
import meltPoolDiffusion from "./project-writeups/melt-pool-diffusion.md?raw";
import orthosesWriteup from "./project-writeups/orthoses.md?raw";
import prostheticHand from "./project-writeups/prosthetic-hand.md?raw";
import dextrousRoboticArm from "./project-writeups/dextrous-robotic-arm.md?raw";

export const person = {
  name: "Arushi Jain",
  title: "Mechanical Engineer",
  email: "arushijain5899@gmail.com",
  phone: "+1-878-834-9397",
  linkedin: "https://www.linkedin.com/in/arushi--jain/",
  resumeUrl: "https://drive.google.com/file/d/1emD9KYUu2IVGPG2hUOGmValF0ALRC8OW/view?usp=sharing",
  shortAbout: "Mechanical Engineer",
  bio: "I am Arushi Jain, a Mechanical Engineering graduate from Carnegie Mellon University with 3+ years of experience in manufacturing and product design. Passionate about integrating machine learning into hardware design, I strive to create innovative, accessible technologies that drive positive change.",
};

export const education = [
  {
    school: "Carnegie Mellon University",
    degree: "Master of Science in Mechanical Engineering – Research",
    location: "Pittsburgh, PA",
    duration: "Aug 2023 – May 2025",
    details: [
      "Mechanical Graduate representative for Spring 2025 at Carnegie Mellon University",
      "Relevant courses: Generative AI, Deep Learning, Thermal Design, Mechatronic Design, CFD",
      "Graduate Teaching Assistant: Applied FEA, Mechanical Modelling guided by Fundamentals, Product Design",
    ],
  },
  {
    school: "Manipal Institute of Technology",
    degree: "Bachelor of Technology in Mechanical Engineering, minor in Mechanical Design",
    location: "Manipal, India",
    duration: "Jul 2019 – Jun 2023",
    details: [
      "Relevant courses: Fatigue and Fracture, Finite Element Methods, Vibrations, Modern Control Theory",
    ],
  },
];

export const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Python", "MATLAB", "Simulink", "R", "C++", "Minitab"],
  },
  {
    category: "Machine Learning",
    skills: ["Deep Neural Networks", "Physics-Informed Neural Networks", "Generative AI"],
  },
  {
    category: "CAE Software",
    skills: ["CATIA", "SolidWorks", "Fusion 360", "Ansys Workbench", "NX", "Rhinoceros", "COMSOL"],
  },
  {
    category: "Engineering",
    skills: ["Mechanical Design", "Thermal Design", "SPC", "GD&T", "FEA", "CFD", "AM", "DFMEA", "Agile", "Kaizen"],
  },
];

export const experience = [
  {
    role: "Process Engineer",
    org: "Conifer",
    location: "Sunnyvale, CA, United States",
    duration: "Dec 2026 – Present",
    details: [
      "Executed DFM of axial-flux stators via an in-house APG process and closed potting molds for high-volume encapsulation",
      "Designed in-house tooling, including an abrasive enamel-removal machine and fixtures for coil winding & laser welding",
      "Owned the laser welding process for stator components from parameter development through production scaling",
    ],
  },
  {
    role: "Founding Engineer - Mechanical",
    org: "Futurhand Robotics",
    location: "Pittsburgh, PA, United States",
    duration: "Jul 2025 – Dec 2025",
    details: [
      "Led the MacBook program as DRI, conducting technical assessments, optimizing designs, driving improvements via DFMEA and DOE, and drafting detailed vendor drawings",
      "Reduced flexible PCB connector load by 50.3% by implementing a kirigami-inspired compliance design in the PCB through analysis and simulation; developed design guidelines to ensure optimal performance and reliability",
      "Designed and developed the Test Buck Assembly for battery testing in portable devices",
    ],
  },
  {
    role: "Product Design Intern – Battery Pack",
    org: "Apple",
    location: "Cupertino, CA, United States",
    duration: "May 2024 – Aug 2024",
    details: [
      "Led the MacBook program as DRI, conducting technical assessments, optimizing designs, driving improvements via DFMEA and DOE, and drafting detailed vendor drawings",
      "Reduced flexible PCB connector load by 50.3% by implementing a kirigami-inspired compliance design in the PCB through analysis and simulation; developed design guidelines to ensure optimal performance and reliability",
      "Designed and developed the Test Buck Assembly for battery testing in portable devices",
    ],
  },
  {
    role: "Quality Improvement Engineer",
    org: "Saint-Gobain – Glass Manufacturing",
    location: "Chennai, India",
    duration: "Sep 2021 – Jul 2023",
    details: [
      "Carried out defect analysis through XRF analysis and petrographic microscopic examination; implemented data-driven approaches to identify and mitigate defects — knots & stones — resulting in a 2% yield increase",
      "Monitored and assisted in routine & non-routine quality tests adhering to ISO standards",
      "Studied industrial robot installation for a manufacturing process involving technical surveying, recommendation of a suitable robot and its configuration, return on investment, and risk assessment; reduced process cycle time by 42%",
    ],
  },
  {
    role: "Product Design Intern",
    org: "Cre-Aid Labs",
    location: "Bengaluru, India",
    duration: "Jan 2021 – Sep 2021",
    details: [
      "Designed a cost-effective (<$50), body-powered, modular, 3D-printed trans-radial prosthetic arm that mimics human hand functionality, enabling users to perform 20 essential grips for daily activities",
      "Developed a myoelectric trans-radial prosthetic prototype using EMG sensors",
      "Created 3D-printed, customizable orthopedic arm and foot orthoses currently in use by patients",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  links?: { label: string; url: string }[];
  /** Full write-up in Markdown, loaded from src/data/project-writeups/. */
  detail: string;
};

export const projects: Project[] = [
  {
    slug: "robotic-biopsy",
    title: "Autonomous Robotic Biopsy System for Liver Tissue",
    subtitle: "Mechatronics course project, Carnegie Mellon University",
    image: "/images/projects/biopsy.png",
    description:
      "Low-cost robotic system for precise needle insertion, using computer vision to achieve ±0.5 mm lesion localization.",
    links: [{ label: "GitHub", url: "https://github.com/Team3-16778" },{label: "Project Website", url: "https://team3-16778.github.io/#/"},{label: "Project Video", url: "https://youtu.be/UW7k7Gw-k7s"}],
    detail: roboticBiopsy,
  },
  {
    slug: "dextrous-robotic-arm",
    title: "Rethinking actuator design for dexterous end effectors",
    subtitle: "Personal project",
    image: "/images/projects/hand.png",
    description:
      "Designed a modular coupler interface that decouples actuators from manipulators in tendon-driven hands, cutting repair time from hours to minutes and enabling one actuator to drive multiple end effectors.",
    detail: "test",
  },
  {
    slug: "cryogenic-vaccine-storage",
    title: "Cryogenic Vaccine Storage Assembly for Air Drop",
    subtitle: "Thermal Systems Analysis and Design course project, Carnegie Mellon University",
    image: "/images/projects/vaccine.png",
    description:
      "Portable cryogenic system keeping vaccines at −70°C for 12+ hours in transit, validated with MATLAB and ANSYS.",
    detail: cryogenicVaccineStorage,
  },
 
  {
    slug: "prosthetic-hand",
    title: "Development of Transradial Prosthetic Hand",
    subtitle: "Product development project, Cre-Aid Labs",
    image: "/images/projects/prosthetic.png",
    description:
      "Low-cost (<$50), 140 g body-powered prosthetic hand with Whipple-tree finger control and a custom 3D-printed socket.",
    detail: prostheticHand,
  },
  
   {
    slug: "orthoses",
    title: "Design of Upper and Lower Limb Orthoses",
    subtitle: "Product development project, Cre-Aid Labs",
    image: "/images/projects/ortho.png",
    description:
      "Customizable 3D-printed orthotic splints in heat-malleable PLA, validated through patient and practitioner trials.",
    detail: orthosesWriteup,
  },
  {
    slug: "lmo-batteries",
    title: "2D Simulation of LMO Batteries",
    subtitle: "Research project, Panat Lab · Carnegie Mellon University",
    image: "/images/projects/batteries.png",
    description:
      "Coupled electrochemical simulation with additive manufacturing to compare 3D-structured, cobalt-free Li-ion electrodes in COMSOL.",
    detail: lmoBatteries,
  },
  {
    slug: "dlfea-heart-valve",
    title: "Deep Learning-Enhanced FEA for Bioprosthetic Heart Valves",
    subtitle: "Deep Learning course project, Carnegie Mellon University",
    image: "/images/projects/dlfea.jpg",
    description:
      "Graph neural network FEA surrogate for heart valve deformation, achieving R² = 0.96 vs. a 3D CNN baseline.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Da-aru/Deep-Learning-Enhanced-Finite-Element-Analysis-for-Bioprosthetic-Heart-Valve",
      },
      { label: "Project Video", url: "https://www.youtube.com/watch?v=QRPEZg2OpZo" }, { label: "Project Report", url: "https://drive.google.com/file/d/1Qmbnu70hFqMDSnJXhrfVR4vHvgJgbnUE/view?usp=sharing" }
    ],
    detail: dlfeaHeartValve,
  },
  {
    slug: "immersion-cooling-cfd",
    title: "CFD Analysis of Immersion Cooling for Batteries",
    subtitle: "Computational Fluid Dynamics course project, Carnegie Mellon University",
    image: "/images/projects/immersion-cooling.jpg",
    description:
      "Python/MATLAB Navier-Stokes solver for immersion-cooled battery packs, cutting temperature variation by 20%.",
    links: [{ label: "GitHub", url: "https://github.com/Da-aru/CFD-BTMS" }, { label: "Project Report", url: "https://drive.google.com/file/d/1BLNYH_0vXInAiqeZNMVUvy01xkOBghXy/view?usp=sharing" }], //
    detail: immersionCoolingCfd,
  },
  {
    slug: "melt-pool-diffusion",
    title: "High-Fidelity Melt Pool Modeling Using Generative Diffusion Networks",
    subtitle: "Generative AI course project, Carnegie Mellon University",
    image: "/images/projects/melt-pool.png",
    description:
      "Diffusion super-resolution model upscaling LPBF melt-pool simulations, cutting compute time 100x with defect fidelity preserved.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Da-aru/High-Fidelity-Melt-Pool-Modeling-Using-Generative-Diffusion-Networks",
      },
    ],
    detail: meltPoolDiffusion,
  },
  {
    slug: "knots-defect-analysis",
    title: "Knots: Defect Analysis in Soda-Lime Glass",
    subtitle: "Yield improvement project, Saint-Gobain",
    image: "/images/projects/knots.png",
    description:
      "Traced knot defects in soda-lime glass via XRF spectroscopy and process correlation, improving yield by 2%.",
    detail: knotsDefectAnalysis,
  },
  {
    slug: "stones-defect-analysis",
    title: "Stones: Defect Analysis in Soda-Lime Glass",
    subtitle: "Yield improvement project, Saint-Gobain",
    image: "/images/projects/stones.png",
    description:
      "Studied petrographic properties of solid inclusion defects via thin sectioning and microscopy to trace their source.",
    detail: stonesDefectAnalysis,
  },
  
];
