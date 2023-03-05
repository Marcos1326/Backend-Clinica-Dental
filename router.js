const router = require('express').Router();
const authRoutes = require('./views/authRoutes');

router.use('/auth', authRoutes);

module.exports = router;