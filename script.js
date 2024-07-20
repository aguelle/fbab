// JavaScript pour gérer l'ouverture et la fermeture du menu mobile
document.getElementById('menuButton').addEventListener('click', function () {
    var menu = document.getElementById('mobileMenu');
    var openIcon = document.getElementById('menuOpenIcon');
    var closeIcon = document.getElementById('menuCloseIcon');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('block');
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('block');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});
// JavaScript pour gérer l'affichage des contenus des services
document.getElementById('btnConstruction').addEventListener('click', function () {
    showContent('construction');
});
document.getElementById('btnRenovation').addEventListener('click', function () {
    showContent('renovation');
});
document.getElementById('btnAmenagement').addEventListener('click', function () {
    showContent('amenagement');
});

function showContent(type) {
    var contents = ['construction', 'renovation', 'amenagement'];
    contents.forEach(content => {
        if (content === type) {
            document.getElementById(`content${capitalize(content)}`).classList.remove('hidden');
            document.getElementById(`content${capitalize(content)}`).classList.add('block');
            document.getElementById(`btn${capitalize(content)}`).classList.add('bg-custombrown', 'text-white');
        } else {
            document.getElementById(`content${capitalize(content)}`).classList.add('hidden');
            document.getElementById(`content${capitalize(content)}`).classList.remove('block');
            document.getElementById(`btn${capitalize(content)}`).classList.remove('bg-custombrown', 'text-white');
        }
    });
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Initial display
showContent('construction');
// JavaScript pour gérer la redirection vers les sections
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// JavaScript pour gérer l'affichage des mentions légales
document.getElementById('toggleLegal').addEventListener('click', function (event) {
    event.preventDefault();
    var legalSection = document.getElementById('legalSection');
    legalSection.classList.toggle('hidden');
});