const fs = require('fs');
const path = require('path');
const https = require('https');
const helmet = require('helmet');
const express = require ('express');
require('dotenv').config();
const passport = require('passport');
const {Strategy} = require('passport-google-oauth20');
const cookieSession = require('cookie-session');

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
}, app ).listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);
});