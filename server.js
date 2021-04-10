const express = require ('express');
const path = require('path'); 

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [

]

const waitlist = [
    
]

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/home.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'public/reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'public/tables.html')));

app.get("/api/reservations", (req, res) => res.json(reservations) );

app.get("/api/waitlist", (req, res) => res.json(waitlist) );


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
