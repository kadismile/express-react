var router = require('express').Router();
const Post = require('../Models/Post')


router.get('', async(req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts)
  }catch(error){
    res.json({message: error})
  }
});

router.post('/create', async(req, res)=> {
  const post = new Post(req.body);
  try {
    const savedPost = await post.save();
    res.send(savedPost)
  }catch(error){
    res.status(500).json({status: 'failed', message: error.message })
  }

});

router.get('/:postId', async(req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post)
  }catch(error){
    res.status(404).json({status: 'failed', message: error.message })
  }
});

router.delete('/:postId', async(req, res) => {
  try {
    const post = await Post.remove({_id: req.params.postId});
    res.json(post)
  }catch(error){
    res.status(404).json({status: 'failed', message: error.message })
  }
});

router.patch('/:postId', async(req, res) => {
  try {
    const post = await Post.updateOne({_id: req.params.postId},
        {$set: req.body}
      );
    res.json({message:"Success ", body: post})
  }catch(error){
    res.status(404).json({status: 'failed', message: error.message })
  }
});

module.exports = router;