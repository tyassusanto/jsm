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
        // console.log('decode: ', decoded);
      } catch(err) {
        return next(createError(403, 'Invalid Token'))
      }
      next()
}

  module.exports = { 
    response,
    auth,
 }