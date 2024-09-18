# Plant 🌱

## Introduction
Welcome to our Online Nursery Website, a digital platform where plant enthusiasts can browse, purchase, and explore a wide variety of plants and gardening products.

## Project Description
This project is an e-commerce website with the frontend developed using React and Redux, and a separate backend built with Node.js and Express.js. It allows users to browse plants, add them to their cart, and complete purchases. The site also includes an managment interface for product and category management.

## Features
- 🌿 Browse and search for plants
- 🔍 Advanced filtering and sorting options
- 🛒 Shopping cart functionality
- 💳 Checkout process (Cash on Delivery)
- 📦 Order management
- 📸 Image gallery
- 👨‍💼 A manage panel for product and category management

## Technology Stack
- Frontend: React, Redux, Shadcn UI, Fremer motion, Sonner etc.
- Backend: Node.js, Express.js, Mongoose, Cors, Zod etc.
- Database: MongoDB

## Repository Structure
This project is split into two separate repositories:
- Frontend: [https://github.com/reZerOR/nursery-project-client](https://github.com/reZerOR/nursery-project-client)
- Backend: [https://github.com/reZerOR/Online-nursery-server](https://github.com/reZerOR/Online-nursery-server)

## Installation Guidelines

### Prerequisites
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation Steps

#### Backend Setup
1. Clone the backend repository:
   ```bash
   git clone https://github.com/reZerOR/Online-nursery-server
   cd Online-nursery-server
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the backend directory and add the following:
   ```
   PORT=5000
   DATABASE_URL=your_mongodb_connection_string
   ```

4. Start the backend server:
   ```bash
   npm run start:dev
   ```

#### Frontend Setup
1. In a new terminal, clone the frontend repository:
   ```bash
   git clone https://github.com/reZerOR/nursery-project-client
   cd nursery-project-client
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

### Routes
- Home Page: Browse featured products and categories
- Products Page: View all products with filtering and sorting options
- Product Details: Get detailed information about a specific product
- Cart: Manage items in your shopping cart
- Checkout: Complete your purchase (Cash on Delivery option available)
- Product Management: Add, edit, and delete products
- Category Management: Manage product categories

## UI/UX
We've focused on creating an intuitive and visually appealing interface. Key design elements include:
- Responsive design for mobile and desktop
- Intuitive navigation
- High-quality product images
- Clear and concise product information
- Smooth checkout process

## Additional Features
- Debounced API calls for efficient searching
- Page refresh warning when cart is not empty