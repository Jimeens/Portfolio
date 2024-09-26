const langPt = document.querySelector(".langWrap");
const link = document.querySelectorAll("a");
const whatIm1Pt = document.querySelector(".whatIm1");
const whatIm2Pt = document.querySelector(".whatIm2");
const aboutTitlePt = document.querySelector(".aboutTitle");
const aboutDescBoldPt = document.querySelector(".aboutDescBold");
const skillsTitlePt = document.querySelector(".skillsTitle");
const projectTitlePt = document.querySelector(".projectTitle")


link.forEach(pt => {
    pt.addEventListener('click', () => {
        langPt.querySelector(".active").classList.remove("active");
        pt.classList.add("active");

        const attr = pt.getAttribute("language");
        whatIm1Pt.textContent = data[attr].whatIm1;
        whatIm2Pt.textContent = data[attr].whatIm2;
        aboutTitlePt.textContent = data[attr].aboutTitle;
        aboutDescBoldPt.textContent = data[attr].aboutDescBold;
        skillsTitlePt.textContent = data[attr].skillsTitle;
        projectTitlePt.textContent = data[attr].projectTitle;
    })
})

var data = {
    "portuguese":
    {
        "whatIm1": "Freelancer",
        "whatIm2": "& Desenvolvedor Front-end.",
        "aboutTitle": "SOBRE",
        "aboutDescBold": "Assim como a física transforma o entendimento do universo, meu amor pelo desenvolvimento front-end transforma ideias em experiências visuais incríveis. Transicionei minha carreira de bacharel em física para desenvolvedor front-end e a cada dia que passa tenho mais certeza de que foi a escolha certa para minha carreira profissional.",
        "skillsTitle": "HABILIDADES",
        "projectTitle": "PROJETOS",
    },
    "english":
    {
        "whatIm1": "Freelancer",
        "whatIm2": "& Front-end Developer.",
        "aboutTitle": "ABOUT",
        "aboutDescBold": "Just as physics transforms our understanding of the universe, my love for front-end development transforms ideas into incredible visual experiences. I transitioned my career from a bachelor's degree in physics to a front-end developer, and with each passing day, I become more certain that it was the right choice for my professional career.",
        "skillsTitle": "SKILLS",
        "projectTitle": "PROJECTS",
    }
}