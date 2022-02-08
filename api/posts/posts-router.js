// implement your posts router here

const Posts = require('./posts-model');
const { Router } = require('express');
const router = Router();



router.get('/', (req, res) => {
    console.log('posts router is working');
    Posts.find(req.query)
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "There was an error while saving the post to the database",
            });
        });
});


module.exports = router;