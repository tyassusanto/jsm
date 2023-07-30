const jwt = require('jsonwebtoken')
const createError = require('http-errors')

const response = (res, result, status, message, pagination) => {
    res.status(status).json({
      status: 'Success',
      code: status || 200,
      data: result,
      message: message || null,
      pagination: pagination
    });
  };

const auth = (req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
        // console.log(token);
    } else {
        return next(createError(403, 'Need Token'))
    }
    try {
        const secretKey = 'KMZWAY87AA';
        const decoded = jwt.verify(token, secretKey);
        req.username = decoded.username
        req.levelId = decoded.levelId
        // console.log('decode: ', decoded.levelId);
      } catch(err) {
        return next(createError(403, 'Invalid Token'))
      }
      next()
}

const isAdmin = (req, res, next) => {
  const levelId = req.levelId;
  if (levelId === '31538b4b-8942-497f-8066-33db39262d63') {
    next();
  } else {
    return next(createError(403, 'Hanya Administrator yang dapat menghapus'))
  }
};

  module.exports = { 
    response,
    auth,
    isAdmin
 }