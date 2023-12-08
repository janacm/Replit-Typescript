// Functions

export class ArrowFunctions {
  myFunc() {
    console.log("my func was here!");
  }

  myArrowFunc = () => {
    console.log("my arrow func was here!")
    return "my arrow func returned something!"
  }

  /*
  - Shorter syntax for arrow functions
  - Short form must be a single expression
  - It's automatically returned (implicit return)
  - Empty parenthesis are required if there are no args
  */
  shorty = () => console.log("shorty was here!");

  // You can add parentheses to short form for readability
  shortyB = () => (
    console.log("shorty was here, and we got brackets!!")
  );

  // If an arrow function only has one arg, parens are optional
  arrowFuncOneArg = (string: string) => console.log(string);

  // Arrow functions are most useful for anonymous functions
  anonFuncRegular() {
    const arr = ['hey', 'i', 'just', 'met', 'you'];
    const arrJoined = arr.map(function(string) {
      return string + "!"
    })
      .join(' ');
    console.log(arrJoined);
  }

  anonArrowFunc() {
    const arr = ['hey', 'i', 'just', 'met', 'you'];
    const arrJoined = arr
      .map(string => string + "!")
      .join(' ');
    console.log(arrJoined);
  }

  makeObjects() {
    // Need to have parens around object creation for arrow funcs, so JS knows it's not a long form arrow func
    const makeObject = () => ({ name: 'jaybu' })
    console.log(makeObject().name)
  }

}

export default ArrowFunctions;