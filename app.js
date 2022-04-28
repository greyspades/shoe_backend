const SneakifyApi=require('sneaks-api')
const express=require('express')
const sneaks=new SneakifyApi()
const app=express()

app.use(express.json())

app.listen(4000,()=>{
    console.log('listening on port 4000')
})

app.get('/sneaks',(req,res)=>{
    sneaks.getMostPopular(2,(err,products)=>{
        if(err){
            console.log(err)
        }
        else {
            console.log(products)
            res.send(products)
        }
    })
})