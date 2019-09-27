module.exports = (sequelize, DataTypes) => {
  const Experiment = sequelize.define(
    'Experiment',
    {
      username: DataTypes.STRING,
      score: DataTypes.STRING,

    },
    {},
  )
  Experiment.associate = function(models) {
    // associations can be defined here
  }
  return Experiment
}
