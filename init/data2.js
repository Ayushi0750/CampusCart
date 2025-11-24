// eventData.js



var ownerId = "user_001";

const data2  = [

  {
    title: "Bollywood Beats Night",
    description: "An electrifying evening of Bollywood music and dance.",
    date: "2025-11-10",
    time: "19:00",
    location: "Mumbai, India",
    price: 1200,
    category: "Music",
    availableTickets: 150,
    imageUrl: "https://plus.unsplash.com/premium_photo-1661299366011-bb9f86212bdb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    ownerId: ownerId
  },
  {
    title: "Startup Expo 2025",
    description: "India's largest startup showcase and networking event.",
    date: "2025-12-05",
    time: "10:00",
    location: "Bangalore, India",
    price: 500,
    category: "Business",
    availableTickets: 300,
    imageUrl: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
    ownerId: ownerId
  },
  {
    title: "Comedy Carnival",
    description: "Laugh out loud with India's top stand-up comedians.",
    date: "2025-11-22",
    time: "20:00",
    location: "Delhi, India",
    price: 800,
    category: "Comedy",
    availableTickets: 200,
    imageUrl: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    ownerId: ownerId
  },
  {
    title: "TechVerse Conference",
    description: "Explore the future of AI, blockchain, and robotics.",
    date: "2025-12-15",
    time: "09:00",
    location: "Hyderabad, India",
    price: 1500,
    category: "Technology",
    availableTickets: 500,
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    ownerId: ownerId
  },
  {
    title: "Food Fiesta",
    description: "A gourmet celebration with chefs from around the world.",
    date: "2025-11-28",
    time: "12:00",
    location: "Chennai, India",
    price: 600,
    category: "Food",
    availableTickets: 250,
    imageUrl: "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
    ownerId: ownerId
  },
  {
    title: "Yoga Retreat Weekend",
    description: "Relax and rejuvenate with guided yoga and meditation.",
    date: "2025-11-30",
    time: "07:00",
    location: "Rishikesh, India",
    price: 1000,
    category: "Wellness",
    availableTickets: 100,
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1520",
    ownerId: ownerId
  },
  {
    title: "Indie Film Showcase",
    description: "Watch award-winning indie films and meet the directors.",
    date: "2025-12-08",
    time: "18:00",
    location: "Pune, India",
    price: 700,
    category: "Film",
    availableTickets: 180,
    imageUrl: "https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1209",
    ownerId: ownerId
  },
  {
    title: "Cricket Legends Match",
    description: "Watch cricket legends battle it out in a friendly match.",
    date: "2025-12-20",
    time: "16:00",
    location: "Kolkata, India",
    price: 900,
    category: "Sports",
    availableTickets: 1000,
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1605",
    ownerId: ownerId
  },
  {
    title: "Winter Art Fair",
    description: "Discover and buy original art from emerging artists.",
    date: "2025-12-12",
    time: "11:00",
    location: "Ahmedabad, India",
    price: 300,
    category: "Art",
    availableTickets: 350,
    imageUrl: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=684",
    ownerId: ownerId
  },
  {
    title: "New Year's Bash 2026",
    description: "Ring in the new year with music, fireworks, and fun.",
    date: "2025-12-31",
    time: "21:00",
    location: "Goa, India",
    price: 2000,
    category: "Festival",
    availableTickets: 800,
    imageUrl: "https://images.unsplash.com/photo-1759866221633-4d03836def4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2128",
    ownerId: ownerId
  }
];

module.exports = data2;