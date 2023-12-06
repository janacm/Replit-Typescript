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

  printNames({name, lastname}){
    console.log(`My name is ${name}, my lastname is ${lastname}`);
  }
  
  printNamesRename({name, lastname: sirname}){
    console.log(`My name is ${name}, my sirname is ${sirname}`);
  }
  
  printNamesDefault({name, lastname, username = 'janac'}){
    console.log(`My name is ${name}, my username is ${username}`);
  }

}

export default Des;