import GeometricShape from './geometric-Shape'

class Rectangle implements GeometricShape {
  private width: number
  private height: number
  
  constructor(options: { width: number, height: number }) {
    const { width, height } = options
    this.width = width
    this.height = height
  }
  
  public area(): number {
    return this.width * this.height
  }
}

export default Rectangle