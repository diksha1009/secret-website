const {registerUser,loginUser}= require("./secret.model");
module.exports = {
    registerFunc: (req, res) => {
        let params={
            user_name:req.body.name,
            email_id:req.body.email,
            password:req.body.password
        }
        registerUser(params, (err, result) => {
            if (err) {
                console.log(err);
            }
            if (result) {
                res.render("secrets");
            }
        });
    },
    loginFunc:(req,res)=>{
        let params={
            email_id:req.body.email,
            password:req.body.password
        }
        loginUser(params,(err,result)=>{
            if (err) {
                console.log(err);
            }
            if (result) {
                console.log(result);
                res.render("secrets");
            }
        })
    },
    submitFunc:(req,res)=>{
        let params={
            secret:req.body.secret
        }
        console.log(params);
    }

}