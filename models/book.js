// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Book extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Book.init({
//     title: DataTypes.STRING,
//     pageCount: DataTypes.INTEGER,
//     publication: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Book',
//   });
//   Book.belongsToMany(Author, { through: ActorMovies });
//   return Book;
// };


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      models.Book.belongsToMany(models.Author, { through: 'ActorMovies' });
    }
  }
  Book.init({
    title: DataTypes.STRING,
    pageCount: DataTypes.INTEGER,
    publication: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
