/////////////////////////////fonction affichage des teddies///////////////////////////
function displayList(products, root) { 
    for(let product of products) { 
        const productElement = document.createElement('div')
        productElement.innerHTML = displayProductItem(product)
        root.appendChild(productElement)
    }
}

/////////////////////////////////Fonction asynchrone////////////////////////////////
(async function() { 
    const response = await fetch(`http://localhost:3000/api/teddies`) 
    const productsJson = await response.json()
    var container = document.getElementsByClassName("container-xl")[0]
    displayList(productsJson, container)
})()
