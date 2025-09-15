import http from 'http';

const options = {
  hostname: 'localhost',
  port: 5173,
  path: '/',
  method: 'GET',
  timeout: 2000
};

const req = http.request(options, (res) => {
  if (res.statusCode === 200) {
    console.log('✅ Server is running on http://localhost:5173');
    process.exit(0);
  } else {
    console.log('❌ Server responded with status:', res.statusCode);
    process.exit(1);
  }
});

req.on('error', (err) => {
  console.log('❌ Server is not running:', err.message);
  process.exit(1);
});

req.on('timeout', () => {
  console.log('❌ Server request timed out');
  req.destroy();
  process.exit(1);
});

req.end();
