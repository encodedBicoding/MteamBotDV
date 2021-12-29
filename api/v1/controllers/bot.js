import adapter from "../../../botadapter";

const rules = [
  'fuck',
  'shit',
  'money',
  'stock',
  'comply'
];
class Bot { 
  static async MTBot(req, res) { 
    try { 
      adapter.processActivity(req, res, async (tc) => { 
        console.log(tc.activity.type);
        if (tc.activity.type === 'message') { 
          const feed = tc.activity.text;
          console.log(feed);
          if (rules.includes(feed)) {
            await tc.sendActivity(`you uttered a tagged keyworkd ${feed}`);
          }
        }
        return res.send();
      })
    } catch (err) { 
      throw err;
    }
  }

  static async MTBotCall(req, res) { 
    try {
      console.log(req);
      adapter.processActivity(req, res, async (tc) => {
        if (tc.activity.type === 'message') { 
          const feed = tc.activity.text;
          console.log(feed);
          if (rules.includes(feed)) {
            await tc.sendActivity(`you uttered a tagged keyworkd ${feed}`);
          }
        }
        return res.send();
      })
    } catch (err) { 
      throw err;
    }
  }
}

export default Bot