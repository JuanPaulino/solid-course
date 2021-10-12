import GeometricShape from './geometric-Shape'

class Circle implements GeometricShape {
  private radio: number

  constructor(options: { radio: number }) {
    const { radio } = options
    this.radio = radio
  }

  public area(): number {
    return Math.pow(this.radio, 2) * Math.PI
  }
}

export default Circle