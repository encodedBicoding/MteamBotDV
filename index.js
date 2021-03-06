
import 'babel-polyfill';
import restify from 'restify';
import errorHandler from 'errorhandler';
import { config } from 'dotenv';
import Bot from './api/v1/controllers/bot';
config();


const app = restify.createServer();
const isProduction = process.env.NODE_ENV==='production';

const PORT = process.env.PORT;


if (!isProduction) {
  app.use(errorHandler({
    dumpExceptions: true,
    showStack: true,
  }));
} else {
  app.use(errorHandler());
}

app.post('/api/v1/messages', Bot.MTBot);

// call receiver webhook.
app.get('/api/v1/incoming-call', Bot.MTBotCall);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

