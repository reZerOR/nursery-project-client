# Online Nursery Website 🌱

## Introduction
Welcome to our Online Nursery Website, a digital platform where plant enthusiasts can browse, purchase, and explore a wide variety of plants and gardening products.

## Project Description
This project is an e-commerce website with the frontend developed using React and Redux, and a separate backend built with Node.js and Express.js. It allows users to browse plants, add them to their cart, and complete purchases. The site also includes an admin interface for product and category management.

## Features
- 🌿 Browse and search for plants
- 🔍 Advanced filtering and sorting options
- 🛒 Shopping cart functionality
- 💳 Checkout process (Cash on Delivery)
- 📦 Order management
- 📸 Image gallery
- 👨‍💼 Admin panel for product and category management

## Technology Stack
- Frontend: React, Redux
- Backend: Node.js, Express.js
- Database: [Your database choice, e.g., MongoDB]
- Other: [Any additional technologies or libraries used]

## Repository Structure
This project is split into two separate repositories:
- Frontend: [https://github.com/your-username/online-nursery-frontend](https://github.com/your-username/online-nursery-frontend)
- Backend: [https://github.com/your-username/online-nursery-backend](https://github.com/your-username/online-nursery-backend)

## Installation Guidelines

### Prerequisites
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- [Your database, e.g., MongoDB]

### Installation Steps

#### Backend Setup
1. Clone the backend repository:
   ```bash
   git clone https://github.com/your-username/online-nursery-backend.git
   cd online-nursery-backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the backend directory and add the following:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

#### Frontend Setup
1. In a new terminal, clone the frontend repository:
   ```bash
   git clone https://github.com/your-username/online-nursery-frontend.git
   cd online-nursery-frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the frontend directory and add the following:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

### Public Routes
- Home Page: Browse featured products and categories
- Products Page: View all products with filtering and sorting options
- Product Details: Get detailed information about a specific product
- Cart: Manage items in your shopping cart
- Checkout: Complete your purchase (Cash on Delivery option available)

### Admin Routes
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

## Contributing
We welcome contributions to improve the Online Nursery Website. Please follow these steps to contribute:
1. Fork the relevant repository (frontend or backend)
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
[Your chosen license, e.g., MIT]

## Contact
Your Name - your.email@example.com
Frontend Project Link: [https://github.com/your-username/online-nursery-frontend](https://github.com/your-username/online-nursery-frontend)
Backend Project Link: [https://github.com/your-username/online-nursery-backend](https://github.com/your-username/online-nursery-backend)

## Acknowledgements
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Any other libraries or resources you've used]