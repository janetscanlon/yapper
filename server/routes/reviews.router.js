const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

//* ----------------------- REVIEWS CRUD ROUTES ------------------------------------//*

//GET ROUTE
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

//POST ROUTE
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('in reviews router post route!')
  const bookTitle = req.body.bookTitle
  const bookAuthor = req.body.bookAuthor
  const genreInput = req.body.genreInput
  const ratingInput = Number(req.body.ratingInput)
  const reviewInput = req.body.reviewInput
  const userId = req.user.id
  
  const sqlText = `INSERT INTO "reviews" 
                    ("book_title", "book_author", "genre", 	"rating", "review_input", "review_timestamp", "user_id")
                        VALUES
                          ($1, $2, $3, $4, $5, current_timestamp, $6);`;
  
  const sqlValues = [bookTitle, bookAuthor, genreInput, ratingInput, reviewInput, userId]

  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201)
    })
    .catch((dbError) => {
      console.log('Error in Add newReview POST route', dbError)
      res.sendStatus(500)
    })
});

//DELETE ROUTE 
router.delete('/:id', rejectUnauthenticated, (req,res) => {
  console.log('in delete reviews route')

  const sqlText = `DELETE FROM "reviews" 
                    WHERE id= $1;`;
  
  pool.query(sqlText, [req.params.id])
    .then((result) => {res.send(result.rows)})
    .catch((error) => {
      console.log('Error in DELETE /:id reviews', error)
      res.sendStatus(500)
    })
});

//EDIT FORM ROUTE

//GET review to edit ROUTE 
router.get('/:id', (req,res) => {
  const sqlText = `SELECT * FROM "reviews"
                    WHERE id = $1;`;

  pool.query(sqlText, [req.params.id])
    .then((dbRes) => {
      //get the single object out of the array sent back
      const singleReview = dbRes.rows[0]
      res.send(singleReview)
    })
    .catch((error) => {
      console.log('GET api/reviews/:id error:', error)
      res.sendStatus(500)
    })
})

//PUT route for the edited Review 
router.put('/:id', (req,res) => {
  const bookTitle = req.body.book_title
  const bookAuthor = req.body.book_author
  const genreInput = req.body.genre
  const ratingInput = Number(req.body.rating)
  const reviewInput = req.body.review_input

  console.log('req.body is:', req.body)
  const idToUpdate = req.params.id 
  
  const sqlText = `UPDATE "reviews"
                      SET "book_title" = $1, "book_author" = $2, "genre" = $3,
                          "rating" = $4, "review_input" = $5
                            WHERE id = $6`

  const sqlValues = [bookTitle, bookAuthor, genreInput, ratingInput, reviewInput, idToUpdate]
  pool.query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.log('error in edit review put route:', error)
      res.sendstatus(500)
    })
})

//* ----------------------- REVIEWS CRUD ROUTES ------------------------------------//*


//* ----------------------- REVIEWS LIKES ROUTES ------------------------------------//*

//GET LIKES ROUTE 
router.get(`/likeid:/:id`, rejectUnauthenticated, (req,res) => {

  const sqlText = `SELECT * from "review_likes"
	                  WHERE "review_id" = $1;`;
  
  pool.query(sqlText, [req.params.id])
    .then((result) => { res.send(result.rows)})
    .catch((error) => {
      console.log('GET /:id review likes error:', error)
      res.sendstatus(500)
    })
})

module.exports = router;
