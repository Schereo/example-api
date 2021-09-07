import { Router } from 'express';

import { getExample } from '../routes/example-route';

export const exampleRouter = Router();

exampleRouter.get('/', getExample);
