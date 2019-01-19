window.addEventListener("load", () => {
  let loading = document.getElementById("loading");
  loading.style.opacity = 0;
  setTimeout(() => {
    loading.style.display = "none";
  }, 1000);
});

let menutoggle = document.getElementsByClassName("nav__menutoggle")[0];
let navlinks = document.getElementsByClassName("nav__links")[0];
let sociallinks = document.getElementsByClassName("social__links")[0];

let aboutImages = document.getElementsByClassName("about__image");

let gImgs = document.getElementsByClassName("gimg");
let gImgCovers = document.getElementsByClassName("gimg__cover");

//###########################################################################
window.addEventListener("load", () => {
  activatenavlink();
});
window.addEventListener("scroll", () => {
  activatenavlink();
});

const activatenavlink = () => {
  [...document.getElementsByClassName("nav__links")[0].childNodes]
    .filter((link, id) => id % 2 === 1)
    .forEach(li => li.childNodes[1].classList.remove("active"));

  let pages = ["home", "about", "menu", "gallery", "contact"];
  let navbarWidth = document.getElementsByClassName("navigation")[0]
    .offsetHeight;

  let scrolledpage = [...pages]
    .reverse()
    .find(
      page =>
        window.scrollY >=
        document.getElementsByClassName(page)[0].offsetTop - navbarWidth
    );

  if (
    window.scrollY + window.innerHeight ===
    document.documentElement.scrollHeight
  ) {
    scrolledpage = "contact";
  }

  let activelink = [
    ...document.getElementsByClassName("nav__links")[0].childNodes
  ].filter((link, id) => id % 2 === 1)[pages.indexOf(scrolledpage)]
    .childNodes[1];

  activelink.classList.add("active");
};

const handlenavlinkclick = el => {
  if (menutoggle.classList.value.indexOf("toggled") !== -1) {
    ontoggleclick();
  }
  autoScrollTo(el);
};

const ontoggleclick = () => {
  if (menutoggle.classList.value.indexOf("toggled") === -1) {
    menutoggle.classList.add("toggled");
    navlinks.classList.add("linkstoggled");
    sociallinks.classList.add("linkstoggled");
  } else {
    menutoggle.classList.remove("toggled");
    navlinks.classList.remove("linkstoggled");
    sociallinks.classList.remove("linkstoggled");
  }
};

const autoScrollTo = el => {
  let navbarWidth = document.getElementsByClassName("navigation")[0]
    .offsetHeight;
  let targetY = document.getElementsByClassName(el)[0].offsetTop - navbarWidth;
  window.scroll(0, targetY);
};
const resetScroll = () => {
  window.scroll(0, 0);
};

//###########################################################################
const ToggleOrderNow = show => {
  let ordernow = document.getElementsByClassName("ordernow")[0];
  let rootelements = [...document.getElementById("root").childNodes]
    .filter((v, id) => id % 2 == 1)
    .filter((v, id) => id !== 1);

  rootelements.forEach(rele => (rele.style.transition = "filter 1s ease"));
  if (show) {
    ordernow.style.zIndex = 3;
    ordernow.style.opacity = 1;

    rootelements.forEach(rele => (rele.style.filter = "blur(10px)"));
  } else {
    ordernow.style.opacity = 0;
    setTimeout(() => {
      ordernow.style.zIndex = -1;
    }, 1000);
    rootelements.forEach(rele => (rele.style.filter = "blur(0px)"));
  }
};

//###########################################################################
let transitionTime = 3000;
let stayTime = 5000;

aboutImages[0].style.opacity = 0;

const setAboutAppear = index => {
  setTimeout(() => {
    aboutAppear(aboutImages[index]);
  }, index * (transitionTime + stayTime));
};
[...aboutImages].forEach((ele, id) => {
  setAboutAppear(id);
});
const aboutAppear = aI => {
  aI.style.zIndex = 1;
  setTimeout(() => {
    aI.style.opacity = 1;
  }, 1);

  setTimeout(() => {
    aI.style.zIndex = 0;

    setTimeout(() => {
      aI.style.opacity = 0;

      setTimeout(() => {
        aboutAppear(aI);
      }, stayTime + (aboutImages.length - 2) * (transitionTime + stayTime));
    }, transitionTime);
  }, transitionTime + stayTime);
};

//###########################################################################
const gimgMouseOver = id => {
  let opacity = 0.575;
  let bgColor = "rgba(0,0,0," + opacity + ")";
  [...gImgCovers]
    .filter((v, index) => index !== id)
    .forEach(gImg => (gImg.style.backgroundColor = bgColor));
};
const gimgMouseOut = () => {
  [...gImgCovers].forEach(gImg => (gImg.style.backgroundColor = "transparent"));
};

window.addEventListener("scroll", () => {
  let homewall = document.getElementsByClassName("home__wallpaper")[0];
  homewall.style.top = window.scrollY / 1.5 + "px";
});
