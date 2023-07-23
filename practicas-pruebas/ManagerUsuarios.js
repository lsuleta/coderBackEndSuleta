const fs = require("fs").promises;

class UserManager {
  constructor() {
    this.users = [];
  }

  createUser(user) {
    const { name, lastname, age, course } = user;

    const newUser = {
      name,
      lastname,
      age,
      course,
    };

    if (newUser != null) {
      this.users.push(newUser);
    } else {
      throw new Error("User null");
    }

    const userString = JSON.stringify(newUser);

    const createFile = async () => {
      try {
        await fs.promises.writeFile("Usuarios.json", userString);
        console.log("Usuario creado y archivo Usuarios.json actualizado.");
      } catch (err) {
        throw new Error("Can't create or write file");
      }
    };

    createFile();
  }

  async consultUsers() {
    try {
      let contenido = await fs.promises.readFile("Usuarios.json", "utf-8");
      console.log(contenido);
      const userObj = JSON.parse(contenido);
      return userObj;
    } catch (err) {
      throw new Error("Can't read file");
    }
  }
}

const um = new UserManager()

const newUser = {
    name: "lucas",
    lastname: "suleta",
    age: 23,
    course: "backend",
}

const newUser2 = {
    name: "ana",
    lastname: "rintoul",
    age: 21,
    course: "adobe ilustrator"
}

um.createUser(newUser)
um.consultUsers()

