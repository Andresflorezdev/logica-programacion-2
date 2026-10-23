const inputTemperatura = document.getElementById("inputTemperatura");
const btnConsultar = document.getElementById("btnConsultar");
const resultados = document.getElementById("resultados");

btnConsultar.addEventListener("click", function () {
    let ingresarTemperatura = inputTemperatura.value.trim();
    let temperaturaCelsius = Number(ingresarTemperatura);

    if (ingresarTemperatura === "" || Number.isNaN(temperaturaCelsius)) {
        console.log("No se aceptan datos que no sean numeros, vuelve a intentarlo");
        resultados.innerText = "No se aceptan datos que no sean numeros, vuelve a intentarlo";
        return;
    }

    let fahrenheitGrados = (temperaturaCelsius * 9 / 5) + 32;
    let kelvinGrados = temperaturaCelsius + 273.15;

    console.log("Grados Kelvin: ", kelvinGrados);
    console.log("Grados Fahrenheit: ", fahrenheitGrados);

    resultados.innerText = `Grados Kelvin: ${kelvinGrados}\nGrados Fahrenheit: ${fahrenheitGrados}`;
});
