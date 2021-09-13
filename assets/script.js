// For the navigation Panel
const homeBtn = document.getElementById('nav-home');
const homePanel = document.getElementById('home');

const aboutBtn = document.getElementById('nav-about');
const aboutPanel = document.getElementById('about');

const skillsBtn = document.getElementById('nav-skills');
const skillsPanel = document.getElementById('skills');

const worksBtn = document.getElementById('nav-works');
const worksPanel = document.getElementById('works');

function navHome(){
    homeBtn.classList.add('active');
    homePanel.classList.add('active');

    aboutBtn.classList.remove('active');
    aboutPanel.classList.remove('active');

    skillsBtn.classList.remove('active');
    skillsPanel.classList.remove('active');

    worksBtn.classList.remove('active');
    worksPanel.classList.remove('active');
}

function navAbout(){
    aboutBtn.classList.add('active');
    aboutPanel.classList.add('active');

    homeBtn.classList.remove('active');
    homePanel.classList.remove('active');

    skillsBtn.classList.remove('active');
    skillsPanel.classList.remove('active');

    worksBtn.classList.remove('active');
    worksPanel.classList.remove('active');
}

function navSkills(){
    skillsBtn.classList.add('active');
    skillsPanel.classList.add('active');

    homeBtn.classList.remove('active');
    homePanel.classList.remove('active');

    aboutBtn.classList.remove('active');
    aboutPanel.classList.remove('active');

    worksBtn.classList.remove('active');
    worksPanel.classList.remove('active');
}

function navWorks(){
    worksBtn.classList.add('active');
    worksPanel.classList.add('active');

    homeBtn.classList.remove('active');
    homePanel.classList.remove('active');

    skillsBtn.classList.remove('active');
    skillsPanel.classList.remove('active');

    aboutBtn.classList.remove('active');
    aboutPanel.classList.remove('active');
}

// For the skill tab buttons
const overviewBtn = document.getElementById('skill-overview-btn');
const overviewPanel = document.getElementById('skill-overview');

const langBtn = document.getElementById('skill-lang-btn');
const langPanel = document.getElementById('skill-language');

const frameworksBtn = document.getElementById('skill-frameworks-btn');
const frameworksPanel = document.getElementById('skill-frameworks');

const graphicsBtn = document.getElementById('skill-graphics-btn');
const graphicsPanel = document.getElementById('skill-graphics');

function skillOverview(){
    overviewBtn.classList.add('active');
    overviewPanel.classList.add('active');

    langBtn.classList.remove('active');
    langPanel.classList.remove('active');

    frameworksBtn.classList.remove('active');
    frameworksPanel.classList.remove('active');

    graphicsBtn.classList.remove('active');
    graphicsPanel.classList.remove('active');
}
function skillLangScript(){
    langBtn.classList.add('active');
    langPanel.classList.add('active');

    overviewBtn.classList.remove('active');
    overviewPanel.classList.remove('active');

    frameworksBtn.classList.remove('active');
    frameworksPanel.classList.remove('active');

    graphicsBtn.classList.remove('active');
    graphicsPanel.classList.remove('active');
}
function skillFrameworkScript(){
    frameworksBtn.classList.add('active');
    frameworksPanel.classList.add('active');

    overviewBtn.classList.remove('active');
    overviewPanel.classList.remove('active');

    langBtn.classList.remove('active');
    langPanel.classList.remove('active');

    graphicsBtn.classList.remove('active');
    graphicsPanel.classList.remove('active');
}
function skillGraphicsScript(){
    graphicsBtn.classList.add('active');
    graphicsPanel.classList.add('active');

    overviewBtn.classList.remove('active');
    overviewPanel.classList.remove('active');

    frameworksBtn.classList.remove('active');
    frameworksPanel.classList.remove('active');

    langBtn.classList.remove('active');
    langPanel.classList.remove('active');
}