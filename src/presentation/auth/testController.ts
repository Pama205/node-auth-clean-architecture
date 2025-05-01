// src/presentation/auth/testController.ts

import { Request, Response } from 'express';

export const testController = (req: Request, res: Response) => {
    res.json('test controller');
};