import { Icon, Star } from "lucide-react";

export const NAVBAR_CONTENT = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Tours",
    path: "/tours",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Blog",
    path: "/blog",  
  },
];

export const REVIEWS = [
  {
    name: "Aditi",
    username: "@aditi",
    body: "Itna smooth trip planning kabhi nahi hua! Har cheez itni easy thi, bas bags uthao aur nikal pado.",
    img: "https://avatar.vercel.sh/aditi",
  },
  {
    name: "Deepanshu",
    username: "@deepanshu",
    body: "Yaar seriously, maza hi aa gaya! Hotels, travel, sab kuch perfectly arrange tha.",
    img: "https://avatar.vercel.sh/deepanshu",
  },
  {
    name: "Akhil",
    username: "@akhil",
    body: "I’ve traveled a lot, but this was by far the most hassle-free and well-organized trip I’ve ever had.",
    img: "https://avatar.vercel.sh/akhil",
  },
  {
    name: "Surbhi",
    username: "@surbhi",
    body: "Safe travel ke liye main kaafi cautious rehti hoon, but inke saath bohot comfortable feel kiya.",
    img: "https://avatar.vercel.sh/surbhi",
  },
  {
    name: "Arpit",
    username: "@arpit",
    body: "Trip ka har moment memorable bana diya. Group activities ka toh alag hi level tha!",
    img: "https://avatar.vercel.sh/arpit",
  },
  {
    name: "Piyush",
    username: "@piyush",
    body: "The itinerary was perfect — great destinations, smooth travel, and unforgettable memories.",
    img: "https://avatar.vercel.sh/piyush",
  },
  {
    name: "Saksham",
    username: "@saksham",
    body: "Itna hassle-free travel experience pehli baar mila. Ab toh har trip yahin se book karunga.",
    img: "https://avatar.vercel.sh/saksham",
  },
  {
    name: "Tanvi",
    username: "@tanvi",
    body: "Solo travel itna safe aur fun ho sakta hai, pehli baar experience kiya. Highly recommend!",
    img: "https://avatar.vercel.sh/tanvi",
  },
];



export const BLOGS = [
  {
    title: "Breathtaking Landscapes of Ladakh",
    date: "August 1, 2025",
    image: "/assets/images/destinations/leh.jpg", // Replace with actual Ladakh image
    onClick: "/blogs/ladakh-landscapes",
  },
  {
    title: "Top 7 Places to Explore in Himachal Pradesh",
    date: "July 22, 2025",
    image: "/assets/images/destinations/himachal.avif", // Replace with actual Himachal image
    onClick: "/blogs/himachal-top-places",
  },
  {
    title: "Exploring the Backwaters of Kerala",
    date: "June 25, 2025",
    image: "/assets/images/destinations/kerala.avif", // Replace with actual Kerala image
    onClick: "/blogs/kerala-backwaters",
  },
 
 
];


export const CAROUSEL_IMAGES = [
  {
    src: "/assets/images/carousel/1.jpg",
    alt: "Majestic mountains in Switzerland",
  },
  {
    src: "/assets/images/carousel/2.jpg",
    alt: "Majestic mountains in Switzerland",
  },{
    src: "/assets/images/carousel/3.jpg",
    alt: "Majestic mountains in Switzerland",
  },{
    src: "/assets/images/carousel/4.jpg",
    alt: "Majestic mountains in Switzerland",
  },{
    src: "/assets/images/carousel/5.jpg",
    alt: "Majestic mountains in Switzerland",
  },{
    src: "/assets/images/carousel/6.jpg",
    alt: "Majestic mountains in Switzerland",
  },{
    src: "/assets/images/carousel/7.jpg",
    alt: "Majestic mountains in Switzerland",
  },{
    src: "/assets/images/carousel/8.jpg",
    alt: "Majestic mountains in Switzerland",
  },{
    src: "/assets/images/carousel/9.jpg",
    alt: "Majestic mountains in Switzerland",
  },{
    src: "/assets/images/carousel/10.jpg",
    alt: "Majestic mountains in Switzerland",
  },
  {
    src: "/assets/images/carousel/11.jpg",
    alt: "Majestic mountains in Switzerland",
  },
  {
    src: "/assets/images/carousel/12.jpg",
    alt: "Majestic mountains in Switzerland",
  },

];

export const WHY_CHOOSE_CONTENT = [
  {
    title: "Tailored Travel Just for You",
    icon: "/assets/images/map.png",
  },
  {
    title: "Women-Centric & Safety-Focused Solo Trips",
    icon: "/assets/images/woman.png",
  },
  {
    title: "Unforgettable Group Travel Experiences",
    icon: "/assets/images/camping.png",
  },
  {
    title: "Expert-Led Adventures",
    icon: "/assets/images/map.png",
  },
  {
    title: "Thrill-Filled Activities & Experiences",
    icon: "/assets/images/climbing.png",
  },
];



export const HERO_MAIN_CONTENT = [
  {
    icon: "/assets/images/social.avif",
    label: "4.6",
    suffix: "Rated",
    reactIcon: "/assets/images/star.png",
  },
  {
    icon: "/assets/images/check.png",
    label: "100% Customised Trips"
  },
  {
    icon: "/assets/images/wallet.png",
    label: "Split Payments"
  },
  {
    icon: "/assets/images/phone-call.png",
    label: "24x7 Concierge"
  }
];

export const DESTINATIONS = [
  {
    id: 1,
    name: 'Andaman & Nicobar Islands',
    country: 'India',
    title: 'Tropical Paradise',
    subtitle: 'Pristine beaches and crystal-clear waters',
    image: '/assets/images/destinations/andaman.webp',
    rating: 4.9,
    highlights: ['Radhanagar Beach', 'Scuba Diving', 'Cellular Jail']
  },
  {
    id: 2,
    name: 'Leh Ladakh',
    country: 'India',
    title: 'Roof of the World',
    subtitle: 'Majestic mountains and serene monasteries',
    image: '/assets/images/destinations/leh.jpg',
    rating: 4.9,
    highlights: ['Pangong Lake', 'Khardung La', 'Monasteries']
  },
 
  {
    id: 3,
    name: 'Himachal Pradesh',
    country: 'India',
    title: 'Himalayan Wonderland',
    subtitle: 'Hill stations and breathtaking landscapes',
    image: '/assets/images/destinations/himachal.avif',
    rating: 4.8,
    highlights: ['Manali', 'Shimla', 'Spiti Valley']
  },
  {
    id: 4,
    name: 'Uttarakhand',
    country: 'India',
    title: 'Devbhoomi',
    subtitle: 'Sacred shrines and serene hills',
    image: '/assets/images/destinations/uttrakhand.jpeg',
    rating: 4.8,
    highlights: ['Valley of Flowers', 'Char Dham', 'Nainital']
  },
  {
    id: 5,
    name: 'Rajasthan',
    country: 'India',
    title: 'Land of Kings',
    subtitle: 'Deserts, palaces, and vibrant culture',
    image: '/assets/images/destinations/jaipur.jpg',
    rating: 4.7,
    highlights: ['Jaipur', 'Jaisalmer', 'Udaipur']
  },
  
  {
    id: 7,
    name: 'Bhutan',
    country: 'Bhutan',
    title: 'Land of the Thunder Dragon',
    subtitle: 'Himalayan kingdom of happiness',
    image: '/assets/images/destinations/bhutan.jpg',
    rating: 4.9,
    highlights: ['Tiger’s Nest', 'Thimphu', 'Punakha Dzong']
  }
];
