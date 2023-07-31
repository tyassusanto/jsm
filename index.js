const express = require('express');
const app = express();
const cors = require('cors');
const SwaggerUi = require('swagger-ui-express')
const apiDocumentation = require('./apidocs.json')

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(apiDocumentation))


const adminRoute = require('./src/routes/admin')
const userRoute = require('./src/routes/user')

app.use(cors());
app.use(express.json());

app.use('/admin', adminRoute)
app.use('/user', userRoute)

const PORT = 3300;


app.listen(PORT, () => {
    console.log(`server is running port : ${PORT}`)
});