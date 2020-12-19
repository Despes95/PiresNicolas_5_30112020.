function displayPanier() {
    let teddies = getTeddies();
    console.table(teddies)
    panierTeddies(teddies);
  }
  
  function getTeddies() {
    let teddiesPanier = JSON.parse(localStorage.getItem("basketProducts")) || [];
    return teddiesPanier;
  }
  
  function panierTeddies(teddies) {
    const panierStorage = document.getElementById("result")
    for (var i = 0; i < teddies.length; i++) {
      const product = teddies[i]
      panierStorage.innerHTML += `
         <tr>
           <td id="panierImage">${displayImage(product)}</td>
           <td id="panierName">${displayTitle(product)}</td>
           <td id="panierPrice">${displayPrice(product)}</td>
         </tr>
         `;
    }
  }
  
  function removeProduct() {
    localStorage.clear();
    document.location.href = "index.html";
  }
  
  /* const form = document.querySelector('.needs-validation')
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add('was-validated');
  });
   */
  
  
  
  (async function () {
    const productsPanier = await fetchData()
    console.log(productsPanier)
    const productsJson = await toJson(productsPanier)
    var container = document.getElementsByClassName("container-xl")[0]
    displayPanier(productsJson, container)
  
  })()
  
  const api = 'http://localhost:3000/api/teddies'
  
  async function getTeddiesDetails(teddiesId) {
    const requestProduct = new Request(api + teddiesId);
    // http://local..../id
  
    const response = await fetch(requestProduct);
    const product = await response.json()
    
    return product
    
  }
  
  function teddiesPush () {
    teddiesIds= getTeddies();
    const promises = []
  teddiesIds.forEach(teddiesId => {
    promises.push(getTeddiesDetails(teddiesId))
  })
  
  const allTeddiesDetails = Promise.all(promises)
  
  }
  teddiesPush()
  console.log(allTeddiesDetails)
  
  
  
  
  function allValidate() {
    const form = document.querySelector('.needs-validation')
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      event.stopPropagation();
      teddiesIds= getTeddies();
      const contact = {
        email: document.getElementById('email').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        adress: document.getElementById('adress').value,
        city: document.getElementById('city').value,
      }
      const order = await createOrder(contact, teddiesIds)
      form.classList.add('was-validated');
      if (order !== null) {
        localStorage.clear();
        location.assign(`confirmation.html?id=${order.orderId}`)
      } else {
        alert('Pas d\'article dans le panier')
      }
    })
  }
  allValidate();
  
  async function createOrder(contact, product) {
    const body = {
      contact,
      product,
    }
    const requestCreateOrder = new Request(api + 'order')
    const response = await fetch(requestCreateOrder, {
      header: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body),
    });
    const order = await response.json();
    console.log('order', order)
    return order;
  }

  