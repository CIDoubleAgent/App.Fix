const router = require('express').Router();
const User = require('../../models/User');

router.get("/login", (req, res) => {
    res.render("login.handlebars")
});

router.post("/login", async (req, res) => {
    console.log(req.body);
    let { username, password } = req.body;
    let userData = await User.findOne({where: {username}});
    if (userData == null) {
        console.log('login failed');
        res.redirect("/auth/login");
    } else if (password == userData.password) {
        res.redirect("/dash");
        // TODO: send the user a cookie
    } else {
        console.log('login failed');
        res.redirect("/auth/login");
    }
});

router.get("/signup", (req, res) => {
    res.render("signup.handlebars");
});

router.post("/signup", (req, res) => {
    let { username, password } = req.body;
    User.create({ username, password })
    .then(function(data) {
        res.redirect("/auth/login");
        console.log(data);
    }).catch(function(err) {
        console.error(err);
        res.redirect("/auth/signup");
    })
});

module.exports = router;