// const fs = require('fs')
const path = require('path')
const express = require('express')
// const resolve = file => path.resolve(__dirname, file)
// const isProd = process.env.NODE_ENV === 'production'

const app = express()
// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})