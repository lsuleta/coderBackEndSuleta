import express from "express";

const app = express();

app.get("/bienvenida", (req, res) => {
    res.send('<h1 style="color:blue">Bienvenido</h1>');
});

app.get("/usuario", (req, res) => {
    res.send({
        nombre: "nombre",
        apellido: "apellido",
        edad: 23,
        correo: "algo@gmail.com",
    });
});
const port = 8080
app.listen(8080, () => console.log(`listen ${port}`));
