
const express = require('express');
const router = express.Router();

// Sample data for demonstration
let sampleData = ["1", "Item ", "3"]; // This could be replaced with your database logic

// GET endpoint to retrieve data
router.get('/bfhl', (req, res) => {
    try {
        // Send the sample data
        res.status(200).json({ data: sampleData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST endpoint to receive data
router.post('/bfhl', (req, res) => {
    try {
        const data = req.body;

        
        if (!data) {
            return res.status(400).json({ error: 'No data provided' });
        }

        
        sampleData.push(data);

        // Send response
        res.status(200).json({ message: 'Data received', data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
