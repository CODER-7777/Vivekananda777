const greetings = [
  "Welcome back!",
  "Hello there! 👋",
  "Glad to see you!",
  "Hello Guych!!",
  "Hlooooo!!"
];

const greetingText = greetings[Math.floor(Math.random() * greetings.length)];
const greetingDiv = document.getElementById("greeting");

greetingDiv.innerHTML = "";

[...greetingText].forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.opacity = 0;
  span.style.transition = "opacity 0.3s ease";
  setTimeout(() => {
    span.style.opacity = 1;
  }, i * 100);
  greetingDiv.appendChild(span);
});


//dark to white
function toggleTheme() {
  document.body.classList.toggle("dark");
}

//this is for readmore
function toggleReadMore() {
  const hiddenSkills = document.querySelectorAll(".skills .hidden");
  hiddenSkills.forEach(skill => skill.classList.toggle("hidden"));
}

//this is to edit buttn
function editSkills() {
  const skillsDiv = document.getElementById("skills");
  const currentSkills = Array.from(skillsDiv.querySelectorAll("span"))
    .map(el => el.innerText)
    .join(", ");
  const newSkills = prompt("Edit your skills (comma separated):", currentSkills);
  if (newSkills !== null) {
    skillsDiv.innerHTML = newSkills.split(",")
      .map(skill => `<span>${skill.trim()}</span>`)
      .join("");
  }
}

// // Load saved data on page load
// window.onload = function () {
//   const savedSkills = localStorage.getItem("skillsList");
//   if (savedSkills) {
//     document.getElementById("skills-list").innerText = savedSkills;
//   }
// };

// // Edit Skills
// document.getElementById("edit-button").addEventListener("click", function () {
//   const skillsList = document.getElementById("skills-list");
//   const newSkills = prompt("Enter your updated skills:", skillsList.innerText);
//   if (newSkills !== null) {
//     skillsList.innerText = newSkills;
//     localStorage.setItem("skillsList", newSkills); // Save to localStorage
//   }
// });


// function toggleReadMore() {
//   const hiddenSkills = document.querySelectorAll(".skills .hidden, .skills .visible");
  
//   hiddenSkills.forEach(skill => {
//     skill.classList.toggle("hidden");
//     skill.classList.toggle("visible");
//   });

//   const btn = document.getElementById("readMoreBtn");
//   btn.innerText = btn.innerText === "Read More" ? "Read Less" : "Read More";
// }
// Load saved data from localStorage on page load
window.onload = function () {
  const saved = localStorage.getItem("skillsHTML");
  if (saved) {
    document.getElementById("skills-list").innerHTML = saved;
  }
};

// Toggle Read More / Read Less
function toggleReadMore() {
  const extraSkills = document.querySelectorAll(".skills .extra");
  extraSkills.forEach(skill => skill.classList.toggle("hidden"));

  const btn = document.getElementById("readMoreBtn");
  btn.innerText = btn.innerText === "Read More" ? "Read Less" : "Read More";
}

// Edit Skills dynamically using prompt
function editSkills() {
  const currentHTML = document.getElementById("skills-list").innerHTML;
  const newContent = prompt("Edit your skills (HTML allowed):", currentHTML);
  if (newContent !== null) {
    document.getElementById("skills-list").innerHTML = newContent;
    localStorage.setItem("skillsHTML", newContent);
  }
}
