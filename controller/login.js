const users = require("./user.json");
function login(req, res) {
   

const { email, password } = req.body;

if (!email && password) {
    res.json({ message: "invalid credentials" })
}
const isUserExist = users.find(user => user.email === email)
if (isUserExist) {
    res.json({ message: 'login successful' })
}
else {
    res.json({ message: 'user does not exist' })
}}

module.exports = {
    login
}