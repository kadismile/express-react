var router = require('express').Router();
const Post = require('../Models/Post')
const PostController = require('../Controllers/postController')


router.get('',PostController.post_get_all);

router.post('/create', PostController.post_create);

router.get('/:postId', PostController.post_find_one);

router.patch('/:postId', PostController.post_update);

router.delete('/:postId',PostController.post_delete);


module.exports = router;