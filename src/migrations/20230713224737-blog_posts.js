'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('blog_posts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      title: {
        type: Sequelize.STRING,
      },

      content: Sequelize.STRING,

      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        }
      },

      published: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },

      updated: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('blog_posts');
  }
};
