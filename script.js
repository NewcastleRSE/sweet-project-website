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

// show hamburger menu and change hamburger icon
function openMenu() {
  console.log('open')
  const closed = document.querySelector("#closedIcon");
  const open = document.querySelector("#openIcon");
  closed.classList.add("hidden");
  open.classList.remove("hidden");

  const menu = document.querySelector("#mobile-menu");
  menu.classList.remove("hidden");
}

// hide hamburger menu and change hamburger icon
function closeMenu() {
  const closed = document.querySelector("#closedIcon");
  const open = document.querySelector("#openIcon");
  closed.classList.remove("hidden");
  open.classList.add("hidden");

  const menu = document.querySelector("#mobile-menu");
  menu.classList.add("hidden");
}

function toggleDocsDropdown() {
  const dropdown = document.querySelector("#docs-dropdown");
  dropdown.classList.toggle("hidden");
}

// workstreams accordions
function toggleWorkstreamAcc(id) {

  // toggle content
  const acc = document.querySelector("#" + id);
  acc.classList.toggle("hidden");
  // toggle plus sign
  const plus = document.querySelector("#plus-" + id);
  plus.classList.toggle("hidden");
  // toggle minus sign
  const minus = document.querySelector("#minus-" + id);
  minus.classList.toggle("hidden");

  closeOtherWorkstreams(id);
}

function closeOtherWorkstreams(keepOpen) {
  for (let i = 1; i < 6; i++) {
    const ws = document.querySelector("#workstream-acc-" + i);
    if (ws.id !== keepOpen) {
      // close content
      ws.classList.add("hidden");
      // show plus sign
      const plus = document.querySelector("#plus-workstream-acc-" + i);
      plus.classList.remove("hidden");
      // hide minus sign
      const minus = document.querySelector("#minus-workstream-acc-" + i);
      minus.classList.add("hidden");
    }
  
  }

}

// presentations accordion
function togglePresentationAcc() {
  // toggle content
  const acc = document.querySelector("#pres-content");
  acc.classList.toggle("hidden");
  // toggle plus sign
  const plus = document.querySelector("#plus-pres");
  plus.classList.toggle("hidden");
  // toggle minus sign
  const minus = document.querySelector("#minus-pres" );
  minus.classList.toggle("hidden");

}