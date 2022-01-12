require('dotenv').config();

module.exports = {
    MongoDB_URI: process.env.MONGO_URI || "mongodb://localhost/takscli"
}