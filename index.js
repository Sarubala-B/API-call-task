// server.js
const express = require('express');
const userRoutes = require('./userRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/users',userRoutes);



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});