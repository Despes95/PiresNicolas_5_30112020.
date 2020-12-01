let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let product = JSON.parse(this.responseText);
        console.table(product)
        let titre = document.getElementById('titre');
        titre.innerHTML = `
        <p>Choissisez le votre</p>
        `

        let cardTeddies = document.getElementById('cardTeddies')
        product.forEach(teddies => {
            cardTeddies.innerHTML += `    
                    <div class="card text-center"style="width: 450px;">
                        <img src="${teddies.imageUrl}" class="card-img-top bg-transparent"  alt="...">
                        <div class="card-body">
                            <h5 class="font card-title text-center">${teddies.name}</h5>
                            <p class="card-text">${teddies.description}</p>
                            <p class="card-text prix">${(teddies.price/100).toFixed(2)} €</p>
                                <a href="produit.html?id=${teddies._id}" class="btn btn-primary"><i class="fas fa-cart-arrow-down"></i> Choisis Moi</a>
                        </div>
                    </div>
                    `
        });
    }
};

request.open("GET", "http://localhost:3000/api/teddies")
request.send()