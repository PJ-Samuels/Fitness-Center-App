import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
 
const app: express.Application = express();
const port: number = 3000;
app.use(cors());

app.use(bodyParser.json());

app.get('/', (_req, _res) => {
    _res.json("TypeScript With Express");
});
app.listen(port, () => {
    console.log(`TypeScript with Express http://localhost:${port}/`);
});
