const router = require('express').Router();

router.get("/", (req, res) => {
    res.render("blog.handlebars")
});

router.post("/", (req, res) => {
    res.render("blog.handlebars")
});

router.get("/:id", (req, res) => {
    res.render("blog.handlebars")
});

router.put("/:id", (req, res) => {
    res.redirect("/")
});

router.delete("/:id", (req, res) => {
    res.redirect("/dashboard")
});

module.exports = router;