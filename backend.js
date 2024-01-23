const express = require("express");

const app = express();

app.get("/admin/cnlund/secreto/favicon", (req, res) => {
    res.sendFile("favicon.ico", {
        root: __dirname
    });
})

app.get("/", (req, res) => {
    res.sendFile("index/main.html", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/main/css", (req, res) => {
    res.sendFile("index/index.css", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/main/img/fotomia", (req, res) => {
    res.sendFile("index/fotomia.png", {
        root: __dirname
    });
})

app.get("/blogs", (req, res) => {
    res.sendFile("blog/blog.html", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/blog/css", (req, res) => {
    res.sendFile("blog/blog.css", {
        root: __dirname
    });
})

app.get("/creaciones", (req, res) => {
    res.sendFile("creaciones/creaciones.html", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/creaciones/css", (req, res) => {
    res.sendFile("creaciones/creaciones.css", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/creaciones/js", (req, res) => {
    res.sendFile("creaciones/creaciones.js", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/creaciones/datajs", (req, res) => {
    res.sendFile("creaciones/data.js", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/creaciones/img/randlol", (req, res) => {
    res.sendFile("creaciones/portada-randlol.jpg", {
        root: __dirname
    });
})

app.get("/creaciones/randlol", (req, res) => {
    res.sendFile("randlol/randlol.html", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/creaciones/randlol/css", (req, res) => {
    res.sendFile("randlol/randlol.css", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/creaciones/randlol/js", (req, res) => {
    res.sendFile("randlol/randlol.js", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/creaciones/randlol/img/asesino", (req, res) => {
    res.sendFile("randlol/assassin.png", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/creaciones/randlol/img/peleador", (req, res) => {
    res.sendFile("randlol/fighter.png", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/creaciones/randlol/img/mago", (req, res) => {
    res.sendFile("randlol/mage.png", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/creaciones/randlol/img/tirador", (req, res) => {
    res.sendFile("randlol/marksman.png", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/creaciones/randlol/img/soporte", (req, res) => {
    res.sendFile("randlol/support.png", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/creaciones/randlol/img/tanque", (req, res) => {
    res.sendFile("randlol/tank.png", {
        root: __dirname
    });
})

app.get("/admin/cnlund/secreto/creaciones/randlol/img/todas", (req, res) => {
    res.sendFile("randlol/emblem-challenger.png", {
        root: __dirname
    });
})

app.listen(3000, () => {
    console.log("ejecutando el backend")
})