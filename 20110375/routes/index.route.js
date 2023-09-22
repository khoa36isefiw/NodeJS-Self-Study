// const homePage = require('../controllers/SiteController')
const siteRouter = require('./sinhvien')

function route(app) {
    // app.get('/', (req, res) => {
    //     res.render('Home Page!');
    // })
    app.use('/', siteRouter)
}

// function logRequest(req) {
//     const method = req.method; // Lấy phương thức (POST hoặc GET)
//     const url = req.originalUrl; // Lấy URL của request
  
//     console.log(`Request: ${method} ${url}`);
// }
module.exports = route;