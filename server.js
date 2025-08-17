const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const db = require('./db');

const subscribersRouter = require('./routes/subscribers');


// Subscriber router 
app.use('/api/subscribers', subscribersRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});