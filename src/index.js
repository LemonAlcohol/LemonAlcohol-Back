const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const api = require('./api');

require('dotenv').config();

const app = express();
const port = 4000;

// DB 연동
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(cookieParser());

app.use('/api', api);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
