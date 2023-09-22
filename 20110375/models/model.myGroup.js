const  mygroup = [
    {
      id: '20110375',
      name: 'Huỳnh Đăng Khoa',
    },
    {
      id: '20110406',
      name: 'Huỳnh Quốc Thoại',
    },
    {
      id: '20110380',
      name: 'Phan Thành Luân',
    },
    {
      id: '20110422',
      name: 'Nguyễn Minh Trí',
    },
];
  
  // Lấy tên sinh viên thông qua id
const getStudentNameFromID = (id)  => {
    const student = mygroup.find((student) => student.id === id);
    return student ? student.name : null;
}

  // Export data
module.exports =   {
    mygroup,
    getStudentNameFromID,
};
