require ('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Idea = require('./models/Idea')

const mars = new Idea({
    title: 'Fly to Mars!',
    description: "We need an alternative plan to expand human population."
})

const tesla = new Idea({
    title: 'Build a Car',
    description: "Make a car so we never pay for gas again."
})

Idea.remove({})
.then(() => mars.save())
.then(() => tesla.save())
.then(() => console.log('Succesfully seeded database!'))
.then(() => mongoose.connection.close())