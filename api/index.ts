import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config();
 
const app = express();
const port = process.env.PORT || 3009;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;