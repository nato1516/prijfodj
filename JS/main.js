// JAVASCRIPT DE LA AGENDA
document.getElementById('button__generalidades').onclick = function () {
    event.preventDefault()
    Swal.fire({
        showCloseButton: true, // Muestra la X para cerrar
        html: '<h3>Fechas:</h3><h4 class="fw-normal">Miércoles 13 de Noviembre</h4><h4 class="fw-normal">Jueves 14 de Noviembre</h4><br><br><h3>Lugar:</h3><h4 class="fw-normal">Gimnasio del INA CPESS Los Santos, Abejonal de León Cortes</h4><br><br><h3>Participantes:</h3><h4 class="fw-normal">200 Participantes, cupo limitado.</h4><h4 class="fw-normal">Personas agricultoras de café y representantes del sector productivo de todo el país</h4>',
        showConfirmButton: false // Oculta el botón de "OK"
    });
};
document.getElementById('Nov13').onclick = function () {
    event.preventDefault()
    Swal.fire({
        html: '<div class="text-start"><h3>Charlas</h3><br><h4 class="fw-normal">Charla 1: Acciones NAMA Café en Costa Rica.</h4><h4 class="fw-normal">Charla 2: Manejo de la salud del suelo en Café.</h4><h4 class="fw-normal">Charla 3: Combate de la antracnosis en el cultivo de café-MSc.</h4><h4 class="fw-normal">Charla 4: Nutrición, bioreguladores y antiestres en el cultivo de café.</h4><h4 class="fw-normal">Charla 5: Acciones climáticas para el manejo adaptativo del cultivo de café.</h4><h4 class="fw-normal">Charla 6: Experiencias del posicionamiento del café a nivel internacional.</h4><h4 class="fw-normal">Charla 7: Programa de financiamiento al sector cafetalero.</h4></div>',
        showCloseButton: true, // Muestra la X para cerrar
        showConfirmButton: false // Oculta el botón de "OK"
    });
};
document.getElementById('Nov14').onclick = function () {
    event.preventDefault()
    Swal.fire({
        html: '<div class="text-start"><h3>Día de Campo</h3><h4 class="fw-normal">4 estaciones:</h4><br><h4 class="fw-normal">1. Manejo y Uso de Bioinsumos en la producción de café: experiencias y resultados.</h4><h4 class="fw-normal">2. Uso de drones en el cultivo del café.</h4><h4 class="fw-normal">3. Uso de Fertirriego y Mediciones en el Cultivo del café.</h4><h4 class="fw-normal">4. Material genético Híbrido de café.</h4></div>',
        showCloseButton: true, // Muestra la X para cerrar
        showConfirmButton: false // Oculta el botón de "OK"
    });
};
// JAVASCRIPT DE LAS MÉTRICAS
let avisador = false; // Variable para controlar la animación
window.addEventListener('scroll', function () {
    // Necesito una constante que guarde el círculo que va a rellenar o lo que va a cambiar
    const circuloRelleno = document.querySelector('.cfront');
    const circuloRelleno2 = document.querySelector('.cfront2');
    const circuloRelleno3 = document.querySelector('.cfront3');
    // Necesito una constante que guarde el texto que va a aumentar según el porcentaje
    const porcentajeBase = document.getElementById('porcentaje');
    const porcentajeBase2 = document.getElementById('porcentaje2');
    const porcentajeBase3 = document.getElementById('porcentaje3');
    // Obtener la posición de la sección en la pantalla
    const section = document.querySelector('.alcance-section'); // UBICAR EN QUE SECCION SE ACTIVE
    const sectionPosition = section.getBoundingClientRect().top; // Posición superior de la sección
    const windowHeight = window.innerHeight; // Altura de la ventana del navegador
    // Verificar si la sección está en la vista y si la animación no se ha activado antes
    if (sectionPosition < windowHeight && !avisador) {
        // Ahora, realiza los cambios
        circuloRelleno.style.strokeDasharray = "10 100";
        circuloRelleno2.style.strokeDasharray = "20 100";
        circuloRelleno3.style.strokeDasharray = "35 100";
        // Inicializar el porcentaje cambiado
        let porcentajeCambiado = 0;
        let porcentajeCambiado2 = 0;
        let porcentajeCambiado3 = 0;
        // Usar setInterval para la animación
        const interval = setInterval(() => {
            if (porcentajeCambiado < 10) {
                porcentajeCambiado++;
                porcentajeBase.textContent = porcentajeCambiado + "%";
            }
            if (porcentajeCambiado2 < 30) {
                porcentajeCambiado2++;
                porcentajeBase2.textContent = porcentajeCambiado2 + "%";
            }
            if (porcentajeCambiado3 < 60) {
                porcentajeCambiado3++;
                porcentajeBase3.textContent = porcentajeCambiado3 + "%";
            }
            // Detener el intervalo si todas las animaciones han terminado
            if (porcentajeCambiado >= 10 && porcentajeCambiado2 >= 30 && porcentajeCambiado3 >= 60) {
                clearInterval(interval);
                avisador = true; // Marcar que la animación ya fue hecha
            }
        }, 45); // Tiempo de intervalo para la animación
    }
});
//JAVASCRIPT PARA LOS STANDS
function showHide(button) {
    const cardBody = button.closest('.card-body');
    const showButton = cardBody.querySelector('.plus');
    const hideButton = cardBody.querySelector('.hide');
    const details = cardBody.querySelector('.details');
    // Si se hizo clic en el botón de mostrar ("+")
    if (button.classList.contains('plus')) {
        // Mostrar los detalles
        details.classList.add('show');
        // Cambiar la visibilidad de los botones
        showButton.style.display = 'none';
        hideButton.style.display = 'block';
    }
    // Si se hizo clic en el botón de ocultar ("-")
    else if (button.classList.contains('hide')) {
        // Ocultar los detalles
        details.classList.remove('show');
        // Cambiar la visibilidad de los botones
        showButton.style.display = 'block';
        hideButton.style.display = 'none';
    }
    // Ocultar todos los demás detalles en otras tarjetas
    const allCardBodies = document.querySelectorAll('.card-body');
    allCardBodies.forEach((card) => {
        if (card !== cardBody) {
            const otherShowButton = card.querySelector('.plus');
            const otherHideButton = card.querySelector('.hide');
            const otherDetails = card.querySelector('.details');
            // Si hay detalles visibles en otras tarjetas, ocultarlos
            if (otherDetails.classList.contains('show')) {
                otherDetails.classList.remove('show');
                otherShowButton.style.display = 'block';
                otherHideButton.style.display = 'none';
            }
        }
    });
}
