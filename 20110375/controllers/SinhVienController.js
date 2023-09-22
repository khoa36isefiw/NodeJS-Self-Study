const {respone} = require('express')
const mygroup = require('../models/model.myGroup')

// class SinhVienController {



//     // [GET] message/id
//     studentInfo(request, respone)  {
//         const {ID} = Number(request.params.id);

//         /*
//              const friend = friends[ID];
//             if (friend) {
//                 res.status(200).json(friend);
//             }
//             else {
//                 res.status(400).json({error:'No friend'});
//             }

//         */ 

//             const group = mygroup[ID];
//             if(group) {
//                 res.status(200).json(friend);

//             }
//             else {
//                 respone.send('Not valid');
//             }

//         // respone.render(
//         //     `
//         //         <html><body><ul><li> ${mygroup[0].name}</li></ul></body></html>
//         //     `
//         // );
//         // if (request.method === 'GET') {
//         //     if (id) {
//         //       const member = mygroup.find(item => item.id === id);
//         //       if (member) {
//         //         respone.send(`<html><body><ul><li>${member.name}</li></ul></body></html>`);
//         //       } else {
//         //         respone.send('Not valid');
//         //       }
//         //     } else {
//         //       const members = mygroup.map(item => `<li>${item.name}</li>`).join('');
//         //       respone.send(`<html><body><ul>${members}</ul></body></html>`);
//         //     }
//         // }
//     }

// }

// module.exports = new SinhVienController();

exports.studentInfo = (req, res, next) => {
     //lấy id từ params (method GET)
    const ID = req.params.id;
    const data = mygroup.getStudentNameFromID(ID);
    res.render(
        `
        <html><body><ul><li>${data}</li></ul></body></html>
        `
    );
    next();
}