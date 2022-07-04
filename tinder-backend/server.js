// MbbJzIg2rXXbJsNx


// database access OSFVQ4taI1i5JxUS
// database access 1dPMSJwFLzlv52ZR

import express from 'express'
import mongoose from 'mongoose'
import cards from './dbCards.js'
import Cors from 'cors'



//app config
const app=express();
const port= process.env.PORT || 8001;
const connection_url="mongodb+srv://admin2:1dPMSJwFLzlv52ZR@cluster0.crcl0v4.mongodb.net/?retryWrites=true&w=majority"
//middlewares
app.use(express.json())
app.use(Cors())

//db config
mongoose.connect(connection_url)


// api endpoints
app.get('/', (req,res)=>{
    res.status(200).send('hello clever programmers!!!')
});
app.post('/tinder/cards', (req,res)=>{
    const dbCard=req.body;
    cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500),send(err)

        }
        else{
            res.status(201).send(data)
        }
    });

});

app.get('/tinder/cards',(req,res)=>{
    const dbCard=req.body;
    cards.find(dbCard,(err,data)=>{
        if(err){
            res.status(500),send(err)

        }
        else{
            res.status(200).send(data)
        }
    });


})

//listener
app.listen(port,()=> console.log(`listening on localhose: ${port}`))