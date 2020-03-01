const express = require('express')
// This is using mongoose npm package 5.9.2
require('./db/mongoose')
const userRouter = require('./routers/ExpenditureRoutes')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})