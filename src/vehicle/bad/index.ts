import { Vehicle } from './vehicle.interface'
import { GasolineCar } from './gasoline-car'
import { ElectricCar } from './electric-car'

function logSpeedUpAction(vehicle: Vehicle) {
  console.log(vehicle.speedUp())
}

function logBrakeAction(vehicle: Vehicle) {
  console.log(vehicle.brake())
}

function logChangeGearsAction(vehicle: Vehicle) {
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
logChangeGearsAction(electricCar)