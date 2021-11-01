const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const authRoutes = require('./api/authRoutes');
const blogRoutes = require('./api/blogRoutes');
const dashRoutes = require('./api/dashRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/auth', authRoutes);
router.use('/blog', blogRoutes);
router.use('/dash', dashRoutes);

module.exports = router;