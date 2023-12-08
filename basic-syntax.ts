// Functions


export class BasicSyntax {
  private myPrivateVar: string = "private";
  public myPublicVar: number = 10;
  protected myProtectedVar: boolean = true;
  // Variables
  myConst: string = "Hello"; // class members can't have `const`

  // Syntax error - "let" keyword is not allowed in classes. It's blocked scoped, so only allowed in functions.
  // let myVar: number = 5; 

  // Functions
  // We don't use "function" keyword
  add(a: number, b: number): number {
    return a + b;
  }

  // Arrays
  myArray: number[] = [1, 2, 3, 4, 5]
  arrayOps() {
    // For each
    this.myArray.forEach((num: number) => console.log(`num: ${num}`))


    const evens = this.myArray.filter(num => num % 2 === 0)
    console.log(evens)

    console.log('array maps!')
    const doubled = this.myArray.map(num => num * 2)
    doubled.forEach((num: number) => console.log(`num x2: ${num}`))

    // If your callback is not shorthand (uses braces) then you need to write return
    const tripled = this.myArray.map(num => {
      return num * 3
    })

    tripled.forEach((num: number) => console.log(`num x3: ${num}`))


  }


}

export default BasicSyntax;

const basic = new BasicSyntax()
basic.arrayOps()