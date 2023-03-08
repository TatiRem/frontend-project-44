import readlineSync from 'readline-sync'

export const nameRequest = (request) => {
	const name = readlineSync.question(request + ' ');
	console.log(`Hello, ${name}!`);
};	
