let requestItem = new XMLHttpRequest();
requestItem.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200 || this.status == 201) {
    let Item = JSON.parse(this.responseText)

    let titre2 = document.getElementById('titre2') ;
        titre2.innerHTML = `
        <p>Choissisez la couleur</p>
        `

    let cardProd = document.getElementById('cardItem')
    cardProd.innerHTML = `
                <div class="card text-center"style="width: 450px;">
                  <img src="${Item.imageUrl}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="font card-title">${Item.name}</h5>
                    <p class="card-text">${Item.description}</p>
                    <p class="card-text prix">${(Item.price / 100).toFixed(2)} EUR</p>
                    <select id="ask" class="form-control">
                      <option value="1">${Item.colors[0]}</option>
                      <option value="2">${Item.colors[1]}</option>
                      <option value="3">${Item.colors[2]}</option>
                      <option value="4">${Item.colors[3]}</option>
								    </select>
                    <a href="produit.html?id=${Item._id}" id="btn" class="btn btn-primary">Ajouter au panier</a>
                  </div>
                </div>
                `;
    const elt = document.getElementById('btn')
    elt.addEventListener('click', function () {
    elt.innerHTML = "C'est cliqué !";
    });
  }
}



const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');



requestItem.open("GET", `http://localhost:3000/api/teddies/${id}`);
requestItem.send();