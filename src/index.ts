import express from 'express';
import { exampleRouter } from './routers/example-router';

const startServer = () => {
	const app = express();
	const port = 3000;

	app.use(express.json());
	app.use(exampleRouter);
	app.listen(port, () => {
		console.log(`App is running on port ${port}!`);
	});
};

startServer();
