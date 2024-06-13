/* GET Meals View */
const meals = (req, res) => {
    res.render('meals', { title: 'Meals - Travlr Getaways', activeTab: {meals: true}});
};

module.exports = {
    meals
};