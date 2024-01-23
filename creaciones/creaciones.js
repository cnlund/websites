const contenedor = document.getElementById("cuerpo");

proyectos.forEach(proyecto => {
    contenedor.innerHTML = `
    <div class="proyecto">
        <div>
            <img src="${proyecto.imagen}">
        </div>
        <div>
            <h3> ${proyecto.titulo} </h3>
            <p>${proyecto.fecha}</p>
            <p>${proyecto.descripcion}</p>
            <a href="${proyecto.url}">visitar el proyecto</a>
        </div>
    </div>
    `
})