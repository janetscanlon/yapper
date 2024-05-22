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
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
