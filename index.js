var express = require('express')
var app = express()

const port = 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    // res.send('hello world')
    res.json({message: "udało się :)"})
})

app.get('/users', function(req, res){
    const users = {
        results: [
            {name:{first: "ala", last: "ma-kota"}},
            {name: {first:"a-kot", last: "ma-ale"}}
        ]
    }
    res.json(users)
})

app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })

  


app.listen(port, () => console.log(`Example app listening on port ${port}!`))