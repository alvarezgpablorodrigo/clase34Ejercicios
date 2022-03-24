// 1) Programa una función que cuente el número de caracteres de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá 10.

function Count(cadena){
    
    
    console.log("La cadena tiene " + cadena.length + " caracteres");
}


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres 
// indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function cutString(stringg,caracteres){

    console.log(stringg.slice(0,caracteres));

}



// 3) Programa una función que dada una String te devuelva un Array de textos separados por 
// cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function Separate(text)
{
    
    const myArray = text.split(" ");
    console.log(myArray);
}


// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 
// 3) devolverá Hola Mundo Hola Mundo Hola Mundo.



function Repeat(cadena, repeticiones) {
    let repetirString = "";
    while (repeticiones > 0) {
      repetirString += cadena;
      repeticiones--;
      
    }
    console.log(repetirString);
    return repetirString
    
  }

 

//llamando a metodos
Count("Hola Mundo");
cutString("Hola",5);
Separate("Hola que tal",'');
Repeat("Hola Mundo ", 3);
