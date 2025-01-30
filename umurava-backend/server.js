const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');
const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});