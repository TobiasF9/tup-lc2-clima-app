function addNewCityToLocalStorage() {
    let newCity = document.getElementById('agg').value;
    let cities = getCitiesFromLocalStorage();
    
    if(cities.indexOf(newCity) >= 0){
        document.getElementById("parrafo_verde").style.display = "none";
        document.getElementById("parrafo_rojo").style.display = "none";
        document.getElementById("parrafo_amarillo").style.display = "block";
    } else {
        cities.push(newCity);
        document.getElementById("parrafo_amarillo").style.display = "none";
        document.getElementById("parrafo_rojo").style.display = "none";
        document.getElementById("parrafo_verde").style.display = "block";
        
    }
    localStorage.setItem("CITIES", JSON.stringify(cities));
    
}

function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function opcionesSelect() {
    const Ciudades = getCitiesFromLocalStorage();
    Ciudades.map(function(Ciudad) {
        document.write('<option value="'+Ciudad+'">'+Ciudad+'</option>');
    })
}

const llamarDatos = async () => {

    try{
        ciudadseleccionada = document.getElementById("select_one").value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadseleccionada}&appid=9fb5da60ee12497cdb78d803de556679&units=metric&lang=es`
        res = await fetch(url);

        if(res.ok){
            datos = await res.json();
            console.log(datos)
            
        }else{
                console.log(res.status);
            }
            
        }catch(err){
        console.log(err)
    }

    if (res.status == "404"){
        console.log("da error")
    }
    else{
        

        cartaparacambiar.innerHTML = 
        `<h3>${ciudadseleccionada}, ${datos.sys.country}</h3>
        <h3><img src="http://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png"></h3>
        <p>Temperatura: ${datos.main.temp}°</p>
        <p>Sensación térmica: ${datos.main.feels_like}°</p>
        <p>Humedad: ${datos.main.humidity}%</p>
        <p>Velocidad del viento: ${datos.wind.speed}km/h</p>
        <p>Presión: ${datos.main.pressure} p</p>`
        document.getElementById("cartaparacambiar").style.display = "block";
    }

};