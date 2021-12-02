const marvel = {
    render: () => {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=54eca59010706dfd82ae915d188d04d2&hash=d366aedb019e36904fa99dc717bc587d&limit=51&offset=100';
        const contenedor = document.querySelector('#contenedor');
        let contenedorHTML = '';
        fetch(urlAPI)
            .then(resultado => resultado.json())
            .then((json) => {
                for (let index = 0; index < json.data.results.length; index++) {
                    const element = json.data.results[index];
                    const link = element.urls[0].url;
                    contenedorHTML += `
                     <div class="col-md-4">
                        <a href="${link}"> 
                           <img src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="" class="imagen">                
                        </a>
                        <h3 class="titulo">${element.name}</h3>               
                    </div>               
               `;
                }
                contenedor.innerHTML = contenedorHTML;
            })
    }
};

function buscar(nombre) {
    const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=54eca59010706dfd82ae915d188d04d2&hash=d366aedb019e36904fa99dc717bc587d&limit=51&offset=1000';
    const contenedor = document.querySelector('#contenedor');
    let html = '';
    fetch(urlAPI)
        .then(resultado => resultado.json())
        .then((json) => {
            for (let index = 0; index < json.data.results.length; index++) {
                const element = json.data.results[index];
                const link = element.urls[0].url;
                if (element.name === nombre) {
                    contenedor.innerHTML = '';
                    html += `
            <div class="col-md-10">
               <a href="${link}"> 
                  <img src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="" class="imagen">                
               </a>
               <h3 class="titulo">${element.name}</h3>               
           </div>               
                    `;
                }
            }
            contenedor.innerHTML = html;
        })
};

marvel.render();

var entrada = document.querySelector('#entrada');
var boton = document.querySelector('#boton');

