class Alumno{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    getAlumno(){
        console.log("Nombre: ", this.nombre, " Edad: ", this.edad);
    }
}

let ana = new Alumno("Ana", 21);
console.log(ana);

class Contador{
    static cuentaGlobal = 0

    constructor(nombre){
        this.nombre = nombre
        this.cuentaIndividual = 0
    }

    obtenerResponsable(){
        return this.nombre
    }

    obtenerCuentaIndividual(){
        return this.cuentaIndividual
    }

    obtenerCuentaGlobal(){
        return Contador.cuentaGlobal
    }

    contar(){
        this.cuentaIndividual++
        Contador.cuentaGlobal++
    }
}

const c1 = new Contador("Lucas")
console.log(c1.obtenerResponsable)
console.log(c1.obtenerCuentaIndividual)
console.log(c1.obtenerCuentaGlobal)
c1.contar()

