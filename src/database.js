const { connection, connect } = require('mongoose')
const { MongoDB_URI } = require('./config')
const connectDB = async () => {
    await connect(MongoDB_URI)
}
connection.on('error', err => console.log(err))
module.exports = {
    connectDB, connection
}