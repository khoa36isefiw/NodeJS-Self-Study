const express = require("express")
const route = require('./routes/index.route.js');
const morgan = require("morgan");
const requestLogger = require('./middlewares/logger.js')

const app = express();
const port = 5000;

// loger method: POST, GET, URL
app.use(requestLogger);
// gửi dữ liệu qua client
app.use(express.json());



route(app);

app.use(requestLogger);


// listen server at port 5000
app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});

