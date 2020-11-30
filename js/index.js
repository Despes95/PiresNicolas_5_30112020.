var get = function (url) {
    return new Promise(function (resolve, reject) {
        var xhr = new window.XMLHttpRequest()

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let product = JSON.parse(this.responseText);
                    console.table(product)
                    resolve(xhr.responseText)
                    let cardTeddies = document.getElementById('cardTeddies')
                    product.forEach(teddies => {
                        cardTeddies.innerHTML += `    
                    <div class="card text-center"style="width: 450px;">
                        <img src="${teddies.imageUrl}" class="card-img-top bg-transparent"  alt="...">
                        <div class="card-body">
                            <h5 class="font card-title text-center">${teddies.name}</h5>
                            <p class="card-text">${teddies.description}</p>
                            <p class="card-text">${(teddies.price/100).toFixed(2)} £</p>
                                <a href="produit.html?id=${teddies._id}" class="btn btn-primary"><i class="fas fa-cart-arrow-down"></i> Choisis Moi</a>
                        </div>
                    </div>
                    `
                    });
                } else {
                    reject(xhr)
                }
            }
        }
        xhr.open('GET', url, true)
        xhr.send()
    })
}

get('http://localhost:3000/api/teddies').then(function (response) {
    console.log(response)
})