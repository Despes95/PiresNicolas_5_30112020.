///////////////////////////////// Affichage Confirmation panier vide ou non//////////////
function showOrder() {
    const innerOrder = document.getElementById('orderId');
    let confirmation = JSON.parse(localStorage.getItem("confirm"));
    let totalPrice = JSON.parse(sessionStorage.getItem("price"));
    console.log(confirmation);

    if (localStorage.length == 0) {
        innerOrder.innerHTML = `<h2 class="confirmEmptyBtn">Votre panier est vide</h2>
    <a href="index.html" id="btnPanier" class="btn btn-primary container"> Retour</a>`;
    } else {
        innerOrder.innerHTML = `<p class="confirmPara">Merci pour votre achat,
        votre numéro de commande est le :</br> <span>${confirmation.orderId}</p></span> pour un total de <span>${totalPrice}</span> €  `;
    }
}
showOrder();

///////////////////////////////// supression localstorage////////////////////////////////
localStorage.clear();

