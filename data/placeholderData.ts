import { car } from "@/features/carSlice";
import { historyItem } from "@/app/history";

export const carsData: Array<car> = [
  {
    image: require("@/assets/ride_share/Car (3).png"),
    name: "Mustang Shelby GT",
    mainImage: require("@/assets/ride_share/image 3.png"),
    reviews: 1234,
    stars: 4.9,
    owner: "Angel",
    specification: {
      max_power: 60,
      max_speed: 60,
      fuelConsumption: 10,
      acceleration: 24,
    },
    features: {
      model: "GT5000",
      color: "red",
      fuelType: "octane",
      gearType: "automatic",
      seats: 3,
      capacity: 760,
    },
  },
  {
    image: require("@/assets/ride_share/Car (2).png"),
    mainImage: require("@/assets/ride_share/image 3.png"),
    name: "BMW Carbio",
    reviews: 1234,
    stars: 5,
    owner: "ANGEL",
    specification: {
      max_power: 60,
      max_speed: 60,
      fuelConsumption: 10,
      acceleration: 24,
    },
    features: {
      model: "GT4000",
      color: "white",
      fuelType: "octane",
      gearType: "manual",
      seats: 3,
      capacity: 20,
    },
  },
];

export const histoyData: Array<historyItem> = [
  {
    name: "Henry",
    date: "Today at 9:20 a:m",
    carName: "Mustang Shelby GT ",
    status: "cancelled",
  },
  {
    name: "Nate",
    date: "Monday at 9:20 a:m",
    carName: "Mustang Shelby GT",
    status: "cancelled",
  },
  {
    name: "Angel",
    date: "tomorrow at 4:00 pm",
    carName: "Bugatti chiron",
    status: "upcoming",
  },
  {
    name: "Neymar",
    date: "next week ",
    carName: "lamborghini",
    status: "upcoming",
  },
  {
    name: "Messi ",
    date: "last month",
    carName: "Phantom series II",
    status: "completed",
  },
  {
    name: "Ronaldo",
    date: "last year",
    carName: "BMW Carbio",
    status: "completed",
  },
];
