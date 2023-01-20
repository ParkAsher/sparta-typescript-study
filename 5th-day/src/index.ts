import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

import { itemsRouter } from './items/items.router';

dotenv.config();

// port가 없으면 프로세스 종료
if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.json());
app.use('/api/menu/items', itemsRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Hi');
});

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});
