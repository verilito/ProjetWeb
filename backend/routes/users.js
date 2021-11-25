var express = require('express');
var router = express.Router();

let datas = [{
  id_film: "Titanic",
}];

/* GET users listing. */
router.get('/', function (req, res) {
  const { id } = req.params;
  const user = _.find(users, ["id_film", id]);
  res.status(200).json({ datas });
});

router.put('/', function (req, res) {
  const { user } = req.body;
  const id = _.uniqueId();
  users.push({ user, id });
  res.json({
    datas: { datas, id }
  });
});

router.post('/', function (req, res) {
  const id = req.params;
  const { user } = req.body;
  const userToUpdate = _.find(users, ["id", id]);
  userToUpdate.datas = user;
  res.json({
    message: 'Just updated'
  });
});

router.delete('/:id_film', function (req, res) {
  const { id } = req.params;
  _.remove(users, ["id_film", id]);
  userToUpdate.datas = user;
  res.json({
    message: 'Just removed'
  });
});

module.exports = router;
