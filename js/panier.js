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


const form = document.querySelector('.needs-validation')
form.addEventListener('submit', function (event) {
  event.preventDefault();
  event.stopPropagation();
  form.classList.add('was-validated');
  const email = document.getElementById('email').value;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const adress = document.getElementById('adress').value;
  const city = document.getElementById('city').value;
  const contact = { // On recupere les donnees renseigner du formulaire et on les mets dans l'objet "contact"
    email,
    firstName,
    lastName,
    adress,
    city
  }
  console.log(contact)
});

 

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