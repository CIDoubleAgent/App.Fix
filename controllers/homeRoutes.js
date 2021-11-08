const router = require('express').Router();
const dummyPosts = [{name:"Dr. Seuss"}];

router.get('/', async (req, res) => {
    res.render('homepage', {
        posts: dummyPosts
    });
})

module.exports = router;