const prompt = require("prompt-sync")();

let continuar = "si";

while (continuar === "si") {
    let ingresarTemperatura = prompt("Ingrese temperatura en grados Celsius: ").trim();
    let temperaturaCelsius = Number(ingresarTemperatura);

    while (ingresarTemperatura === "" || Number.isNaN(temperaturaCelsius)) {
        console.log("No se aceptan datos que no sean numeros, vuelve a intentarlo");
        ingresarTemperatura = prompt("Ingrese temperatura en grados Celsius: ").trim();
        temperaturaCelsius = Number(ingresarTemperatura);
    }

    let fahrenheitGrados = temperaturaCelsius * 9 / 5 + 32;
    let kelvinGrados = temperaturaCelsius + 273.15;

    console.log("Grados Kelvin: ", kelvinGrados);
    console.log("Grados Fahrenheit: ", fahrenheitGrados);

    continuar = prompt("Quieres hacer otra conversion de temperatura (si/no): ")
        .trim()
        .toLowerCase();

    while (continuar !== "si" && continuar !== "no"){
        console.log("solo se puede si y no");
        continuar = prompt("Quieres hacer otra conversion de temperatura (si/no): ")
            .trim()
            .toLowerCase();
    }
}

console.log("Gracias por probar mi programa :)");
