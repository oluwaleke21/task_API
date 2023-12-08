module.exports = (sequelize, dataType) => {
    const Task = sequelize.define('task', {
        title: {
          type: dataType.STRING,
          allowNull: false,
        },
        description: {
          type: dataType.STRING,
          allowNull: false,
        },
        status: {
          type: dataType.STRING,
          allowNull: false,
        },
      });


return Task;
}


