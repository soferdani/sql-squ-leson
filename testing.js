const Sequelize = require('sequelize')   

const sequelize = new Sequelize('mysql://root:@localhost/sql_intro')


// sequelize //this is to check connection
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     })

    // sequelize
    // .query("SELECT * FROM company")
    // .then(function ([results, metadata]) {
    //   results.forEach(c => console.log(c.name))
    // })
  
    // sequelize
    // .query("INSERT INTO company VALUES('Google')")
    // .then(function ([result]) {
    //     console.log(result)
    // })

const addStudent = async function (id  , name, isBrilliant) {
    let query =`INSERT INTO student VALUES (${id}, '${name}', ${isBrilliant})`
    let result = await sequelize.query(query)
    return result[0]
}
    
const addTeacher = async function (id, name, isTenured) {
    let query =`INSERT INTO teacher VALUES (${id}, '${name}', ${isTenured})`
    let result = await sequelize.query(query)
    return result[0]
}
    

// const enrollStudent = async function (studentName, teacherName) {
    
//     let studentIdRes = await sequelize.query(`select id from student where s_name = "${studentName}"`)
//     let teacherIdRes = await sequelize.query(`select id from student where s_name = "${teacherName}"`)
 

//     console.log(studentIdRes);
//     // console.log(teacherIdRes);
// }


const enrollStudent = async function (studentName, teacherName) {
    let studentData = await sequelize.query(`SELECT s_id FROM student WHERE s_name = '${studentName}'`)
    let teacherData = await sequelize.query(`SELECT t_id FROM teacher WHERE t_name = '${teacherName}'`)

    console.log(studentData);

    let studentId = studentData[0][0].s_id //assuming names are unique
    let teacherId = teacherData[0][0].t_id //remember tha we receive both an array of results and our metadata, hence the [0][0]

    //validating both student and teacher exist
    if (!(studentId && teacherId)) { return }
    
    sequelize.query(`
       INSERT INTO student_teacher
        VALUES (${studentId}, ${teacherId})`)
}

enrollStudent("yossi yosa","master yoda")



// addTeacher (1231, "master yoda", 0)