const express = require('express');
const path = require('path');
const app = express();
const PORT = 3040;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>LOOPII</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-image: url('/background.jpg');
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            font-family: 'Segoe UI', sans-serif;
            text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
          }
          h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
          }
          img {
            height: 250px;
            width: auto;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to LOOPII World </h1>
        <img src="/doll.gif" alt="Dancing Doll" />
      </body>
      </html>
    `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
