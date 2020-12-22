const displayOrderId = document.getElementById('orderId');
let confirmation = JSON.parse(localStorage.getItem("confirm"));
console.log(confirmation);

if (localStorage.length == 0) {
    displayOrderId.innerHTML = `<h2>Votre panier est vide</h2>
    <a href="index.html" id="btnPanier" class="btn btn-primary container"> Retour</a>`;
} else {
    displayOrderId.innerHTML = `<p>Chers clients ${confirmation.contact.firstName} ${confirmation.contact.lastName} </p>
                                <p>vous recevrez votre facture a l'adresse suivante : ${confirmation.contact.email} </p>
                                <p>votre commande numéro est ${confirmation.orderId}</p>`;
}
localStorage.clear();