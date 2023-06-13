const express = require("express");
const mongoose = require('mongoose');
const categoryRoute = require('./routes/categoryroute');

// Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const SwaggerOptions = require('./swagger/swagger.json');
const swaggerDocument = swaggerJsDoc(SwaggerOptions);

const app = express();
app.use(express.json()) 
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'OPTIONS, GET, POST');
    res.setHeader("Access-Control-Allow-Headers",'Content-Type,Authorization');
    next();
 }) 

 app.use('/api', categoryRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((error,req,res,next)=>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message:message});
})
const port=process.env.PORT || 7000; 
        mongoose.connect('mongodb://127.0.0.1:27017/categorytable')
        .then(() => console.log('Connected!'))
         .catch((err)=>console.log(err));
          app.listen(port,()=>{ 
            console.log(`connection successfully ${port}`);
         })