const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const path = require('path')
const fs = require('fs')
const nodeMailer = require('./mail/nodemailer')

app.use(require('./router'))

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use('/assets', express.static(path.resolve(__dirname, 'public')))


app.post('/contact', (req, res) => {
    const { name, email, message } = req.body
    nodeMailer(email)
    // const oldData = JSON.parse(fs.readFileSync(path.resolve(__dirname, './model', 'data.json')))
    // oldData.push({
    //     id: oldData.length + 1 ,name, email, message
    // })
    // fs.writeFileSync(path.resolve(__dirname, './model', 'data.json'), JSON.stringify(oldData, null, 4))
    
    res.send('Successfully sent')
})

app.listen(PORT, console.log(PORT))