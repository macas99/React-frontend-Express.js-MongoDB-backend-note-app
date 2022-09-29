const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = require('./db/db');

const routes = require('./routes/index.route');
app.use(routes);

const { port } = require('./config/config');
app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});