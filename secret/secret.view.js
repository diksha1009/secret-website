const router = require("express").Router();
const {registerFunc,loginFunc,submitFunc} = require("./secret.controller");
//views
// router.get("/", checkToken);
// router.get("/:mobile", sendFunc);
// router.post("/refresh", refreshToken);
router.get("/", function(req,res){
    res.render("home");
})
router.get("/login", function(req,res){
    res.render("login");
})
router.get("/register", function(req,res){
    res.render("register");
})
router.get("/submit", function(req,res){
    res.render("submit");
})
router.get("/logout", function(req,res){
    res.render("logout");
})
router.post("/register", registerFunc);
router.post("/login", loginFunc);
router.post("/submit", submitFunc);
module.exports = router;

