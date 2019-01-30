// m_groupuser.route.js

const express = require('express');
const app = express();
const m_groupuserRoutes = express.Router();

// Require M_groupusers model in our routes module
let M_groupusers = require('../models/M_groupusers');

// Defined store route
m_groupuserRoutes.route('/add').post(function (req, res) {
  let m_groupuser = new M_groupusers(req.body);
  m_groupuser.save()
    .then(m_groupuser => {
      res.status(200).json({'m_groupuser': 'm_groupuser in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
m_groupuserRoutes.route('/').get(function (req, res) {
    M_groupusers.find(function (err, m_groupusers){
    if(err){
      console.log(err);
    }
    else {
      res.json(m_groupusers);
    }
  });
});

// Defined edit route
m_groupuserRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  M_groupusers.findById(id, function (err, m_groupuser){
      res.json(m_groupuser);
  });
});

//  Defined update route
m_groupuserRoutes.route('/update/:id').post(function (req, res) {
    M_groupusers.findById(req.params.id, function(err, next, m_groupuser) {
    if (!m_groupuser)
      return next(new Error('Could not load Document'));
    else {
        m_groupuser.name = req.body.name;
        m_groupuser.descritpion = req.body.descritpion;

        m_groupuser.save().then(m_groupuser => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
m_groupuserRoutes.route('/delete/:id').get(function (req, res) {
    M_groupusers.findByIdAndRemove({_id: req.params.id}, function(err, m_groupuser){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = m_groupuserRoutes;