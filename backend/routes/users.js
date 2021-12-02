var express = require('express');
var router = express.Router();
var Users_models = require('../Models/Users_models');

//GET BACK ALL THE USERS
router.get('/', async (req, res) => {
  try {
    //const users = await Users_models.find();
    const users = await Users_models.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/countMovies', async (req, res) => {
  try {
    const users = await Users_models.countDocuments();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

//SUBMIT A USER
router.post('/createMovie', async (req, res) => {
  const user = new Users_models({
    favori: req.body.favori,
    title: req.body.title,
    note: req.body.note,
    genre: req.body.genre,
  });
  try {
    const savedUsers = await user.save();
    res.json(savedUsers);
  } catch (err) {
    res.json({ message: err });
  }
});


//SPECIFIC movie
router.get('/:postId', async (req, res) => {
  try {
    const user = await Users_models.findById(req.params.postId);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE USER
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Users_models.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE AN USER
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Users_models.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } });
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
