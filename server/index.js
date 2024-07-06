import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { routes } from './routes/routes.js';

// Path
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Settings
app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(cors());
app.use(routes);

// Path to React app
app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

// Server
(() => {
    app.listen(app.get('port'));
    console.log(`\x1B[36m Local server started:`);
    console.log(`\x1B[34m https://localhost:${app.get('port')}`);
})();