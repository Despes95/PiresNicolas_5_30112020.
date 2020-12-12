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
    <div class="form-group">
        <a href="" id="btn" class="btn btn-primary"><i class="fas fa-cart-arrow-down">
        </i> Ajouter au panier</a>
</div>
`
}///////////////////End Page Presentation Teddies Selctionner////////////////////////

/////////////////// Page Panier////////////////////////
/* function displayProductPanier(product) {
    const imageDisplayed = displayImage(product)
    const priceDisplayed = displayPrice(product)
    const nameDisplayed = displayTitle(product)
    const descriptionDisplayed = displayDescription(product)
    
     return `
    <table class="table bg-light">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Photo</th>
            <th scope="col">Nom</th>
            <th scope="col">Prix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td><img id=panierImg class="img-fluid" src="${teddiesPanier[0].imageUrl}"  style="max-width: 40px;"></td>
            <td><h5 class="font card-title">${teddiesPanier[0].name}</h5></td>
            <td><p class="card-text prix">${teddiesPanier[0].price / 100}€</p></td>
          </tr>
        </tbody>
      </table>
      <td><button onclick="removeProduct('${product}')" class="btn btn-primary">Supprimer</button></td>
` 
} *////////////////////End Page Panier////////////////////////


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
