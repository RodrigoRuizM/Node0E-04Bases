// 
// 38 - Copia final de la Aplicación:   38.multiplicar-hasta
// 
const { fn31_CreaTabla_Mult_AsyncListTo } = require("./helpers/31.createTable");
// 
const mod_Argv = require("./config/yargs");
// 
const colors = require('colors');
// 

// -------------------------------
console.clear();

// ASINCRONICA
fn31_CreaTabla_Mult_AsyncListTo(mod_Argv.base, mod_Argv.list, mod_Argv.hasta)
    .then(_Archivo => console.log(_Archivo.rainbow, 'Creado'.red))
    .catch(_err => console.log(_err));