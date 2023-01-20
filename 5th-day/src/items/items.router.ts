import express, { Request, Response } from 'express';
import * as ItemService from './items.service';
import { BaseItem, Item } from './item.interface';

export const itemsRouter = express.Router();

// GET items
itemsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const items: Item[] = await ItemService.findAll();

        res.status(200).send(items);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// GET items/:id
itemsRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        const item: Item = await ItemService.find(id);

        if (!item) {
            return res.status(404).send('item not found');
        }

        res.status(200).send(item);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// POST items
itemsRouter.post('/', async (req: Request, res: Response) => {
    try {
        const item: BaseItem = req.body;

        const newItem: Item = await ItemService.create(item);

        res.status(201).json(newItem);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// POST items
itemsRouter.post('/', async (req: Request, res: Response) => {
    try {
        const item: BaseItem = req.body;

        const newItem: Item = await ItemService.create(item);

        res.status(201).json(newItem);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// DELETE items/:id
itemsRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        const result: void | null = await ItemService.remove(id);

        if (result === null) {
            return res.status(404).send('item not found');
        }
        res.sendStatus(204);
    } catch (e) {
        res.status(500).send(e.message);
    }
});
