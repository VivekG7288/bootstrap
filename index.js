const express = require('express');
const app = express();

// Enable CORS for your domain (replace 'your-domain.com' with your actual domain)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://your-domain.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Code');
  next();
});

// Your route handling code here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



const accessCode = '63SAS4N2C3A6VQ2NEW5889WJI';
const endpoint = 'https://forms.maakeetoo.com/formapi/329'; // Make sure to use the correct protocol (https://)

// Define headers with the access code
const headers = new Headers({
  'Code': accessCode
});

// Make a GET request to the endpoint with the access code in the header
fetch(endpoint, {
  method: 'GET',
  headers: headers
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Assuming the response is in JSON format
  })
  .then(data => {
    // Handle the retrieved data here
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });