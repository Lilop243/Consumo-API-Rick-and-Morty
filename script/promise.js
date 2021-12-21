const API = 'https://rickandmortyapi.com/api/character?page=2';
const CHARACTER_URL = 'https://rickandmortyapi.com/api/character/?name=';

const form = document.getElementById('form');
const search = document.getElementById('search');
const h1 = document.querySelector("h1");

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

form.addEventListener('submit', e => {
    e.preventDefault();

    ///console.log(submit);

    const term = search.value;
    if (term && term !== "") {
        getData(CHARACTER_URL + term);
        search.value = ""
    }

    else{
        window.location.reload();
    }
})

h1.addEventListener("click", () => {
    
});

