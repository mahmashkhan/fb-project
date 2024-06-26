const path = require('path');
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const indexRouter = require('./api/index');

// Use routes
app.use('/', indexRouter);

app.get('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname, 'signup.html'));
    res.sendFile(path.join(__dirname,'login.html'))
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
