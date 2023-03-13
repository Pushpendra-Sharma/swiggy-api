const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const router = require('./routes');
const port = process.env.PORT || 3010;

const app = express();

dotenv.config();

app.use(express.static('static'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./pages/index.html'));
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`[API] App running on port ${port}...`);
});

module.exports = app;
