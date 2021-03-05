require('dotenv').config();
const express = require('express');
// const { errorHandler } = require('./handlers');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;
const errorHandler = require('./handlers/index');

app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req,res) => {
    res.json({
        hello: 'world'
    });
})

// Error Handling
app.use(errorHandler.notFound);
app.use(errorHandler.errors);

// Server Listening
app.listen(port,
    console.log(`Server startted in port ${port}`)
);



