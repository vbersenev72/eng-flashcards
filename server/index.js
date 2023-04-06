
const server = require('express')
const mongoose = require('mongoose')


const PORT = 5000
const db = ''

const StartServer = () => {
    try {
        server.listen(PORT, () => console.log(`Сервер запущен по порту: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
StartServer()

server.GET('/home', (req, res)=>{
    res.status(200).send('hello world')
})

// app.use(router)
