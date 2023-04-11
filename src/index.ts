import express from 'express';

const app = express();

app.get('/', (req, res) => res.send("Welcome to my Frontend"))

const PORT = 8080;

app.listen(PORT, () => 
console.log(`Server Running on port: http://localhost:${PORT}`));