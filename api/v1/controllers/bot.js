import adapter from "../../../botadapter";

class Bot { 
  static async MTBot(req, res) { 
    try { 
      adapter.processActivity(req, res, async (tc) => { 
        if (tc.activity.type === 'message') { 
          const feed = tc.activity.value;
          console.log(feed);
        }
        return res.send();
      })
    } catch (err) { 
      throw err;
    }
  }
}

export default Bot