import Rectangle from './rectangle'

class Square extends Rectangle {
  constructor(options: { base: number }) {
    const { base } = options
    super({ width: base, height: base })
  }

  public setWidth(options: { width: number }) {
    const { width } = options
    super.setWidth({ width: width })
    super.setHeight({ height: width })
  }

  public setHeight(options: { height: number }) {
    const { height } = options
    super.setWidth({ width: height })
    super.setHeight({ height: height })
  }
}

export default Square