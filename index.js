require('dotenv').config();
const express = require('express');
const connectDb = require('./db/connect');
const articleRouter = require('./routes/article');
const app = express();
const cors = require('cors');
const port = 3000 || process.env.PORT;

const startServer = async () => {
    try {
        await connectDb(process.env.MONGO_URI);
        console.log('Connected to the DB');
        app.listen(port, console.log(`Listeing on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

app.use(cors());
app.use(express.json());
app.use('/api/articles', articleRouter)

startServer();