export const CUISINES = [
  "Italian",
  "Mexican",
  "Chinese",
  "Indian",
  "Japanese",
  "Thai",
  "Greek",
  "French",
  "Spanish",
  "Korean",
];

export const ESTABLISHMENTS = [
  "Fast Food",
  "Fine Dining",
  "Cafe",
  "Food Truck",
  "Bar",
  "Buffet",
];

export type RestaurantType = {
  name: string;
  cuisine: string;
  establishment: string[];
  type: string;
  rating: number;
  price: string;
  distance: number;
  image: string;
  location: string;
};

export const RESTAURANT_NAMES = [
  "Pasta Paradise",
  "Taco Town",
  "Chopsticks",
  "Curry House",
  "Sushi Spot",
  "Spicy Thai",
  "Olive Garden",
  "Le Bistro",
  "Tapas Bar",
  "Seoul Kitchen",
  "Pizza Palace",
  "Burger Joint",
  "Noodle House",
  "BBQ Grill",
  "Steakhouse",
  "Seafood Shack",
  "Vegetarian Delight",
  "Mediterranean Cuisine",
  "Street Food Corner",
  "Diner's Delight",
  "Cajun Kitchen",
  "Bakery Cafe",
  "Ice Cream Parlor",
  "Smoothie Bar",
  "Juice Shop",
  "Coffee House",
  "Tea Room",
  "Wine Bar",
  "Brewery",
  "Sports Bar",
  "Gastropub",
];

