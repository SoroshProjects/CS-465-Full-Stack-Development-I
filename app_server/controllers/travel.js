/* GET Travel View */
const travel = (req, res) => {
    res.render('travel', { title: 'Travel - Travlr Getaways', activeTab: {travel: true}});
};

module.exports = {
    travel
};