function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };
  viajar('Brasil');
  viajar('Argentina');

  //manejar 
  function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( "puede manejar" );
    } 
    console.log( "no puede manejar" );
  }
  
  puedeManejar(19);

  