
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
// "alter" va a modificar y sincronizar sin tirarse la barra entera force
conn.sync({ alter: true }).then(() => {
  server.listen(3001, () => {
    console.log('Server is listening at 3001'); // eslint-disable-line no-console
  });
});
