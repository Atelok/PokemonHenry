
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require("dotenv").config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001

// Syncing all the models at once.
// "alter" va a modificar y sincronizar sin tirarse la barra entera force
conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log('Server is listening at 3001'); // eslint-disable-line no-console
  });
});