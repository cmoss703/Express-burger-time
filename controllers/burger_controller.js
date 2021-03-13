const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll((data) => {
      const hbsObject = {
        burger: data,
      };
        // res.json(data)
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  router.post('/api/burgers', (req, res) => {
      burger.create(['burger_name'], req.body.name, (result) =>)
  })

module.exports = router;