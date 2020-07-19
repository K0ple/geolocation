const express = require('express')
const app = express()
const port = 3000
var axios = require('axios');



app.get('/location/:id', (req, res) => {
    var config = {
        method: 'get',
        url: 'http://ipwhois.app/json/',
        headers: { }
    };
    axios(config)
    .then(function (response) {
        //console.log(JSON.stringify(response.data));
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
    var id = req.params.id;
    //console.log(id);
    res.send('Thanks for reporting to us this location!');
})

app.listen(port, () => console.log(`Example app listening on port port!`))