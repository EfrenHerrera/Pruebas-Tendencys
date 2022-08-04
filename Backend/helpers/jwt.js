const jwt = require('jsonwebtoken');
const secretKey = 'somesupersecretkey';

exports.jwtGenerate = (payload) => {
  const { _id, name } = payload;
  return jwt.sign({
    id: _id,
    name
  },
  secretKey,
  { expiresIn: '14 days' });
} 