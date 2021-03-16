const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
  burger.selectAll((data) => {
    const burgObj = {
      burgers: data,
    };
    // res.json(data)
    console.log('burger object', burgObj);
    res.render('index', burgObj);
  });
});

router.post('/api/burgers', (req, res) => {
  burger.insertOne(['burger_name'], [req.body.burger_name], (result) => {
    res.json({ id: result.insertId })
  });
});

router.put('api/burgers/:id', (req, res) => {

  const condition = `id = ${req.params.id}`;

  console.log('condition', condition);

  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
    );
  });

module.exports = router;