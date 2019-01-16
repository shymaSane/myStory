const db = require('../util/database')


exports.getStory = (req, res)=> {
    db.execute(
        'SELECT * FROM story'
    )
    .then(data => {
        data.map((story) =>{
            const {story_id, title, story_text, image_url, genre} = story
            res.render('./stories/stories', {
                story_id, title, story_text, image_url, genre
            })
        })
    })
    .catch(err => console.log(err))
}