const Sequelize = require('sequelize');

// Initialize Sequelize with database connection
const sequelize = new Sequelize('cohort5express', 'leke', 'Leke@123',
{
  host:'localhost',
  dialect:'mysql',
  pool:{
    max:5,
    min:0,
    acquire:5000,
    idle:1000
  }
}
)

// // Initialize Sequelize with your database connection
// const sequelize = new Sequelize({
//   dialect: 'mysql',
//   host: 'localhost',
//   username: 'your_db_username',
//   password: 'your_db_password',
//   database: 'your_db_name',
// });




sequelize.authenticate()
  .then(()=>{
    console.log('DB connected!')
  })
  .catch(err=>{
    console.log('could not establish connection', err)
  }) 

  
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Register The Database Table
db.task = require('./task.js')(sequelize,Sequelize)



module.exports = db;  


  