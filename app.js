require('dotenv').config();
const express = require('express');
const path = require('path');

const uploadRoute = require('./routes/upload.route');
const { errorHandler } = require('./middleware/error.middleware');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/upload', uploadRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
  console.log(`File is uploaded from: ${path.join(__dirname, 'public')}`);
  console.log(`Running on URL: http://localhost:${PORT}`);
});

