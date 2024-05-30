const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
///GET ROUTE for SEARCH USERS Feature 
router.get(`/search`, rejectUnauthenticated, (req,res) => {
    console.log('req.query.q is:', req.query.q)
    const sqlText = `
                    SELECT * FROM "user"
                      WHERE "username" ILIKE ('%' || $1 || '%');
                      `;
    pool.query(sqlText, [req.query.q])
      .then((result) => {
        res.send(result.rows)
      })
      .catch((error) => {
        console.log('error in GET searched Usernames', error)
        res.sendStatus(500)
      })
  })
  /**
   * POST route template
   */
  router.post('/', (req, res) => {
    // POST route code here
  });
  
  module.exports = router;