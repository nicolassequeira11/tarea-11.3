const URL = 'https://images-api.nasa.gov/search?q='

let buscador = document.getElementById('inputBuscar')

const btn = document.getElementById('btnBuscar')

const contenedor = document.getElementById('contenedor')

btn.addEventListener('click', () => {
    let newURL = URL + buscador.value
    fetch(newURL)
        .then(response => response.json())
        .then(data =>{
            let datos = data.collection.items
            datos.forEach(info => {
                contenedor.innerHTML += 
                `
                <div class="card col-3 p-1 mx-2 my-3">
                    <img src="${info.links[0].href}" class="img col-12">
                    <h4 class="title px-3 mt-4">${info.data[0].title}</h4>
                    <p class="description px-3">${info.data[0].description_508}</p>
                    <div class="date">
                        <p class="px-3 mt-3">${info.data[0].date_created}</p>
                    </div>
                </div>
                `
            });
        })
        .catch((error) => {
            console.error('Error:', error);
          });
})