document.addEventListener("DOMContentLoaded", function () {
    fetch("https://ddragon.leagueoflegends.com/api/versions.json")
        .then(response => response.json())
        .then(data => {
            version = data[0]
            fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/es_MX/champion.json`)
                .then(response => response.json())
                .then(data => {
                    let listachamps = {};
                    let blurbchamps = {};
                    let listaassasin = {};
                    let listafighter = {};
                    let listamage = {};
                    let listamarksman = {};
                    let listasupport = {};
                    let listatank = {};
                    for (let key in data.data) {
                        listachamps[key] = data.data[key].tags;
                        blurbchamps[key] = data.data[key].blurb;
                        for (let atributo in data.data[key].tags) {
                            if (data.data[key].tags[atributo] == "Assassin") {
                                listaassasin[key] = data.data[key].tags
                            }
                            if (data.data[key].tags[atributo] == "Fighter") {
                                listafighter[key] = data.data[key].tags
                            }
                            if (data.data[key].tags[atributo] == "Mage") {
                                listamage[key] = data.data[key].tags
                            }
                            if (data.data[key].tags[atributo] == "Marksman") {
                                listamarksman[key] = data.data[key].tags
                            }
                            if (data.data[key].tags[atributo] == "Support") {
                                listasupport[key] = data.data[key].tags
                            }
                            if (data.data[key].tags[atributo] == "Tank") {
                                listatank[key] = data.data[key].tags
                            }
                        }
                    }
                    let allchamps = Object.keys(listachamps)
                    let assassinchamps = Object.keys(listaassasin)
                    let fighterchamps = Object.keys(listafighter)
                    let magechamps = Object.keys(listamage)
                    let marksmanchamps = Object.keys(listamarksman)
                    let supportchamps = Object.keys(listasupport)
                    let tankchamps = Object.keys(listatank)
                    function randomall() {
                        let champrandom = Math.floor(Math.random() * allchamps.length)
                        const image = document.getElementById("champimg");
                        const texto = document.getElementById("textchamp");
                        const datos = document.getElementById("datoschamps")
                        image.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${allchamps[champrandom]}_0.jpg`;
                        image.style.display = "flex";
                        texto.innerHTML = allchamps[champrandom]
                        datos.innerHTML = listachamps[allchamps[champrandom]] + "</br>" + blurbchamps[allchamps[champrandom]]
                        datos.style.backgroundColor = "#010A13"
                        datos.style.padding = "5%"
                    }
                    function randomassasin() {
                        let champrandom = Math.floor(Math.random() * assassinchamps.length)
                        const image = document.getElementById("champimg");
                        const texto = document.getElementById("textchamp");
                        const datos = document.getElementById("datoschamps")
                        image.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${assassinchamps[champrandom]}_0.jpg`;
                        image.style.display = "flex";
                        texto.innerHTML = assassinchamps[champrandom]
                        datos.innerHTML = listachamps[assassinchamps[champrandom]] + "</br>" + blurbchamps[assassinchamps[champrandom]]
                        datos.style.backgroundColor = "#010A13"
                        datos.style.padding = "5%"
                    }
                    function randomfighter() {
                        let champrandom = Math.floor(Math.random() * fighterchamps.length)
                        const image = document.getElementById("champimg");
                        const texto = document.getElementById("textchamp");
                        const datos = document.getElementById("datoschamps")
                        image.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${fighterchamps[champrandom]}_0.jpg`;
                        image.style.display = "flex";
                        texto.innerHTML = fighterchamps[champrandom]
                        datos.innerHTML = listachamps[fighterchamps[champrandom]] + "</br>" + blurbchamps[fighterchamps[champrandom]]
                        datos.style.backgroundColor = "#010A13"
                        datos.style.padding = "5%"
                    }
                    function randommage() {
                        let champrandom = Math.floor(Math.random() * magechamps.length)
                        const image = document.getElementById("champimg");
                        const texto = document.getElementById("textchamp");
                        const datos = document.getElementById("datoschamps")
                        image.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${magechamps[champrandom]}_0.jpg`;
                        image.style.display = "flex";
                        texto.innerHTML = magechamps[champrandom]
                        datos.innerHTML = listachamps[magechamps[champrandom]] + "</br>" + blurbchamps[magechamps[champrandom]]
                        datos.style.backgroundColor = "#010A13"
                        datos.style.padding = "5%"
                    }
                    function randommarksman() {
                        let champrandom = Math.floor(Math.random() * marksmanchamps.length)
                        const image = document.getElementById("champimg");
                        const texto = document.getElementById("textchamp");
                        const datos = document.getElementById("datoschamps")
                        image.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${marksmanchamps[champrandom]}_0.jpg`;
                        image.style.display = "flex";
                        texto.innerHTML = marksmanchamps[champrandom]
                        datos.innerHTML = listachamps[marksmanchamps[champrandom]] + "</br>" + blurbchamps[marksmanchamps[champrandom]]
                        datos.style.backgroundColor = "#010A13"
                        datos.style.padding = "5%"
                    }
                    function randomsupport() {
                        let champrandom = Math.floor(Math.random() * supportchamps.length)
                        const image = document.getElementById("champimg");
                        const texto = document.getElementById("textchamp");
                        const datos = document.getElementById("datoschamps")
                        image.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${supportchamps[champrandom]}_0.jpg`;
                        image.style.display = "flex";
                        texto.innerHTML = supportchamps[champrandom]
                        datos.innerHTML = listachamps[supportchamps[champrandom]] + "</br>" + blurbchamps[supportchamps[champrandom]]
                        datos.style.backgroundColor = "#010A13"
                        datos.style.padding = "5%"
                    }
                    function randomtank() {
                        let champrandom = Math.floor(Math.random() * tankchamps.length)
                        const image = document.getElementById("champimg");
                        const texto = document.getElementById("textchamp");
                        const datos = document.getElementById("datoschamps")
                        image.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${tankchamps[champrandom]}_0.jpg`;
                        image.style.display = "flex";
                        texto.innerHTML = tankchamps[champrandom]
                        datos.innerHTML = listachamps[tankchamps[champrandom]] + "</br>" + blurbchamps[tankchamps[champrandom]]
                        datos.style.backgroundColor = "#010A13"
                        datos.style.padding = "5%"
                    }
                    const ball = document.getElementById("all");
                    ball.addEventListener("click", randomall);
                    const basesino = document.getElementById("asesino");
                    basesino.addEventListener("click", randomassasin)
                    const bpeleador = document.getElementById("peleador")
                    bpeleador.addEventListener("click", randomfighter)
                    const bmago = document.getElementById("mago")
                    bmago.addEventListener("click", randommage)
                    const btirador = document.getElementById("tirador")
                    btirador.addEventListener("click", randommarksman)
                    const bsoporte = document.getElementById("soporte")
                    bsoporte.addEventListener("click", randomsupport)
                    const btanque = document.getElementById("tanque")
                    btanque.addEventListener("click", randomtank)
                })
        })
});