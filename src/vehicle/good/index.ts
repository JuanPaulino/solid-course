import { SpeedUp } from './speed-up.interface'
import { Brake } from './brake.interface'
import { ChangeGears } from './change-gears.interface'
import { GasolineCar } from './gasoline-car'
import { ElectricCar } from './electric-car'

function logSpeedUpAction(vehicle: SpeedUp) {
  console.log(vehicle.speedUp())
}

function logBrakeAction(vehicle: Brake) {
  console.log(vehicle.brake())
}

function logChangeGearsAction(vehicle: ChangeGears) {
  console.log(vehicle.changeGears())
}

console.log(`--- VEHICLE BAD EXAMPLE ---`)
const gasolineCar = new GasolineCar()
logSpeedUpAction(gasolineCar)
logBrakeAction(gasolineCar)
logChangeGearsAction(gasolineCar)
const electricCar = new ElectricCar()
logSpeedUpAction(electricCar)
logBrakeAction(electricCar)