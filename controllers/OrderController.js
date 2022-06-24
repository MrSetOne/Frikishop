const { Order, Product, ProductOrders, Sequelize } = require('../models/index.js')
const { Op } = Sequelize

const OrderController = {
    async create(req, res) {
        try {
            req.body.paid = false
            const order = await Order.create({...req.body, UserId: req.user.id })
            console.log(req.body)
            req.body.productIds.forEach(async element => {
                console.log(element.id)
                await ProductOrders.create({ ProductId: element.id, OrderId: order.id, amount: element.amount })
            });
            res.status(201).send('Se ha creado el pedido correctamente')
        } catch (error) {
            console.error(error);
            res.send('Algo ha salido mal...')
        }
    },
    async getAll(req, res) {
        try {
            res.send(
                await Order.findAll({
                    include: [
                        { model: Product, through: { attributes: ["amount"] } },
                    ],
                })
            );
        } catch (error) {
            console.error(error);
            res.send('Algo ha salido mal...')
        }
    },
    async getById(req, res) {
        try {
            res.send(
                await Order.findByPk(req.params.id, {
                    include: [
                        { model: Product, through: { attributes: ["amount"] } },
                    ],
                })
            )
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }
    },
}

module.exports = OrderController