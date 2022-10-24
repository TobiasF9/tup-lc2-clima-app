function addNewCityToLocalStorage() {
    let newCity = document.getElementById('agg').value;
    let cities = getCitiesFromLocalStorage(); /* cities es un arreglo */
    
    if(cities.indexOf(newCity) >= 0){
        document.getElementById("parrafo_verde").style.display = "none";
        document.getElementById("parrafo_rojo").style.display = "none";
        document.getElementById("parrafo_amarillo").style.display = "block";
    } else {
        cities.push(newCity);
        document.getElementById("parrafo_amarillo").style.display = "none";
        document.getElementById("parrafo_rojo").style.display = "none";
        document.getElementById("parrafo_verde").style.display = "block";
        /*let slct = document.querySelector('#select_one');
        document.slct.appendChild(newCity);*/
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
