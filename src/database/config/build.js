const fs = require("fs");
const {pool} = require("./connection");
const {join} = require("path")

createTablesQ = fs.readFile(join(__dirname,'build.sql'), "utf8",(err,data) => {
    if (err) {
        console.log('err',err);
    } else {
        pool.query(data);

    }
})

