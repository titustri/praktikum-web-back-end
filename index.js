const express = require("express");
const PORT = 5000;
const app = express();
const knex = require("./db/knex");
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routerV1 = require('./routes/v1/index')
const swaggerUI = require("swagger-ui-express");
const swaggerFile = require('./swagger_output.json')
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.get("/ping", (req, res) => {
    res.send({
        error: false,
        message: "Server is healthy",
    });
});
//app.listen(PORT, () => {
//    console.log("Server started listening on PORT :"+ PORT);
//});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test-html", (req, res) => {
    res.sendFile(__dirname+'/index.html');
});
app.get("/test-json", (req, res) => {
    res.status(200).json({
        success: true,
        data: [{
            nim:"202131420019",
            nama: "Titus",
            prodi: "Teknik Informatika"
        }]
    })
});
app.listen(PORT, () => {
knex.raw('select 1=1 as test')
.then(result=> { console.log('DB CONNECTION: ',result.rows[0].test)})
.catch(err=>{console.log('ERROR DB:',err)});
console.log("Server started listening on PORT : " + PORT);
});

app.use(morgan('tiny'));
// parsing the request bodys
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
limit: '50mb',
extended: true
}));
// inisialisasi router
app.use('/v1/', routerV1);








