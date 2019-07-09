const express = require('express');
const router = express.Router();

// @route GET api/posts
// @desc  index  route
// @access Public
router.get("/",(req,res) => {
    res.send('Post');
});


module.exports = router;