alert("¡HOLA! Responde las preguntas de acuerdo a tu conocimiento en literatura y veamos cuántos puntos alcanzas. ¡Comencemos! 😁")

// Constantes establecidas para solicitar nombre

const nombre= prompt("Ingresa tu nombre: 😉");
const resultadoNombre = nombre.toUpperCase()

// Variable establecida para sumatoria de puntaje

let sumaTotal = 0;

// Funcion que recibe el indice en el que estamos de la iteracion, la pregunta, la respuesta correcta, 
// Mensaje correcto y un mensaje incorrecto, mas la url de la imagen correcta y la url incorrecta por defecto

const hacerPregunta = function (indice, pregunta, opciones,  respuestaCorrecta, mensajeCorrecto, mensajeIncorrecto, urlCOrrecta) {
    
    const urlIncorrecta = "./img/sigueintentando.png";
    const respuesta = parseFloat(prompt(pregunta + " " + opciones));
    
    if (isNaN(respuesta)){
        alert("Hey ¡El resultado ingresado NO es un número!");
    } 

    let imagen, mensaje, puntos
    
    if (respuesta == respuestaCorrecta) {
        mensaje = mensajeCorrecto
        puntos = 5
        imagen = '<div class="imagenes"><img src="' + urlCOrrecta + '"></div>'
    } else {
        mensaje = mensajeIncorrecto
        puntos = 0
        imagen = '<div class="imagenes"><img src="' + urlIncorrecta + '"></div>'
    }
   
    console.log(indice + 1, pregunta)
    console.log("---Tu respuesta fue: " + respuesta)
    console.log("---La respuesta correcta es: "+ mensaje)
    document.write(imagen)

    return puntos
}

// Inicio del juego con un cliclo que se repite 5 veces

console.log("Hola "+ resultadoNombre + "!");

for (let i = 0; i < 5; i++) {
    if (i == 0) {
        sumaTotal += hacerPregunta(i, "¿El poema No te Salves fue escrito por el escritor Mario Benedetti o por Pablo Neruda?", "📜 Responda con 1 para BENEDETTI y 2 para NERUDA ✨", 1, "Sí, fue publicado en el año 1974 en el libro Poemas de Otros, de Mario Benedetti. Continua sumando puntos!", "No fue escrito por Neruda. Su autor fue Mario Benedetti. Sigue  Intentando!", "./img/benedetti.jpg" )
    }

    if ( i == 1) {
        sumaTotal += hacerPregunta(i, "¿Qué dibujo realizó el piloto del libro El Principito cuando era niño?", "📜 Responda con 1 para UN GORRO y 2 para UN ELEFANTE DENTRO DE UNA BOA ✨", 2, "Sí! Fue un Elefante dentro de una Boa. Buena interpretación! Continua sumando puntos!", "El dibujo realizado fue de una Elefante dentro de una Boa, sin embargo fue confundido por los adultos por un sombrero. Sigue Intentándolo!", "./img/elefante.jpg")
    }

    if ( i == 2) {
        sumaTotal += hacerPregunta(i, "¿Cuál es la nacionalidad de estritor Ernesto Sábato? ", "📜 Responda con 1 para ARGENTINA y 2 para ESPAÑOLA ✨", 1, "Sí! Su nacionalidad es Argentina, y es conocido por su libro El Túnel. Continua sumando puntos!", "No es Española. Su nacionalidad es Argentina, y es conocido por su libro El Tunel. Sigue Intentándolo!", "./img/sabato.jpg")
    }

    if ( i == 3) {
        sumaTotal += hacerPregunta(i, "¿La novela Cien Años de Soledad fue escrita por Jorge Luis Borges?", "📜 Responda con 1 para SÍ! y 2 para NO! ✨", 2, "Sí! Eta novela fue escrita por Gabriel García Márquez. Continua sumando puntos!", "No fue Luis Borges. Esta novela fue escrita por Gabriel García Márquez. Sigue Intentándolo!", "./img/cienaños.jpeg")
    }

    if ( i == 4) {
        sumaTotal += hacerPregunta(i, "Una de las novelas más reconocidas del escritor venezolano Rómulo Gallegos es...", "📜 Responda con 1 para DOÑA PETRA y 2 para DOÑA BÁRBARA ✨", 2, "Correcto! Es Doña Barbara. Continua sumando puntos!", "Doña Petra no existe, es Doña Bárbara. Sigue Intentándolo!", "./img/romulogallegos.jpg")
    }
}

// Final del juego

alert("¡Juego Finalizado, " + resultadoNombre + "! 🎉 Resultado Total = " + sumaTotal + " puntos  -Visualiza tus resultados en la terminal 😜-");

console.log("Puntos Obtenidos= " + sumaTotal + " ¡Fin de la jugada!");