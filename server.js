// Import Express
const express = require('express');
const app = express();

// Use environment variable PORT or default to 3000
const PORT = process.env.PORT || 3000;

// Define a GET route at "/"
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Simple Page</title>
    </head>
    <body>
      <h1>Hello from Express!</h1>
      <p>This is a hardcoded HTML page served using Express.</p>
      <p>Server running on port ${PORT}</p>
      <p>Environment: ${process.env.NODE_ENV || 'development'}</p>
    </body>
    </html>
  `);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    port: PORT 
  });
});

// Start the server - IMPORTANT: Bind to 0.0.0.0, not localhost
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Available endpoints:`);
  console.log(`  - GET / (homepage)`);
  console.log(`  - GET /health (health check)`);
});