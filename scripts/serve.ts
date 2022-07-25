import path from 'path';
import express from 'express';

const app = express();

app.use('/static', express.static(resolve('static')));
app.use(express.static(resolve('build')));
app.get('*', (req, res) => res.sendFile(resolve('build', 'index.html')));
app.listen(9000, () => console.log('Serving on 9000'));

function resolve(...args: string[]) {
  return path.resolve(process.cwd(), ...args);
};