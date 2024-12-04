const {Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: "postgres",
    port: "5432",
    password: 'root',
    database: 'terraclime'
})
client.connect(function(err) {
    if(err) throw err;
    else {
        console.log("Connected");
    }
})

module.exports = client;