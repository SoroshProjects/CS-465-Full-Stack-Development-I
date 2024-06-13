const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET Travel View */
const travel = (req, res) => {
    res.render('travel', { title: 'Travel - Travlr Getaways', trips, activeTab: {travel: true}});
};

module.exports = {
    travel
};