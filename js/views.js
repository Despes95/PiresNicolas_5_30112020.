function displayProductItem(product) {
    const imageDisplayed = displayImage(product)
    const priceDisplayed = displayPrice(product)
    const nameDisplayed = displayTitle(product)
    return `
    <div class="card text-center" style="width: 21rem;">
    ${imageDisplayed}
    <div class="card-body">   
        ${nameDisplayed}
        ${priceDisplayed}
        <a href="details.html?id=${product._id}" class="btn btn-primary"><i class="fas fa-cart-arrow-down"></i> Choisis Moi</a>
    </div>
</div>
`
}


function displayProductDetails(product) {
    const imageDisplayed = displayImage(product)
    const priceDisplayed = displayPrice(product)
    const nameDisplayed = displayTitle(product)
    const descriptionDisplayed = displayDescription(product)
    const optionDisplayed = displayOption(product)
    return `
<div class="card text-center" style="width: 21rem;">
    ${imageDisplayed}
    <div class="card-body">
        ${nameDisplayed}
        ${descriptionDisplayed}
        ${priceDisplayed}
        ${optionDisplayed}
        <a href="" id="btn" class="btn btn-primary"><i class="fas fa-cart-arrow-down"></i>Ajouter au panier</a>
    </div>
</div>
`

}



function displayImage(product) {
    return `<img src="${product.imageUrl}" class="card-img-top bg-transparent"  alt="...">`
}

function displayTitle(product) {
    return `<h5 class="font card-title text-center">${product.name}</h5>`
}

function displayPrice(product) {
    console.info('DISPLAY PRICE')
    return `<p class="card-text prix">${product.price / 100}€</p>`
}

function displayDescription(product) {
    return `<p class="card-text">${product.description}</p>`
}

function displayOption(product) {
    let options = ''
    for (let color of product.colors) {
        options += `<option>${color}</option>`
    }
    return `<select class="form-control">${options}</select>`
}