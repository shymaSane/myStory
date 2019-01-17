const db = require('../util/database')


exports.getStory = (req, res)=> {
    db.execute(
        'SELECT * FROM story'
    )
    .then(data => {
            const stories = data[0]
            res.render('./stories/stories', {
               stories
            })
    })
    .catch(err => console.log(err))
}