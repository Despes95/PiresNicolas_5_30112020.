/*

const elt = document.getElementById('panier');    // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function() {          // On écoute l'événement click
alert ("Dans le panier");               // On change le contenu de notre élément pour afficher "C'est cliqué !"
});



const selectElement = document.querySelector('.choix-nounours'); // On selectionne la classe .choix-nounours ou on veut faire un event
selectElement.addEventListener('change', (event) => {   // On écoute l'événement change d'etat
  const result = document.querySelector('.result');     // On selectionne la classe .result ou on veut affichez notre resultat
  result.textContent = `Vous avez choisis ${event.target.value}`;  // On affiche le contenu de notre event pour afficher "Vous avez choisis"
});

*/
/*
const appelApi = "http://localhost:3000/api/teddies";         // Déclaration de l'Url de l'api
const bearImg = document.getElementById("main");

async function getTeddies() {                       // Création d'une fonction asynchrone
    let response = await fetch(appelApi);           // La réponse de cette fonction est d'attendre la réponse (en json) de l'api
    let data = await response.json()                // Une fois qu'on a la réponse on peut la déclarer (data)
    .then((data) => {
        data.forEach((teddy) => {                   // Pour chaque teddy dans data on va créer du contenu HTML
            const { name, _id, colors, price, description, imageUrl } = teddy      // Déclaration de teddy comme objet
            bearImg.innerHTML +=
            `<div class="${name}">
                <h3 class="teddyName">${name}</h3>
                <ul class="teddyInfo">
                    <li id="price">Prix: ${price/100}€</li>
                </ul>
                <img src="${imageUrl}" alt="Photo de ${name}" class="teddyPhoto"></img>
                <button onclick='location.href="product-page.html?id=${_id}"' type="button" class="btn btn-primary" id="btnCustom"><i class="fas fa-paw"></i>Personnaliser mon teddy</button>
            </div>`; 
                    
                                               // Cette partie de récupération de l'id est très
                                                     // importante pour la page suivante
        })                                                      
    })
    return data;
}

window.onload = () => {                 // Force le lancement de la fonction getTeddies() au chargement de la page
    getTeddies();
}
*/









