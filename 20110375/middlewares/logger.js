function requestLogger(req, res, next) {
    const method = req.method; // Lấy phương thức (POST hoặc GET)
    const url = req.originalUrl; // Lấy URL của request
  
    console.log(`Request Method: ${method}, URL: ${url}`);
    next(); // Chuyển tiếp yêu cầu cho middleware hoặc route tiếp theo
}
  
module.exports = requestLogger;