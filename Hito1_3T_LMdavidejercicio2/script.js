document.addEventListener('DOMContentLoaded', function () {
    const weatherInfo = document.getElementById('weather-info');

    // URL del API REST para obtener información meteorológica de las provincias
    const apiUrl = 'https://www.el-tiempo.net/api/json/v2/provincias';

    // Realizar la petición GET al API REST y mostrar la información
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Muestra la información en la página web
            renderWeatherInfo(data);
        })
        .catch(error => console.error('Error al obtener los datos del API:', error));

    function renderWeatherInfo(data) {
        // Verifica si los datos están disponibles y tienen la estructura esperada
        if (data && data.provincias) {
            // Construye el HTML con la información recibida
            let html = '<div class="card"><div class="card-header"></div><div class="card-body">';
            data.provincias.forEach(provincia => {
                html += `
                    <div class="province">
                        <div class="province-name">${provincia.NOMBRE_PROVINCIA}</div>
                        <div class="weather-info">
                            <p>Comunidad Autónoma: ${provincia.COMUNIDAD_CIUDAD_AUTONOMA}</p>
                            <p>Capital: ${provincia.CAPITAL_PROVINCIA}</p>
                        </div>
                    </div>
                `;
            });
            html += '</div></div>';

            // Inserta el HTML en el contenedor de información meteorológica
            weatherInfo.innerHTML += html;
        } else {
            // Si los datos no son válidos, muestra un mensaje de error
            weatherInfo.innerHTML += '<p>No se pudo obtener la información.</p>';
        }
    }
});
