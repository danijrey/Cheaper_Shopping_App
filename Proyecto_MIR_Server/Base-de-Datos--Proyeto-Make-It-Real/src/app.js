const express = require('express');
const cors = require('cors');
const initDatabase = require('./db');
const clientRouter = require('./routes/client.js');
const providerRouter = require('./routes/provider.js');
const branchRouter = require('./routes/branch.js');
const loginRouter = require('./routes/login.js');
const productRouter = require('./routes/product.js');
const { auth } = require('./utils/middlewares.js');
const { formData } = require('./utils/middlewareBusboy.js');
const searchRouter = require('./routes/search.js');

const app = express();
initDatabase();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/', loginRouter);
app.use('/clients', clientRouter);
app.use('/clients/search', searchRouter);
app.use('/providers/search', searchRouter);
app.use('/providers', providerRouter);
app.use('/products', productRouter);
app.use('/providers/:id/branch', branchRouter);

module.exports = app;
