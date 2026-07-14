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

export const person = {
  name: "Arushi Jain",
  title: "Mechanical Engineer",
  email: "arushijain5899@gmail.com",
  phone: "+1-878-834-9397",
  linkedin: "https://www.linkedin.com/in/arushi--jain/",
  resumeUrl: "/resume/Arushi_Jain_Resume.pdf",
  shortAbout: "Mechanical Engineer blending hardware design with machine learning.",
  bio: "I am Arushi Jain, a Mechanical Engineering graduate from Carnegie Mellon University with two years of experience in manufacturing and product design. Passionate about integrating machine learning into hardware design, I strive to create innovative, accessible technologies that drive positive change.",
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
      "A low-cost, portable robotic system for precise, minimally invasive needle insertion. Leveraging computer vision, real-time motion control, and sensor feedback, it dynamically adjusts for patient movement, achieving ±0.5 mm lesion localization and reducing healthcare costs.",
    links: [{ label: "GitHub", url: "https://github.com/Team3-16778" }],
    detail: roboticBiopsy,
  },
  {
    slug: "lmo-batteries",
    title: "2D Simulation of LMO Batteries",
    subtitle: "Research project, Panat Lab · Carnegie Mellon University",
    image: "/images/projects/batteries.png",
    description:
      "Coupled electrochemical simulation with additive manufacturing to move toward 3D-structured, cobalt-free Li-ion electrodes — modeling porous electrode and concentrated species theory in COMSOL to compare 3D-structured hybrid electrodes against conventional planar designs.",
    detail: lmoBatteries,
  },
  {
    slug: "knots-defect-analysis",
    title: "Knots: Defect Analysis in Soda-Lime Glass",
    subtitle: "Yield improvement project, Saint-Gobain",
    image: "/images/projects/knots.png",
    description:
      "Systematically traced and analyzed knot defects — off-composition glass encapsulated within soda-lime glass — using XRF spectroscopy and statistical process correlation, improving yield by 2% through composition analysis and process optimization.",
    detail: knotsDefectAnalysis,
  },
  {
    slug: "stones-defect-analysis",
    title: "Stones: Defect Analysis in Soda-Lime Glass",
    subtitle: "Yield improvement project, Saint-Gobain",
    image: "/images/projects/stones.png",
    description:
      "Studied the petrographic properties of alumino-silicate solid inclusion defects (spinel, corundum, cristobalite, wollastonite) through thin sectioning and microscopy to trace sources and reduce defect-related yield losses.",
    detail: stonesDefectAnalysis,
  },
  {
    slug: "cryogenic-vaccine-storage",
    title: "Cryogenic Vaccine Storage Assembly for Air Drop",
    subtitle: "Thermal Systems Analysis and Design course project, Carnegie Mellon University",
    image: "/images/projects/vaccine.png",
    description:
      "A portable cryogenic cooling system maintaining vaccines at −70°C for at least 12 hours during aerial delivery to remote, flood-prone regions — combining vacuum insulation, dry-ice sublimation, and Peltier cooling validated with MATLAB and ANSYS thermal analysis.",
    detail: cryogenicVaccineStorage,
  },
  {
    slug: "dlfea-heart-valve",
    title: "Deep Learning-Enhanced FEA for Bioprosthetic Heart Valves",
    subtitle: "Deep Learning course project, Carnegie Mellon University",
    image: "/images/projects/dlfea.png",
    description:
      "Integrated graph neural networks with finite element analysis to build fast surrogate models for bioprosthetic heart valve deformation, achieving R² = 0.96 with MeshGraphNets outperforming a 3D CNN baseline by 1.5%.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Da-aru/Deep-Learning-Enhanced-Finite-Element-Analysis-for-Bioprosthetic-Heart-Valve",
      },
      { label: "Project Video", url: "https://www.youtube.com/watch?v=QRPEZg2OpZo" },
    ],
    detail: dlfeaHeartValve,
  },
  {
    slug: "immersion-cooling-cfd",
    title: "CFD Analysis of Immersion Cooling for Batteries",
    subtitle: "Computational Fluid Dynamics course project, Carnegie Mellon University",
    image: "/images/projects/immersion-cooling.jpg",
    description:
      "Wrote a Python/MATLAB solver for the Navier-Stokes equations to model coolant flow in immersion-cooled battery packs, reducing temperature variation by 20% and eliminating hotspots through design and flow-rate optimization.",
    links: [{ label: "GitHub", url: "https://github.com/Da-aru/CFD-BTMS" }],
    detail: immersionCoolingCfd,
  },
  {
    slug: "melt-pool-diffusion",
    title: "High-Fidelity Melt Pool Modeling Using Generative Diffusion Networks",
    subtitle: "Generative AI course project, Carnegie Mellon University",
    image: "/images/projects/melt-pool.png",
    description:
      "A diffusion-based super-resolution model (ESRGAN encoder + DDPM refinement) that upscales low-resolution Laser Powder Bed Fusion melt-pool simulations, cutting computational time by 100x while preserving defect-relevant detail.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Da-aru/High-Fidelity-Melt-Pool-Modeling-Using-Generative-Diffusion-Networks",
      },
    ],
    detail: meltPoolDiffusion,
  },
  {
    slug: "orthoses",
    title: "Design of Upper and Lower Limb Orthoses",
    subtitle: "Product development project, Cre-Aid Labs",
    image: "/images/projects/orthoses.jpg",
    description:
      "Customizable 3D-printed orthotic splints — Thumb Spica, Toe Splint, and Stack Splint — designed in CAD and produced in heat-malleable PLA, validated through patient and practitioner trials for fit, comfort, and function.",
    detail: orthosesWriteup,
  },
  {
    slug: "prosthetic-hand",
    title: "Development of Transradial Prosthetic Hand",
    subtitle: "Product development project, Cre-Aid Labs",
    image: "/images/projects/prosthetic.png",
    description:
      "A low-cost (<$50), lightweight (140 g), body-powered prosthetic hand using a Whipple-tree mechanism for selective finger control, a rotatable wrist, and a custom 3D-printed socket for a precise, comfortable fit.",
    detail: prostheticHand,
  },
];
