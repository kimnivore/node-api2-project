// implement your posts router here

const Posts = require('./posts-model');
const { Router } = require('express');
const router = Router();


// 1 [GET] /api/posts
router.get('/', (req, res) => {
    console.log('posts router is working');
    Posts.find(req.query)
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "The posts information could not be retrieved" 
            });
        });
});
// 2 [GET] /api/posts/:id
router.get('/:id', (req, res) => {
    Posts.findById(req.params.id)
        .then(post => {
            if(post) {
                res.status(200).json(post);
            }else{
                res.status(404).json({
                    message: "The post with the specified ID does not exist"
                });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "The post information could not be retrieved"
            })
        })
})

// 3 [POST] /api/posts
// 4 [PUT] /api/posts/:id
// 5 [DELETE] /api/posts/:id
// 6 [GET] /api/posts/:id/comments


module.exports = router;