'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Categories', [{
            name: 'Bumpers',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Clothes',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Melee',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Weapons',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Food',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Health',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Starter pack',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Home',
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    },


    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};