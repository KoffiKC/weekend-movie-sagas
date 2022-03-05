const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
console.log('the id of movie clicked', req.params.id);

  res.sendStatus(418)
});

module.exports = router;