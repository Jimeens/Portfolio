const langPt = document.querySelector(".langWrap");
const link = document.querySelectorAll("a");
const whatIm1Pt = document.querySelector(".whatIm1");
const whatIm2Pt = document.querySelector(".whatIm2");

const aboutTitlePt = document.querySelector(".aboutTitle");
const aboutDescBoldPt = document.querySelector(".aboutDescBold");
const aboutDescNormalPt = document.querySelector(".aboutDescNormal");

const skillsTitlePt = document.querySelector(".skillsTitle");
const softSkillTitle1Pt = document.querySelector(".softSkillTitle1");
const softSkillDesc1Pt = document.querySelector(".softSkillDesc1");
const softSkillTitle2Pt = document.querySelector(".softSkillTitle2");
const softSkillDesc2Pt = document.querySelector(".softSkillDesc2");
const softSkillTitle3Pt = document.querySelector(".softSkillTitle3");
const softSkillDesc3Pt = document.querySelector(".softSkillDesc3");

const projectTitlePt = document.querySelector(".projectTitle");

const projectName1Pt = document.querySelector(".projectName1");
const projectStatus1Pt = document.querySelector(".projectStatus1");
const projectDesc1Pt = document.querySelector(".projectDesc1");
const projectTech1Pt = document.querySelector(".projectTech1");
const projectView1Pt = document.querySelector(".projectView1");

const projectName2Pt = document.querySelector(".projectName2");
const projectStatus2Pt = document.querySelector(".projectStatus2");
const projectDesc2Pt = document.querySelector(".projectDesc2");
const projectTech2Pt = document.querySelector(".projectTech2");
const projectView2Pt = document.querySelector(".projectView2");

const contactTitlePt = document.querySelector(".contactTitle");

link.forEach((pt) => {
  pt.addEventListener("click", () => {
    langPt.querySelector(".active").classList.remove("active");
    pt.classList.add("active");

    const attr = pt.getAttribute("language");
    whatIm1Pt.textContent = data[attr].whatIm1;
    whatIm2Pt.textContent = data[attr].whatIm2;

    aboutTitlePt.textContent = data[attr].aboutTitle;
    aboutDescBoldPt.textContent = data[attr].aboutDescBold;
    aboutDescNormalPt.textContent = data[attr].aboutDescNormal;

    skillsTitlePt.textContent = data[attr].skillsTitle;
    softSkillTitle1Pt.textContent = data[attr].softSkillTitle1;
    softSkillDesc1Pt.textContent = data[attr].softSkillDesc1;
    softSkillTitle2Pt.textContent = data[attr].softSkillTitle2;
    softSkillDesc2Pt.textContent = data[attr].softSkillDesc2;
    softSkillTitle3Pt.textContent = data[attr].softSkillTitle3;
    softSkillDesc3Pt.textContent = data[attr].softSkillDesc3;

    projectTitlePt.textContent = data[attr].projectTitle;

    projectName1Pt.textContent = data[attr].projectName1;
    projectStatus1Pt.textContent = data[attr].projectStatus1;
    projectDesc1Pt.textContent = data[attr].projectDesc1;
    projectTech1Pt.textContent = data[attr].projectTech1;
    projectView1Pt.textContent = data[attr].projectView1;

    projectName2Pt.textContent = data[attr].projectName2;
    projectStatus2Pt.textContent = data[attr].projectStatus2;
    projectDesc2Pt.textContent = data[attr].projectDesc2;
    projectTech2Pt.textContent = data[attr].projectTech2;
    projectView2Pt.textContent = data[attr].projectView2;

    contactTitlePt.textContent = data[attr].contactTitle;
  });
});

