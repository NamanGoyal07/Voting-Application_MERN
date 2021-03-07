require('dotenv').config();
const express = require('express');
// const { errorHandler } = require('./handlers');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;
const errorHandler = require('./handlers/index');
const routes = require('./routes');

app.use(cors());
app.use(bodyParser.json());

const db = require('./models/index');

// Routes
app.get('/', (req,res) => {
    res.json({
        hello: 'world'
    });
})

// Error Handling
app.use(errorHandler.notFound);
app.use(errorHandler.errors);
app.use('/api/auth',routes.auth);

// Server Listening
app.listen(port,
    console.log(`Server started in port ${port}`)
);



