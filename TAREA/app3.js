iniciarPrograma();
let tareas=[];
function mostrarMenu(){
    return parseInt(prompt(`
            "Opciones disponibles"
            1.-Agregar tarea
            2.-Ver todas las tareas
            3.-Marcar mi tarea como completada
            4.-Salir
            "Elige un opcion:"`
        ));
}
function verTareas(){
    if(tareas.length === 0){
        alert("No tenemos tareas asignadas");
    }else{
        let mensaje = "Lista de tareas \n";
        tareas.forEach((tarea,index) => {
            mensaje+=`${index+1}.-${tarea.nombre} [${tarea.completado?"Completada":"Pendiendte"}]\n`;
        });
        alert(mensaje);

    }
    
}
//funcion para agregar una tarea
function agregarTarea(){
    let nombre = prompt("Ingresa el nombre de la tarea: ");
    if(nombre){
        let tarea={
            nombre:nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada de porma correcta");
        mostrarMenu()
    }else{
        alert("El nombre de la tarea no puede quedar vacio.");
    }
    
}
function marcarTareaCompletada() {
    if (tareas.length === 0) {
        alert("No hay tareas para completar.");
    } else {
        let indice = parseInt(prompt("Ingresa el número de la tarea a completar:"));
        if (indice > 0 && indice <= tareas.length) {
            tareas[indice - 1].completada = true;
            alert(`La tarea "${tareas[indice - 1].nombre}" ha sido marcada como completada.`);
        } else {
            alert("Número de tarea inválido.");
        }
    }
}
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa. .");
                continuar = false;
                break;
            default:
                alert("Opcion no valida intenta nuevamente");
        }
    }
    alert("Programa finalizado")
}