function displayPanier() {
  let teddies = getTeddies();
  console.table(teddies)
  panierTeddies(teddies);
}

function getTeddies() {
  let teddiesPanier = JSON.parse(localStorage.getItem("basketProducts"));
  return teddiesPanier;
}

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
  }
}


function formValidate() {
  const form = document.querySelector('.needs-validation')
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    const contact = {
      email: document.getElementById('email').value,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
    };

    let teddiesPanier = JSON.parse(localStorage.getItem("basketProducts"));
    let products = [];
    let productsId = teddiesPanier
    products.push(productsId);
    let formData = {
      contact,
      products
    };

    console.log(formData)
    const reponseOrder = fetch("http://localhost:3000/api/teddies/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        formData
      )
    });

    reponseOrder.then(async response => {
      console.log(response);
      let confirmation = await response.json();
      console.log(confirmation);
      if (response.ok) {
        localStorage.setItem("confirm", JSON.stringify(confirmation));
        window.location.href = "confirmation.html";
      } else {
        alert("Veuillez remplir le formulaire pour confirmer votre commande.");
        form.classList.add('was-validated');
      }
    });
  })
}
formValidate();



/////////////////////////////////Vider Le Panier////////////////////////////////
function removeProduct() {
  localStorage.clear();
  document.location.href = "index.html";
}

(async function () {
  const productsPanier = await fetchData()
  const productsJson = await toJson(productsPanier)
  var container = document.getElementsByClassName("container-xl")[0]
  displayPanier(productsJson, container)
})()