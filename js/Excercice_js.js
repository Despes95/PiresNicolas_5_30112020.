//Excercice 1
/*
<main id="main" class="d-flex justify-content-center"><button>clique ici</button></main>
*/
const elt = document.getElementById('main');    // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function() {          // On écoute l'événement click
    elt.innerHTML = "C'est cliqué !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





