/////////////////// Page Presentation teddies////////////////////////
function displayProductItem(product) {
    const imageDisplayed = displayImage(product)
    const priceDisplayed = displayPrice(product)
    const nameDisplayed = displayTitle(product)
    return `
    <div class="card text-center" style="max-width: 450px;">
    ${imageDisplayed}
    <div class="card-body">   
        ${nameDisplayed}
        ${priceDisplayed}
        <a href="details.html?id=${product._id}" class="btn btn-primary">Choisis Moi</a>
    </div>
</div>
`
}/////////////////// End Page Presentation teddies////////////////////////



/////////////////// Page Presentation Teddies Selectionner////////////////////////
function displayProductDetails(product) {
    const imageDisplayed = displayImage(product)
    const priceDisplayed = displayPrice(product)
    const nameDisplayed = displayTitle(product)
    const descriptionDisplayed = displayDescription(product)
    const optionDisplayed = displayOption(product)
    return `
<div class="card text-center" style="max-width: 500px;">
    ${imageDisplayed}
    <div class="card-body">
        ${nameDisplayed}
        ${descriptionDisplayed}
        ${priceDisplayed}
        ${optionDisplayed}
        <a href="" id="btn" class="btn btn-primary"><i class="fas fa-cart-arrow-down">
        </i> Ajouter au panier</a>
    </div>
</div>
`
}///////////////////End Page Presentation Teddies Selctionner////////////////////////

/////////////////// Page Panier////////////////////////
function displayProductPanier(product) {
    const imageDisplayed = displayImage(product)
    const priceDisplayed = displayPrice(product)
    const nameDisplayed = displayTitle(product)
    const descriptionDisplayed = displayDescription(product)
    
    /* return `
    <div class="card mb-3" style="max-width: 1440px;">
        <div class="row g-0">
            <div class="col-md-4">
                ${imageDisplayed}
                <button class="btn1 btn-primary">Vider Panier</button>
            </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <div class="row justify-content-around text-center mb-5">
                            <div class="col-md-3 basket-title d-none d-md-block">
                                Produits Sélectionnés
                                ${nameDisplayed}
                            </div>
                            <div class="col-md-3 basket-title d-none d-md-block">
                                couleur Sélectionnées
                            </div>
                            <div class="col-md-3 basket-title d-none d-md-block">
                                Quantites
                            </div>
                            <div class="col-md-3 basket-title d-none d-md-block">
                                total de la commande
                                ${priceDisplayed}
                            </div>
                        </div>
                        ${descriptionDisplayed}
                        <p class="card-text">Achetez sans tracas. En cas de rétractation,
                         nous prenons en charge les frais de retours.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
` */
}///////////////////End Page Panier////////////////////////


/////////////////// Fonction Image////////////////////////
function displayImage(product) {
    return `<img src="${product.imageUrl}" class="card-img-top bg-transparent"  alt="...">`
}

/////////////////// Fonction Nom du teddies////////////////////////
function displayTitle(product) {
    return `<h5 class="font card-title text-center">${product.name}</h5>`
}

/////////////////// Fonction du Prix////////////////////////
function displayPrice(product) {
    return `<p class="card-text prix">${product.price / 100}€</p>`
}

/////////////////// Fonction de la decription////////////////////////
function displayDescription(product) {
    return `<p class="card-text">${product.description}</p>`
}

/////////////////// Fonction pour la selection des Couleurs////////////////////////
function displayOption(product) {
    let options = ''
    for (let color of product.colors) {
        options += `<option>${color}</option>`
        console.log("${color}")
    }
    return `<select id= "option" class="form-control">${options}</select>`
}