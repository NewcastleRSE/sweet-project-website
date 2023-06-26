const element = document.querySelector(".workstream-2");

const handleClassToggle = (entry) => {
  console.log("toggling entry: ", entry);
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
