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
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
  }

  const messageForm = document.forms["leave_message"];

  messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    

    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    console.log(userName, userEmail, userMessage);

    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> <span>${userMessage}</span>`;

    const removeButton = document.createElement("button");

removeButton.innerText = "remove";
removeButton.type = "button";
removeButton.addEventListener("click", function(event) {
  const entry = event.target.parentNode;
  entry.remove();
});
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
event.target.reset();
});