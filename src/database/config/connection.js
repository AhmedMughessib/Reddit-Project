require("dotenv").config();
const { Pool } = require("pg");


const dbUrl = process.env.DB_URL;

if(!dbUrl) throw new Error('No database URL!');

const pool = new Pool({
    connectionString: dbUrl,
    ssl: false
});


module.exports = {pool};