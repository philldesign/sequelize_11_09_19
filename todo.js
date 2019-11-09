module.exports = function(sequelize, DataTypes) {
  const Todo = sequelize.define('Todo', {
    text: DtaTypes.STRING,
    complete: DataTypes.BOOLEAN,
  });
  return Todo;
};
