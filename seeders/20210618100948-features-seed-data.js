module.exports = {
  up: async (queryInterface) => {
    const featuresList = [
      {
        id: '1',
        name: 'NavBar',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '2',
        name: 'Dashboard',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '3',
        name: 'Forms',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '4',
        name: 'userAuth',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('features', featuresList);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('features', null, {});
  },
};
