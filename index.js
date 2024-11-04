const express = require('express');
const app = express();
const cors = require('cors');

const { analyzerRoutes } = require('./routes');
const { default: logger } = require('./config/logger');
const loggingHandler = require('./helpers/pinoHttp');

const PORT = 5002;

app.use(
  cors({
    origin: '*',
  })
);

app.use(loggingHandler);
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World! Welcome to Big-O');
});

app.use('/api/analyze', analyzerRoutes);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
