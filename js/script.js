function displayList(products, root) {
    for(let product of products) {
        const productElement = document.createElement('div')
        productElement.innerHTML = displayProductItem(product)
        root.appendChild(productElement)
    }
}


(async function() {
    const productsList = await fetchData()
    const productsJson = await toJson(productsList)
    var container = document.getElementsByClassName("container-xl")[0]
    displayList(productsJson, container)
})()
