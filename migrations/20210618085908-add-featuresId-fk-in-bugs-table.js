module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('bugs', 'feature_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'features',
          key: 'id',
        },
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('bugs', 'feature_id');
  },
};
