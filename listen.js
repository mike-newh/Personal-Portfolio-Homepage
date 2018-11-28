const server = require('./index.js')
const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT : 9090 


server.listen(PORT, (err)=>{
    if (err) console.log({err})
    else console.log('listening')
})