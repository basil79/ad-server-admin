const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const config = require('./config.json');

const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const reportingRouter = require('./routes/reporting');
const accountsRouter = require('./routes/accounts');
const supplyRouter = require('./routes/supply');
const sitesRouter = require('./routes/sites');
const supplyTagsRouter = require('./routes/supply-tags');
const demandTagsRouter = require('./routes/demand-tags');
const settingsRouter = require('./routes/settings');

const app = express();
const port = normalizePort(process.env.PORT || '8082');

function normalizePort(val) {
  const _port = parseInt(val, 10);

  if(isNaN(_port)) {
    return val;
  }

  if(_port >= 0) {
    return _port;
  }

  return false;
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

app.locals.config = config;

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/reporting', reportingRouter);
app.use('/accounts', accountsRouter);
app.use('/supply', supplyRouter);
app.use('/sites', sitesRouter);
app.use('/supply-tags', supplyTagsRouter);
app.use('/demand-tags', demandTagsRouter);
app.use('/settings', settingsRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}!`)
});
