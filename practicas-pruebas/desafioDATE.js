// 1. Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual. Posteriormente leer el archivo y mostrar el contenido por consola.
// 2. Utilizar el módulo fs y sus operaciones de tipo callback.

const fs = require("fs");
const date = new Date();

fs.writeFile("./test.txt", date.toString(), (err) => {
  if (err) return console.error("error escribiendo");

  fs.readFile("./test.txt", (err, res) => {
    if (err) return console.error("error leyendo");
    console.log(res.toString());
  });
});
