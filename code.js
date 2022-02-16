//JSON SE PARECE A ARRAY ASOCIATIVO OSEA O OBJETO, LA DIFERENCIA ES QUE EN EL JSON HASTA LAS VARIABLES VAN CON COMILLAS
//PARA ENVIAR DATOS A UN SERVIDOR O A OTRO LUGAR HAY QUE ENVIARLOS SERIALIZADOS
//SERIALIZAR UN JSON (ie, convertir en cadena de texto)

const deserializado={"variable1":"Pedro","varible2":"Jorge"};

const serializado=JSON.stringify(deserializado);
console.log(serializado)
console.log(typeof serializado) //devuelve string

//DESERIALIZAR UN JSON (AL RECIBIRLO, PUES SIEMPRE LO RECBIMOS SERIALIZADO)
const serializado2='{"variable1":"Pedro","varible2":"Jorge"}';

const deserializado2=JSON.parse(serializado2);
console.log(deserializado2)
console.log(typeof deserializado2) //devuelve objeto
console.log(deserializado2.variable1) //muestra el valor correspondiente a la llave 'variable1'

//POLYFILL es una función que simula un json. Antiguas versiones de IExplorer no soportan JSON //if JSON parse !==function entonces se crea

//AJAX Asynchronus Java And XML. Envía respuesta sin actualizar la página
