const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const sqlText = `
            SELECT * FROM "reviews";
            `;
  pool.query(sqlText)
    .then((result) => { res.send(result.rows) })
    .catch((error) => {
      console.log('Error in GET /api/reviews', error)
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('in reviews router post route!')
  const bookTitle = req.body.bookTitle
  const bookAuthor = req.body.bookAuthor
  const genreInput = req.body.genreInput
  const ratingInput = req.body.ratingInput
  const reviewInput = req.body.reviewInput
  
  const sqlText = `INSERT INTO "reviews" 
                    ("book_title", "book_author", "genre", 	"rating", "review_input", "review_timestamp")
                        VALUES
                          ($1, $2, $3, $4, $5, current_timestamp);`;
  
  const sqlValues = [bookTitle, bookAuthor, genreInput, ratingInput, reviewInput]

  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201)
    })
    .catch((dbError) => {
      console.log('Error adding new review', dbError)
      res.sendStatus(500)
    })
});

module.exports = router;
