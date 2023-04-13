import { reactive } from 'vue';

export const store = reactive(
    {
        cardArray: [
            {
                imagePath: "./src/assets/895786_7b4b_2-272x161.jpg",
                category: "Development",
                name:"The Complete iOS 10 & Swift 3 Developer Course",
                rating: 4.15,
                oldPrice:"$199",
                newPrice:"$100"
            },
            {
                imagePath: "./src/assets/246154_d8b0_3-272x161.jpg",
                category: "Development",
                name:"Web Design for Beginners: Real World Coding in HTML & CSS",
                rating:5,
                oldPrice:"$129.99",
                newPrice:"$65"
            },
            {
                imagePath: "./src/assets/752950_b773-272x161.jpg",
                category: "Development",
                name:"GitHub Ultimate: MAster Git and Github - Beginner to Expert",
                rating:4.15,
                oldPrice:"$99.99",
                newPrice:"$50"
            },
            {
                imagePath: "./src/assets/1253188_58f7_2-272x161.jpg",
                category: "Development",
                name:"The Complete iOS 11 & Swift Developer Course - Build 20 Apps",
                rating:4.15,
                oldPrice:"$199.99",
                newPrice:"$100"
            },
            {
                imagePath: "./src/assets/919872_ed54_6-272x161.jpg",
                category: "Development",
                name:"Android Java Masterclass - Become an App Developer",
                rating:4.30,
                oldPrice:"$99.99",
                newPrice:"$50"
            },
            {
                imagePath: "./src/assets/951684_9c1a_2-272x161.jpg",
                category: "Development",
                name:"Xamarin Forms: Build native Cross-platform Apps with C#",
                rating:4.15,
                oldPrice:"$189.99",
                newPrice:"$95"
            },
        ],
        category: ["All Categories", "Business", "Design", "Development", "IT & Software", "LifeStyle", "Marketing", "Office Productivity"],
        cardArray2: [
            {
                imagePath: "./src/assets/895786_7b4b_2-272x161.jpg",
                category: "Development",
                name:"The Complete iOS 10 & Swift 3 Developer Course",
                rating: 4.15,
                oldPrice:"$199",
                newPrice:"$100"
            },
            {
                imagePath: "./src/assets/1561458_7f3b-272x161.jpg",
                category: "Design",
                name:"CSS- The Complete Guide 2020 (Incl. Flexbox, Grid & Sass)",
                rating:5,
                oldPrice:"$199",
                newPrice:"$100"
            },
            {
                imagePath: "./src/assets/246154_d8b0_3-272x161.jpg",
                category: "Development",
                name:"Web Design for Beginners: Real World Coding in HTML & CSS",
                rating:5,
                oldPrice:"$129.99",
                newPrice:"$65"
            },
            {
                imagePath: "./src/assets/1208228_d61c_4-272x161.jpg",
                category: "Design",
                name:"Digitally Painting Light and Color: Amateur to Master",
                rating:4,
                oldPrice:"$199.99",
                newPrice:"$100"
            },
            {
                imagePath: "./src/assets/186792_41e4_4-272x161.jpg",
                category: "Art & Crafts",
                name:"Become an Arabic Calligraphy Artist from Scratch",
                rating:4.70,
                oldPrice:"",
                newPrice:"$199.99"
            },
            {
                imagePath: "./src/assets/1776542_30b1-272x161.jpg",
                category: "Google",
                name:"Google Searching Ninja!",
                rating:3.60,
                oldPrice:"$89.99",
                newPrice:"$45"
            },
            {
                imagePath: "./src/assets/949316_2a64_11-272x161.jpg",
                category: "Art & Crafts",
                name:"Foundations for Mastering Watercolor Painting",
                rating:4.65,
                oldPrice:"$19.99",
                newPrice:"$10"
            },
            {
                imagePath: "./src/assets/366802_6fcc-272x161.jpg",
                category: "Food & Beverage",
                name:"Get Wine-Smart",
                rating:4.15,
                oldPrice:"49.99",
                newPrice:"$25"
            },
            {
                imagePath: "./src/assets/381588_2e6d_4-272x161.jpg",
                category: "Art & Crafts",
                name:"The colored Pencil Drawing Course",
                rating:4.15,
                oldPrice:"$34.99",
                newPrice:"$18"
            },
            {
                imagePath: "./src/assets/838056_611a_3-272x161.jpg",
                category: "Art & Crafts",
                name:"Paint Realistic Watercolor and Botanicals - STUDIO BASICS",
                rating:4.15,
                oldPrice:"$69.99",
                newPrice:"$35"
            },
            {
                imagePath: "./src/assets/1414956_d944_15-272x161.jpg",
                category: "Art & Crafts",
                name:"Mastering Brushstrokes - Part 1",
                rating:4.85,
                oldPrice:"$19.99",
                newPrice:"$10"
            },
            {
                imagePath: "./src/assets/1109398_4c13-272x161.jpg",
                category: "Art & Crafts",
                name:"Paint Realistic Watercolor and Botanicals - MAGNOLIAS",
                rating:4.85,
                oldPrice:"$69.99",
                newPrice:"$35"
            },
        ],
        cardArray3: [
            {
                imagePath: "./src/assets/895786_7b4b_2-272x161.jpg",
                category: "Development",
                name:"The Complete iOS 10 & Swift 3 Developer Course",
                rating: 4.15,
                oldPrice:"$199",
                newPrice:"$100"
            },
            {
                imagePath: "./src/assets/1561458_7f3b-272x161.jpg",
                category: "Design",
                name:"CSS- The Complete Guide 2020 (Incl. Flexbox, Grid & Sass)",
                rating:5,
                oldPrice:"$199",
                newPrice:"$100"
            },
            {
                imagePath: "./src/assets/246154_d8b0_3-272x161.jpg",
                category: "Development",
                name:"Web Design for Beginners: Real World Coding in HTML & CSS",
                rating:5,
                oldPrice:"$129.99",
                newPrice:"$65"
            },
            {
                imagePath: "./src/assets/1208228_d61c_4-272x161.jpg",
                category: "Design",
                name:"Digitally Painting Light and Color: Amateur to Master",
                rating:4,
                oldPrice:"$199.99",
                newPrice:"$100"
            },
            {
                imagePath: "./src/assets/186792_41e4_4-272x161.jpg",
                category: "Art & Crafts",
                name:"Become an Arabic Calligraphy Artist from Scratch",
                rating:4.70,
                oldPrice:"",
                newPrice:"$199.99"
            },
            {
                imagePath: "./src/assets/1776542_30b1-272x161.jpg",
                category: "Google",
                name:"Google Searching Ninja!",
                rating:3.60,
                oldPrice:"$89.99",
                newPrice:"$45"
            },
        ],
    }
);
