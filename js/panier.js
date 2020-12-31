/////////////////////////////////fonction récupération des items du localStorage////////////////////////////////
function getTeddies() {
  let teddiesPanier = JSON.parse(localStorage.getItem("basketProducts"));
  return teddiesPanier;
}

/////////////////////////////////fonction affichage du panier/recuperation teddies////////////////////////////////
function displayPanier() {
  let teddies = getTeddies();
  panierTeddies(teddies);
}



/////////////////////////////////fonction affichage du panier////////////////////////////////////////////////////
function panierTeddies(teddies) {
  const panierStorage = document.getElementById("result")
  const main = document.getElementById("blockPanier");
  if (localStorage.length == 0) {
    main.innerHTML = `<h2>Votre panier est vide</h2>
    <a href="index.html" id="btnPanier" class="btn btn-primary container"> Retour</a>`;
  } else {
    for (var i = 0; i < teddies.length; i++) {
      const product = teddies[i]
      panierStorage.innerHTML += `
      <tr>
        <td id="panierImage">${displayImage(product)}</td>
        <td id="panierName">${displayTitle(product)}</td>
        <td id="panierPrice">${displayPrice(product)}</td>
      </tr> `;
    }
    function ShowPrice() {
      let totalPrice = 0;
      teddies.forEach(item => {
         totalPrice += (item.price/100)
      });
      console.log(totalPrice)
      let innnerPrice = document.getElementById('ShowPrice');
      innnerPrice.innerHTML = `<p id="totalPrice" class="btn btn-primary" >Prix total : ${totalPrice} EUR</p>`;
      sessionStorage.setItem("price", JSON.stringify(totalPrice));
    }
    ShowPrice();
  }

  /////////////////////////////////fonction Prix total////////////////////////////////////////////////////
  
}


/////////////////////////////////partie formulaire + post/orderid/////////////////////////////////////////////////
function formValidate() {
  const form = document.querySelector('.needs-validation')
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    let formIsInvalid = "";
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;

    if (/[0-9]/.test(firstName) || /[§!@#$%^&*().?":{}|<>]/.test(firstName) || !firstName)
      formIsInvalid += "Votre prénom est invalide \n";
    if (/[0-9]/.test(lastName) || /[§!@#$%^&*().?":{}|<>]/.test(lastName) || !lastName)
      formIsInvalid += "Votre nom de famille est invalide \n";
    if (!address)
      formIsInvalid += "Votre adresse est invalide \n";
    if (/[0-9]/.test(city) || !city)
      formIsInvalid += "Votre ville est invalide \n";
    if (!/[a-zA-Z0-9._\-]+@[a-zA-Z0-9._\-]+\.[a-zA-Z]{2,10}/.test(email) || !email)
      formIsInvalid += "Votre mail est invalide \n";
    if (formIsInvalid)
      alert("Erreur : \n" + formIsInvalid);
    
    else {
      let contact = {
        email: document.getElementById('email').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
      }

      let teddiesPanier = JSON.parse(localStorage.getItem("basketProducts"));
      let products = [];
      let productsId = teddiesPanier
      products.push(productsId);

      let formData = {
        contact,
        products
      };
      console.log(formData)

      /////////////////////////////////Requete Post/////////////////////////////////////////////////////////////////
      const confirmationOrder = fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          formData
        )
      });



      /////////////////////////////////Confirmation de la requete/////////////////////////////////////////////////
      confirmationOrder.then(async response => {
        console.log(response);
        let confirmation = await response.json();
        console.log(confirmation);
        localStorage.setItem("confirm", JSON.stringify(confirmation));
        window.location.href = "confirmation.html";
      });
    }
  })
}
formValidate();

/////////////////////////////////Vider Le Panier/////////////////////////////////////////////////////////////
function removeProduct() {
  localStorage.clear();
  document.location.href = "index.html";
}

/////////////////////////////////Fonction asynchrone////////////////////////////////////////////////////////
(async function () {
  const productsPanier = await fetch(`http://localhost:3000/api/teddies`)
  const productsJson = await productsPanier.json(productsPanier)
  var container = document.getElementsByClassName("container-xl")[0]
  displayPanier(productsJson, container)
})()