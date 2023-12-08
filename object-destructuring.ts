// Functions

export class Des {
  userObject = {
    name: "Jayleen",
    lastname: "Joyleene",
  }

  destructureTheObject() {
    const { name, lastname } = this.userObject
    console.log(`My name is ${name}, my lastname is ${lastname}`);
  }

  renameDesVars() {
    const { name: firstName, lastname } = this.userObject
    console.log(`My name is ${firstName}`);
  }

  printNames({ name, lastname }: { name: string, lastname: string }) {
    console.log(`My name is ${name}, my lastname is ${lastname}`);
  }

  printNamesRename({ name, lastname: sirname }: { name: string, lastname: string }) {
    console.log(`My name is ${name}, my sirname is ${sirname}`);
  }

  printNamesDefault({ uname, username = 'janac' }: { uname: string, username?: string }) {
    console.log(`My name is ${uname}, my username is ${username}`);
  }

}

export default Des;