// Functions

import { random } from 'mathjs'



export class JanMath {
  randomArray() {
    let randomArray = Array(300).fill(0).map(() => random())
    console.log(randomArray)
  }

}

export default JanMath;