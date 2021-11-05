const router = require('express').Router();
const User = require('../../models/User');

router.get("/signIn", (req, res) => {
    res.render("signIn.handlebars")
});

router.post("/signIn", async (req, res) => {
    console.log(req.body);
    let { username, password } = req.body;
    let userData = await User.findOne({where: {username}});
    if (userData == null) {
        console.log('Login failed');
        res.redirect("/auth/signIn");
    } else if (password == userData.password) {
        res.redirect("/dash");
        // TODO: send the user a cookie
    } else {
        console.log('Login failed');
        res.redirect("/auth/signIn");
    }
});

router.get("/signUp", (req, res) => {
    res.render("signUp.handlebars");
});

router.post("/signUp", (req, res) => {
    let { username, password } = req.body;
    User.create({ username, password })
    .then(function(data) {
        res.redirect("/auth/signIn");
        console.log(data);
    }).catch(function(err) {
        console.error(err);
        res.redirect("/auth/signUp");
    })
});

module.exports = router;