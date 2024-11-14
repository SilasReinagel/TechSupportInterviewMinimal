// @ts-check
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({
  origin: '*',
  methods: '*',
  allowedHeaders: '*'
}));
app.use(express.json());

const port = 3055;

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => {
    console.log(`Server - Server running on port ${port}`);
});
