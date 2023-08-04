
const server = require('./app.js');
const { conn } = require('./db.js');

const port = process.env.PORT || 3001;
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log('Database connected')
  server.listen(port, '0.0.0.0', () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});