export const DEMO_RESTAURANTS: RestaurantType[] = [
  {
    name: RESTAURANT_NAMES[6],
    cuisine: "Greek",
    establishment: ["Cafe"],
    type: "Restaurant",
    rating: 4.1,
    price: "$$",
    distance: 1.2,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "135 Oak St",
  },
  {
    name: RESTAURANT_NAMES[7],
    cuisine: "French",
    establishment: ["Fine Dining", "Bar"],
    type: "Restaurant",
    rating: 4.6,
    price: "$$$",
    distance: 3.5,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "246 Elm St",
  },
  {
    name: RESTAURANT_NAMES[8],
    cuisine: "Spanish",
    establishment: ["Buffet"],
    type: "Restaurant",
    rating: 4.4,
    price: "$$",
    distance: 0.9,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "579 Pine St",
  },
  {
    name: RESTAURANT_NAMES[9],
    cuisine: "Korean",
    establishment: ["Cafe"],
    type: "Restaurant",
    rating: 4.2,
    price: "$$",
    distance: 2.1,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "864 Maple St",
  },
  {
    name: RESTAURANT_NAMES[6],
    cuisine: "Greek",
    establishment: ["Cafe"],
    type: "Restaurant",
    rating: 4.1,
    price: "$$",
    distance: 1.2,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "135 Oak St",
  },
  {
    name: RESTAURANT_NAMES[7],
    cuisine: "French",
    establishment: ["Fine Dining", "Bar"],
    type: "Restaurant",
    rating: 4.6,
    price: "$$$",
    distance: 3.5,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "246 Elm St",
  },
  {
    name: RESTAURANT_NAMES[8],
    cuisine: "Spanish",
    establishment: ["Buffet"],
    type: "Restaurant",
    rating: 4.4,
    price: "$$",
    distance: 0.9,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "579 Pine St",
  },
  {
    name: RESTAURANT_NAMES[9],
    cuisine: "Korean",
    establishment: ["Cafe"],
    type: "Restaurant",
    rating: 4.2,
    price: "$$",
    distance: 2.1,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "864 Maple St",
  },
  {
    name: RESTAURANT_NAMES[10],
    cuisine: "Italian",
    establishment: ["Fast Food"],
    type: "Restaurant",
    rating: 3.9,
    price: "$",
    distance: 3.8,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "123 Walnut St",
  },
  {
    name: RESTAURANT_NAMES[11],
    cuisine: "Mexican",
    establishment: ["Food Truck"],
    type: "Restaurant",
    rating: 4.8,
    price: "$$",
    distance: 2.9,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "456 Oak St",
  },
  {
    name: RESTAURANT_NAMES[12],
    cuisine: "Chinese",
    establishment: ["Bar"],
    type: "Restaurant",
    rating: 4.3,
    price: "$$$",
    distance: 1.5,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "789 Pine St",
  },
  {
    name: RESTAURANT_NAMES[13],
    cuisine: "Indian",
    establishment: ["Fine Dining"],
    type: "Restaurant",
    rating: 4.7,
    price: "$$$",
    distance: 2.3,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "321 Oak St",
  },
  {
    name: RESTAURANT_NAMES[14],
    cuisine: "Japanese",
    establishment: ["Buffet"],
    type: "Restaurant",
    rating: 4.0,
    price: "$$",
    distance: 0.7,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "654 Pine St",
  },
  {
    name: RESTAURANT_NAMES[15],
    cuisine: "Thai",
    establishment: ["Cafe"],
    type: "Restaurant",
    rating: 4.5,
    price: "$$",
    distance: 1.9,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "987 Oak St",
  },
  {
    name: RESTAURANT_NAMES[16],
    cuisine: "Greek",
    establishment: ["Fine Dining"],
    type: "Restaurant",
    rating: 4.2,
    price: "$$$",
    distance: 3.1,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "135 Elm St",
  },
  // Add more demo restaurant data here
  {
    name: RESTAURANT_NAMES[17],
    cuisine: "Mexican",
    establishment: ["Fast Food"],
    type: "Restaurant",
    rating: 4.2,
    price: "$",
    distance: 2.5,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "789 Maple St",
  },
  {
    name: RESTAURANT_NAMES[18],
    cuisine: "Italian",
    establishment: ["Fine Dining"],
    type: "Restaurant",
    rating: 4.6,
    price: "$$$",
    distance: 1.8,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "246 Pine St",
  },
  {
    name: RESTAURANT_NAMES[19],
    cuisine: "Chinese",
    establishment: ["Buffet"],
    type: "Restaurant",
    rating: 4.3,
    price: "$$",
    distance: 0.9,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "579 Oak St",
  },
  {
    name: RESTAURANT_NAMES[20],
    cuisine: "Indian",
    establishment: ["Cafe"],
    type: "Restaurant",
    rating: 4.1,
    price: "$$",
    distance: 2.2,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "864 Pine St",
  },
  {
    name: RESTAURANT_NAMES[21],
    cuisine: "Japanese",
    establishment: ["Fine Dining", "Bar"],
    type: "Restaurant",
    rating: 4.7,
    price: "$$$",
    distance: 3.4,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "135 Maple St",
  },
  {
    name: RESTAURANT_NAMES[22],
    cuisine: "Thai",
    establishment: ["Buffet"],
    type: "Restaurant",
    rating: 4.4,
    price: "$$",
    distance: 1.1,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "246 Oak St",
  },
  {
    name: RESTAURANT_NAMES[23],
    cuisine: "Greek",
    establishment: ["Cafe"],
    type: "Restaurant",
    rating: 4.3,
    price: "$$",
    distance: 2.0,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "579 Elm St",
  },
  {
    name: RESTAURANT_NAMES[24],
    cuisine: "Mexican",
    establishment: ["Fast Food"],
    type: "Restaurant",
    rating: 4.5,
    price: "$",
    distance: 3.3,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "987 Pine St",
  },
  {
    name: RESTAURANT_NAMES[25],
    cuisine: "Italian",
    establishment: ["Fine Dining"],
    type: "Restaurant",
    rating: 4.2,
    price: "$$$",
    distance: 1.7,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "135 Oak St",
  },
  {
    name: RESTAURANT_NAMES[26],
    cuisine: "Chinese",
    establishment: ["Buffet"],
    type: "Restaurant",
    rating: 4.1,
    price: "$$",
    distance: 0.8,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "246 Pine St",
  },
  {
    name: RESTAURANT_NAMES[27],
    cuisine: "Indian",
    establishment: ["Cafe"],
    type: "Restaurant",
    rating: 4.4,
    price: "$$",
    distance: 2.1,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "579 Oak St",
  },
  {
    name: RESTAURANT_NAMES[28],
    cuisine: "Japanese",
    establishment: ["Fine Dining", "Bar"],
    type: "Restaurant",
    rating: 4.3,
    price: "$$$",
    distance: 3.2,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "864 Elm St",
  },
  {
    name: RESTAURANT_NAMES[29],
    cuisine: "Thai",
    establishment: ["Buffet"],
    type: "Restaurant",
    rating: 4.2,
    price: "$$",
    distance: 1.0,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "135 Pine St",
  },
  {
    name: RESTAURANT_NAMES[30],
    cuisine: "Greek",
    establishment: ["Cafe"],
    type: "Restaurant",
    rating: 4.1,
    price: "$$",
    distance: 2.3,
    image:
      "https://th.bing.com/th/id/OIP.8ISmWq-w9SdR8HPiZ1G3fQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    location: "246 Oak St",
  },
];
