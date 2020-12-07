
function fetchData(path = '') {
    return fetch(`http://localhost:3000/api/teddies${path}`)
}

function toJson(productList) {
    console.info('TO JSON')
    return productList.json()
}