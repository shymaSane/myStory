const express = require('express')
const router = express.Router()

const storiesController = require('../controller/stories')

router.get('/', storiesController.getStory)
router.get('/new', storiesController.newStory )

module.exports = router
 