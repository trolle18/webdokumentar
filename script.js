/*---------- VIDEO ----------*/

/* autoplay video når den er i viewport, pause udenfor viewport (OBS: bruger skal interegere m. dok) */
function videoHandler(entries) {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause(); /* video pauser udenfor viewport, fortsætter når i viewport */
        }
    }
}

const videoObserver = new IntersectionObserver(videoHandler, { 
    threshold: 0.3,
});
const video = document.getElementById("video");
videoObserver.observe(video);


/*---------- VALGFAG ----------*/
function handler(entries) {
    /* Hvis foto intersecter, gives class, hvis ikke fjernes class */
    for (const entry of entries) {
        console.log(entries);

        if (entry.isIntersecting) {
            entry.target.classList.add("transition");
        } else {
            entry.target.classList.remove("transition");
        }
    }
}

const observer = new IntersectionObserver(handler, {
    threshold: 0.1,
});

/*
const cardA = document.getElementById("card-a");
cardA.classList.add("fade-scale-in"); 
observer.observe(cardA);

const cardB = document.getElementById("card-b");
cardB.classList.add("fade-scale-in"); 
observer.observe(cardB);

const cardC = document.getElementById("card-c");
cardC.classList.add("fade-scale-in"); 
observer.observe(cardC);

const cardD = document.getElementById("card-d");
cardD.classList.add("fade-scale-in"); 
observer.observe(cardD);

const cardE = document.getElementById("card-e");
cardE.classList.add("fade-scale-in"); 
observer.observe(cardE);

const cardF = document.getElementById("card-f");
cardF.classList.add("fade-scale-in"); 
observer.observe(cardF);

const cardG = document.getElementById("card-g");
cardG.classList.add("fade-scale-in"); 
observer.observe(cardG);

const cardH = document.getElementById("card-h");
cardH.classList.add("fade-scale-in"); 
observer.observe(cardH);
*/

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});