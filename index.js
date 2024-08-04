const axios  = require('axios');
const { Telegraf } = require('telegraf')
let binarySearch = 'Hi this is binary search code';

// https://t.me/codeMinion_bot - bot link 
// bot token - 7213964226:AAEZtZp2xOUASdYiVfZo-lLbfj9VaFlbwfs

const bot = new Telegraf('7213964226:AAEZtZp2xOUASdYiVfZo-lLbfj9VaFlbwfs');
bot.start((ctx)=> ctx.reply('Welcome to the new coding bot from minion'));

bot.command('binarySearchjs', (ctx)=> ctx.reply(binarySearch));
// bot.command('binarySearchjs', (ctx)=> ctx.reply("Hiiiiiiiiiiii"));
bot.on('sticker', (ctx)=> ctx.reply("❤️"));

// to fetch code from URL (Raw GITHUB)
bot.command('rotatedBinarySearch', async function (ctx){
    const response = await axios.get('https://raw.githubusercontent.com/tallminion/Recursion/main/ArraysWithRecusion/src/RotatedBinarySearch.java');
    console.log(response.data);
    return ctx.reply(response.data);
})

// to launch the bot
bot.launch();