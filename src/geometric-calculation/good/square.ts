import GeometricShape from './geometric-Shape'

class Square implements GeometricShape {
  private base: number

  constructor(options: { base: number }) {
    const { base } = options
    this.base = base
  }

  public area(): number {
    return Math.pow(this.base, 2)
  }
}

export default Square