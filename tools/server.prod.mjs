import express from 'express';
import { pathTo  } from './utils.mjs';

const app = express();

app.use('/static', express.static(pathTo('static')));
app.use(express.static(pathTo('build')));
app.get('*', (req, res) => res.sendFile(pathTo('build', 'index.html')));
app.listen(3002, () => console.log('Serving on 3002'));
