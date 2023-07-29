const express = require('express');
const app = express();
const cors = require('cors');

const adminRoute = require('./src/routes/admin')

app.use(cors());
app.use(express.json());

app.use('/admin', adminRoute)

const PORT = 3300;


app.listen(PORT, () => {
    console.log(`server is running port : ${PORT}`)
});