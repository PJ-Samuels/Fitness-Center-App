import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {MongoClient, Db} from 'mongodb';
import { sign } from 'crypto';
const app: express.Application = express();
const port: number = 3000;
const dbName = 'Fitness-Finder-App';
const url = 'mongodb://localhost:27017';
let db: Db;
const client = new MongoClient(url);
app.use(cors());
app.use(bodyParser.json());

client.connect().then(() => {
    db = client.db(dbName);
});

app.get('/', (_req, _res) => {
    _res.json("TypeScript With Express");
});

app.post('/center-info', (_req, _res) => {
    console.log("center-info reached");
});

app.post('/login', (_req, _res) => {
    let user = _req.body.user;
    const users = db.collection('users');
    users.insertOne({users: user});
    _res.json(user+" recieved");
})
app.post('/signup', (_req, _res) => {
    console.log("signup reached");
});
app.listen(port, () => {
    console.log(`TypeScript with Express http://localhost:${port}/`);
});
