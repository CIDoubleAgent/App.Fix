const router = require('express').Router();

router.get("/signIn", (req, res) => {
    res.render("signIn.handlebars")
});

router.post("/signIn", (req, res) => {
    res.render("signIn.handlebars")
});

module.exports = router;