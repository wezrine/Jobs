const jwt = require('jsonwebtoken')
const User = require('./schemas/user')

function authenticate(req, res, next) {

    let headers = req.headers['authorization']
    if(headers) {
        const token = headers.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        if(decoded) {
            const username = decoded.username
            const authUser = User.findOne({
                username: username
            })
            if (authUser) {
                next() // perform the original request
            } else {
                res.json({error: 'Unable to authenticate'})
            }
        } else {
            res.json({error: 'Unable to authenticate'})
        }
    } else {
        res.json({error: 'Required headers are missing...'})
    }
}

module.exports = authenticate