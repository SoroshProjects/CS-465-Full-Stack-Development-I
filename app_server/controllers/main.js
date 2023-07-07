/* GET Homepage */
const index = (req, res) => {
    res.render('index', { title: 'Travlr Getaways', activeTab: {index: true}});
};

module.exports = {
    index
};