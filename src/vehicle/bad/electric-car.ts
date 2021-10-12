import { Vehicle } from './vehicle.interface'

export class ElectricCar implements Vehicle {
  public speedUp(): string {
    return 'Speed up: electric car'
  }

  public brake(): string {
    return 'Brake: electric car'
  }

  public changeGears(): never {
    throw new Error('The electric car does not have a gearbox.')
  }
}