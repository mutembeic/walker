const langSkills = document.querySelectorAll(".languages ul li span");
let started = false;
const codeSkills = document.querySelectorAll(".wrapper .exp li span");
let startedTwo = false;


window.onscroll = () => {
      if (window.scrollY > 50) {
            if (!startedTwo) {
          let startIndex = 0;
          codeSkills.forEach((el) => {
            let interValid = setInterval(() => {
              el.style.width = `${startIndex++}%`;
              if (parseInt(startIndex) >= parseInt(el.dataset.width)) {
                clearInterval(interValid);
              }
            }, 4000 / parseInt(el.dataset.width));
          });
        };
        startedTwo = true;
      }
      if (window.scrollY > 130) {
            if (!started) {
          let startIndex = 0;
          langSkills.forEach((span) => {
            let interValid = setInterval(() => {
              span.style.width = `${startIndex++}%`;
              if (parseInt(startIndex) >= parseInt(span.dataset.width)) {
                clearInterval(interValid);
              }
            }, 4000 / parseInt(span.dataset.width));
          });
        };
        started = true;
      }
}


// More Skills
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
