const express = require ('express');
const path = require('path'); 

const app = express();
const PORT = process.env.PORT || 8080;
const tables = require ('./data/tableData');
const waitlist = require ('./data/waitinglistData'); 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/home.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'public/reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'public/tables.html')));

app.get("/api/tables", (req, res) => res.json(tables) );

app.get("/api/waitlist", (req, res) => res.json(waitlist) );

app.post('/api/tables', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    if (tables.length < 5){
    const newTables = req.body;

    console.log(newTables);
  
    tables.push(newTables);
    res.json(newTables);
    } else {
        waitlist.push(newTables);
    }
  });

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
