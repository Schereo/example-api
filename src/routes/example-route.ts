import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const getExample = async (req: Request, res: Response, next: NextFunction) => {
	try {
		res.status(StatusCodes.OK).send({ Valid: true });
	} catch (error) {
		next(new Error('Could not get example.'));
	}
};
