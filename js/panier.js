function displayPanier(product) {
  
   function getTeddies() {
    let teddiesPanier = JSON.parse(localStorage.getItem("basketProducts"));
    return teddiesPanier; 
   }
   
   
   let teddiesPanier = getTeddies();

   //faire une boucle pour iterrer sur les produits dans le local storage

   function panierTeddies (){
     
   
       const panierStorage = document.getElementById("test")
       panierStorage.innerHTML = `
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
   }
   console.table(teddiesPanier)
   panierTeddies();
}



function removeProduct() {
  localStorage.clear();
  document.location.href = "index.html";
}

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

(async function () {
   const productsPanier = await fetchData()
   const productsJson = await toJson(productsPanier)
   var container = document.getElementsByClassName("container-xl")[0]
   displayPanier(productsJson, container)
})()


