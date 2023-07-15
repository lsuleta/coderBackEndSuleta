class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return `Nombre: ${this.nombre} Apellido: ${this.apellido}`;
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }

    countMascota(){
        return this.mascotas.length;
    }

    addBook(nombreLibro, nombreAutor){
        this.libros.push({libro: nombreLibro, autor: nombreAutor});
    }

    getBookNames(){
        return this.libros.map((e) => e.libro)
    }
}

let u1 = new Usuario("ana", "clotilde", [{libro: "psicoanalista", autor: "j.katsenbach"}, {libro: "it", autor: "s.king"}], ["linfi"]);

// let u2 = new Usuario("lucas", "adrian", [{libro:"mansion decagonal", autor:"y.ayatsuji"}, {libro:"jujutsu kaisen", autor:"g.akutami"}], ["moni", "cumbi"]);

console.log(u1.getFullName());
console.log("mascotas: ", u1.countMascota());
u1.addMascota("otto");
console.log("mascotas: ", u1.countMascota());
console.log("libros: ", u1.getBookNames());
u1.addBook("alquimista", "p.cohelo");
console.log("libros: ", u1.getBookNames());
