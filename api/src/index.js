import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/produto', async (req, resp) => {
    try {

    } catch (e) {
        
    }
})

app.post('/produto', async (req, resp) => {
    
})

app.put('/produto/:id', async (req, resp) => {
    
})

app.delete('/produto/:id', async (req, resp) => {
    
})


app.listen(process.env.PORT,
           x => console.log(`Server up at port ${process.env.PORT}`))