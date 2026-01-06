// Data transcribed directly from Image_0.png
export const fourWheelerServicesList = [
  "Periodic servicing",
  "Engine repair",
  "Brake service",
  "Clutch repair",
  "Suspension repair",
  "Electrical & battery service",
  "Wheel alignment & balancing",
  "Tyre replacement",
  "Oil & filter change",
  "AC servicing",
  "Denting & painting",
  "Washing & detailing",
  "Spare parts replacement",
  "Warranty repair",
  "Roadside assistance"
];

// Data transcribed directly from Image_1.png
export const twoWheelerServicesList = [
  "Periodic servicing",
  "Engine repair",
  "Brake service",
  "Clutch service",
  "Chain & sprocket service",
  "Electrical & battery service",
  "Tyre replacement",
  "Puncture repair",
  "Oil change",
  "Fuel system service",
  "Washing & cleaning",
  "Spare parts replacement",
  "Warranty repair",
  "Minor roadside repair"
];

export const mockMechanics = [
  {
    id: 1,
    name: "Rajesh Auto Care",
    rating: 4.8,
    reviews: 124,
    distance: "1.2 km",
    location: "Sector 62, Noida",
    vehicleTypes: ["4w", "2w"],
    verified: true,
    tools: ["OBD Scanner available", "Hydraulic Lift available"], // 
    specialization: ["Maruti", "Honda", "Engine"], // Smart Filter data 
    // Assigning a subset of services from the master lists above
    services: [
      ...fourWheelerServicesList.slice(0, 5), // First 5 4W services
      twoWheelerServicesList[7], // Puncture repair
      twoWheelerServicesList[8]  // Oil change
    ]
  },
  {
    id: 2,
    name: "Speedy Bikes Point",
    rating: 4.5,
    reviews: 89,
    distance: "0.8 km",
    location: "Indirapuram, Ghaziabad",
    vehicleTypes: ["2w"],
    verified: true,
    tools: ["Generic Bike Tools"],
    specialization: ["Hero", "Bajaj", "Tyre"],
    services: twoWheelerServicesList // All 2W services
  },
  {
    id: 3,
    name: "Luxury Wheels Garage",
    rating: 4.9,
    reviews: 210,
    distance: "3.5 km",
    location: "Greater Kailash, Delhi",
    vehicleTypes: ["4w"],
    verified: true,
    tools: ["Advanced Diagnostics", "Paint Booth"],
    specialization: ["German Cars", "Denting & Painting"],
    services: fourWheelerServicesList // All 4W services
  }
];