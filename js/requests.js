function fetchData(path = '') {
    return fetch(`http://localhost:3000/api/teddies${path}`)
}

function toJson(productsList) { 
    return productsList.json() 
}

