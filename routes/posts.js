var router = require('express').Router();
const Post = require('../Models/Post');


router.get('', async(req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts)
  }catch(error){
    res.json({message: error})
  }
});

router.post('/create', async(req, res)=> {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.send(savedPost)
  }catch(err){
    res.send(console.log(err))
  }

});

router.get('/:postId', async(req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post)
  }catch(error){
    res.json(error)
  }
});

router.delete('/:postId', async(req, res) => {
  try {
    const post = await Post.remove({_id: req.params.postId});
    res.json(post)
  }catch(error){
    res.json(error)
  }
});

router.patch('/:postId', async(req, res) => {
  try {
    const post = await Post.updateOne({_id: req.params.postId},
        {$set: req.body}
      );
    res.json({message:"Success ", body: post})
  }catch(error){
    res.json(error)
  }
});

module.exports = router;