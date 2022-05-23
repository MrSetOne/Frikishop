'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Products', [{
            "name": "Figura Kratos",
            "description": "Una maravillosa figura de Kratos en su última aventura en las tierras nórdicas",
            "price": 10,
            "stock": 2495,
            "CategorieId": 1,
            "SetId": 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "name": "Emoji Valorant",
            "description": "Chapita de Valorant para que la lleves siempre contigo",
            "price": 5.6,
            "stock": 295,
            "CategorieId": 5,
            "SetId": 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "name": "Edward",
            "description": "Una taza que se calienta y muestra a nuestro pirata de AC ",
            "price": 15.43,
            "stock": 25,
            "CategorieId": 2,
            "SetId": 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "name": "Ezio Auditore",
            "description": "Una fantástica camiseta de AC para que luzcas esta primavera",
            "price": 25.43,
            "stock": 25,
            "CategorieId": 3,
            "SetId": 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "name": "Levi Ackerman",
            "description": "Figurita del mejor lider del equipo de exploración en Shingeki no Kyojin",
            "price": 35.43,
            "stock": 25,
            "CategorieId": 1,
            "SetId": 4,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "name": "Mario y Luigi",
            "description": "El dúo dinámico preparado para su próximo juego",
            "price": 16.5,
            "stock": 3049,
            "CategorieId": 1,
            "SetId": 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "name": "Vegeta",
            "description": "Vegeta super saiyajin 3",
            "price": 27.5,
            "stock": 3049,
            "CategorieId": 1,
            "SetId": 7,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "name": "Aragorn",
            "description": "Aragorn conquistando las tierras medias",
            "price": 17.65,
            "stock": 23495,
            "CategorieId": 4,
            "SetId": 6,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "name": "Goku y sus amigos",
            "description": "Todo el team de dragon ball listo para pelear contigo",
            "price": 3.6,
            "stock": 295,
            "CategorieId": 4,
            "SetId": 7,
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