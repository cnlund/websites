const express = require("express");

const app = express();

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

//app.listen(443)