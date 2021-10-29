const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res)=> {
    return res.send('Hola');
});
app.get("/users", (req, res)=> {
    return res.send('Users');
});

app.listen(PORT, ()=> console.log(`Escuchando en el puerto: ${PORT}`));
