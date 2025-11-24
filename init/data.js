// data.js

var ownerId = "admin_psit_001";

var sampleListings = [
  
  {
    title: "Annual Tech Fest Pass",
    description: "Full-access pass to PSIT's annual tech fest including workshops, hackathons, and concerts. Valid for all three days.",
    image: { url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
    price: 300,
    location: "Kanpur",
    country: "India",
    seller: { name: "Anjali Mehra", college: "PSIT", category: "day scholar", contact: { phone: "9123456780", email: "anjali.mehra@psit.ac.in" } },
    dateListed: "2025-09-12"
  },
  {
    title: "LED Desk Lamp",
    description: "Adjustable LED desk lamp with touch controls and night mode. Perfect for late-night study marathons.",
    image: { url: "https://plus.unsplash.com/premium_photo-1677234147181-2510b2c1ea75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
    price: 450,
    location: "Kanpur",
    country: "India",
    seller: { name: "Mohit Agarwal", college: "PSIT", category: "hostler", contact: { phone: "9988776655", email: "mohit.agarwal@psit.ac.in" } },
    dateListed: "2025-09-11"
  },
  {
    title: "Engineering Drawing Kit",
    description: "Complete drawing kit with compass, scale, and pencils. Essential for first-year engineering students.",
    image: { url: "https://images.pexels.com/photos/6614747/pexels-photo-6614747.jpeg" },
    price: 250,
    location: "Kanpur",
    country: "India",
    seller: { name: "Sneha Tiwari", college: "PSIT", category: "day scholar", contact: { phone: "9812345678", email: "sneha.tiwari@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Used Physics Lab Coat",
    description: "White lab coat in good condition, suitable for physics and chemistry labs.",
    image: { url: "https://images.pexels.com/photos/4492064/pexels-photo-4492064.jpeg" },
    price: 150,
    location: "Kanpur",
    country: "India",
    seller: { name: "Aman Gupta", college: "PSIT", category: "hostler", contact: { phone: "9823456789", email: "aman.gupta@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Java Programming Book",
    description: "Comprehensive guide to Java programming with examples and exercises.",
    image: { url: "https://plus.unsplash.com/premium_photo-1667251760504-096946b820af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974" },
    price: 500,
    location: "Kanpur",
    country: "India",
    seller: { name: "Priya Singh", college: "PSIT", category: "day scholar", contact: { phone: "9834567890", email: "priya.singh@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Maths Reference Book",
    description: "Advanced mathematics reference book for engineering students.",
    image: { url: "https://images.unsplash.com/photo-1676302447092-14a103558511?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935" },
    price: 400,
    location: "Kanpur",
    country: "India",
    seller: { name: "Karan Verma", college: "PSIT", category: "hostler", contact: { phone: "9845678901", email: "karan.verma@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Wireless Mouse",
    description: "Compact wireless mouse with ergonomic design and long battery life.",
    image: { url: "https://images.unsplash.com/photo-1707592691247-5c3a1c7ba0e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070" },
    price: 350,
    location: "Kanpur",
    country: "India",
    seller: { name: "Neha Yadav", college: "PSIT", category: "day scholar", contact: { phone: "9856789012", email: "neha.yadav@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Event Ticket: Coding Marathon",
    description: "Entry ticket for PSIT's 24-hour coding marathon. Includes meals and swag.",
    image: { url: "https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
    price: 200,
    location: "Kanpur",
    country: "India",
    seller: { name: "Rohit Sharma", college: "PSIT", category: "hostler", contact: { phone: "9867890123", email: "rohit.sharma@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with deep bass and 10-hour battery life.",
    image: { url: "https://images.unsplash.com/photo-1507878566509-a0dbe19677a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
    price: 800,
    location: "Kanpur",
    country: "India",
    seller: { name: "Isha Jain", college: "PSIT", category: "day scholar", contact: { phone: "9878901234", email: "isha.jain@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
    {
    title: "Laptop Cooling Pad",
    description: "Ergonomic cooling pad with dual fans to keep your laptop cool during long study sessions.",
    image: { url: "https://images.unsplash.com/photo-1647779098515-687bdba939e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
    price: 600,
    location: "Kanpur",
    country: "India",
    seller: { name: "Tanya Bansal", college: "PSIT", category: "day scholar", contact: { phone: "9889012345", email: "tanya.bansal@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Used Chemistry Lab Manual",
    description: "Lab manual with solved experiments and notes. Useful for first-year chemistry labs.",
    image: { url: "https://plus.unsplash.com/premium_photo-1758830867598-4b870985c72e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
    price: 180,
    location: "Kanpur",
    country: "India",
    seller: { name: "Nikhil Joshi", college: "PSIT", category: "hostler", contact: { phone: "9890123456", email: "nikhil.joshi@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Scientific Calculator",
    description: "Casio scientific calculator in excellent condition. Ideal for engineering and math students.",
    image: { url: "https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1936" },
    price: 350,
    location: "Kanpur",
    country: "India",
    seller: { name: "Megha Rathi", college: "PSIT", category: "day scholar", contact: { phone: "9901234567", email: "megha.rathi@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Hostel Storage Box",
    description: "Plastic storage box with lid. Great for organizing hostel essentials.",
    image: { url: "https://images.unsplash.com/photo-1581068466660-e6585b8afa97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
    price: 220,
    location: "Kanpur",
    country: "India",
    seller: { name: "Aditya Rawat", college: "PSIT", category: "hostler", contact: { phone: "9912345678", email: "aditya.rawat@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Event Ticket: Robotics Workshop",
    description: "Entry to PSIT's robotics workshop. Learn to build and program your own bot.",
    image: { url: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171" },
    price: 250,
    location: "Kanpur",
    country: "India",
    seller: { name: "Simran Kaur", college: "PSIT", category: "day scholar", contact: { phone: "9923456789", email: "simran.kaur@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Used Backpack",
    description: "Durable backpack with laptop compartment. Slightly used but in good condition.",
    image: { url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
    price: 300,
    location: "Kanpur",
    country: "India",
    seller: { name: "Harsh Vardhan", college: "PSIT", category: "hostler", contact: { phone: "9934567890", email: "harsh.vardhan@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Drawing Board",
    description: "Wooden drawing board for engineering graphics. Includes clips and stand.",
    image: { url: "https://plus.unsplash.com/premium_photo-1726711241937-8beb08403c47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
    price: 400,
    location: "Kanpur",
    country: "India",
    seller: { name: "Ritika Sharma", college: "PSIT", category: "day scholar", contact: { phone: "9945678901", email: "ritika.sharma@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Used Headphones",
    description: "Over-ear headphones with noise cancellation. Great for online classes and music.",
    image: { url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
    price: 500,
    location: "Kanpur",
    country: "India",
    seller: { name: "Yash Patel", college: "PSIT", category: "hostler", contact: { phone: "9956789012", email: "yash.patel@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Event Ticket: Cultural Night",
    description: "Pass for PSIT's cultural night. Includes performances, food stalls, and games.",
    image: { url: "https://images.unsplash.com/photo-1719650932798-bda508a2b209?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=731" },
    price: 150,
    location: "Kanpur",
    country: "India",
    seller: { name: "Aarti Mishra", college: "PSIT", category: "day scholar", contact: { phone: "9967890123", email: "aarti.mishra@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Used Laptop Stand",
    description: "Aluminum laptop stand with adjustable height. Helps improve posture while studying.",
    image: { url: "https://images.unsplash.com/photo-1629317480826-910f729d1709?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074" },
    price: 350,
    location: "Kanpur",
    country: "India",
    seller: { name: "Saurabh Singh", college: "PSIT", category: "hostler", contact: { phone: "9978901234", email: "saurabh.singh@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Used Whiteboard",
    description: "Medium-sized whiteboard with markers. Perfect for hostel room brainstorming.",
    image: { url: "https://plus.unsplash.com/premium_photo-1681671796265-4e8925f49df2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
    price: 280,
    location: "Kanpur",
    country: "India",
    seller: { name: "Divya Chauhan", college: "PSIT", category: "day scholar", contact: { phone: "9989012345", email: "divya.chauhan@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Used Water Bottle",
    description: "Stainless steel water bottle. Keeps drinks hot or cold for hours.",
    image: { url: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
    price: 120,
    location: "Kanpur",
    country: "India",
    seller: { name: "Manish Thakur", college: "PSIT", category: "hostler", contact: { phone: "9990123456", email: "manish.thakur@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Used Umbrella",
    description: "Compact foldable umbrella. Handy for sudden Kanpur rains.",
    image: { url: "https://images.unsplash.com/photo-1517398629-9d24ea1f4f94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
    price: 100,
    location: "Kanpur",
    country: "India",
    seller: { name: "Pooja Sinha", college: "PSIT", category: "day scholar", contact: { phone: "9991234567", email: "pooja.sinha@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Used Notebook Set",
    description: "Set of 5 notebooks with ruled pages. Lightly used, great for note-taking.",
    image: { url: "https://images.unsplash.com/photo-1612367980327-7454a7276aa7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=11" },
    price: 180,
    location: "Kanpur",
    country: "India",
    seller: { name: "Rajeev Prasad", college: "PSIT", category: "hostler", contact: { phone: "9992345678", email: "rajeev.prasad@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
    title: "Used Pen Set",
    description: "Assorted gel and ball pens. Smooth writing, perfect for exams.",
    image: { url: "https://images.unsplash.com/photo-1605641987901-77d82814989d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
    price: 90,
    location: "Kanpur",
    country: "India",
    seller: { name: "Shruti Saxena", college: "PSIT", category: "day scholar", contact: { phone: "9993456789", email: "shruti.saxena@psit.ac.in" } },
    dateListed: "2025-09-13"
  },
  {
  title: "Used Table Fan",
  description: "Small table fan, ideal for hostel rooms without AC.",
  image: { url: "https://images.unsplash.com/photo-1622480916526-285a5e0e533b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
  price: 320,
  location: "Kanpur",
  country: "India",
  seller: {
    name: "Nitesh Dubey",
    college: "PSIT",
    category: "hostler",
    contact: {
      phone: "9994567890",
      email: "nitesh.dubey@psit.ac.in"
    }
  },
  dateListed: "2025-09-13"
}

];
module.exports= {data:sampleListings};


