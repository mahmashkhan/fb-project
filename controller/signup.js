const fs = require('fs');
const path = require('path');
const users = require('./user.json')
function signup(req, res) {
    
    const { email, name, password } = req.body;
    const user = { email, name, password };
    console.log(req.body)
    const isUserExist = users.find(user => user.email === email);
    if (isUserExist) {
        res.status(400).json({ success: true, message: 'user alreday exist' })
    }
    else {
        users.push(user)
        console.log(users)
        fs.writeFile('controller/user.json', JSON.stringify(users), (err) => {
            if (err) {
                res.json({ success: false, err: err.message })
            }
            res.json(user)
        })
    }

}
module.exports = {
    signup
};
