function displayProduct(product, container) {
  const productElement = document.createElement('div')
  productElement.innerHTML = displayProductDetails(product)
  container.appendChild(productElement)


  const elt = document.getElementById('btn');
  elt.addEventListener('click', function () {
    let storageProduct = JSON.parse(localStorage.getItem('basketProducts')) /*  || [] */ ; /* ? JSON.parse(localStorage.getItem('basketProducts')) : []; http: www.finalclap.com / faq / 316 - javascript - operateur - ternaire */
    if (storageProduct === null){
      storageProduct = [];
  }
    storageProduct.push(product);
    console.log(JSON.stringify([product]));
    localStorage.setItem('basketProducts', JSON.stringify(storageProduct));
    alert('ajouté au panier');
  });
}

(async function () {
  const searchParams = new URLSearchParams(document.location.search) // Récupérer le parametre de recherche dans l'URL de ta page -> site.com/produit?id=id1&nom='peluche1' => [{ id: 'id1}, { nom: 'peluche1' }]
  const id = searchParams.get('id') // 'id1'
  const productDetail = await fetchData(`/${id}` /* parametre path */ ) // Récupérer les données du serveur
  const productJson = await toJson(productDetail) // Formatter les données en JSON 
  var container = document.getElementsByClassName("container-xl")[0]
  displayProduct(productJson, container)
})()