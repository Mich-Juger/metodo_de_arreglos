const arregloTareas = [];

let id = 0;
let input_tarea = document.querySelector('#tarea');

document.querySelector('#agregar').addEventListener('click', () => {
    if (input_tarea.value != '') {  /* validación distinta a vacío*/
        let texto_tarea = input_tarea.value;
        let completado = false;
        let objetoTarea = { // Definciión del objeto
                            'id': ++id,
                            'descripcion': texto_tarea,
                            'completado' : false,
        };
 
        arregloTareas.push(objetoTarea);
        actualizarVista(arregloTareas);
    }   else {
        alert('Por favor ingresar una tarea');
        input_tarea.focus();
    }
});  

// Funcion dibujar tabla 
function actualizar_listado_tareas(arregloTareas) {
    let html = '';
    for (tarea of arregloTareas) {
        html += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.descripcion}</td>
                    <td>
        `;             
        // Cambiar estado completado/No completado    
        if (tarea.completado == true) {
           html +=  `<input type="checkbox" id="estado_tarea_${tarea.id}" name= "estado_tarea" value= "${tarea.id}" onclick="cambiarEstado(${tarea.id});" checked>`; 

        } else {
            html +=  `<input type="checkbox" id="estado_tarea_${tarea.id}" name= "estado_tarea" value= "${tarea.id}" onclick="cambiarEstado(${tarea.id});">`; 
        }
        // Eliminar Tarea usar splace o slice
        html +=  `</td>
                    <td>
                        <a href= "#" onclick="eliminarTarea(${tarea.id})">Eliminar</a>
                    </td>
        `;     
    }
    document.querySelector('#actualizar_listado_tareas').innerHTML = html;
}

// Funcion contador de tareas
function actualizar_contador_tareas(arregloTareas) {
    let html = '';
    let tareasCompletada = arregloTareas.filter(tarea => tarea.completado); // Definición filter tareas Realizadas
    let tareasPendientes = arregloTareas.filter(tarea => tarea.completado == false);
    html += `<p> Total: ${arregloTareas.length} </p>`; // Contador tareas totales
    html += `<p> Realizadas : ${tareasCompletada.length} </p>`; // Contador de tareas Realizadas
    html += `<p> Pendientes : ${tareasPendientes.length} </p>`; // Contador de tareas Pendientes
    
    document.querySelector('#contador_tareas').innerHTML = html;
}

// Función unifica funciones
function actualizarVista(arregloTareas){
    actualizar_listado_tareas(arregloTareas);
    actualizar_contador_tareas(arregloTareas);
}

// Función Cambiar estado
function cambiarEstado(id){
    const index = arregloTareas.findIndex((elemento) => elemento.id == id);
    if (arregloTareas[index].completado) {
        arregloTareas[index].completado = false;
    } else {
        arregloTareas[index].completado = true;
    }
    // Actualizar la información en el HTML
    actualizarVista(arregloTareas);
}

// Función Eliminar
function eliminarTarea(id){
    const index = arregloTareas.findIndex((elemento) => elemento.id == id);
    arregloTareas.splice(index, 1);

    // Actualizar la información en el HTML
    actualizarVista(arregloTareas);
}

// -----------------------------------------------------------

// Tarea Inicial Uno
let tareaInicialUno = { 'id': ++id,
                        'descripcion': 'Hacer mercado',
                        'completado' : true,
};

arregloTareas.push(tareaInicialUno);
actualizarVista(arregloTareas);

// Tarea Inicial Dos
let tareaInicialDos = { 'id': ++id,
                        'descripcion': 'Estudiar para la prueba',
                        'completado' : false,
};

arregloTareas.push(tareaInicialDos);
actualizarVista(arregloTareas);

// Tarea Inicial Tres
let tareaInicialTres = { 'id': ++id,
                        'descripcion': 'Sacar a pasear a Tobby',
                        'completado' : false,
};

arregloTareas.push(tareaInicialTres);
actualizarVista(arregloTareas);









