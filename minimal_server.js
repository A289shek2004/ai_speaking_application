const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>TaskAI</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; text-align: center; background-color: #f5f5f5; }
          .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          h1 { color: #333; }
          p { color: #666; }
          .status { padding: 15px; background-color: #e7f7e7; border-radius: 4px; margin: 20px 0; }
          .button { display: inline-block; background: #4CAF50; color: white; padding: 10px 20px; border-radius: 4px; text-decoration: none; margin-top: 15px; }
          .card { border: 1px solid #ddd; padding: 15px; margin: 15px 0; border-radius: 4px; text-align: left; }
          .card h3 { margin-top: 0; color: #333; }
          .priority { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 12px; margin-right: 10px; }
          .priority.high { background-color: #FFEBEE; color: #D32F2F; }
          .priority.medium { background-color: #FFF8E1; color: #FFA000; }
          .priority.low { background-color: #E8F5E9; color: #388E3C; }
          .tag { display: inline-block; background: #E0E0E0; padding: 3px 8px; border-radius: 20px; font-size: 12px; margin-right: 5px; color: #616161; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>TaskAI</h1>
          <div class="status">
            <p>This is a preview of the TaskAI application</p>
          </div>
          
          <p>TaskAI is an AI-powered personal task manager that helps you organize your work with intelligent task suggestions.</p>
          
          <h2>Sample Tasks</h2>
          
          <div class="card">
            <span class="priority high">High Priority</span>
            <h3>Complete Project Proposal</h3>
            <p>Finalize the project proposal document with budget estimates and timeline.</p>
            <div>
              <span class="tag">work</span>
              <span class="tag">urgent</span>
            </div>
          </div>
          
          <div class="card">
            <span class="priority medium">Medium Priority</span>
            <h3>Schedule Team Meeting</h3>
            <p>Set up a team meeting to discuss the quarterly goals and upcoming projects.</p>
            <div>
              <span class="tag">management</span>
              <span class="tag">planning</span>
            </div>
          </div>
          
          <div class="card">
            <span class="priority low">Low Priority</span>
            <h3>Research New Tools</h3>
            <p>Look into new productivity tools that could help streamline our workflow.</p>
            <div>
              <span class="tag">research</span>
              <span class="tag">tools</span>
            </div>
          </div>
          
          <p>Your TaskAI application is almost ready to use!</p>
          <p>You still need to fix the package.json file in your GitHub repository to deploy it on Render.</p>
          
        </div>
      </body>
    </html>
  `);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Preview server running at http://0.0.0.0:${port}/`);
});
