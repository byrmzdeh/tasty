import express from 'express'
import mongoose, { Schema } from 'mongoose'
const app = express()
const port = 5000
import cors from 'cors'


app.use(cors())
app.use(express.json())

const TastySchema = new Schema({
    img: String,
    name: String,
    desc: String,
    price: Number
});

const tastyModel = mongoose.model('tasty', TastySchema);


app.get('/', async (req, res) => {
    try {
        const tasty = await tastyModel.find({})
        res.send(tasty)
    } catch (error) {
        console.log(error.message);
    }
})

app.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const tasty = await tastyModel.findById(id)
        res.send(tasty)
    } catch (error) {
        console.log(error.message);
    }
})

app.post('/', async (req, res) => {
    try {
        const {img,name,desc,price} = req.body
        const tasty = new tastyModel({img,name,desc,price})
        await tasty.save()
        res.send(tasty)
    } catch (error) {
        console.log(error.message);
    }
})


app.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {img,name,desc,price} = req.body
        const tasty = await tastyModel.findByIdAndUpdate(id,{img,name,desc,price})
        res.send(tasty)
    } catch (error) {
        console.log(error.message);
    }
})


app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const tasty = await tastyModel.findByIdAndDelete(id)
        res.send(tasty)
    } catch (error) {
        console.log(error.message);
    }
})


mongoose.connect('mongodb+srv://aydan:aydan@cluster0.ccton5y.mongodb.net/')
    .then(() => console.log('Connected !'))
    .catch(() => console.log('Not Connected'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})