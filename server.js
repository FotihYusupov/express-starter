const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require('node-cron');
const routes = require('./routes/router');
const { getBackup } = require('./backup');
const video = require('./video');

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log('db error', err.message));

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is run!')
})

app.get('/video/:video', video)

cron.schedule('0 0 */24 * * *', () => {
  console.log('Running backup job...');
  getBackup();
}, {
  scheduled: true,
  timezone: 'Asia/Tashkent'
});

app.use(routes);

app.use('/uploads', express.static('uploads'))

app.listen(process.env.PORT || 3001, () => console.log('server is run'));
