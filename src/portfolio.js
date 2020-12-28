
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Tanvir Alam",
  title: "Hi, I'm Tanvir",
  subTitle: emoji("I have a strong desire for change, disciplined dedication, and unbeatable persistence."),
  resumeLink: require("./docs/Tanvir-Alam-CV.pdf"),
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/TanvirAlam",
  linkedin: "https://www.linkedin.com/in/tanviralamshawn/",
  gmail: "tanvir.alam.shawn@gmail.com",
  facebook: "https://www.facebook.com/tanvr.alam/",
  display: true // Set true to display this section, defaults to false
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Docker/NPM/Cypress")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your education background

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Mälardalen University",
      logo: require("./assets/images/malardalen.png"),
      subHeader: "Master of Science in Software Engineering",
      duration: "Jan 2005 - Feb 2007",
      desc: "",
      descBullets: [
        "Research Methodology for Computer Science and Engineering",
        "Real-Time Systems (Basic)",
        "Real-Time Systems (Advance)",
        "MSc. Thesis (Gesture recognition)"
      ]
    },
    {
      schoolName: "Independent University",
      logo: require("./assets/images/independent.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Aug 1999 - Mar 2004",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "GCE O-Level",
      logo: require("./assets/images/olevel.png"),
      subHeader: "General Certificate of Education: Ordinary Level 5 Subject",
      duration: "Aug 1997 - Mar 1999",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Viktorid Berge Gymnasium",
      logo: require("./assets/images/vbg.png"),
      subHeader: "Pre IB (International Baccalaureate)",
      duration: "Aug 1996 - Aug 1997",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Rödabergsskolan",
      logo: require("./assets/images/rodabergsskolan.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Aug 1990 - Jul 1997",
      desc: "",
      descBullets: []
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%",  //Insert relative proficiency in percentage
      techIcon: [
        {
          name: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          name: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          name: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          name: "VueJs",
          fontAwesomeClassname: "fab fa-vuejs"
        }
      ]
    },
    {
      Stack: "Backend",
      progressPercentage: "90%",
      techIcon: [
        {
          name: "PHP",
          fontAwesomeClassname: "fab fa-php"
        },
        {
          name: "Java",
          fontAwesomeClassname: "fab fa-java"
        },
        {
          name: "MySql",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          name: "Postgresql",
          fontAwesomeClassname: "fas fa-database"
        }
      ]
    },
    {
      Stack: "Environment",
      progressPercentage: "90%",
      techIcon: [
        {
          name: "GitHub",
          fontAwesomeClassname: "fab fa-git"
        },
        {
          name: "Docker",
          fontAwesomeClassname: "fab fa-docker"
        },
        {
          name: "Mac",
          fontAwesomeClassname: "fab fa-apple"
        },
        {
          name: "Linux Ubuntu",
          fontAwesomeClassname: "fab fa-ubuntu"
        },
        {
          name: "Windows",
          fontAwesomeClassname: "fab fa-microsoft"
        },
        {
          name: "GitHub",
          fontAwesomeClassname: "fab fa-git"
        }
      ]
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Your top 3 work experiences

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Front-end Developer",
      company: "Carecom",
      companylogo: require("./assets/images/carecom.png"),
      date: "Sep 2019 – Present",
      desc: "Terminology services allow an organization to map or crosswalk these custom codes to a standard terminology, such as ICD-10 or CPT® and help ensure proper billing, analytics and identifying Terminology services.",
      descBullets: [
        {
          name: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          name: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          name: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          name: "PostGrads",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          name: "VueJs",
          fontAwesomeClassname: "fab fa-vuejs"
        },
        {
          name: "Java",
          fontAwesomeClassname: "fab fa-java"
        },
        {
          name: "GitHub",
          fontAwesomeClassname: "fab fa-git"
        },
        {
          name: "Docker",
          fontAwesomeClassname: "fab fa-docker"
        },
        {
          name: "Mac",
          fontAwesomeClassname: "fab fa-apple"
        }
      ]
    },
    {
      role: "Sr. Full Stack Developer",
      company: "EasyTranslate",
      companylogo: require("./assets/images/easytranslate.png"),
      date: "May 2019 – Jul 2019",
      desc: "Building a new scaleable application to replace a legacy system. The development includes new API endpoints for administrative dashboard tool, integration with 3rd parties platforms such as MemSource and stripe.",
      descBullets: [
        {
          name: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          name: "PHP",
          fontAwesomeClassname: "fab fa-php"
        },
        {
          name: "Laravel",
          fontAwesomeClassname: "fab fa-laravel"
        },
        {
          name: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          name: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          name: "VueJs",
          fontAwesomeClassname: "fab fa-vuejs"
        },
        {
          name: "GitHub",
          fontAwesomeClassname: "fab fa-git"
        },
        {
          name: "MySql",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          name: "Docker",
          fontAwesomeClassname: "fab fa-docker"
        },
        {
          name: "Mac",
          fontAwesomeClassname: "fab fa-apple"
        }
      ]
    },
    {
      role: "Full Stack Developer",
      company: "TF-Technologies",
      companylogo: require("./assets/images/tf.png"),
      date: "Nov 2018 – Apr 2019",
      desc: "At TF-Technologies, the main focus is to develop and produce high-quality electronic control solutions for road construction machinery. They are a small Danish company, led by a management team of dedicated individuals with a combined experience of more than 50 years within this special field.",
      descBullets: [
        {
          name: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          name: "PHP",
          fontAwesomeClassname: "fab fa-php"
        },
        {
          name: "Laravel",
          fontAwesomeClassname: "fab fa-laravel"
        },
        {
          name: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          name: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          name: "React",
          fontAwesomeClassname: "fab fa-react"
        },
        {
          name: "GitHub",
          fontAwesomeClassname: "fab fa-git"
        },
        {
          name: "MySql",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          name: "Docker",
          fontAwesomeClassname: "fab fa-docker"
        },
        {
          name: "Mac",
          fontAwesomeClassname: "fab fa-apple"
        }
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Dwarf",
      companylogo: require("./assets/images/dwarf.png"),
      date: "Aug 2018 – Oct 2018",
      desc: "Dwarf is a digital agency with over 19 years of online experience, providing full service in online business development, design and concept development, and advanced backend development and integration. They provide expert advice to our customers, helping them choose to and from - and then we implement quality solutions.",
      descBullets: [
        {
          name: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          name: "PHP",
          fontAwesomeClassname: "fab fa-php"
        },
        {
          name: "Laravel",
          fontAwesomeClassname: "fab fa-laravel"
        },
        {
          name: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          name: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          name: "React",
          fontAwesomeClassname: "fab fa-react"
        },
        {
          name: "GitHub",
          fontAwesomeClassname: "fab fa-git"
        },
        {
          name: "MySql",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          name: "Docker",
          fontAwesomeClassname: "fab fa-docker"
        },
        {
          name: "Mac",
          fontAwesomeClassname: "fab fa-apple"
        }
      ]
    },
    {
      role: "Backend Developer",
      company: "Casalogic (CUBS)",
      companylogo: require("./assets/images/casalogic.png"),
      date: "Dec 2016 – Jun 2018",
      desc: "Casalogic A/S is one of Denmark's first and leading suppliers of Enterprise Open Source products and support. Since 2002, the company has helped Nordic companies and organizations implement and run IT infrastructure based on the Linux operating system combined with a myriad of free and commercial software applications found in the Open Source environment.",
      descBullets: [
        {
          name: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          name: "PHP",
          fontAwesomeClassname: "fab fa-php"
        },
        {
          name: "Laravel",
          fontAwesomeClassname: "fab fa-laravel"
        },
        {
          name: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          name: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          name: "React",
          fontAwesomeClassname: "fab fa-react"
        },
        {
          name: "GitHub",
          fontAwesomeClassname: "fab fa-git"
        },
        {
          name: "MySql",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          name: "Docker",
          fontAwesomeClassname: "fab fa-docker"
        },
        {
          name: "Linux Ubuntu",
          fontAwesomeClassname: "fab fa-ubuntu"
        }
      ]
    },
    {
      role: "Backend Developer",
      company: "Comadso",
      companylogo: require("./assets/images/comadso.png"),
      date: "Oct 2015 – Nov 2016",
      desc: "Comadso A/S (COMparative ADvantage SOftware) have developed our own IT-software to the insurance industry, which enables our clients to match and compare insurance products. We have several insurance companies as clients from our headquarter in Copenhagen, where we recently established our Swedish department.",
      descBullets: [
        {
          name: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          name: "PHP",
          fontAwesomeClassname: "fab fa-php"
        },
        {
          name: "Laravel",
          fontAwesomeClassname: "fab fa-laravel"
        },
        {
          name: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          name: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          name: "GitHub",
          fontAwesomeClassname: "fab fa-git"
        },
        {
          name: "MySql",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          name: "Windows",
          fontAwesomeClassname: "fab fa-microsoft"
        }
      ]
    },
    {
      role: "Backend Developer",
      company: "Pandiweb",
      companylogo: require("./assets/images/pandiweb.png"),
      date: "Nov 2014 – Mar 2015",
      desc: "Worked on three different projects: Royal Copenhagen,  Københavns Kommune – Dagpleje and Olsen Ejendomme A/S",
      descBullets: [
        {
          name: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          name: "PHP",
          fontAwesomeClassname: "fab fa-php"
        },
        {
          name: "Laravel",
          fontAwesomeClassname: "fab fa-laravel"
        },
        {
          name: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          name: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          name: "MySql",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          name: "Windows",
          fontAwesomeClassname: "fab fa-microsoft"
        }
      ]
    },
    {
      role: "Freelance Developer",
      company: "MARPRO",
      companylogo: require("./assets/images/marpro.png"),
      date: "May 2013 – Sep 2013",
      desc: "Worked as a Freelancer: Maritime Directory Denmark.",
      descBullets: [
        {
          name: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          name: "PHP",
          fontAwesomeClassname: "fab fa-php"
        },
        {
          name: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          name: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          name: "MySql",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          name: "Windows",
          fontAwesomeClassname: "fab fa-microsoft"
        }
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Opex",
      companylogo: require("./assets/images/opex.png"),
      date: "Feb 2012 – Apr 2013",
      desc: "Developed, Managed and Implemented Projects: Surplus Inventory Management System (SIMS) ,Cost Analysis Software (CAS), Payroll Management Software (PMS), Attendance Monitoring System (AMS), Export Monitoring System (EMS).",
      descBullets: [
        {
          name: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          name: "PHP",
          fontAwesomeClassname: "fab fa-php"
        },
        {
          name: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          name: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          name: "MySql",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          name: "Windows",
          fontAwesomeClassname: "fab fa-microsoft"
        }
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Asian Global Venture",
      companylogo: require("./assets/images/agv.png"),
      date: "Sep 2011 – Jan 2012",
      desc: "Manage and Lead a team of 8 members to develop and implement mobile applications for Android, iOS (iPhone), iPad/iPod as well as develop web applications and software’s.",
      descBullets: [
        {
          name: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          name: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          name: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          name: "MySql",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          name: "Windows",
          fontAwesomeClassname: "fab fa-microsoft"
        }
      ]
    },
    {
      role: "Full Stack Developer",
      company: "OTOBI",
      companylogo: require("./assets/images/otobi.png"),
      date: "Jun 2009 – Aug 2011",
      desc: "Developed, Managed and Implemented 8 different software’s and Web application as well as was a part of implementing SAP R/3 ECC 0.6",
      descBullets: [
        {
          name: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          name: "PHP",
          fontAwesomeClassname: "fab fa-php"
        },
        {
          name: "3D-MAX",
          fontAwesomeClassname: "fas fa-unity"
        },
        {
          name: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          name: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          name: "MySql",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          name: "Windows",
          fontAwesomeClassname: "fab fa-microsoft"
        }
      ]
    },
    {
      role: "Internship",
      company: "PHILIPS",
      companylogo: require("./assets/images/philips.png"),
      date: "Jun 2006 – Jan 2007",
      desc: "To use HMM for gesture recognition where the gestures are transformed from the sensor data into sequence of vectors and HMM is trained to represent the gestures. An existing open source framework (HTK and GT²k) was used. It was found that the best accuracy level is 96% for isolated recognition and approximately 90% for grammar recognition with elements shared among multiple gestures.",
      descBullets: [
        {
          name: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          name: "PHP",
          fontAwesomeClassname: "fab fa-php"
        },
        {
          name: "Java",
          fontAwesomeClassname: "fab fa-java"
        },
        {
          name: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          name: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          name: "C++",
          fontAwesomeClassname: "fab fa-cuttlefish"
        },
        {
          name: "Windows",
          fontAwesomeClassname: "fab fa-microsoft"
        }
      ]
    },
    {
      role: "Web Developer",
      company: "NewAge",
      companylogo: require("./assets/images/newage.png"),
      date: "Jan 2004 – Dec 2004",
      desc: "Develop and design both static and dynamic website using PHP, MySQL and Flash 5/MX as well as develop and design animation for various presentations.",
      descBullets: [
        {
          name: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          name: "PHP",
          fontAwesomeClassname: "fab fa-php"
        },
        {
          name: "Java",
          fontAwesomeClassname: "fab fa-java"
        },
        {
          name: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          name: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          name: "Windows",
          fontAwesomeClassname: "fab fa-microsoft"
        }
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "tanviralam", // Change to your github username to view your profile in Contact Section.
  showGithubProfile : "true",  // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji(" "),
  subtitle: "",

  achievementsCards: [],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "",
  subtitle: "",

  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: emoji(""),

  talks: [
    {}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji(""),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+45 - 92 16 55 45",
  emailAddress: "tanvir.alam.shawn@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName : "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
