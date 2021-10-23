const router = require('express').Router();
const dummyBlogs = [{name:"Dr. Seuss"}];

router.get('/', async (req, res) => {
    res.render('homepage', {
        blogs: dummyBlogs
    });
})

module.exports = router;