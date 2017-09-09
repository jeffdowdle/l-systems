
import path from 'path';
import express from 'express';
import renderApp from './render';

const app = express();

const defaultPort = 3000;
const dist = path.join('build/dist');
const indexFile = path.join(dist, 'index.html');

app.set('port', process.env.PORT || defaultPort);

app.use('/static', express.static(dist));

app.use('/', renderApp);

app.listen(app.get('port'), () => {
  console.log(`LSYSTEM: App started on port ${app.get('port')}!`);
});
