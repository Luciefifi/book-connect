import  Sequelize from "sequelize";
const sequelize = new Sequelize('book_connect','postgres','Lavender',{
    host:'localhost',
    dialect:'postgres'
})

 export async function testSequelizeConnection() {
    try {
      // Authenticate and log success message
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      // Synchronize models and log success message
      await sequelize.sync();
      console.log('All models were synchronized successfully.');
    } catch (error) {
      console.error('Error:', error);
    }
  }
export default sequelize