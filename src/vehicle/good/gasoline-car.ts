import { Brake } from './brake.interface';
import { SpeedUp } from './speed-up.interface';
import { ChangeGears } from './change-gears.interface';

export class GasolineCar implements SpeedUp, Brake, ChangeGears {
  public speedUp() {
    return 'Gasoline Car: speed up'
  }

  public brake() {
    return 'Gasoline Car: brake'
  }

  public changeGears(): string {
    return 'Gasoline Car: change gears'
  }
}