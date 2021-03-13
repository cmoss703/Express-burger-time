const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll((data) => {
      const burg = {
        burgers: data,
      };
        // res.json(data)
      console.log(burg);
      res.render('index', burg);
    });
  });

  router.post('/api/burgers', (req, res) => {
      burger.insertOne('burger_name', req.body.burger_name, (result) => {
        res.json({ id: result.insertId })
      });
  });

  router.put('api/burgers/:id', (req, res) => {
    burger.updateOne('devoured', req.body.devoured, req.params.id, (result) => {
      res.json({ id: result.insertId })
    });
  });

module.exports = router;