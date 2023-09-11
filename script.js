const element = document.querySelector(".workstream-2");

const navElement = document.querySelector("nav");
const navLinkElements = document.querySelectorAll(".nav-link");

console.log(element);
const primaryColor = "#633188";

const handleClassToggle = (entry) => {
  // console.log("toggling entry: ", entry);
  entry.target.classList.toggle("visible", entry.isIntersecting);

  if (entry.isIntersecting) {
    observer.unobserve(entry.target);
  }
};

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

function callback(entries) {
  entries.forEach((entry) => {
    handleClassToggle(entry);
  });
}

let observer = new IntersectionObserver(callback, options);

elems = document.querySelectorAll(".workstream-2,.team-card-3");

for (let i = 0; i < elems.length; i++) {
  const e = elems[i];
  observer.observe(e);
}

// Changing navbar color on scroll
// console.log(navElement);
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 800) {
//     console.log("Greater than 250");
//     navElement.classList.add("scrolled");
//     for (const elem of navLinkElements) {
//       elem.classList.add("text-white");
//     }
//   } else {
//     navElement.classList.remove("scrolled");
//     for (const elem of navLinkElements) {
//       elem.classList.remove("text-white");
//     }
//   }
// });
