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
            }, {
                "name": "Zombie smasher",
                "description": "A great way to run over zombies without damaging your car",
                "price": 10000,
                "stock": 2495,
                "CategorieId": 1,
                "SetId": 2,
                "img": "Hyundai-Zombie-Proof-Survival-Vehicle-5.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": " Bumber yellow chulito",
                "description": "chulito",
                "price": 2000,
                "stock": 295,
                "CategorieId": 1,
                "SetId": 1,
                "img": "s-l500.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Zombie enrollador",
                "description": "Good ",
                "price": 1500.43,
                "stock": 25,
                "CategorieId": 1,
                "SetId": 3,
                "img": "zBXHLnM.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Zombie high heels",
                "description": "Una fantástica camiseta de AC para que luzcas esta primavera",
                "price": 2500.43,
                "stock": 25,
                "CategorieId": 2,
                "SetId": 2,
                "img": "costume-womens-zombie-shoes-7243-p.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Zombie protector",
                "description": "",
                "price": 3500.43,
                "stock": 25,
                "CategorieId": 2,
                "SetId": 4,
                "img": "9f90b2044b462a3fe023f77b9c5ed02b.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "fine zombie suit (to go out in style)",
                "description": "zombie suit",
                "price": 16000.5,
                "stock": 3049,
                "CategorieId": 2,
                "SetId": 5,
                "img": "osui-0037_halloween_suit_zombiac_1_x7monsbqjgyay1qo.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Maximun protection (and warmth)",
                "description": "Vegeta super saiyajin 3",
                "price": 2700.5,
                "stock": 3049,
                "CategorieId": 2,
                "SetId": 7,
                "img": "tumblr_c4b0020d9fc9967c39c7ede704c00b82_e7878ed3_540.png",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Melee starter kit",
                "description": "Vas bien con eso",
                "price": 1700.65,
                "stock": 23495,
                "CategorieId": 3,
                "SetId": 6,
                "img": "Z5rQz.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "name": "Rusty chainsaw (second hand)",
                "description": "Todo el team de dragon ball listo para pelear contigo",
                "price": 3.6000,
                "stock": 295,
                "CategorieId": 3,
                "SetId": 7,
                "img": "wood-cutting-machine-old-woodcutter-engine-rusty-168025420.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "name": "Magic Melee set",
                "description": "Todo el team de dragon ball listo para pelear contigo",
                "price": 3000.6000,
                "stock": 295,
                "CategorieId": 3,
                "SetId": 7,
                "img": "f185fae046b28f0c26b89385ed6a40cf.jpg",
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