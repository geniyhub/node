const moment = require('moment');

function getCurrentDate() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

module.exports = getCurrentDate;