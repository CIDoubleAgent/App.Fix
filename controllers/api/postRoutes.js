const router = require('express').Router();
const Post = require('../../models/Post');

router.get("/", (req, res) => {
    res.render("post.handlebars")
});

router.post("/", (req, res) => {
    const { postTitle, postContents } = req.body
    Post.create({postTitle, postContents, user_id:req.session.user_id})
    res.redirect("/dash")
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