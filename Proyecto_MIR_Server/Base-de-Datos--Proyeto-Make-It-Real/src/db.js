//simepre es el mismo código:
const mongoose = require('mongoose');

function initDatabase() {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(process.env.SERVER_URL, options);

  const { connection } = mongoose;

  connection.once('open', () =>
    console.log('Connection established succesfully')
  );
  connection.on('error', (err) => console.log('Something went wrong!', err));
}

module.exports = initDatabase;
