var paquete = require("tecsup-2017-mendezpando");

var texto = "%a% %b% %c%";
var idioma = "en";
var reemplazos = {
    "en": {
        "a": "Testing",
        "b": "Replace",
        "c": "Module"
    },
    "es": {
        "a": "Probando",
        "b": "Modulo",
        "c": "Reemplazar"
    }
};

var resultado = paquete.replace(texto, reemplazos[idioma]);
console.log("--------------------------")
console.log(resultado);