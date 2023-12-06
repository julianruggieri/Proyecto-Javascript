

alert("¡Bienvenidx a la trivia de Caseros! \n ¡A jugar!")
let puntos = 0

opciones = parseInt(prompt("Elija una opción: \n 1-Jugar \n 2-Ver puntaje \n 3-Reiniciar puntaje \n 4-¡Pregunta Bonus! \n 5-Salir"))






function primer_pregunta(){
    let respuesta1=(prompt("¿Cuál es el club más grande del oeste? \n a-Estudiantes de Caseros \n b- Deportivo Morón \n c-Almagro"))

    if (respuesta1 == "a"){
        puntos ++
        alert("¡respuesta correcta!")
    }
    else if(respuesta1 == "b" || respuesta1 == "c"){
        alert("Lo siento, respuesta incorrecta :(")
    }
    else{
        alert("No es una opción correcta")
        primer_pregunta()
    }
    
}

function segunda_pregunta(){
    let respuesta2=(prompt("¿A qué partido pertenece Caseros? \n a-Morón \n b- La Matanza \n c-Tres de Febrero"))

    if (respuesta2 == "c"){
        puntos ++
        alert("¡respuesta correcta!")
    }
    else if(respuesta2 == "b" || respuesta2 == "a"){
        alert("Lo siento, respuesta incorrecta :(")
    }
    else{
        alert("No es una opción correcta")
        segunda_pregunta()
        
    }
}


function tercer_pregunta(){
    let respuesta3=(prompt("¿Cuál es el mejor barrio de Tres de Febrero? \n a-Santos lugares \n  b-Caseros \n c-Villa Lynch"))

    if (respuesta3 == "b"){
        puntos ++
        alert("¡respuesta correcta!")
    }
    else if(respuesta3 == "a" || respuesta3 == "c"){
        alert("Lo siento, respuesta incorrecta :(")
    }
    else{
        alert("No es una opción correcta")
        tercer_pregunta()
    }
    
}

function cuarta_pregunta(){
    let respuesta4=(prompt("¿Cuál es el apodo de Estudiantes de Caseros? \n a-El taladro \n  b-El matador \n c-El funebrero"))

    if (respuesta4 == "b"){
        puntos ++
        alert("¡respuesta correcta!")
    }
    else if(respuesta4 == "a" || respuesta4 == "c"){
        alert("Lo siento, respuesta incorrecta :(")
    }
    else{
        alert("No es una opción correcta")
        cuarta_pregunta()
    }
    
}
function quinta_pregunta(){
    let respuesta5=(prompt("¿Cuál es el nombre del túnel al lado de la cancha de Estudiantes? \n a-Néstor Kirchner \n  b-Mauricio Macri \n c-Javier Milei"))

    if (respuesta5 == "a"){
        puntos ++
        alert("¡respuesta correcta!")
    }
    else if(respuesta5 == "c" || respuesta5 == "b"){
        alert("Lo siento, respuesta incorrecta :(")
    }
    else{
        alert("No es una opción correcta")
        quinta_pregunta()
    }
    
}



function resetear(){
    pregunta_reset = prompt("¿Quieres reiniciar tus puntos? (si/no)")
    if (pregunta_reset == "si"){
        puntos = 0
        alert("Tus puntos fueron reiniciados exitosamente")
    }
    else if (pregunta_reset == "no"){
        alert("Tus puntos no han sido alterados")

    }
    else{
        alert("Por favor ingrese una opción válida")
        resetear()
    }
}

function pregunta_bonus(){
    alert("¡ATENCIÓN!, estás a punto de contestar la pregunta BONUS, si la contestas correctamente duplicarás tus puntos \n de lo contrario los perderás todos")
    let bonus_siono = prompt("¿Quieres contestar la pregunta? (si/no)")



    if(bonus_siono == "si" ){
        let pregunta_bonus = prompt("¿Cuántos habitantes tiene Caseros? \n a-64.659 habitantes \n b-95.785 habitantes \n c- 121.523" )
        if(pregunta_bonus == "b"){
            alert("FELICIDADES, contestaste correctamente y duplicarás tus puntos")
            puntos = puntos*2
        }
            else if(pregunta_bonus== "a"|| pregunta_bonus == "c"){
                alert("Lo siento, respuesta incorrecta :(. Perderás todos tus puntos")
                puntos = 0

            }
        }
        else if(bonus_siono == "no"){
        alert("De acuerdo, no responderás la pregunta")
    }else{
        alert("Ingrese una opción válida")
    }

    }
    
   



function jugar(){
    primer_pregunta() 
    segunda_pregunta()
    tercer_pregunta() 
    cuarta_pregunta()
    quinta_pregunta()

}

function ver_puntos(){
    alert("Tu puntaje actual es de " + puntos + " puntos")
}




while(opciones !== 5){
    switch(opciones){
       case 1:
            jugar()
            break

        case 2:
            ver_puntos()
            break

        case 3:
            resetear()
            break

        case 4:
            pregunta_bonus()
            break

        default:
        alert("opción no válida")
        break
}

opciones = parseInt(prompt("Elija una opción: \n 1-Jugar \n 2-Ver puntaje \n 3-Reiniciar puntaje \n 4-¡Pregunta Bonus! \n 5-Salir"))
    
    
}

alert("¡Gracias por jugar!")