const express = require('express');
const router = express.Router();

const {
  getUsers,

} = require('../data/helpers');

/*
@GET: users
@PARAMS: none
@ROUTE: "/api/users"
*/

router.get('/', (req, res) => {

});

module.exports = router;
