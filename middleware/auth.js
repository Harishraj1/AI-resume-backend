const authenticate = (req, res, next) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
    next();
  };
  
  module.exports = authenticate;