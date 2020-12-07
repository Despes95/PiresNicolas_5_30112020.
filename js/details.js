function displayProduct(product, root) {
    //for(let product of products) {
    //    const productElement = document.createElement('div')
    //    productElement.innerHTML = displayProduct(product)
    //    root.appendChild(productElement)
    //}
    const productElement = document.createElement('div')
    productElement.innerHTML = displayProductDetails(product)
    root.appendChild(productElement)

    
}



(async function() {
    const searchParams = new URLSearchParams(document.location.search)
    const id =  searchParams.get('id')
    const productDetail = await fetchData(`/${id}`)
    const productJson = await toJson(productDetail)
    console.log(productJson)
    var container = document.getElementsByClassName("container-xl")[0]
    displayProduct(productJson, container)
})()