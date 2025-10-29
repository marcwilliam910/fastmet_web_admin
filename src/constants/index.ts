import motor from "../assets/vehicle/motor.png";
import suv from "../assets/vehicle/suv.png";
import sedan from "../assets/vehicle/sedan.png";
import pickup from "../assets/vehicle/pickup.png";

export const VEHICLE_DISPLAY: {
  id: string;
  name: string;
  image: string;
}[] = [
  { id: "motorcycle", name: "Motorcycle", image: motor },
  { id: "sedan", name: "Sedan", image: sedan },
  { id: "pickup", name: "Small Pickup", image: pickup },
  { id: "suv", name: "MPV/SUV", image: suv },
];

export const VEHICLES_MAP: Record<string, string> = {
  motorcycle: motor,
  sedan: sedan,
  pickup: pickup,
  suv: suv,
};
