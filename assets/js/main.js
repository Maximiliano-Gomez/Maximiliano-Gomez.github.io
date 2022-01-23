class MobileNavbar {
  constructor(mobileMenu, navList, navLinks, navLinks2) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.navLinks2 = document.querySelectorAll(navLinks2);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    this.navLinks2.forEach((item) => {
      item.addEventListener("click", this.handleClick);
    });
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
  ".nav-list li a"
);
mobileNavbar.init();

function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
const titulo = document.querySelector(".typewriter");
typeWrite(titulo);

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
});

sr.reveal(".delaySmallReveal", { delay: 200 });
sr.reveal(".delayMediumReveal", { delay: 300 });
sr.reveal(".delayLargeReveal", { delay: 400 });
sr.reveal(".delayExtraBigReveal", { delay: 600 });

sr.reveal(".intervalCardReveal", { interval: 400 });

var texto1 = document.querySelector(".mudarTextoDescricao");

document.querySelector(".html").addEventListener("mouseover", function () {
  texto1.innerHTML =
    " ASP.NET MVC, Entity Framework, Blazor.";
});

document.querySelector(".css").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "MS SQL Server, MongoDB.";
});

document.querySelector(".js").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "JavaScript .";
});

document.querySelector(".tailwind").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Docker/Kubernetes environment.";
});

document.querySelector(".sass").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "API Rest , Microservices , SoapUi , Azure Developer.";
});

document.querySelector(".react").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Reactjs.";
});

document.querySelector(".next").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "C# with .NET.";
});

document
  .querySelector(".styled")
  .addEventListener("mouseover", function mudarTexto8() {
    texto1.innerHTML =
      "Microservices.";
  });

var sairCaixa = document.getElementsByClassName("sairCaixa");

for (i = 0; i < sairCaixa.length; i++) {
  sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
    texto1.innerHTML = `*hover mouse over card to read*`;
  });
}
