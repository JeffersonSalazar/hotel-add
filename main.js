// Libreria de 
AOS.init();

// Variable que alamcena el valor del input que solicita los dias a hospedarse 
let dias_hosp = document.querySelector('#dias-hosp');

// Variable que almacena el valor del input select contenedor de las opciones
let habitaciones = document.querySelector('#habitaciones');

// Variable que almacena al boton del formulario 
let btn_send = document.querySelector('#btn-send');

/*  
    Variable que almacena el valor de la tag P
    quien sera la ecargada de mostrar por pantalla 
    el resultado de la funcion despues de hacer click
*/
let info_show = document.querySelector('#info-show');

// Evento click para cunado se presiona el boton
btn_send.addEventListener('click', function(e) {
    e.preventDefault();

    /*
        Condicional que evalua la seleccion de la ciudad de hospedaje
        para asi mostrar los diferentes valores de cada uno
    */
    let coste_hotel;

    if (habitaciones.value === 'sencilla') {
        coste_hotel = 40.000;
    }

    else if (habitaciones.value === 'vip') {
        coste_hotel = 80.000;
    } 
    else if (habitaciones.value === 'precidencial') {
        coste_hotel = 120.000;
    }

    // Variable que almacena el costo total de la habitacion segun los dias ingresados por el usuario
    let coste_total = dias_hosp.value * coste_hotel;

    // Variable que almacena el descuento que tiene el valor total
    let descuento_dias = coste_total * 10.000 / 100;

    /*
        Condicional que muestra la informacion luego de que el ususario
        ingresa los valores requeridos en el campo del formulario
    */
    if ( dias_hosp.value === "" || isNaN(dias_hosp.value) || dias_hosp.value <0 ) {
        info_show.classList.add('color-error');
        info_show.classList.remove('color-descuento');
        info_show.classList.remove('color-total');
        return info_show.innerHTML = `El primer campo es incorrecto`;
    }

    else if ( habitaciones.value !== 'sencilla' && habitaciones.value !== 'vip' && habitaciones.value !== 'precidencial') {
        info_show.classList.add('color-error');
        info_show.classList.remove('color-descuento');
        info_show.classList.remove('color-total');
        return info_show.innerHTML = `Seleccione una habitacion`;
    }
    

    /*
        Condicional que muestra si el ususario tiene descuento de habitacion
        segun los datos ingresados 
    */ 
    if (dias_hosp.value >= 6) {
        info_show.classList.add('color-descuento');
        info_show.classList.remove('color-total');
        info_show.classList.remove('color-error');

        return info_show.innerHTML = `
            ${dias_hosp.value} dias habitacion ${habitaciones.value} 
            antes $${coste_total}.000</br>
            hoy pagas $${coste_total - descuento_dias}.000</br>
            <h5>*aplica 10% de descuento</h5>
        `;
    } else {
        info_show.classList.add('color-total');  
        info_show.classList.remove('color-descuento');
        info_show.classList.remove('color-error');

        return info_show.innerHTML = `
            ${dias_hosp.value} dias habitacion ${habitaciones.value} 
            $${coste_total}.000.</br>
            <h5>*no aplica descuento</h5>
        `;
    }
});




