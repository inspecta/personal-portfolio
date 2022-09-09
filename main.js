/* eslint-disable no-plusplus */
const data = [
  {
    id: 1,
    title: 'Tonic',
    company: 'CANOPY',
    job: 'Back End Dev',
    year: 2015,
    persona: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
    bgImage: 'card1',
    live: 'https://inspecta.github.io/personal-portfolio/',
    source: 'https://github.com/inspecta/personal-portfolio',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    company: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2015,
    persona: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
    bgImage: 'card2',
    live: 'https://inspecta.github.io/personal-portfolio/',
    source: 'https://github.com/inspecta/personal-portfolio',
  },
  {
    id: 3,
    title: 'Facebook 360',
    company: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2018,
    persona: 'Exploring the future of media in Facebook"s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    languages: ['html', 'css', 'javascript'],
    bgImage: 'card3',
    live: 'https://inspecta.github.io/personal-portfolio/',
    source: 'https://github.com/inspecta/personal-portfolio',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    company: 'Uber',
    job: 'Lead Developer',
    year: 2015,
    persona: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car',
    languages: ['html', 'css', 'javascript'],
    bgImage: 'card4',
    live: 'https://inspecta.github.io/personal-portfolio/',
    source: 'https://github.com/inspecta/personal-portfolio',
  },
];

const projectTitle = document.getElementById('portfolio');

// eslint-disable-next-line consistent-return
data.forEach((i) => {
  const container = document.createElement('div');
  container.className = 'card';
  projectTitle.appendChild(container);

  const cardImage = document.createElement('div');
  cardImage.className = ''.concat('card-bg', ' ', i.bgImage);
  container.appendChild(cardImage);

  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-projects';
  container.appendChild(cardContainer);

  const titleElement = document.createElement('h1');
  titleElement.classList.add('card-title');
  cardContainer.appendChild(titleElement);
  titleElement.appendChild(document.createTextNode(data[data.indexOf(i)].title));

  const jobDescription = document.createElement('ul');
  jobDescription.classList.add('card-job-desc');

  const name = document.createElement('li');
  const job = document.createElement('li');
  const year = document.createElement('li');

  jobDescription.appendChild(name);
  jobDescription.appendChild(job);
  jobDescription.appendChild(year);

  name.appendChild(document.createTextNode(i.company));
  job.appendChild(document.createTextNode(i.job));
  year.appendChild(document.createTextNode(i.year));

  cardContainer.appendChild(jobDescription);
  jobDescription.classList.add('card-job-desc');
  name.classList.add('card-company');
  job.classList.add('card-job');
  year.classList.add('card-year');

  const bio = document.createElement('p');
  bio.classList.add('card-persona');

  const biography = document.createTextNode(i.persona);
  cardContainer.appendChild(bio);
  bio.appendChild(biography);

  const languages = document.createElement('ul');
  languages.classList.add('card-languages');

  let html; let css; let js; let github; let ruby; let bootstrap;

  for (let j = 0; j < Object.keys(i.languages).length; j++) {
    html = document.createElement('li');
    css = document.createElement('li');
    js = document.createElement('li');
  }

  cardContainer.appendChild(languages);
  languages.appendChild(html);
  languages.appendChild(css);
  languages.appendChild(js);

  html.appendChild(document.createTextNode(i.languages[0]));
  css.appendChild(document.createTextNode(i.languages[1]));
  js.appendChild(document.createTextNode(i.languages[2]));

  if (i.languages[3] != null && i.languages[4] != null && i.languages[5] != null) {
    github = document.createElement('li');
    ruby = document.createElement('li');
    bootstrap = document.createElement('li');

    languages.appendChild(github);
    languages.appendChild(ruby);
    languages.appendChild(bootstrap);

    github.appendChild(document.createTextNode(i.languages[3]));
    ruby.appendChild(document.createTextNode(i.languages[4]));
    bootstrap.appendChild(document.createTextNode(i.languages[5]));

    github.classList.add('card-lang1');
    ruby.classList.add('card-lang1');
    bootstrap.classList.add('card-lang3');
  }

  html.classList.add('card-lang1');
  css.classList.add('card-lang2');
  js.classList.add('card-lang3');

  const button = document.createElement('button');
  button.classList.add('card-submit-button');
  button.setAttribute('id', ''.concat('project', '', i.id));

  cardContainer.appendChild(button);
  button.appendChild(document.createTextNode('See Project'));
});

const dataSize = Object.keys(data).length;
const popupOverlay = document.getElementById('popupOverlay');

