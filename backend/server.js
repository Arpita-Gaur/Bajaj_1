const express = require('express');
const cors = require('cors');  // Import the CORS package
const bodyParser = require('body-parser');
const bfhlRoutes = require('./routes/bfhlRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Use the CORS middleware
app.use(cors());

// Middleware to parse incoming requests
app.use(bodyParser.json());

// API routes
app.use('/api', bfhlRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
