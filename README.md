
```markdown
# BETHEL-COUTURE

**An E-commerce Website for Bethel Clothing Brands**

## Project Overview

BETHEL-COUTURE is an e-commerce website developed as a final specialization project for the ALX Full Stack Software Engineering Program. This solo project by Ikonne Bethel Chibuzo aims to provide a seamless online shopping experience for clothing brands.

## Features

- **Product Listings**: Browse a variety of clothing items with detailed descriptions and images.
- **Shopping Cart**: Add items to the cart and manage quantities.
- **User Authentication**: Secure user registration and login to track cart, order history, and delivery status.
- **Order Management**: Place orders and view order history.
- **Payment Integration**: Secure payment processing using Stripe.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Admin Panel**: Manage products, orders, and users.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe
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
   ```

2. Install dependencies (from package.json):
   ```sh
   npm install
   ```

3. Create a `.env` file in the backend

 directory and add the following environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key 
   CLOUDINARY_NAME=your_cloudinary_name
   ADMIN_EMAIL=your_admin_name
   ADMIN_PASSWORD=your_admin_password
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id 

   ```

4. Start the backend server:
   ```sh
   npm run server
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```

2. Install dependencies (from package.json):
   ```sh
   npm install
   ```

3. Create a `.env` file in the frontend directory and add the following environment variables:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```

4. Start the frontend development server:
   ```sh
   npm run dev
   ```

## Usage

### User Usage

1. Open your browser and navigate to `http://localhost:5173/`.
2. Register a new user or log in with existing credentials.
3. Browse products, add items to the cart, and proceed to checkout.
4. Complete the payment using Stripe.
5. View order history and track delivery status.



### Admin Setup

1. Navigate to the admin directory:
   ```sh
   cd ../admin
   ```

2. Install dependencies (from package.json):
   ```sh
   npm install
   ```

3. Create a `.env` file in the  admin directory and add the following environment variables:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```

4. Start the admin development server:
   ```sh
   npm run dev
   ```

## Usage

### Admin Usage

1. Navigate to the admin panel at `http://localhost:5174/`.
2. Log in with admin credentials.
3. Manage products: Add, edit, or delete products.
4. Manage orders: View and update order statuses.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## FURTHER ADDITIONS TO BE MADE
1. Integrating Razorpay and other gateways for payment
2. Integrating receipt of cryptocurrencies for payments

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- ALX Full Stack Software Engineering Program
- Stripe for payment processing
- MongoDB for database services
- GreatStack Tutorials
- React.js and Node.js communities

---

**Ikonne Bethel Chibuzo**
```

This README file now includes a section on admin usage, detailing how admins can manage products, orders, and users.

**YOU CAN TRY OUT THE DEMONSTRATION OF THIS APP ON THE HOSTED SITE AT**
*<!-- https://bethel-frontend.vercel.app -->*
*<!-- https://bethel-admin.vercel.app -->*

CREATE A USER ACCOUNT AND LOG IN TO ACCESS THE SITE'S FRONTEND FUNCTIONALITY