const router = require('express').Router();

router.get("/", (req, res) => {
    res.render("post.handlebars")
});

router.post("/", (req, res) => {
    res.render("post.handlebars")
});

router.get("/:id", (req, res) => {
    res.render("post.handlebars")
});

router.put("/:id", (req, res) => {
    res.redirect("/")
});

router.delete("/:id", (req, res) => {
    res.redirect("/dashboard")
});

module.exports = router;