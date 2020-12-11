function displayPanier(product, container) {
   /*  const productElement = document.createElement('div')
    productElement.innerHTML = displayProductPanier(product)
    container.appendChild(productElement) */
    

    function getTeddies() {
        let teddiesPanier = JSON.parse(localStorage.getItem("basketProducts"));
        return teddiesPanier;
    }
    
    let teddiesPanier = getTeddies();
    
    console.table(teddiesPanier[0]);
    console.log(teddiesPanier[0].name)
    function panierTeddies (){
    
        const panierStorage = document.getElementById("test")
        panierStorage.innerHTML = `
        <div class="card mb-3" style="max-width: 1440px;">
            <div class="row g-0">
                <div class="col-md-5">
                <img id=panierImg class="img-fluid" src="${teddiesPanier[0].imageUrl}">
                </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <div class="row justify-content-around text-center mb-5">
                                <div class="col-md-4 basket-title ">
                                nom
                                <h5 class="font card-title text-center">${teddiesPanier[0].name}</h5>
                                </div>
                                <div class="col-md-3 basket-title ">
                                couleur
                                    ${teddiesPanier[0].color}
                                </div>
                                <div class="col-md-3 basket-title ">
                                tarif
                                <p class="card-text prix">${teddiesPanier[0].price} €</p>
                                </div>
                                <button id=reset class="btn btn-primary">Vider Panier</button>
                            </div>
                            <p class="card-text">${teddiesPanier[0].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    }
    
    panierTeddies();
}


(async function () {
    const productsPanier = await fetchData()
    const productsJson = await toJson(productsPanier)
    var container = document.getElementsByClassName("container-xl")[0]
    displayPanier(productsJson, container)
})()

