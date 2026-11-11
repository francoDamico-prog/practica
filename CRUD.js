import express from 'express'

const app = express()

app.use(express.json())

const users = [
    { id: 1, name: "Jesus" },
    { id: 2, name: "Pepe" },
    { id: 3, name: "Ada" },
    { id: 4, name: "Alvaro" },
    { id: 5, name: "Jose" },
    { id: 6, name: "Pedro" },
    { id: 7, name: "Sofía" },
    { id: 8, name: "Juan" }
];

app.get('/', (req, res) => {
    res.send('listo')
})

app.get('/users', (req, res) => {
    res.json(users)
    const name = req.body.name
    const user = {
        name: "Carlos",
        edad: 22,
        country: "Ecuador"
    }
})
app.post('/users', (req, res) => {
    res.json(users)        
})
app.put('/users', (req, res) => {
    res.json(users)
})
app.patch('/users', (req, res) => {
    res.json(users)
})
app.delete('/users', (req, res) => {
    res.json(users)
})
const PORT = 3002

app.listen(PORT, () => {
    console.log("Server corriendo en mi puerto " + PORT)
})