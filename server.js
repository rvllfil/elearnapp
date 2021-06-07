const express = require("express")
const app = express()

app.use(express.json())


// ROUTES
app.use('/api/bab', require('./routes/api/bab'))
app.use('/api/sub-bab', require('./routes/api/sub_bab'))
app.use('/api/materi', require('./routes/api/materi'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))



const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on PORT ${port}`))