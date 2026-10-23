# Conversion de Temperaturas

Programa para convertir grados Celsius a grados Fahrenheit y Kelvin. Incluye dos modalidades de ejecucion: una mediante consola con Node.js y otra de forma visual en el navegador interactuando con el DOM.

---

## Requisitos e Instalacion

Para ejecutar la version de consola se requiere tener instalado Node.js.

### 1. Instalacion de dependencias con pnpm

Este proyecto utiliza `pnpm` como gestor de paquetes. Para instalar la libreria `prompt-sync` y las dependencias del proyecto, ejecuta en la terminal:

```bash
pnpm install
```

O para instalarla directamente:

```bash
pnpm add prompt-sync
```

---

## Como ejecutar el proyecto

### Modo 1: Consola (Node.js)
Abre una terminal en la carpeta del proyecto y ejecuta el siguiente comando:

```bash
node ejercicio-logica.js
```

El programa te solicitara ingresar una temperatura en grados Celsius, validara que sea un numero, imprimira los resultados en Kelvin y Fahrenheit, y preguntara si deseas realizar otra conversion.

### Modo 2: Interfaz Web (DOM)
El archivo `index.html` abrelo con cualquier navegador web. Ingresa la temperatura en el campo de texto y presiona el boton "Consultar".

---

## Descripcion de los archivos del proyecto

- **ejercicio-logica.js**: Contiene la logica para ejecutarse directamente en la terminal de Node.js. Utiliza `prompt-sync` para leer entradas del usuario mediante bucles `while`, valida que el dato sea numerico y realiza las conversiones.
- **index.html**: Archivo de marcado que define la estructura visual en el navegador. Contiene el titulo, la etiqueta, el campo de texto (`input`), el boton de consulta y el contenedor donde se imprimen los resultados.
- **script.js**: Archivo JavaScript encargado de manipular el DOM en el navegador. Escucha el evento de clic del boton, toma el valor del input, realiza las validaciones y calculos, y muestra el resultado en la pagina.
- **style.css**: Hoja de estilos que aplica diseno visual al contenido HTML.
- **package.json**: Archivo de configuracion del proyecto donde se registran las dependencias (como `prompt-sync`).
- **pnpm-lock.yaml**: Archivo de bloqueo que asegura que se instalen exactamente las mismas versiones de las dependencias con `pnpm`.

---

## Conceptos y metodos clave utilizados

### prompt-sync
Libreria externa para Node.js que permite pausar la ejecucion del programa en consola a la espera de que el usuario escriba un texto y presione Enter.
```javascript
const prompt = require("prompt-sync")();
let dato = prompt("Ingresa un valor: ");
```

### document.getElementById
Metodo nativo de JavaScript que busca y devuelve una referencia al elemento HTML que coincida con el identificador (`id`) especificado.
```javascript
const inputTemperatura = document.getElementById("inputTemperatura");
const btnConsultar = document.getElementById("btnConsultar");
const resultados = document.getElementById("resultados");
```

### addEventListener
Metodo que registra un escuchador de eventos en un elemento. En este caso, escucha el evento `click` sobre el boton "Consultar" para disparar la funcion de calculo.
```javascript
btnConsultar.addEventListener("click", function () {
    // Logica de conversion
});
```

### innerText
Propiedad del DOM utilizada para actualizar el texto visible dentro de un elemento HTML, evitando la necesidad de inyectar codigo HTML complejo.
```javascript
resultados.innerText = `Grados Kelvin: ${kelvinGrados}\nGrados Fahrenheit: ${fahrenheitGrados}`;
```

### Validacion con Number y Number.isNaN
- `Number(valor)`: Convierte el texto ingresado a tipo numerico.
- `Number.isNaN(valor)`: Comprueba si el resultado de la conversion no es un numero valido, permitiendo avisar al usuario si ingreso letras o caracteres invalidos.

---

## Formulas de conversion utilizadas

- **Fahrenheit**: `(Celsius * 9 / 5) + 32`
- **Kelvin**: `Celsius + 273.15`
