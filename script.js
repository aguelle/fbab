// Ouverture et fermeture du menu mobile
document.getElementById('menuButton').addEventListener('click', function () {
    let menu = document.getElementById('mobileMenu');
    let openIcon = document.getElementById('menuOpenIcon');
    let closeIcon = document.getElementById('menuCloseIcon');
    
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
// Fermer le menu mobile lorsque l'un des liens est cliqué
document.querySelectorAll('#mobileMenu a').forEach(function (link) {
    link.addEventListener('click', function () {
        let menu = document.getElementById('mobileMenu');
        let openIcon = document.getElementById('menuOpenIcon');
        let closeIcon = document.getElementById('menuCloseIcon');
        
        menu.classList.add('hidden');
        menu.classList.remove('block');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});
// Affichage des contenus des services
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
    let contents = ['construction', 'renovation', 'amenagement'];
    contents.forEach(content => {
        if (content === type) {
            document.getElementById(`content${capitalize(content)}`).classList.remove('hidden');
            document.getElementById(`content${capitalize(content)}`).classList.add('block');
            document.getElementById(`btn${capitalize(content)}`).classList.add('bg-twine', 'text-white');
        } else {
            document.getElementById(`content${capitalize(content)}`).classList.add('hidden');
            document.getElementById(`content${capitalize(content)}`).classList.remove('block');
            document.getElementById(`btn${capitalize(content)}`).classList.remove('bg-twine', 'text-white');
        }
    });
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Initial display
showContent('construction');
// Redirection vers les sections
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

//Affichage des mentions légales
document.getElementById('toggleLegal').addEventListener('click', function (event) {
    event.preventDefault();
    var legalSection = document.getElementById('legalSection');
    legalSection.classList.toggle('hidden');
});