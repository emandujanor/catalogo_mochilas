'use strict';

var $producto = $("#producto");
var $imagen = $('#imagen');
var $tituloMochila = $('#titulo-mochila');
var $tituloReverse = $('#titulo-reverse');
var $descripcion = $('#description');
var $marca = $('#marca');
var $modelo = $('#modelo');
var $mochilasContainer = $('#mochilasContainer');

$(document).ready(function () {
    var mydata = JSON.parse(data);
    console.log(mydata[0]);
    console.log('ready2');
    // for (const key in mochilas) {
    //     let count = 0;
    //     key = `backpack_${count += 1}`
    //     console.log(`hay ${coun} mochilas`);
    // }
});