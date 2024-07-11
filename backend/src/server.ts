import fastify from "fastify";


const app = fastify()



app.get('/', async (req, res) => {
    res.send('Hello, World!');
    return "1"
})


app.listen({port: 3000}).then(async () => {
    console.log(`Server running!`)
})