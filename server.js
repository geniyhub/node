const express = require('express');
const app = express();

const getCurrentDate = require('./date');

app.get('/date', (req, res) => {
    const currentDate = getCurrentDate();
    res.send(`Current Date and Time: ${currentDate}`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});