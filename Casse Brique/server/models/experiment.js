module.exports = (sequelize, DataTypes) => {
  const Experiment = sequelize.define(
    'Experiment',
    {
      username: DataTypes.STRING,
      score: DataTypes.STRING,
      lives: DataTypes.INT
    },
    {},
  )
  Experiment.associate = function(models) {

  }
  return Experiment
}
