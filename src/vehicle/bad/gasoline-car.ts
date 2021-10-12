import { Vehicle } from './vehicle.interface';

export class GasolineCar implements Vehicle {
  public speedUp(): string {
    return 'Gasoline Car: speed up'
  }

  public brake(): string {
    return 'Gasoline Car: brake'
  }

  public changeGears(): string {
    return 'Gasoline Car: change gears'
  }
}