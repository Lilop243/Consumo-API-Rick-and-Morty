const API = 'https://rickandmortyapi.com/api/character/';

const getData = (apiURL) => {
    return fetch(apiURL)
    .then(response => response.json())
    .then(json => { printData(json) })
    .catch(error => { console.error('Error: ', error)})
 
}

const printData = (data) => {
    let html = '';
    data.results.forEach(c => {
          html += '<div class="col">';
          html += '<div class="card" style="width: 13rem;">'
          html += `<img src="${c.image}" class="card-img-top" alt="">`

          html += '<div class="card-body">'
          html += `<h5 class="card-title">${c.name}</h5>`


          html += `<p class="card-text">Genero: ${c.gender}</p>`
          html += `<p class="card-text">Especie: ${c.species}</p>`
          html += '</div>'
          html += '</div>'
          html += '</div>'
        
    });
    document.getElementById('infoCharacters').innerHTML = html
}

getData(API)