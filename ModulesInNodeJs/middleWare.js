const express = require('express');
const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log('Middleware 1');
  next(); // Pass control to the next middleware
});

// Middleware 2
app.use((req, res, next) => {
  console.log('Middleware 2');
  next(); // Pass control to the next middleware
});

// Middleware 3 with route-specific middleware
app.get('/example', (req, res, next) => {
  console.log('Middleware 3 - /example route');
  next(); // Pass control to the next middleware
}, (req, res, next) => {
  console.log('Middleware 4 - /example route');
  res.send('Hello from /example');
});

// Middleware 5 (will not run for /example route)
app.use((req, res, next) => {
  console.log('Middleware 5');
  next(); // Pass control to the next middleware
});

// Catch-all route
app.get('*', (req, res) => {
  res.send('Hello from the catch-all route');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
