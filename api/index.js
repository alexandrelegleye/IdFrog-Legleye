// librairies
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const router = require('./app/router');
const session = require('express-session');
const profileMiddleware = require('./app/middlewares/profile');
const cors = require('cors');
const fileUpload = require('express-fileupload');


const port = process.env.PORT || 3002;

// vars
const app = express();
app.use('/data/ProjectsImages', express.static('./data/ProjectsImages'));

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload({
limits:{fileSize: 2 * 1024 * 1024},
safeFileNames: true,
preserveExtension: 4,
abortOnLimit: true,
}));

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: process.env.SESSION_SECRET
}))
app.use(profileMiddleware);

app.use(router);

/*
 * Server
 */
app.listen(port, () => {
  console.log(`listening on *:${port}`);
});