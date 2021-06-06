const Pool = require('pg').Pool

pool = new Pool({
  user: "dbadmin",
  password: "admin123",
  database: 'elearnapp',
  host: '0.0.0.0',
  port: 5432
})

module.exports = pool