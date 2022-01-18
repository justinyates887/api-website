require('dotenv').config()
const routes = require('./routes')

const express = require("express");
const passport = require('passport')
const cors = require('cors')
const path = require('path')

const app = express();

const PORT = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["GET", "POST", "PUT"],
    credentials: true
}))

app.use('/api', routes);

// app.get('*', (request, response) => {
// 	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});