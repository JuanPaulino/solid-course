import Rectangle from './rectangle';
import Square from './square';

describe('Liskov Substitution', () => {
  describe('Rectangle: should be the expected result', () => {
    test('When initialising via constructor', () => {
      const rectangle = new Rectangle({ height: 2, width: 3 })
      const ExpectedResult = 6
      expect(rectangle.area()).toBe(ExpectedResult)
    })

    test('When initialising via setter', () => {
      const rectangle = new Rectangle({ height: 2, width: 3 })
      rectangle.setHeight({ height: 8 })
      const ExpectedResult = 24
      expect(rectangle.area()).toBe(ExpectedResult)
    })
  })

  describe('Square: should be the expected result', () => {
    test('When initialising via constructor', () => {
      const square = new Square({ base: 2 })
      const ExpectedResult = 4
      expect(square.area()).toBe(ExpectedResult)
    })

    test('When initialising via setter', () => {
      const square = new Square({ Square: 2 })
      square.setHeight({ height: 8 })
      const ExpectedResult = 64
      expect(square.area()).toBe(ExpectedResult)
    })
  })
})