# Inventory Management System - Backend

## Overview

This is a backend system for an inventory management application built with Node.js, Express.js, and MongoDB. It provides RESTful API endpoints to manage products in an inventory system.

## Features

- Create, read, update, and delete products
- Restock products
- Low stock alerts
- MongoDB database integration
- RESTful API design

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- ES Modules (import/export syntax)

## Prerequisites

- Node.js (v14 or higher recommended)
- MongoDB (local instance or cloud-based)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/inventory-backend.git
   cd inventory-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   MONGO_URI=mongodb://localhost:27017/inventory_db
   PORT=5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   Or for production:
   ```bash
   npm start
   ```

## API Endpoints

### Products

| Method | Endpoint                | Description                          |
|--------|-------------------------|--------------------------------------|
| POST   | /api/products           | Create a new product                 |
| GET    | /api/products           | Get all products                     |
| GET    | /api/products/:id       | Get a single product                 |
| PUT    | /api/products/:id       | Update a product                     |
| DELETE | /api/products/:id       | Delete a product                     |
| PUT    | /api/products/:id/restock | Restock a product                  |
| GET    | /api/products/low-stock | Get products with low stock          |

### Request/Response Examples

**Create Product (POST /api/products)**
Request:
```json
{
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 999.99,
  "quantity": 50,
  "lowStockThreshold": 10
}
```

Response:
```json
{
  "success": true,
  "data": {
    "_id": "6123456789abcdef01234567",
    "name": "Laptop",
    "description": "High-performance laptop",
    "price": 999.99,
    "quantity": 50,
    "lowStockThreshold": 10,
    "createdAt": "2023-08-01T12:00:00.000Z",
    "updatedAt": "2023-08-01T12:00:00.000Z"
  }
}
```

## Project Structure

```
inventory-backend/
├── config/            # Configuration files
│   └── db.js         # Database connection
├── controllers/       # Route controllers
│   └── productController.js
├── models/           # MongoDB models
│   └── Product.js
├── routes/           # Route definitions
│   └── productRoutes.js
├── .env              # Environment variables
├── .gitignore
├── package.json
├── server.js         # Main application file
└── README.md
```

## Environment Variables

- `MONGO_URI`: MongoDB connection string
- `PORT`: Port for the server to listen on (default: 5000)

## Testing

You can test the API using tools like:
- Postman
- cURL
- Thunder Client (VS Code extension)

Example cURL command to create a product:
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Smartphone",
    "description": "Latest smartphone model",
    "price": 799.99,
    "quantity": 30
  }'
```

## Deployment

To deploy this application:
1. Set up a MongoDB database (Atlas or other provider)
2. Update the `MONGO_URI` in `.env` to point to your production database
3. Consider using:
   - PM2 for process management
   - Nginx as a reverse proxy
   - Environment variables for production configuration

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For any issues or questions, please open an issue on the GitHub repository.
