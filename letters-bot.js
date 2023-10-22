import TelegramBot from 'node-telegram-bot-api';
import { createWriteStream, promises as fs } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import 'dotenv/config';

const pipelineAsync = promisify(pipeline);

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
	throw new Error('TELEGRAM_BOT_TOKEN is not set in .env file');
}
const bot = new TelegramBot(token, { polling: true });

// use @userinfobot to find these
const allowedUsers = [1311788757, 5101585056, 1706730391];

bot.on('message', async (msg) => {
	const chatId = msg.chat.id;
	const userId = msg.from?.id;

	if (!allowedUsers.includes(userId)) {
		await bot.sendMessage(
			chatId,
			'Uhhhhhh please talk to @Liz_Lovelace and tell her to add you to the allowedUsers list. Something is a bit broken :)'
		);
		return;
	}

	if (msg.document) {
		const fileId = msg.document.file_id;

		try {
			const fileStream = await bot.getFileStream(fileId);

			const outputPath = './static/letters.svg';
			await fs.mkdir('static', { recursive: true });
			await pipelineAsync(fileStream, createWriteStream(outputPath));

			await bot.sendMessage(chatId, 'File received and saved.');
			await new Promise((r) => setTimeout(r, 2000));
			await bot.sendMessage(chatId, 'I love you ඞ');
		} catch (error) {
			console.error('Error saving file:', error);
			await bot.sendMessage(chatId, 'Failed to save file :(((\nContact @Liz_Lovelace');
		}
	} else {
		await bot.sendMessage(
			chatId,
			'Please send a file (that you exported from the figma file (the figma file with all the letters (the big frame in that file that is specifically for exporting it)))'
		);
	}
});

console.log('Bot is running...');
