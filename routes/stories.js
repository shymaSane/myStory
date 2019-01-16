const express = require('express')
const router = express.Router()

const storiesController = require('../controller/stories')

router.get('/stories', storiesController.getStory)

module.exports = router
 