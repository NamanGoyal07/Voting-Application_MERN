const express = require('express');
// const { errorHandler } = require('./handlers');
const app = express();
const port = 4000;
const errorHandler = require('./handlers/index');

app.get('/', (req,res) => {
    res.json({
        hello: 'world'
    });
})

// Error Handling
app.use(errorHandler.notFound);
app.use(errorHandler.errors);

app.listen(port,
    console.log(`Server startted in port ${port}`)
);



