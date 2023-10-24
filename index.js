const express = require('express');
const fs =  require('fs');
const path = require('path');
const app = require('express')();
const swaggerTools = require('swagger-tools');
const jsYaml = require('js-yaml');
const database = require('./config/database')

app.use(express.json());

database.databaseConnect();

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";
const options = {
    swaggerUi:path.join(__dirname,'/swagger.json'),
    controllers: path.join(__dirname,'/api/controllers'),
    useStub: env == "development",
}
console.log(path.join(__dirname,'api/swagger.yaml'))
const spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'),'utf8')
const swaggerDoc = jsYaml.load(spec);

swaggerTools.initializeMiddleware(swaggerDoc,(middleware)=>{
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerValidator());
    app.use(middleware.swaggerRouter(options));
    app.use("/swag",middleware.swaggerUi());
});
app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}/swag/docs`)
})