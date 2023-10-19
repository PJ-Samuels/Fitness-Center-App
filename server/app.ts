import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {MongoClient, Db, ObjectId} from 'mongodb';
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
app.post("/center", (_req, _res) => {
    db.collection("locations").findOne({uid: _req.body.uid}).then((result) => {
        _res.json(result);
    });
});

app.post('/center-info', (_req, _res) => {
    // console.log(_req.body.location.name)
    const filter = { uid: _req.body.location.uid };
    const options = { upsert: true };
    const fitness_data = {
        name: _req.body.location.name,
        address: _req.body.location.address,
        phone: _req.body.location.phone,
        summary: _req.body.location.summary,
    }

    const update = { $set: fitness_data };
    db.collection('locations').updateOne(filter, update, options)
    .then((result) => {
      if (result.modifiedCount === 1) {
        _res.json("Document updated");
      } else {
        _res.json("New document created");
      }
    })
});

app.get('/locations', (_req, _res) => {
    // console.log(_req.body)
    const locations = db.collection('locations');
    locations.find().toArray().then((result) => {
        _res.json(result);
    });
})

app.post('/login', (_req, _res) => {
    let user = _req.body.user.name;
    let email = _req.body.user.email;
    let uid = _req.body.user.id;
    const users = db.collection('users');
    users.findOne({ uid: uid }).then((result) => {
        if (result) {
            console.log("user already exists");
            return;
        }
        else {
            users.insertOne({name: user, email: email, uid: uid});
        }
    });


    _res.json(users+" recieved");
})
app.post('/signup', (_req, _res) => {
    console.log("signup reached");
});
app.listen(port, () => {
    console.log(`TypeScript with Express http://localhost:${port}/`);
});
