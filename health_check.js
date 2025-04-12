// Health check script to keep the server responsive
const http = require('http');

// Function to make a request to the server
function makeRequest() {
  const options = {
    hostname: '0.0.0.0',
    port: 5000,
    path: '/',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    console.log(`Server responded with status code: ${res.statusCode}`);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      console.log('Response received, server is alive');
    });
  });

  req.on('error', (e) => {
    console.error(`Request error: ${e.message}`);
  });

  req.end();
}

// Make initial request
makeRequest();

// Make a request every 5 seconds
setInterval(makeRequest, 5000);

console.log('Health check script running...');