const express = require('express')
const router = express.Router()

router.get('/stories', (req, res) => {
    res.render('./stories/story')
})

module.exports = router
 