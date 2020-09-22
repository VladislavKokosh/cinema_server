const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('/api/auth', require('./routes/auth_routes'))

const PORT = config.get('port') || 5000

async function start () {
    try{
        await mongoose.connect(config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(5000, () => console.log(`Server start on port ${PORT}`))
    } catch (err) {
        console.log('Server Error', err.message);
        process.exit(1)
    }
}

start()
