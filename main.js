var express = require('express');
fs = require('fs');
var app = express();

app.get('/get_meta_data/:module/:screen', function (req, res) {

    let path = __dirname + "/src/ui-config/specification/" + `${req.params.module}` + "/" + `${req.params.screen}`;

    let result = moduleIsAvailable(path);

    if (result) {
        let result = require(path);
        res.send(result);
    } else {
        res.send("Data not found!");
    }
});

function moduleIsAvailable(path) {
    try {
        require.resolve(path);
        return true;
    } catch (e) {
        return false;
    }
}

var server = app.listen(8000, function () {
    console.log('server is running at ' + server.address().port + ' port');
});