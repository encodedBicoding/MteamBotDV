
import 'babel-polyfill';
import restify from 'restify';
import errorHandler from 'errorhandler';
import { config } from 'dotenv';
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


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
  console.log(app.url);
});

