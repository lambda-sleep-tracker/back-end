const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const {
  generateToken,

} = require('./token');

const {
  addUser,
  getUserBy,

} = require('../../data/helpers/usersDbhelper');

/*
@POST: register new user
@PARAMS: user object as { email, password, }
@ROUTE: "/api/auth"
*/

router.post('/register', async (req, res) => {
  const user = req.body;

  const { email, password } = user;

  const hash = bcrypt.hashSync(password, 12);

  user.password = hash;

  try {

    if (!email || !password ) {
      return res.status(400)
        .json({
          errorMessage: "registration info missing."
        });
    }

    const userAdded = await addUser(user);

    // use of the jwt library
    const token = generateToken(user);

    return res.status(201)
      .json({
        user: userAdded,
        authToken: token,
      });

  }
  catch (err) {
    res.status(500)
      .json({
        err: err.message,
        error: `Server error`
      })
  }

})

module.exports = router;
