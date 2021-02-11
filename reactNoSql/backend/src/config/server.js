const express =  require('express');
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors())

const port = 3333
app.listen(port, () => {
    console.log( "testando..." )
});

module.exports = app


