// Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
// const info = {
//     contenidoStr: (contenido del archivo leído en formato string),
//     contenidoObj: (contenido del archivo leído en formato objeto),
//     size: (tamaño en bytes del archivo)
// }

const fs = require("fs");

const infoJson = async () => {
  await fs.promises.readFile("./package.json", "utf-8", async (err, data) => {
    if (err) throw new Error("Error al leer");

    const contenidoStr = data;
    const contenidoObj = JSON.parse(data);
    const size = Buffer.byteLength(data, "utf-8");

    const info = {
      contenidoStr,
      contenidoObj,
      size,
    };

    console.log(info);
    const infoJSON = JSON.stringify(info);
    await fs.promises.writeFile("info.json", infoJSON, (err) => {
      if (err) throw new Error("Error al escribir");
    });
  });
};

infoJson();