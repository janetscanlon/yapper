const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
///GET ROUTE for SEARCH USERS Feature 
router.get(`/search`, rejectUnauthenticated, (req,res) => {
    console.log('req.query.q is:', req.query.q)
    const sqlText = `
                SELECT
                    "user".id,
                    "user".username,
                    "user".first_name,
                    "user".pronouns
                FROM "user"
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
  router.post('/:id', (req, res) => {
    const sqlText = `
                  INSERT INTO "follow"
                    ("user_id", "followed_user_id")
                      VALUES ($1, $2);`;
    pool.query(sqlText, [req.user.id, req.params.id])
  });
  
  module.exports = router;