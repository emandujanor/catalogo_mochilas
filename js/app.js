
const $ = "";
( function ($){
  const $producto = $('#producto');
  const $imagen= $('#imagen');
  const $tituloMochila = $('#titulo-mochila');
  const $tituloReverse = $('#titulo-reverse');
  const $descripcion = $('#description');
  const $marca = $('#marca');
  const $modelo = $('#modelo');
  const $mochilasContainer = $('#mochilasContainer');


  $(document).ready(() => {
      const mydata = JSON.parse(data);
      console.log(mydata[0]);
      console.log('ready2');
      // for (const key in mochilas) {
      //     let count = 0;
      //     key = `backpack_${count += 1}`
      //     console.log(`hay ${coun} mochilas`);
      // }
  });
})(jQuery);
