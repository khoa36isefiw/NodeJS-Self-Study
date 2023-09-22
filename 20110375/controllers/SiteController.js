const {mygroup, getStudentNameFromID}   = require('../models/model.myGroup');
class SiteController {
  
  // [GET] /message/:slug
  showName(req, res) {
    const { slug } = req.params;
    if (slug) {
      const studentName = getStudentNameFromID(slug);
      if (studentName) {
        res.send(`<html><body><ul><li>${studentName}</li></ul></body></html>`);
      } else {
        res.send('Not valid');
      }
    } else {
      const students = mygroup.map(student => `<li>${student.name}</li>`).join('');
      res.send(`<html><body><ul>${students}</ul></body></html>`);
    }
  }
  
  showListName(req, res) {
      const students = mygroup.map(student => `<li>${student.name}</li>`).join('');
      res.send(`<html><body><ul>${students}</ul></body></html>`);
  }
  

  // [POST] /<MSSV>/<id>
  addToGroup = (req, res) => {
    const { id } = req.params;
    const newStudent = req.body;
  
   
  
    const isDuplicate = mygroup.find(
      (student) => student.id === id );
    if (isDuplicate) {
      res.send('Not valid 2');
      return;
    }
  
    mygroup.push(newStudent);
    res.json(mygroup);
  };


  // [GET] /<MSSV>/:slug
  getStudentFromList = (req, res) => {
    const {slug} = req.params;
    if (slug) {
      const studentName = getStudentNameFromID(slug);
      if (studentName) {
        const student = mygroup.find((student) => student.id === slug);
        res.json(student);
      } else {
        res.json({error: 'Not valid'});
      }
    } else {
      res.json(mygroup);
    }
  }

  
  

  // [GET] /
  index(req, res) {
    res.json(mygroup);
  }
}

module.exports = new SiteController;
