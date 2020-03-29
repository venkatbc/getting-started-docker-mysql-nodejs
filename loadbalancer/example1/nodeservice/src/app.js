const express =  require('express')
const app = express()

const port = 5000

const name = process.env.name || "world"

app.get("/", (req,res) => {

	res.send( `Hello ${name}`)
});

app.listen(port , () => {
	console.log('server is started with port 5000')
})