import ArrowFunctions from './arrow-functions'
import BasicSyntax from './basic-syntax'
import Des from './object-destructuring'
import PVShort from './prop-value-shorthand'
import JanMath from './math'
import {
    longestCommonSubsequence,
    printMatrix,
} from './longest-common-subsequence'

const userObject = {
    name: 'Jay',
    lastname: 'Jan',
}

// const syntax = new ArrowFunctions()

// syntax.myFunc()
// syntax.myArrowFunc()
// syntax.shorty()
// syntax.anonFuncRegular()
// syntax.anonArrowFunc()
// syntax.arrowFuncOneArg("One arg don't need brackets!")
// syntax.makeObjects()

// const des = new Des()
// des.destructureTheObject()
// des.renameDesVars()
// des.printNames(userObject)
// des.printNamesRename(userObject)
// des.printNamesDefault(userObject)

// const pvShort = new PVShort()
// pvShort.propertyValueShorthand()

// const basic = new BasicSyntax()
// console.log(basic.myPublicVar)
// basic.myProtectedVar // err
// console.log(basic.myConst)
// console.log(basic.myArray)
// console.log(basic.person)
// console.log(basic.add(1, 2))
// basic.arrayOps()

// Math
// const math = new JanMath()
// math.randomArray()

longestCommonSubsequence('Hello', 'World')
