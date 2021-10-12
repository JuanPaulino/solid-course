import GeometricShape from './geometric-Shape'

class Triangle implements GeometricShape {
  private base: number
  private height: number
  
  constructor(options: { base: number, height: number }) {
    const { base, height } = options
    this.base = base
    this.height = height
  }
  
  public area(): number {
    return (this.base * this.height) / 2
  }
}

export default Triangle