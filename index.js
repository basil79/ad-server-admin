const express = require('express');

const app = express();

const port = normalizePort(process.env.PORT || '8083');

function normalizePort(val) {
  const port = parseInt(val, 10);

  if(isNaN(port)) {
    return val;
  }

  if(port >= 0) {
    return port;
  }

  return false;
}

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`)
});
