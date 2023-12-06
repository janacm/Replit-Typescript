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
    this.myArray.forEach((num: number) => console.log(num))
  }


}

export default BasicSyntax;

const basic = new BasicSyntax()
basic.arrayOps()