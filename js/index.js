console.log("Lesson 11 connected!");

const body = document.querySelector("body");

const footer = document.createElement("footer");

body.appendChild(footer);

const today = new Date();

const thisYear = today.getFullYear();

const footerElement = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = "© Rereloluwa Olubiyi " + thisYear;

footerElement.appendChild(copyright);

const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "SQL",
    "Tableau",
    "Advanced Excel (Data Analysis)"
  ];
  
  const skillsSection = document.querySelector("#skills");

  const skillsList = skillsSection.querySelector("ul");

  for (let i = 0; i < skills.length; i++) {

    const skill = document.createElement("li");
  }

  for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
  }

  for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
  }