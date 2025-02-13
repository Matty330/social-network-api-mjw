const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');

// Correctly register routes under their respective base paths
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