var data = {
  portuguese: {
    whatIm1: "Freelancer",
    whatIm2: "& Desenvolvedor Front-end.",

    aboutTitle: "SOBRE",
    aboutDescBold:
      "Assim como a física transforma o entendimento do universo, meu amor pelo desenvolvimento front-end transforma ideias em experiências visuais incríveis.",
    aboutDescNormal:
      "Transicionei minha carreira de bacharel em física para desenvolvedor front-end e a cada dia que passa tenho mais certeza de que foi a escolha certa para minha carreira profissional.",

    skillsTitle: "HABILIDADES",
    softSkillTitle1: "Aprendizado contínuo",
    softSkillDesc1: "O mundo da tecnologia está sempre em mudanças, implicando que quanto mais eu estudo, melhor eu posso atuar nesta área.",
    softSkillTitle2: "Mente aberta",
    softSkillDesc2: "Ao trabalhar com pessoas, é necessário ouvir suas ideias e se adaptar para executar os projetos da melhor forma.",
    softSkillTitle3: "Altamente organizado",
    softSkillDesc3: "Para manter o projeto sempre com um bom desempenho, organizo todas as minhas tarefas para executá-lo com excelência.",

    projectTitle: "PROJETOS",

    projectName1: "WEBSITE PESSOAL",
    projectStatus1: "PROJETO DE ESTUDO • WEBSITE",
    projectDesc1:
      "Afim de estudar linguagens de programação usadas na área de Front-end, como HTML5, CSS3 e Javascript principalmente, construi um website para armazenar informações sobre minha graduação em física e algumas outras em relação aos projetos que estou trabalhando no momento. O projeto visa não só estudo próprio, mas também ajudar novos físicos.",
    projectTech1: "HTML5 • CSS3 • JavaScript",
    projectView1: "Visite o website",

    projectName2: "PORTFÓLIO",
    projectStatus2: "PROJETO DE ESTUDO • WEBSITE",
    projectDesc2:
      "Como desenvolvedor Front-end, é relativamente obrigatório a criação de um portfólio para apresentar informações profissionais, como uma breve apresentação sobre mim, minhas habilidades, todos os projetos que participei e dados de contato para pessoas ou empresas interessadas em meus serviços.",
    projectTech2: "HTML5 • CSS3 • JavaScript",
    projectView2: "Visite o website",

    contactTitle: "CONTATO",
  },
  english: {
    whatIm1: "Freelancer",
    whatIm2: "& Front-end Developer.",

    aboutTitle: "ABOUT",
    aboutDescBold:
      "Just as physics transforms our understanding of the universe, my love for front-end development transforms ideas into incredible visual experiences.",
    aboutDescNormal:
      "I transitioned my career from a bachelor's degree in physics to a front-end developer, and with each passing day, I become more certain that it was the right choice for my professional career.",

    skillsTitle: "SKILLS",
    softSkillTitle1: "Non-stop learning",
    softSkillDesc1: "The world of technology is always changing, which means that the more I study, the better I can perform in this field.",
    softSkillTitle2: "Open minded",
    softSkillDesc2: "When working with people, it is necessary to listen to their ideas and adapt to execute the projects in the best way.",
    softSkillTitle3: "Highly organized",
    softSkillDesc3: "To keep the project performing well, I organize all my tasks to execute it with excellence.",

    projectTitle: "PROJECTS",

    projectName1: "PERSONAL WEBSITE",
    projectStatus1: "STUDY CASE • WEBSITE",
    projectDesc1:
      "In order to study programming languages used in the Front-end area, mainly HTML5, CSS3, and JavaScript, I built a website to store information about my degree in physics and some other projects I am currently working on. The project aims not only for my own study but also to help new physicists.",
    projectTech1: "HTML5 • CSS3 • JavaScript",
    projectView1: "Visit website",

    projectName2: "PORTFOLIO",
    projectStatus2: "STUDY CASE • WEBSITE",
    projectDesc2:
      "As a Front-end developer, creating a portfolio is relatively mandatory to showcase professional information, such as a brief introduction about myself, my skills, all the projects I have participated in, and contact information for individuals or companies interested in my services.",
    projectTech2: "HTML5 • CSS3 • JavaScript",
    projectView2: "Visit website",

    contactTitle: "CONTACT",
  },
};

// FAZ O TEXTO "SOBRE/ABOUT" SE MOVER AO SCROLLAR
$(document).on("scroll", function () {
  $(".about-section h1").css(
    "margin-left",
    Math.max(-100 + 0.3 * window.scrollY, -100) + "px"
  );
});

// FAZ O TEXTO "HABILIDADES/SKILLS" SE MOVER AO SCROLLAR
$(document).on("scroll", function () {
  $(".skills-section h1").css(
    "margin-right",
    Math.max(-500 + 0.3 * window.scrollY, -100) + "px"
  );
});

// FAZ O TEXTO "PROJETOS/PROJECTS" SE MOVER AO SCROLLAR
$(document).on("scroll", function () {
  $(".projects-section h1").css(
    "margin-left",
    Math.max(-800 + 0.3 * window.scrollY, -800) + "px"
  );
});

// FAZ O TEXTO "CONTATO/CONTACT" SE MOVER AO SCROLLAR
$(document).on("scroll", function () {
  $(".contact-section h1").css(
    "margin-right",
    Math.max(-1350 + 0.3 * window.scrollY, -100) + "px"
  );
});

// FAZ O TEXTO APARECER COM DE UM BLOCO
var elements = $(".aboutDescBold, .aboutDescNormal, .text a").toArray();
$(window).scroll(function () {
  elements.forEach(function (item) {
    if ($(this).scrollTop() >= $(item).offset().top - 700) {
      $(item).addClass("reveal");
    }
  });
});
elements.forEach(function (item) {
  if ($(this).scrollTop() >= $(item).offset().top - 700) {
    $(item).addClass("reveal");
  }
});
