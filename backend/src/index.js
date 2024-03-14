import express from 'express'
import dotenv from 'dotenv'
import dbConfig from './db/config.js'

const app = express()

dotenv.config({
    path:'./env'
})
dbConfig()

const host =  process.env.HOST || 'localhost'
const port = process.env.PORT || 3000



app.listen(port,()=>{
    console.log(`Server is running on http://${host}:${port}`)
})
