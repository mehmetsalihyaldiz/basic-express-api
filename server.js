import express from "express";

const app = express()
const port = 3500

app.get('/api/v1', (req, res) => {
    res.status(200).json({ user: [{ "id": 1, "name": "user", "status": "test" }] })
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})