// Je cherche à afficher les produits (image, titre, prix) sur cette page
///// A -j'affiche une liste
////////  j'affiche des blocs produits
//////////// j'affiche un élément image dont la src est la valeur imageUrl
/////////// j'affiche un élément texte dont le contenu est la valeur de title
////////// j'affiche un élément texte dont le contenu est la valeur de price
// Je dois récupérer la liste via le serveur 
///// je fais une requête GET avec `fetch` sur le endpoint /api/teddies
///// je récupère le JSON de la réponse
//// je lance l'affiche de ma liste -> A


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