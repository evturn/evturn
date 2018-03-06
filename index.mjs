import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(process.cwd(), 'build')));
app.get('*', (req, res) => res.send('index.html'));
app.listen(3002, () => console.log('Serving on 3002'));
