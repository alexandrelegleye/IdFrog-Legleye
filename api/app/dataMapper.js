const pool = require("./dbClient.js");

const dataMapper = {
    async subscribe(data) {
        let result;
        try{
            const client = await pool.connect();

            result = await client.query('SELECT subscribe($1)',[data]);

            client.release();
        }
        catch(err){
            console.error(err);
        }

        if(!result && !result.rows){
            return null;
        }
        else{
            return result.rows[0].subscribe;
        }
    },
    async login(data) {
        let result;
        try{
            const client = await pool.connect();

            result = await client.query('SELECT login($1)',[data]);

            client.release();
        }
        catch(err){
            console.error(err);
        }

        if(!result && !result.rows){
            return null;
        }
        else{
            return result.rows[0].login;
        }
    }
};

module.exports = dataMapper;