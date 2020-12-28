const innerOrder = document.getElementById('orderId');
let confirmation = JSON.parse(localStorage.getItem("confirm"));
console.log(confirmation);

if (localStorage.length == 0) {
    innerOrder.innerHTML = `<h2>Votre panier est vide</h2>
    <a href="index.html" id="btnPanier" class="btn btn-primary container"> Retour</a>`;
} else {
    innerOrder.innerHTML = `<p>votre commande numéro est ${confirmation.orderId}</p>`;
}
localStorage.clear();