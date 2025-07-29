/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fabian Hernandez",
  title: "Hola a todos, soy Fabián",
  subTitle: emoji(
    "Ingeniero Civil en informática 🚀 Con más de 25 años de experiencia en liderazgo y formación de equipos de Tecnologías de la Información en destacadas empresas nacionales, soy un ejecutivo especializado en la gestión e implementación de proyectos de alta complejidad, operaciones de TI, certificación de software, análisis, gestión de datos y mejora de procesos. Destaco por mi enfoque orientado a resultados y por mi habilidad para abordar desafíos de manera innovadora. Mi prioridad siempre es atender de manera efectiva las necesidades del cliente en cada empresa en la que colaborado. Adicionalmente, cuento con destacadas habilidades interpersonales, sólidas capacidades de negociación y experiencia en docencia."
  ),
  resumeLink:
    "https://drive.google.com/file/d/11wR0x1stn8QX-icYyPoSO2e4LVSxQ4hU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fahg-cl",
  linkedin: "https://www.linkedin.com/in/fabianhernandez/",
  gmail: "fahg76@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://web.facebook.com/FAHG.cl",
  instagram: "https://www.instagram.com/fahg_cl/",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Que cosas hago",
  subTitle: "ME GUSTA LA TECNOLOGÍA, QUISIERA TENER MÁS TIEMPO PARA APRENDER MUCHAS COSAS MÁS, DE TODAS FORMAS HE APRENDIDO A LO LARGO DE LOS AÑOS A DESARROLLAR PROYECTOS EN DIFERENTES TECNOLOGÍAS, MI FUERTE EN SI ES LA GESTIÓN DE EQUIPOS DE TI",
  skills: [
    emoji(
      "⚡ Organización y gestión de proyectos de TI, incluyendo la planificación, ejecución y seguimiento de proyectos complejos."
    ),
    emoji("⚡ Conformación y liderazgo de equipos de TI, fomentando un ambiente colaborativo y productivo."),
    emoji(
      "⚡ Liderazgo en la implementación de proyectos de alta complejidad, asegurando la entrega a tiempo y dentro del presupuesto."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  /*{
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "Sass",
    fontAwesomeClassname: "fab fa-sass"
  },*/
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "devicon-javascript-plain"
  },
  /*{
    skillName: "React.js",
    fontAwesomeClassname: "fab fa-react"
  },*/
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node"
  },
  /*{
    skillName: "Swift",
    fontAwesomeClassname: "fab fa-swift"
  },
  {
    skillName: "NPM",
    fontAwesomeClassname: "fab fa-npm"
  },*/
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "devicon-amazonwebservices-plain-wordmark"
  },
  /*{
    skillName: "Firebase",
    fontAwesomeClassname: "fas fa-fire"
  },*/
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "JQuery",
    fontAwesomeClassname: "devicon-jquery-plain"
  },
  {
    skillName: "JSON",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "HubSpot CRM",
    fontAwesomeClassname: "devicon-hubspot-plain"
  },
  {
    skillName: "GCP",
    fontAwesomeClassname: "devicon-googlecloud-plain"
  },
  {
    skillName: "Power BI",
    fontAwesomeClassname: "custom powerbi-icon"
  },
  {
    skillName: "Laravel",
    fontAwesomeClassname: "devicon-laravel-plain"
  },
  {
    skillName: "ASP.NET",
    fontAwesomeClassname: "devicon-dot-net-plain"
  },
  {
    skillName: "PHP",
    fontAwesomeClassname: "devicon-php-plain"
  },
  {
    skillName: "HTML5",
    fontAwesomeClassname: "devicon-html5-plain"
  },
  {
    skillName: "XML",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Lotus Notes",
    fontAwesomeClassname: "custom lotus-notes-icon"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "devicon-java-plain"
  },
  {
    skillName: "SQL Server",
    fontAwesomeClassname: "devicon-microsoftsqlserver-plain"
  },
  {
    skillName: "PL/SQL",
    fontAwesomeClassname: "custom plsql-icon"
  },
  {
    skillName: "C",
    fontAwesomeClassname: "devicon-c-plain"
  },
  {
    skillName: "C#",
    fontAwesomeClassname: "devicon-csharp-plain"
  },
  {
    skillName: "C++ Builder",
    fontAwesomeClassname: "devicon-cplusplus-plain"
  },
  {
    skillName: "SharePoint",
    fontAwesomeClassname: "custom sharepoint-icon"
  },
  {
    skillName: "Prolog",
    fontAwesomeClassname: "custom prolog-icon"
  },
  {
    skillName: "Visual Basic",
    fontAwesomeClassname: "devicon-visualstudio-plain"
  }
],
display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Univesidad de Santiago de Chile",
      logo: require("./assets/images/UsachP2.png"),
      subHeader: "Ingeniero Civil en Informática",
      duration: "Marzo 1995 - Septiembre 2002",
      desc: "Trabajo de Título",
      descBullets: [
        "Segmentación de Fallas Hipotéticas en la Inspección Visual Automática"        
      ]
    },
    {
      schoolName: "FEN Universidad de Chile",
      logo: require("./assets/images/Logo_FEN_UChile.png"),
      subHeader: "(E)Master of Business Administration (MBA)",
      duration: "Abril 2012 - Diciembre 2013",
      desc: "Programa Weekends para profesionales con experiencia",
      descBullets: [" Doble titulación",
        "The George Washington University Advanced seminar on Topic in International Business, International Bussines"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Dirección TI", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Gestión TI",
      progressPercentage: "90%"
    },
    {
      Stack: "Programación",
      progressPercentage: "80%"
    },/*
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },*/
    {
      Stack: "Ciencia de Datos",
      progressPercentage: "70%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "30%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Jefe de Proyecto Senior",
      company: "Ministerio de Vivienda y Urbanismo (MINVU)",
      companylogo: require("./assets/images/LogoMinvu.png"),
      date: "Jun 2024 – Actualidad",
      desc: "Liderazgo de proyectos estratégicos como el ERP Ministerial, sistemas BPM de control urbano y plataforma de acreditación para profesionales del urbanismo.",
      descBullets: [
        "Dirección del ERP para 16 Serviu, 16 Seremi y el Parque Metropolitano (más de 1.600 millones CLP).",
        "Implementación de BPM para seguimiento de programas del DGU (más de 20.000 millones CLP anuales).",
        "Desarrollo de sistema de acreditación para planes reguladores urbanos (más de 17.100 millones CLP anuales)."
      ]
    },/*
    {
      role: "Consultor Independiente",
      company: "Consultoría Profesional",
      companylogo: require("./assets/images/consultorLogo.png"),
      date: "Ago 2023 – May 2024",
      desc: "Asesoría técnica a estudios jurídicos en la gestión y normalización de bases de datos geográficas para proyectos de alto impacto."
    },*/
    {
      role: "Subgerente de Continuidad Operacional, Soporte Tecnológico y Explotación",
      company: "Empresas SB",
      companylogo: require("./assets/images/LogoEmpresasSB.png"),
      date: "Oct 2021 – Feb 2023",
      desc: "Responsable de continuidad operacional y soporte TI para la transformación digital de la compañía.",
      descBullets: [
        "Formación de 4 nuevos equipos y administración de 53 personas.",
        "Implementación de plataforma JIRA y atención extendida vía call center en Colombia.",
        "Mejoras en gestión de incidencias y optimización de recursos tecnológicos."
      ]
    },
    {
      role: "Jefe de Continuidad Operacional y Mejora Continua",
      company: "Empresas SB",
      companylogo: require("./assets/images/LogoEmpresasSB.png"),
      date: "Abr 2020 – Nov 2021",
      desc: "Reconstrucción del área tras salida de proveedor externo, fortaleciendo la atención interna en el holding SB.",
      descBullets: [
        "Gestión de más de 10.000 tickets mensuales.",
        "Consolidación de procesos críticos y mejora continua."
      ]
    },
    {
      role: "Subgerente de TI",
      company: "Clínica Vespucio",
      companylogo: require("./assets/images/LogoDavilaVespucio.png"),
      date: "Feb 2018 – May 2019",
      desc: "Liderazgo total del área TI, reorganización completa de equipos y procesos.",
      descBullets: [
        "Creación de subgerencia, nueva Mesa de Ayuda y soporte técnico híbrido.",
        "Ahorro de MM$120 anuales en servicios de impresión.",
        "Implementación de nuevas unidades clínicas y control total de incidentes de seguridad."
      ]
    },
    {
      role: "Jefe de Área Canales & Front",
      company: "Isapre Consalud",
      companylogo: require("./assets/images/LogoConsalud.png"),
      date: "Nov 2010 – Dic 2017",
      desc: "Responsable de todos los canales digitales y presenciales de atención al cliente.",
      descBullets: [
        "Migración completa de web privada y desarrollo de funcionalidades críticas (reembolsos, bonos, pagos).",
        "Implementación de modelo de contactabilidad y aumento de eficiencia de contacto de 10% a 45%.",
        "Proyectos de innovación en venta digital, UI/UX, y analítica web."
      ]
    },
    {
      role: "Jefe de Proyectos",
      company: "BCI Seguros",
      companylogo: require("./assets/images/logobci.svg"),
      date: "Abr 2010 – Nov 2010",
      desc: "Responsable de proyectos tecnológicos en el área de siniestros de vehículos."
    },
    {
      role: "Jefe de Proyectos Canales Remotos / QA",
      company: "Penta Vida",
      companylogo: require("./assets/images/logoPentaVida.png"),
      date: "Dic 2005 – Mar 2010",
      desc: "Liderazgo en canales de atención y certificación QA.",
      descBullets: [
        "Responsable de canales de atención a clientes.",
        "Creador del área de certificación de software QA."
      ]
    },
    {
      role: "Ingeniero de Sistemas",
      company: "Synapsis (hoy TIVIT)",
      companylogo: require("./assets/images/LogoTivit.png"),
      date: "Dic 1999 – Nov 2005",
      desc: "Desarrollo y mantención de sitios web e intranet para el grupo Enersis (actual ENEL)."
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
