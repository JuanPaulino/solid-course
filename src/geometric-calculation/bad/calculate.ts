import GeometricShape from './geometric-shape'
import ShapeArguments from './shape-arguments'

class Calculate {
  public areaOf(geometricShape: GeometricShape, options: ShapeArguments): number {
    if (geometricShape === GeometricShape.CIRCLE) {
      const { radio } = options
      return this.calculateCircleArea(radio!)
    } else if (geometricShape === GeometricShape.SQUARE) {
      const { base } = options
      return this.calculateSquareArea(base!)
    } else if (geometricShape === GeometricShape.RECTANGLE) {
      const { width, height } = options
      return this.calculateRectangleArea(width!, height!)
    }
    return NaN
  }

  private calculateCircleArea(radio: number): number {
    return Math.pow(radio, 2) * Math.PI
  }

  private calculateSquareArea(base: number): number {
    return Math.pow(base, 2)
  }

  private calculateRectangleArea(width: number, height: number): number {
    return width * height
  }
}

export default Calculate