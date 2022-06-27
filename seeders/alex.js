'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Products', [{
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