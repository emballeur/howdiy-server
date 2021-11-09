// authorization middlewares to be used elsewhere
// (isLoggedIn, isAdmin, isOwner)

module.exports = {

    isLoggedIn: (req, res, next) => {
      // if this is a user with an active session, continue:
      if (req.session.user) {
        next()
      } else {
        res.status(403).json({message: "you shall not pass!"}) // if not, error!
      }
    },
  
    isAdmin: (req, res, next) => {
      // if this is a user with an active session, continue:
      if (req.session.user.isAdmin) {
        next() 
      } else {
        res.status(403).json({message: "you shall not pass!"}) // if not, error!
      }
    },
  }
  
//   isOwner: (req, res, next) => {
    // must go to the DB check if the user is the owner of the element to be deleted or edit
    // if yes => next()
    // if no => error
    //}