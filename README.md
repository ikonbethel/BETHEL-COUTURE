# BETHEL-COUTURE

**An E-commerce Website for Clothing Brands**

## Project Overview

BETHEL-COUTURE is an e-commerce website developed as a final specialization project for the ALX Full Stack Software Engineering Program. This solo project by Ikonne Bethel Chibuzo aims to provide a seamless online shopping experience for clothing brands.

## Features

- **Product Listings**: Browse a variety of clothing items with detailed descriptions and images.
- **Shopping Cart**: Add items to the cart and manage quantities.
- **User Authentication**: Secure user registration and login to track cart, order history, and delivery status.
- **Order Management**: Place orders and view order history.
- **Payment Integration**: Secure payment processing using Stripe.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**:  Cash on Delivery or Stripe
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/BETHEL-COUTURE.git
   cd BETHEL-COUTURE/backend

2. Install dependencies:
    npm install

3. Create a .env file in the backend directory and add the following environment variables:
    PORT=4000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key

4. Start the backend server:
    npm run server

### Frontend Setup
1. Navigate to the frontend directory:
    cd ../frontend

2. Install dependencies:
    npm install

3. Create a .env file in the frontend directory and add the following environment variables:
    REACT_APP_BACKEND_URL=http://localhost:4000
    REACT_APP_STRIPE_KEY=your_stripe_public_key

4. Start the frontend development server:
    npm run dev

## Usage
    Open your browser and navigate to http://localhost:3000.
    Register a new user or log in with existing credentials.
    Browse products, add items to the cart, and proceed to checkout.
    Complete the payment using Stripe.
    View order history and track delivery status.

## Contributing
    Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
    This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
    1. ALX Full Stack Software Engineering Program
    2. Stripe for payment processing
    3. MongoDB for database services
    4. React.js and Node.js communities


# Ikonne Bethel Chibuzo

This README file provides a comprehensive overview of your project, including features, technologies used, installation instructions, usage, and contribution guidelines.

