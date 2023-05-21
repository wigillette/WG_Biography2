const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Define API routes
app.get('/api/data', (req, res) => {
  // Handle the API endpoint logic
  res.json({ message: 'API endpoint is working' });
});

// Serve static assets if needed
// app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
