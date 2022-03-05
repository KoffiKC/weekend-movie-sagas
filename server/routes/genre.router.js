const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  console.log('the id of movie clicked', req.params.id);
  // variable to old id from get request parameters
  const movieId = req.params.id

  // SQL command to get the genres of the movie clicked from the db
  const sqlText = `
  SELECT "genres".name AS genre FROM "movies"
  JOIN "movies_genres" on "movies".id = "movies_genres".movie_id
  JOIN "genres" on "genres".id = "movies_genres".genre_id
  WHERE "movies".id = ${movieId};`

  pool.query(sqlText)
    .then(results => {
      console.log('genres have been fetched');
      res.send(results.rows)
    }).catch(err => {
      res.sendStatus(500)
    })
});

module.exports = router;