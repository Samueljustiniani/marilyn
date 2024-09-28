// JS para Proyectos Exitosos
document.addEventListener('DOMContentLoaded', function () {
    const projectContainer = document.querySelector('.projects-cards-container');
    const projectCards = document.querySelectorAll('.projects-card');
    const nextProjectBtn = document.querySelector('.next-projects');
    const prevProjectBtn = document.querySelector('.prev-projects');
    let currentProjectIndex = 0;

    function showProjectCard(index) {
        if (index >= projectCards.length) index = 0;
        if (index < 0) index = projectCards.length - 1;
        const offset = -index * 100;
        projectContainer.style.transform = `translateX(${offset}%)`;
        currentProjectIndex = index;
    }

    nextProjectBtn.addEventListener('click', () => {
        showProjectCard(currentProjectIndex + 1);
    });

    prevProjectBtn.addEventListener('click', () => {
        showProjectCard(currentProjectIndex - 1);
    });
});

// JS para Organizaciones
document.addEventListener('DOMContentLoaded', function () {
    const orgContainer = document.querySelector('.organizations-cards-container');
    const orgCards = document.querySelectorAll('.organizations-card');
    const nextOrgBtn = document.querySelector('.next-organizations');
    const prevOrgBtn = document.querySelector('.prev-organizations');
    let currentOrgIndex = 0;

    function showOrgCard(index) {
        if (index >= orgCards.length) index = 0;
        if (index < 0) index = orgCards.length - 1;
        const offset = -index * 100;
        orgContainer.style.transform = `translateX(${offset}%)`;
        currentOrgIndex = index;
    }

    nextOrgBtn.addEventListener('click', () => {
        showOrgCard(currentOrgIndex + 1);
    });

    prevOrgBtn.addEventListener('click', () => {
        showOrgCard(currentOrgIndex - 1);
    });
});

// JS para la nueva sección de comunidad
document.addEventListener('DOMContentLoaded', function () {
    const communityContainer = document.querySelector('.community-cards-container');
    const communityCards = document.querySelectorAll('.community-card-item');
    const nextCommunityBtn = document.querySelector('.next-community');
    const prevCommunityBtn = document.querySelector('.prev-community');
    let currentCommunityIndex = 0;

    function showCommunityCard(index) {
        if (index >= communityCards.length) index = 0;
        if (index < 0) index = communityCards.length - 1;
        const offset = -index * 100;
        communityContainer.style.transform = `translateX(${offset}%)`;
        currentCommunityIndex = index;
    }

    nextCommunityBtn.addEventListener('click', () => {
        showCommunityCard(currentCommunityIndex + 1);
    });

    prevCommunityBtn.addEventListener('click', () => {
        showCommunityCard(currentCommunityIndex - 1);
    });
});
