export class PVShort {

  /** 
  If you have a bunch of variables, and you just want to assign them to an object with the same names, 
  then you don't have to specify :*/
  propertyValueShorthand() {
    const name = "Jay"
    const lastname = "Shortinson"

    const newPerson = {
      name,
      lastname,
    }
    console.log(`My name is ${newPerson.name}, my lastname is ${newPerson.lastname}`)
  }

}

export default PVShort;