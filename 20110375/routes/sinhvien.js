// routes for sinhvien
const express = require('express');
const router = express.Router();
const siteController = require('../controllers/SiteController')



// router.get('/message/2011075', SinhVienController.studentInfo)

router.get('/message/:slug', siteController.showName);
router.get('/message/', siteController.showListName);   
// POST /<MSSV>/<id>
// router.get('/:slug/:slug', siteController.getItem);

router.post('/20110375/:id', siteController.addToGroup);
router.get('/20110375/:slug', siteController.getStudentFromList);



router.get('/', siteController.index);




module.exports = router;