for (let j = 1; j <= dataSize; j++) {
  const idz = 'project'.concat(j);
  const showDetails = document.getElementById(`${idz}`);

  showDetails.addEventListener('click', () => {
    popupOverlay.style.display = 'block';

    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    popupOverlay.appendChild(popupContent);

    const popupTitle = document.createElement('div');
    popupTitle.className = 'top-popup';
    popupContent.appendChild(popupTitle);

    const projectData = data.find((x) => x.id === j);

    const popTitle = document.createElement('h3');
    popTitle.classList.add('title-popup');
    popTitle.appendChild(document.createTextNode(projectData.title));
    popupTitle.appendChild(popTitle);

    const closePop = document.createElement('img');
    closePop.className = 'cancel-icon';
    closePop.setAttribute('id', 'cancel-icon');
    closePop.src = './images/Icon - Cancel.png';
    popupTitle.appendChild(closePop);

    const jobDescriptionPop = document.createElement('ul');
    jobDescriptionPop.classList.add('card-job-desc');

    const namePop = document.createElement('li');
    const jobPop = document.createElement('li');
    const yearPop = document.createElement('li');

    jobDescriptionPop.appendChild(namePop);
    jobDescriptionPop.appendChild(jobPop);
    jobDescriptionPop.appendChild(yearPop);

    namePop.appendChild(document.createTextNode(projectData.company));
    jobPop.appendChild(document.createTextNode(projectData.job));
    yearPop.appendChild(document.createTextNode(projectData.year));

    popupContent.appendChild(jobDescriptionPop);
    namePop.classList.add('card-company');
    jobPop.classList.add('card-job');
    yearPop.classList.add('card-year');

    const popImage = document.createElement('div');
    popImage.className = 'popup-img';
    popupContent.appendChild(popImage);

    const bioPop = document.createElement('p');
    bioPop.classList.add('popup-info');
    bioPop.appendChild(document.createTextNode(projectData.persona));
    popupContent.appendChild(bioPop);

    const languagesPop = document.createElement('ul');
    languagesPop.classList.add('card-languages');

    const htmlPop = document.createElement('li');
    const cssPop = document.createElement('li');
    const jsPop = document.createElement('li');

    popupContent.appendChild(languagesPop);
    languagesPop.appendChild(htmlPop);
    languagesPop.appendChild(cssPop);
    languagesPop.appendChild(jsPop);

    htmlPop.appendChild(document.createTextNode(projectData.languages[0]));
    cssPop.appendChild(document.createTextNode(projectData.languages[1]));
    jsPop.appendChild(document.createTextNode(projectData.languages[2]));

    // eslint-disable-next-line max-len
    if (projectData.languages[3] != null && projectData.languages[4] != null && projectData.languages[5] != null) {
      const githubPop = document.createElement('li');
      const rubyPop = document.createElement('li');
      const bootstrapPop = document.createElement('li');

      languagesPop.appendChild(githubPop);
      languagesPop.appendChild(rubyPop);
      languagesPop.appendChild(bootstrapPop);

      githubPop.appendChild(document.createTextNode(projectData.languages[3]));
      rubyPop.appendChild(document.createTextNode(projectData.languages[4]));
      bootstrapPop.appendChild(document.createTextNode(projectData.languages[5]));

      githubPop.classList.add('card-lang1');
      rubyPop.classList.add('card-lang1');
      bootstrapPop.classList.add('card-lang3');
    }

    htmlPop.classList.add('card-lang1');
    cssPop.classList.add('card-lang2');
    jsPop.classList.add('card-lang3');

    const hrPop = document.createElement('hr');
    hrPop.classList.add('line');
    popupContent.appendChild(hrPop);

    const liveSource = document.createElement('div');
    liveSource.className = 'live-source';
    popupContent.appendChild(liveSource);

    const liveButton = document.createElement('button');
    liveButton.setAttribute('class', 'live');
    liveButton.type = 'button';
    liveSource.appendChild(liveButton);
    liveButton.appendChild(document.createTextNode('See Live'));

    const liveIcon = document.createElement('img');
    liveIcon.setAttribute('class', 'liveImg');
    liveIcon.src = './images/live.svg';
    liveButton.appendChild(liveIcon);

    document.querySelectorAll('.live').forEach((live) => {
      live.addEventListener('click', () => {
        window.open(projectData.live);
      });
    });

    const sourceButton = document.createElement('button');
    sourceButton.setAttribute('class', 'source');
    sourceButton.type = 'button';
    liveSource.appendChild(sourceButton);
    sourceButton.appendChild(document.createTextNode('See Source '));

    const sourceIcon = document.createElement('img');
    sourceIcon.setAttribute('class', 'sourceImg');
    sourceIcon.src = './images/github in button.svg';
    sourceButton.appendChild(sourceIcon);

    document.querySelectorAll('.source').forEach((source) => {
      source.addEventListener('click', () => {
        window.open(projectData.source);
      });
    });

    const closeProjects = document.querySelectorAll('.cancel-icon');
    closeProjects.forEach((closeProject) => {
      closeProject.addEventListener('click', () => {
        popupContent.style.display = 'none';
        popupOverlay.style.display = 'none';
      });
    });
  });
}

const hamburger = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close');
const menuOverlay = document.getElementById('menu-overlay');
const entireOver = document.querySelector('.mobile-menu');

const displayMenuList = () => {
  hamburger.style.display = 'none';
  menuOverlay.style.display = 'block';
  entireOver.style.display = 'block';
  menuClose.style.display = 'block';
};

const closeMenuList = () => {
  menuOverlay.style.display = 'none';
  hamburger.style.display = 'block';
  entireOver.style.display = 'none';
  menuClose.style.display = 'none';
};

hamburger.addEventListener('click', displayMenuList);
menuClose.addEventListener('click', closeMenuList);

document.querySelectorAll('.menu-item-list').forEach((n) => {
  n.addEventListener('click', () => {
    menuOverlay.style.display = 'none';
    hamburger.style.display = 'block';
    menuClose.style.display = 'none';
    entireOver.style.display = 'none';
  });
});
