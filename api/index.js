const server = require('./app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log('Database connected')
  // Use the port from the environment variable or a default value
  const port = process.env.PORT || 3001;
  server.listen(port, () => {
    console.log('%s listening at ' + port); // eslint-disable-line no-console
  });
});
