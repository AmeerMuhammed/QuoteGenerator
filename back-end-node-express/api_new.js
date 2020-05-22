const fs = require('fs')
const cors = require('cors')
const express = require('express')
const postGen = require('./postgen')
const app = express()
app.use(cors())
const min = 1 //begin of file
const max = 75966 //eof
const randomQuote = (lineNum) => {
    try {
        data = fs.readFileSync('quotes.csv', 'utf8');
        data = data.split("\n")
        str = data[lineNum].split(";")
        quote = str[0]
        author = str[1]
        genre = str[2]
        return ({
            text: quote,
            author: author
        })
    }
    catch (err) {
        console.log(err)
    }
}
app.get('/:id', async (req, res) => {
    return res.send(await randomQuote(req.params.id))
})

app.get('/', async (req, res) => {
    lineNum = Math.floor(Math.random() * (+max - +min)) + +min
    return res.send(await randomQuote(lineNum))
})

app.get('/:handle/:start/:end', async (req, res) => {
    await postGen(req.params.handle, req.params.start, req.params.end)
    return res.send({ success: true })
})
app.listen(8008)