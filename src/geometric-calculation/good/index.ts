import Calculate from './calculate'
import Circle from './circle'
import Square from './square'
import Rectangle from './rectangle'


let CircleOptions = { radio: 2 }
const circle = new Circle(CircleOptions)

let SquareOptions = { base: 2 }
const square = new Square(SquareOptions)

const RectangleOptions = { width: 2, height: 4 }
const rectangle = new Rectangle(RectangleOptions)

const calculate = new Calculate()
const CircleArea = calculate.area(circle)
const SquareArea = calculate.area(square)
const RectangleArea = calculate.area(rectangle)

const TABULATION = '  '
console.log(`--- GEOMETRIC CALCULATION GOOD EXAMPLE ---`)
console.log(`${TABULATION}Circle Area: ${CircleArea}`)
console.log(`${TABULATION}Square Area: ${SquareArea}`)
console.log(`${TABULATION}Rectangle Area: ${RectangleArea}`)
