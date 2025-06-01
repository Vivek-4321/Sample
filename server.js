// Import Express
const express = require('express');
const app = express();
const PORT = 3000;

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
      </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
