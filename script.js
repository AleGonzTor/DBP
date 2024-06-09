function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section-content').forEach(function(section) {
        section.style.display = 'none';
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).style.display = 'block';
}

function toggleGallery() {
    const gallery = document.getElementById('gallery');
    if (gallery.style.display === 'none' || gallery.style.display === '') {
        gallery.style.display = 'block';
    } else {
        gallery.style.display = 'none';
    }
}

function loadTextFile(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                console.error('Error al cargar el archivo: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

function showProjectDetail(title, image, description, code) {
    // Configurar el contenido del detalle del proyecto
    document.getElementById('project-title').textContent = title;
    document.getElementById('project-image').src = image;
    document.getElementById('project-description').textContent = description;

    // Mostrar la sección del detalle del proyecto
    showSection('project-detail');

    // Cargar el contenido del archivo de texto y mostrarlo
    loadTextFile(code, function(data) {
        // Insertar el contenido del archivo en el elemento con id 'codigo-contenedor'
        document.getElementById('codigo-contenedor').textContent = data;
    });
}


// Mostrar la sección "Sobre Mí" por defecto
document.addEventListener('DOMContentLoaded', function () {
    showSection('about');
});
