document.addEventListener('DOMContentLoaded', function () {
    const provincesInfo = document.getElementById('provinces-info');
    const citiesInfo = document.getElementById('cities-info');

    // URL del API REST para obtener información meteorológica de las provincias
    const apiUrlProvincias = 'https://www.el-tiempo.net/api/json/v2/provincias';
    // URL del API REST para obtener información meteorológica de las ciudades
    const apiUrlCiudades = 'https://www.el-tiempo.net/api/json/v2/home';

    // Realizar la petición GET al API REST de provincias y mostrar la información
    fetch(apiUrlProvincias)
        .then(response => response.json())
        .then(data => {
            // Muestra la información de provincias en la página web
            renderProvincesInfo(data);
        })
        .catch(error => console.error('Error al obtener los datos del API de provincias:', error));

    // Realizar la petición GET al API REST de ciudades y mostrar la información
    fetch(apiUrlCiudades)
        .then(response => response.json())
        .then(data => {
            // Muestra la información de ciudades en la página web
            renderCitiesInfo(data);
        })
        .catch(error => console.error('Error al obtener los datos del API de ciudades:', error));

    function renderProvincesInfo(data) {
        // Verifica si los datos de provincias están disponibles y tienen la estructura esperada
        if (data && data.provincias) {
            // Construye el HTML con la información recibida de provincias
            let html = '';
            data.provincias.forEach(provincia => {
                html += `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${provincia.NOMBRE_PROVINCIA}</h5>
                            <p class="card-text">Comunidad Autónoma: ${provincia.COMUNIDAD_CIUDAD_AUTONOMA}</p>
                            <p class="card-text">Capital: ${provincia.CAPITAL_PROVINCIA}</p>
                        </div>
                    </div>
                `;
            });

            // Inserta el HTML en el contenedor de información de provincias
            provincesInfo.innerHTML = html;
        } else {
            // Si los datos de provincias no son válidos, muestra un mensaje de error
            provincesInfo.innerHTML = '<p>No se pudo obtener la información de provincias.</p>';
        }
    }

    function renderCitiesInfo(data) {
        // Verifica si los datos de ciudades están disponibles y tienen la estructura esperada
        if (data && data.ciudades) {
            // Construye el HTML con la información recibida de ciudades
            let html = '';
            data.ciudades.forEach(ciudad => {
                html += `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${ciudad.name}</h5>
                            <p class="card-text">Estado del tiempo: ${ciudad.stateSky.description}</p>
                            <p class="card-text">Temperatura máxima: ${ciudad.temperatures.max}°C</p>
                            <p class="card-text">Temperatura mínima: ${ciudad.temperatures.min}°C</p>
                        </div>
                    </div>
                `;
            });

            // Inserta el HTML en el contenedor de información de ciudades
            citiesInfo.innerHTML = html;
        } else {
            // Si los datos de ciudades no son válidos, muestra un mensaje de error
            citiesInfo.innerHTML = '<p>No se pudo obtener la información de ciudades.</p>';
        }
    }
});
