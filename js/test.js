function displayProduct(product, container) {
    const productElement = document.createElement('div')
    productElement.innerHTML = displayProductDetails(product)
    container.appendChild(productElement)
  
    /* function addToLocalStorage() {
      let productPanier = {
          id: product._id,
          name: product.name,
          imageUrl: product.imageUrl,
          price: product.price,
          color: document.getElementById("option").value
      }
  
      localStorage[productPanier.id] = JSON.stringify(productPanier);
      
  }
  
  document.getElementById("btn").addEventListener("click", function () {
      addToLocalStorage();
  });
  console.log(localStorage) */
  
  const elt = document.getElementById('btn');
    elt.addEventListener('click', () => {
      const storageProduct = JSON.parse(localStorage.getItem('basketProducts'));
      if (storageProduct) { // 
        let productExistsInBasket = false;
        storageProduct.forEach(productId => {
          if (productId === product) {
            productExistsInBasket = true;
          }
        })
        if (productExistsInBasket) {
          alert('Article déja présent dans le panier')
          console.log(JSON.stringify([product]));
        } else { //
          alert('ajouté au panier')
          storageProduct.push(product)
          console.log(JSON.stringify([product]));
          localStorage.setItem('basketProducts', JSON.stringify(storageProduct));
        }
      } else {
        alert('ajouté au panier')
        console.log(JSON.stringify([product]));
        localStorage.setItem('basketProducts', JSON.stringify([product]));
      }
    })
    console.log(localStorage)
  }
  
  
  
  
  
  
  
  (async function () {
    const searchParams = new URLSearchParams(document.location.search) // Récupérer le parametre de recherche dans l'URL de ta page -> site.com/produit?id=id1&nom='peluche1' => [{ id: 'id1}, { nom: 'peluche1' }]
    const id = searchParams.get('id') // 'id1'
    const productDetail = await fetchData(`/${id}` /* parametre path */ ) // Récupérer les données du serveur
    const productJson = await toJson(productDetail) // Formatter les données en JSON 
    var container = document.getElementsByClassName("container-xl")[0]
    displayProduct(productJson, container)
  })()