function fetchData(path = '') {  //declaration de l'api
    return fetch(`http://localhost:3000/api/teddies${path}`)
}

function toJson(productList) {  //fonction avec en parametre la creation productList
//    console.log(productList)
    return productList.json() // definit la fonction en json
    
}
