class Rectangle {
  private width: number
  private height: number
  
  constructor(options: { width: number, height: number }) {
    const { width, height } = options
    this.width = width
    this.height = height
  }
  
  public setWidth(options: { width: number }) {
    const { width } = options
    this.width = width
  }

  public setHeight(options: { height: number }) {
    const { height } = options
    this.height = height
  }
  
  public area(): number {
    return this.width * this.height
  }
}

export default Rectangle