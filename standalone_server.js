import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Convert ESM __filename and __dirname equivalents
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create express app and HTTP server
const app = express();
const server = http.createServer(app);

// Set up a simple API endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'TaskAI server is running' });
});

// Serve static files from client folder if they exist
const staticPath = path.resolve(__dirname, 'client');
if (fs.existsSync(staticPath)) {
  console.log(`Serving static files from ${staticPath}`);
  app.use(express.static(staticPath));
}

// Add fallback route to return a simple HTML page
app.get('*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>TaskAI</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; text-align: center; }
          .container { max-width: 800px; margin: 0 auto; }
          h1 { color: #333; }
          p { color: #666; }
          .status { padding: 10px; background-color: #e7f7e7; border-radius: 4px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>TaskAI Server</h1>
          <div class="status">
            <p>Server is running correctly on port 5000</p>
          </div>
          <p>This is a temporary page to verify that the server is working.</p>
          <p>The full application will be available once the workflow starts properly.</p>
        </div>
      </body>
    </html>
  `);
});

// Start server
const PORT = 5000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}/`);
});