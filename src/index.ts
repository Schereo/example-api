import express from 'express';
import { exampleRouter } from './routers/example-router';

const startServer = () => {
	const app = express();
	const PORT = process.env.PORT || 3000;

	app.use(express.json());
	app.use(exampleRouter);
	app.listen(PORT, () => {
		console.log(`App is running on port ${PORT}!`);
	});
};

startServer();
