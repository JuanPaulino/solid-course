import { Brake } from './brake.interface'
import { SpeedUp } from './speed-up.interface'

export class ElectricCar implements SpeedUp, Brake {
  public speedUp() {
    return 'Electric car: speed up'
  }

  public brake() {
    return 'Electric car: brake'
  }
}