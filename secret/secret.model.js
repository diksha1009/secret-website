const pool = require("../config/database");

module.exports = {
    registerUser: (params, callBack) => {
        pool.query(`INSERT INTO secret_db.user_table(user_name, email_id, password) values(?,?,?)`, [params.user_name,params.email_id,params.password], (error, results) => {
            if (error) {
                callBack(error);
            }
            if (results) {
                return callBack(null, results);
                    
            }
        });
    },
    loginUser:(params,callBack)=>{
        pool.query(`SELECT * from secret_db.user_table where email_id = ? and password = ?`, [params.email_id,params.password], (error, results) => {
            if (error) {
                callBack(error);
            }
            if (results) {
                return callBack(null, results);
                    
            }
        });
    }
}
