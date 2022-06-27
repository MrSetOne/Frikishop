'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Products', [{
                "name": "Mug",
                "description": "Zombie Mug",
                "price": 100,
                "stock": 2495,
                "CategorieId": 8,
                "SetId": 2,
                "img": "mug.jpeg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "name": "Border wall",
                "description": "Border wall",
                "price": 5000,
                "stock": 2495,
                "CategorieId": 8,
                "SetId": 2,
                "img": "borderWall.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "zombie diary",
                "description": "zombie diary wall",
                "price": 2000,
                "stock": 2495,
                "CategorieId": 8,
                "SetId": 2,
                "img": "zombieDiary.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "COD Black Ops",
                "description": "COD Black Ops",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 8,
                "SetId": 2,
                "img": "CODBO.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Starter pack",
                "description": "Starter pack",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 7,
                "SetId": 2,
                "img": "starterpack.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "juggernog",
                "description": "juggernog",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 6,
                "SetId": 2,
                "img": "juggerNog.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Super potion",
                "description": "COD Black Ops",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 6,
                "SetId": 2,
                "img": "pocion-fortnite.webp",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "BFFrapuchino",
                "description": "COD Black Ops",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 6,
                "SetId": 2,
                "img": "frappe.jpeg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Energy drink",
                "description": "COD Black Ops",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 6,
                "SetId": 2,
                "img": "energyDrink.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Zombie food",
                "description": "COD Black Ops",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 5,
                "SetId": 2,
                "img": "zombiefood.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Alubias Litoral",
                "description": "COD Black Ops",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 5,
                "SetId": 2,
                "img": "alubias.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Marshmellow bag",
                "description": "COD Black Ops",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 5,
                "SetId": 2,
                "img": "marshmellow.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Doritos",
                "description": "COD Black Ops",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 5,
                "SetId": 2,
                "img": "doritos.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "BFG-9000",
                "description": "COD Black Ops",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 4,
                "SetId": 2,
                "img": "BFG.webp",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Ray-gun",
                "description": "COD Black Ops",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 4,
                "SetId": 2,
                "img": "raygun.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Blundergat",
                "description": "COD Black Ops",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 4,
                "SetId": 2,
                "img": "blundergat.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "MonkeyBomb",
                "description": "COD Black Ops",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 4,
                "SetId": 2,
                "img": "MonkeyBomb.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Mincer",
                "description": "COD Black Ops",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 4,
                "SetId": 2,
                "img": "machine-guns-e1523037324594.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "RPG",
                "description": "COD Black Ops",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 4,
                "SetId": 2,
                "img": "Rpg-7.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
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