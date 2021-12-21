
import botbuilder from 'botbuilder';
import { config } from 'dotenv';

config();

const adapter = new botbuilder.BotFrameworkAdapter({
  appId: process.env.MicrosoftAppId,
  appPassword: process.env.MicrosoftAppPassword,
});

export default adapter;
