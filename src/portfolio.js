/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Ashwin Karangutkar",
  title: "Hi all, I'm Ashwin",
  subTitle: emoji(
    "A passionate Test Automation Architect 🚀 having more than 9 years of experience in building automation frameworks for Web, Mobile and API's with Selenium / Appium / Rest Assured and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1jiFT_q0TgO2bfXuUATAgeEeeb7JG7vOr/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AshwinK1989",
  linkedin: "https://www.linkedin.com/in/ashwinkarangutkar/",
  gmail: "ashwin.karangutkar@gmail.com",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SDET who automates Wisely",
  skills: [
    emoji(
      "⚡ Develop highly scalable Test Automation Framework for Web , Mobile and API's"
    ),
    emoji("⚡ Plan entire Testing and Test Automation Strategy and processes"),
    emoji(
      "⚡ Integration of CI/CD tools such as Jenkins / Team City "
    ),
    emoji(
          "⚡ Mentor and Lead the tech teams "
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Mumbai",
      logo: require("./assets/images/mumuni.png").default,
      subHeader: "Bachelor's in Computer Engineering",
      duration: "August 2007 - May 2011",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Software Development Engineer in Test",
      company: "Zinc Learning Labs",
      companylogo: require("./assets/images/zinc-favicon.png").default,
      date: "September 2019 – Present",
      descBullets: [
        "Development and maintenance of a Behaviour Driven Test Automation Framework from scratch for their Web Application using Cucumber, Selenium Webdriver, Rest Assured, Awaitility, AssertJ, JAVA, etc.",
        "Planned entire Test Automation Strategy and Processes.",
        "Integrated Aerokube to launch browsers in Docker Containers.",
        "Dockerized the entire framework to run on any platform.",
        "Scaled the Automation Framework to run tests in Parallel - ( 25 to 30 Scenarios or more in Parallel )",
        "Documentation of entire Framework and processes.",
        "Mentoring the team members to learn Test Automation."
      ]
    },
    {
      role: "Software Development Engineer II",
      company: "Bizongo",
      companylogo: require("./assets/images/bizongo.png").default,
      date: "Oct 2018 – Aug 2019",
      descBullets: [
      "Developed a Behaviour Driven Test Automation Framework from scratch using Cucumber, Selenium Webdriver, Awaitility, AssertJ, JAVA, etc.",
      "Developed a Behaviour Driven API Automation Framework from scratch using Cucumber, Rest Assured, Serenity, JAVA, etc.",
      "Integrated Aerokube to launch browsers in Docker Containers.",
      "Planned entire Test Automation Strategy and Processes.",
      "Scaled the Automation Framework to run tests in Parallel - ( 15 to 20 Scenarios in Parallel )",
      "Documentation of entire Framework and processes.",
      "Mentoring the team members to learn Test Automation.",
      "Conducting Test Automation Workshop for the Tech Team.",
      "Hiring of Test Automation Engineers for the Team."
      ]
    },
    {
      role: "Senior Software Engineer ( QA Automation )",
      company: "Turtlemint",
      companylogo: require("./assets/images/turtlemint.png").default,
      date: "May 2017 – July 2018",
      descBullets: [
        "Created and maintained a Rest API automation framework using Rest Assured, Cucumber ( Behaviour Driven Development ), Serenity and Java.",
        "Created and maintained a UI Automation framework using Selenium Webdriver, Cucumber ( Behaviour Driven Development ), Serenity, TestNG, Java using Page Object Model Design Pattern.",
        "Integrated Serenity with API and UI Test Automation Framework."
       ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
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
  title: emoji("Achievements And Course Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Proud Moments !",

  achievementsCards: [
    {
      title: "Cultipreneur Award",
      subtitle:
        "This award was given by Bizongo for setting up the Test Automation Framework for them which is now helping the team deliver products at a faster pace and better quality",
      image: require("./assets/images/bizongo.png").default,
      footerLink: [

      ]
    },
    {
      title: "Spotlight Award",
      subtitle:
        "It was awarded by Ugam for successfully delivering their Northen Tool Project",
      image: require("./assets/images/ugam.png").default,
      footerLink: [

      ]
    },
    {
      title: "Cypress -Modern Automation Testing from Scratch",
      subtitle: "Completed Certifcation on using Cypress for Web and API Automation",
      image: require("./assets/images/cypress.png").default,
      footerLink: [
        {name: "Certification", url: "https://www.udemy.com/certificate/UC-M9TADC9P/"}
      ]
    },
    {
      title: "Master JMeter from Basics (Performance + Load + API Testing)",
      subtitle: "Completed Certifcation on using JMeter for Performance and Load Testing",
      image: require("./assets/images/jmeter.png").default,
      footerLink: [
         {name: "Certification", url: "https://www.udemy.com/certificate/UC-3XB0ADK5/"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs and Interviews",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://restservicestesting.blogspot.com/",
      title: "Automate Testing of Rest API using Rest Assured",
      description:
        "A detailed blog on using Rest Assured for Automation of API Testing"
    },
    {
      url: "https://ashwin-karangutkar.blogspot.com/2016/01/mind-shifting-experience-at-vodqa-of.html",
      title: "Mind Shifting Experience at vodQA event of ThoughtWorks, Pune",
      description:
        "Learnings from the conference attended at ThoughtWorks, Pune"
    },
    {
      url: "https://emnaayadi.com/2021/02/28/test-automation-journey/",
      title: "Master your Test Automation journey",
      description:
         "My interview for #testerstory series of Emna Ayadi"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "ashwin.karangutkar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "thashwin", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
