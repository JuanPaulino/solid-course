import GeometricShape from './geometric-shape'
import Calculate from './calculate'

const calculate = new Calculate()

const circleOptions = { radio: 2 }
const squareOptions = { base: 2 }
const rectangleOptions = { width: 2, height: 4 }

const CircleArea = calculate.areaOf(GeometricShape.CIRCLE, circleOptions)
const SquareArea = calculate.areaOf(GeometricShape.SQUARE, squareOptions)
const RectangleArea = calculate.areaOf(GeometricShape.RECTANGLE, rectangleOptions)

const TABULATION = '  '
console.log(`--- GEOMETRIC CALCULATION BAD EXAMPLE ---`)
console.log(`${TABULATION}Circle Area: ${CircleArea}`)
console.log(`${TABULATION}Square Area: ${SquareArea}`)
console.log(`${TABULATION}Rectangle Area: ${RectangleArea}`)