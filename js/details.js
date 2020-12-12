function displayProduct(product, container) {
  const productElement = document.createElement('div')
  productElement.innerHTML = displayProductDetails(product)
  container.appendChild(productElement)

/* function addToLocalStorage() {
    let productPanier = [{
        id: product._id,
        count: count,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        color: document.getElementById("option").value,
        description: product.description
    }, {}, ...]
    
    localStorage[productPanier.id] = JSON.stringify(productPanier);
    
}

document.getElementById("btn").addEventListener("click", function () {
    addToLocalStorage();
});
console.log(localStorage) */


// Modele actuel dans le localstorage: ["id1", "id2"...]

// Modele desire : [{ id: "id1", color: 'rouge', count: 3 }, { id: "id2", color: 'rouge', count: 4 }, ...]

const elt = document.getElementById('btn');
  elt.addEventListener('click', () => {
    const storageProduct = JSON.parse(localStorage.getItem('basketProducts')); /* On récupere le storage et on le transforme en objet avec JSON.parse */
    if (storageProduct) { // Si le storage existe 
      let productExistsInBasket = false; // Notre variable pour vérifier si le produit est déjà dans le storage
      storageProduct.forEach(basketProduct => { // On parcourt les id de produits qui sont dans le storage
        if (basketProduct === product) { 
          productExistsInBasket = true; // Si le product id est déjà dans le storage on set la variable à true
        }
      })
      if (productExistsInBasket) {
        alert('Article déja présent dans le panier')
        console.log(JSON.stringify([product]));
      } else { // On ajoute le produit id au localstorage
        alert('ajouté au panier')
        storageProduct.push(product)
        console.log(JSON.stringify([product]));
        localStorage.setItem('basketProducts', JSON.stringify(storageProduct));
      }
    } else { // Le storage n'existe pas 
      alert('ajouté au panier')
      localStorage.setItem('basketProducts', JSON.stringify([product]));// On crée le tableau de produit id => on le stringify et on le stocke dans le localstorage
    }
  })
}







(async function () {
  const searchParams = new URLSearchParams(document.location.search) // Récupérer le parametre de recherche dans l'URL de ta page -> site.com/produit?id=id1&nom='peluche1' => [{ id: 'id1}, { nom: 'peluche1' }]
  const id = searchParams.get('id') // 'id1'
  const productDetail = await fetchData(`/${id}` /* parametre path */ ) // Récupérer les données du serveur
  const productJson = await toJson(productDetail) // Formatter les données en JSON 
  var container = document.getElementsByClassName("container-xl")[0]
  displayProduct(productJson, container)
})()