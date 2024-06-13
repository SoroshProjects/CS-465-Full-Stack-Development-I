const fs = require('fs');
const meal = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET Meals View */
const meals = (req, res) => {
    res.render('meals', { title: 'Meals - Travlr Getaways', meal, activeTab: {meals: true}});
};

module.exports = {
    meals
};