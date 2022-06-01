const Authorize = (req, res, next) => {
  // If user not logged in, redirect req to login route
  //
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};
//
//
//
module.exports = Authorize;
