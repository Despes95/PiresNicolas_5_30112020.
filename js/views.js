/////////////////// Page Presentation index////////////////////////
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
    </div>`
}/////////////////// End Page Presentation index////////////////////////



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
    <div class="form-group">
        <a href="" id="btn" class="btn btn-primary"><i class="fas fa-cart-arrow-down">
        </i> Ajouter au panier</a>
</div>`
}///////////////////End Page Presentation Teddies Selctionner////////////////////////

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
    }
    return `<select id= "option" class="form-control">${options}</select>`
}

